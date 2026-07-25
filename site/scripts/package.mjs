import { spawnSync } from "node:child_process";
import { mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const releaseDir = resolve(projectRoot, "release");

function runNodeScript(scriptPath) {
  const result = spawnSync(process.execPath, [resolve(projectRoot, scriptPath)], {
    cwd: projectRoot,
    stdio: "inherit"
  });

  if (result.status !== 0) {
    throw new Error(`${scriptPath} failed with exit code ${result.status ?? "unknown"}.`);
  }
}

function getGitShortSha() {
  const gitCommand = process.env.GIT || "git";
  const result = spawnSync(gitCommand, ["rev-parse", "--short=12", "HEAD"], {
    cwd: projectRoot,
    encoding: "utf8"
  });

  if (result.status !== 0) {
    throw new Error(`Unable to resolve git short SHA: ${result.stderr || result.stdout}`);
  }

  return result.stdout.trim();
}

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listFiles(entryPath));
      continue;
    }

    if (entry.isFile()) {
      files.push(entryPath);
      continue;
    }

    throw new Error(`Unsupported dist entry type: ${entryPath}`);
  }

  return files;
}

function toTarPath(filePath) {
  return relative(distDir, filePath).split(sep).join("/");
}

function writeString(buffer, value, offset, length, encoding = "utf8") {
  const bytes = Buffer.from(value, encoding);

  if (bytes.length > length) {
    throw new Error(`Tar field is too long: ${value}`);
  }

  bytes.copy(buffer, offset, 0, bytes.length);
}

function writeOctal(buffer, value, offset, length) {
  const octal = value.toString(8);

  if (octal.length > length - 1) {
    throw new Error(`Tar numeric field is too long: ${value}`);
  }

  buffer.write(`${octal.padStart(length - 1, "0")}\0`, offset, length, "ascii");
}

function splitTarName(name) {
  if (Buffer.byteLength(name) <= 100) {
    return { name, prefix: "" };
  }

  const parts = name.split("/");

  for (let index = parts.length - 1; index > 0; index -= 1) {
    const candidatePrefix = parts.slice(0, index).join("/");
    const candidateName = parts.slice(index).join("/");

    if (Buffer.byteLength(candidatePrefix) <= 155 && Buffer.byteLength(candidateName) <= 100) {
      return { name: candidateName, prefix: candidatePrefix };
    }
  }

  throw new Error(`Tar path is too long: ${name}`);
}

function createTarHeader(name, size, typeflag = "0") {
  const header = Buffer.alloc(512, 0);
  const tarName = splitTarName(name);

  writeString(header, tarName.name, 0, 100);
  writeOctal(header, 0o644, 100, 8);
  writeOctal(header, 0, 108, 8);
  writeOctal(header, 0, 116, 8);
  writeOctal(header, size, 124, 12);
  writeOctal(header, 0, 136, 12);
  header.fill(0x20, 148, 156);
  header[156] = typeflag.charCodeAt(0);
  writeString(header, "ustar\0", 257, 6, "ascii");
  writeString(header, "00", 263, 2, "ascii");
  writeString(header, "codex", 265, 32, "ascii");
  writeString(header, "codex", 297, 32, "ascii");

  if (tarName.prefix) {
    writeString(header, tarName.prefix, 345, 155);
  }

  const checksum = header.reduce((sum, byte) => sum + byte, 0);
  header.write(checksum.toString(8).padStart(6, "0"), 148, 6, "ascii");
  header[154] = 0;
  header[155] = 0x20;

  return header;
}

function createPaxRecord(key, value) {
  const body = `${key}=${value}\n`;
  let digits = 1;

  while (true) {
    const length = digits + 1 + Buffer.byteLength(body);
    const nextDigits = String(length).length;

    if (nextDigits === digits) {
      return `${length} ${body}`;
    }

    digits = nextDigits;
  }
}

function needsPaxPath(name) {
  return /[^\x00-\x7f]/u.test(name) || Buffer.byteLength(name) > 100;
}

function createPaxPathHeader(name, index) {
  const paxBody = Buffer.from(createPaxRecord("path", name), "utf8");
  return {
    header: createTarHeader(`PaxHeaders/entry-${index}`, paxBody.length, "x"),
    body: paxBody
  };
}

function addPaddedChunk(chunks, contents) {
  chunks.push(contents);

  const padding = (512 - (contents.length % 512)) % 512;
  if (padding > 0) {
    chunks.push(Buffer.alloc(padding, 0));
  }
}

async function createTarGz(outputPath) {
  const distStats = await stat(distDir).catch(() => null);

  if (!distStats?.isDirectory()) {
    throw new Error(`Missing dist directory: ${distDir}`);
  }

  const files = await listFiles(distDir);
  const chunks = [];

  for (const [index, filePath] of files.entries()) {
    const contents = await readFile(filePath);
    const tarPath = toTarPath(filePath);

    if (needsPaxPath(tarPath)) {
      const paxHeader = createPaxPathHeader(tarPath, index);
      chunks.push(paxHeader.header);
      addPaddedChunk(chunks, paxHeader.body);
    }

    const headerPath = needsPaxPath(tarPath) ? `pax-file-${index}` : tarPath;
    chunks.push(createTarHeader(headerPath, contents.length));
    addPaddedChunk(chunks, contents);
  }

  chunks.push(Buffer.alloc(1024, 0));
  await writeFile(outputPath, gzipSync(Buffer.concat(chunks), { mtime: 0 }));

  return { files: files.length, bytes: chunks.reduce((size, chunk) => size + chunk.length, 0) };
}

runNodeScript("scripts/build.mjs");
runNodeScript("scripts/check.mjs");

const shortSha = getGitShortSha();
await mkdir(releaseDir, { recursive: true });

const archivePath = resolve(releaseDir, `honeybadger-dist-${shortSha}.tar.gz`);
await rm(archivePath, { force: true });

const result = await createTarGz(archivePath);
const archiveStats = await stat(archivePath);

console.log(`Packaged ${result.files} dist file(s) into ${archivePath}`);
console.log(`Archive size: ${archiveStats.size} byte(s).`);
