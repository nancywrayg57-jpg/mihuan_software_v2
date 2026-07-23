import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const indexPath = resolve(distDir, "index.html");

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);
  const files = [];

  for (const entry of entries) {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listFiles(entryPath));
      continue;
    }

    if (entry.isFile()) {
      files.push(entryPath);
    }
  }

  return files;
}

function validateHtmlShape(html) {
  const errors = [];
  const normalized = html.replace(/<!--[\s\S]*?-->/g, "");

  if (!/^\s*<!doctype html>/i.test(normalized)) {
    errors.push("Missing <!doctype html> declaration.");
  }

  for (const tagName of ["html", "head", "title", "body", "main"]) {
    if (!new RegExp(`<${tagName}(\\s|>)`, "i").test(normalized)) {
      errors.push(`Missing <${tagName}> element.`);
    }
  }

  const stack = [];
  const tagPattern = /<\/?([a-z][a-z0-9:-]*)(?:\s[^<>]*)?>/gi;
  let match;

  while ((match = tagPattern.exec(normalized)) !== null) {
    const [rawTag, rawName] = match;
    const tagName = rawName.toLowerCase();
    const isClosingTag = rawTag.startsWith("</");
    const isSelfClosing = rawTag.endsWith("/>") || voidElements.has(tagName);

    if (isClosingTag) {
      const lastOpenTag = stack.pop();

      if (lastOpenTag !== tagName) {
        errors.push(`Unexpected closing tag </${tagName}>.`);
        break;
      }

      continue;
    }

    if (!isSelfClosing) {
      stack.push(tagName);
    }
  }

  if (stack.length > 0) {
    errors.push(`Unclosed HTML tag <${stack.at(-1)}>.`);
  }

  return errors;
}

const indexStats = await stat(indexPath).catch(() => null);

if (!indexStats?.isFile()) {
  throw new Error(`Missing build output: ${indexPath}`);
}

if (indexStats.size <= 0) {
  throw new Error(`Build output is empty: ${indexPath}`);
}

const files = await listFiles(distDir);
const totalBytes = await files.reduce(async (sizePromise, filePath) => {
  const currentSize = await sizePromise;
  const fileStats = await stat(filePath);
  return currentSize + fileStats.size;
}, Promise.resolve(0));

if (files.length === 0 || totalBytes <= 0) {
  throw new Error(`Build output directory has no usable files: ${distDir}`);
}

const html = await readFile(indexPath, "utf8");
const htmlErrors = validateHtmlShape(html);

if (!html.includes("开发骨架，非正式内容")) {
  htmlErrors.push("Missing explicit scaffold notice.");
}

if (/\bhttps?:\/\//i.test(html)) {
  htmlErrors.push("Skeleton page must not reference external URLs.");
}

if (htmlErrors.length > 0) {
  throw new Error(`HTML validation failed:\n${htmlErrors.map((error) => `- ${error}`).join("\n")}`);
}

console.log(`Checked ${indexPath}`);
console.log(`Build output contains ${files.length} file(s), ${totalBytes} byte(s).`);
