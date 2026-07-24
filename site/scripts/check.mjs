import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const indexPath = resolve(distDir, "index.html");
const requiredHtmlPaths = ["index.html", "products.html", "跨境网络服务.html", "about.html", "en/index.html", "ru/index.html"];
const homeHtmlPaths = new Set(["index.html", "en/index.html", "ru/index.html"]);
const zhHtmlPaths = new Set(["index.html", "products.html", "跨境网络服务.html", "about.html"]);

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

function validateChineseHome(html) {
  const errors = [];

  for (const marker of [
    "蜜獾软件",
    "蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体",
    "了解产品与服务",
    "产品与服务矩阵",
    "数字化农业综合管理系统",
    "蜜獾原图",
    "AI-FDE VibeCoding 培训",
    "社媒跨境私域陪跑",
    "跨境网络服务",
    "详情页待接入",
    "新闻资讯预览",
    "人才招聘预览",
    "待发布",
    "待接入",
    "联系与客服入口"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Chinese home production marker: ${marker}.`);
    }
  }

  for (const selector of [
    "home-hero",
    "home-products",
    "home-relation",
    "home-news",
    "home-careers",
    "support-note"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Chinese home section marker: ${selector}.`);
    }
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("Chinese home must not include a fake contact form.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("Chinese home contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateProductsPage(html) {
  const errors = [];

  for (const marker of [
    "蜜獾产品与服务介绍",
    "4 项常规产品/服务 + 跨境网络服务合并入口",
    "产品与服务分类概览",
    "核心能力说明",
    "服务落地四步路径",
    "咨询与联系入口",
    "数字化农业综合管理系统",
    "蜜獾原图",
    "AI-FDE VibeCoding 培训",
    "社媒跨境私域陪跑",
    "跨境网络服务",
    "详情页待接入",
    "查看合并页"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing products page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "products-hero",
    "product-overview",
    "products-capabilities",
    "service-path",
    "products-consult"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing products page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Products page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">首页</a>') || !html.includes('aria-current="page">产品介绍</span>')) {
    errors.push("Products page breadcrumb must be 首页 / 产品介绍 with a working home link.");
  }

  if (!html.includes('href="./products.html" aria-current="page">产品介绍</a>')) {
    errors.push("Products page header must mark 产品介绍 as current.");
  }

  for (const languagePath of ['href="./products.html"', 'href="./en/index.html"', 'href="./ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Products page language switcher missing ${languagePath}.`);
    }
  }

  const productEntries = html.match(/data-product-entry=/g) || [];
  if (productEntries.length !== 5) {
    errors.push(`Products page must render exactly 5 top-level product entries; found ${productEntries.length}.`);
  }

  const regularEntries = html.match(/data-product-entry="regular"/g) || [];
  if (regularEntries.length !== 4) {
    errors.push(`Products page must render 4 regular product/service entries; found ${regularEntries.length}.`);
  }

  const networkEntries = html.match(/data-product-entry="network"/g) || [];
  if (networkEntries.length !== 1) {
    errors.push(`Products page must render 1 merged network-services entry; found ${networkEntries.length}.`);
  }

  if (!html.includes('href="./跨境网络服务.html">查看合并页</a>')) {
    errors.push("Products page network-services card must link to the merged page.");
  }

  if (/href=["'][^"']*(Agriculture|mihuan_yuantu|AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip)\.html/i.test(html)) {
    errors.push("Products page must keep detail and network-service links as same-page placeholder anchors.");
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("Products page must not include a fake contact form.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("Products page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateNetworkServicesPage(html) {
  const errors = [];

  for (const marker of [
    "跨境网络服务",
    "静态住宅 IP",
    "机房 IP",
    "动态 IP",
    "三级",
    "三类 IP 子服务合并承接",
    "详情承接页待接入",
    "返回产品介绍",
    "接入与咨询",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing network services marker: ${marker}.`);
    }
  }

  for (const selector of [
    "network-services-hero",
    "network-positioning",
    "network-services-modules",
    "service-static-residential-ip",
    "service-idc-ip",
    "service-dynamic-ip",
    "network-consult"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing network services section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Network services page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">首页</a>') || !html.includes('href="./products.html">产品介绍</a>') || !html.includes('aria-current="page">跨境网络服务</span>')) {
    errors.push("Network services breadcrumb must be 首页 / 产品介绍 / 跨境网络服务 with working parent links.");
  }

  if (!html.includes('href="./products.html" aria-current="page">产品介绍</a>')) {
    errors.push("Network services page header must mark 产品介绍 as current.");
  }

  for (const languagePath of ['href="./跨境网络服务.html"', 'href="./en/index.html"', 'href="./ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Network services language switcher missing ${languagePath}.`);
    }
  }

  const networkServices = html.match(/data-network-service=/g) || [];
  if (networkServices.length !== 3) {
    errors.push(`Network services page must render exactly 3 child service sections; found ${networkServices.length}.`);
  }

  if (/href=["'][^"']*(static-ip|idc-ip|dynamic-ip)\.html/i.test(html)) {
    errors.push("Network child service detail links must stay as same-page placeholder anchors.");
  }

  for (const anchor of ['href="#static-ip-detail-pending"', 'href="#idc-ip-detail-pending"', 'href="#dynamic-ip-detail-pending"']) {
    if (!html.includes(anchor)) {
      errors.push(`Network child service missing placeholder detail anchor ${anchor}.`);
    }
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("Network services page must not include a fake contact form.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("Network services page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateAboutNavigation(html, relativePath) {
  const errors = [];
  const isAboutPage = relativePath === "about.html";
  const expectedLink = isAboutPage
    ? /<a class=["']nav-link["'] href=["']\.\/about\.html["'] aria-current=["']page["']>关于我们<\/a>/g
    : /<a class=["']nav-link["'] href=["']\.\/about\.html["']>关于我们<\/a>/g;
  const aboutLinks = html.match(expectedLink) || [];

  if (aboutLinks.length !== 2) {
    errors.push(`${relativePath} must render desktop and mobile 关于我们 nav links to ./about.html; found ${aboutLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>关于我们<\/a>/i.test(html)) {
    errors.push(`${relativePath} must not keep 关于我们 as a placeholder nav link.`);
  }

  return errors;
}

function validateAboutPage(html) {
  const errors = [];
  const relationship = "蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体";

  for (const marker of [
    "关于我们",
    "品牌介绍",
    "品牌定位与形象展示",
    "企业背景介绍",
    "公司主体说明",
    "联系我们",
    "品牌名称",
    "品牌愿景",
    "核心定位",
    relationship,
    "企业邮箱：待配置",
    "客服路径：待配置",
    "线下联系信息：待配置",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing about page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "about-hero",
    "about-brand",
    "about-positioning",
    "about-background",
    "about-entity",
    "about-contact"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing about page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("About page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">首页</a>') || !html.includes('aria-current="page">关于我们</span>')) {
    errors.push("About page breadcrumb must be 首页 / 关于我们 with a working home link.");
  }

  if (!html.includes('href="./about.html" aria-current="page">关于我们</a>')) {
    errors.push("About page header must mark 关于我们 as current.");
  }

  for (const languagePath of ['href="./about.html"', 'href="./en/index.html"', 'href="./ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`About page language switcher missing ${languagePath}.`);
    }
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("About page must not include a fake contact form.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("About page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

async function validateBuiltHtml(relativePath) {
  const htmlPath = resolve(distDir, relativePath);
  const htmlStats = await stat(htmlPath).catch(() => null);

  if (!htmlStats?.isFile()) {
    throw new Error(`Missing build output: ${htmlPath}`);
  }

  if (htmlStats.size <= 0) {
    throw new Error(`Build output is empty: ${htmlPath}`);
  }

  const html = await readFile(htmlPath, "utf8");
  const htmlErrors = validateHtmlShape(html);

  if (!html.includes("开发骨架，非正式内容")) {
    htmlErrors.push("Missing explicit scaffold notice.");
  }

  if (/\bhttps?:\/\//i.test(html)) {
    htmlErrors.push("Skeleton page must not reference external URLs.");
  }

  for (const selector of [
    "site-header",
    "desktop-nav",
    "language-switcher",
    "site-footer",
    "floating-support",
    "support-toggle"
  ]) {
    if (!html.includes(selector)) {
      htmlErrors.push(`Missing S1 shell marker: ${selector}.`);
    }
  }

  if (homeHtmlPaths.has(relativePath) && /class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    htmlErrors.push("Home pages must not render breadcrumb markup.");
  }

  if (zhHtmlPaths.has(relativePath)) {
    htmlErrors.push(...validateAboutNavigation(html, relativePath));
  }

  for (const forbiddenPattern of [
    /zennolabchina/i,
    /48151650/,
    /marketing@honeybadgersoft\.com/i,
    /dingtalk|钉钉/i,
    /copyright\s+\d{4}|版权所有.*\d{4}/i,
    /ICP\s*[\w-]*\d/i
  ]) {
    if (forbiddenPattern.test(html)) {
      htmlErrors.push(`Forbidden confirmed or example contact/compliance value found in ${relativePath}.`);
    }
  }

  if (relativePath === "index.html") {
    htmlErrors.push(...validateChineseHome(html));
  }

  if (relativePath === "products.html") {
    htmlErrors.push(...validateProductsPage(html));
  }

  if (relativePath === "跨境网络服务.html") {
    htmlErrors.push(...validateNetworkServicesPage(html));
  }

  if (relativePath === "about.html") {
    htmlErrors.push(...validateAboutPage(html));
  }

  if (htmlErrors.length > 0) {
    throw new Error(`HTML validation failed for ${relativePath}:\n${htmlErrors.map((error) => `- ${error}`).join("\n")}`);
  }

  return { htmlPath, size: htmlStats.size };
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

const htmlResults = [];

for (const requiredHtmlPath of requiredHtmlPaths) {
  htmlResults.push(await validateBuiltHtml(requiredHtmlPath));
}

console.log(`Checked ${indexPath}`);
console.log(`Checked ${htmlResults.length} required static HTML page(s).`);
console.log(`Build output contains ${files.length} file(s), ${totalBytes} byte(s).`);
