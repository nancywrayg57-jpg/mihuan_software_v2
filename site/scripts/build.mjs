import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const srcDir = resolve(projectRoot, "src");
const distDir = resolve(projectRoot, "dist");

async function assertSourceDirectory() {
  const sourceStats = await stat(srcDir).catch(() => null);

  if (!sourceStats?.isDirectory()) {
    throw new Error(`Static source directory does not exist: ${srcDir}`);
  }
}

async function copyDirectory(fromDir, toDir) {
  await mkdir(toDir, { recursive: true });

  const entries = await readdir(fromDir, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const fromPath = join(fromDir, entry.name);
    const toPath = join(toDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(fromPath, toPath);
      continue;
    }

    if (entry.isFile()) {
      await copyFile(fromPath, toPath);
      continue;
    }

    throw new Error(`Unsupported source entry type: ${fromPath}`);
  }
}

await assertSourceDirectory();
await rm(distDir, { recursive: true, force: true });
await copyDirectory(srcDir, distDir);

console.log(`Built static site: ${srcDir} -> ${distDir}`);
