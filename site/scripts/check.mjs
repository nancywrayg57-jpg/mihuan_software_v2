import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const indexPath = resolve(distDir, "index.html");
const requiredHtmlPaths = ["index.html", "products.html", "Agriculture.html", "mihuan_yuantu.html", "跨境网络服务.html", "about.html", "news.html", "careers.html", "en/index.html", "en/products.html", "en/Agriculture.html", "en/mihuan_yuantu.html", "en/跨境网络服务.html", "en/about.html", "en/news.html", "en/careers.html", "ru/index.html", "ru/products.html", "ru/Agriculture.html", "ru/mihuan_yuantu.html", "ru/跨境网络服务.html", "ru/about.html", "ru/news.html", "ru/careers.html"];
const homeHtmlPaths = new Set(["index.html", "en/index.html", "ru/index.html"]);
const zhHtmlPaths = new Set(["index.html", "products.html", "Agriculture.html", "mihuan_yuantu.html", "跨境网络服务.html", "about.html", "news.html", "careers.html"]);
const productionOrigin = "https://www.honeybadgersoft.com";
const encodedNetworkServicesFile = "%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html";
const seoLocaleConfigs = [
  { key: "zh", hreflang: "zh-CN", prefix: "", htmlLang: "zh-CN" },
  { key: "en", hreflang: "en-US", prefix: "en/", htmlLang: "en-US" },
  { key: "ru", hreflang: "ru-RU", prefix: "ru/", htmlLang: "ru-RU" }
];
const seoHreflangs = [...seoLocaleConfigs.map((locale) => locale.hreflang), "x-default"];

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

function parseTagAttributes(tag) {
  const attributes = new Map();
  const attributePattern = /([a-zA-Z:-]+)=["']([^"']*)["']/g;
  let match;

  while ((match = attributePattern.exec(tag)) !== null) {
    attributes.set(match[1].toLowerCase(), match[2]);
  }

  return attributes;
}

function getSeoPageDetails(relativePath) {
  const locale = relativePath.startsWith("en/")
    ? seoLocaleConfigs[1]
    : relativePath.startsWith("ru/")
      ? seoLocaleConfigs[2]
      : seoLocaleConfigs[0];

  return {
    locale,
    pageFile: relativePath.slice(locale.prefix.length)
  };
}

function encodeSeoFileName(pageFile) {
  return pageFile === "跨境网络服务.html" ? encodedNetworkServicesFile : pageFile;
}

function getSeoUrl(localeKey, pageFile) {
  const locale = seoLocaleConfigs.find((candidate) => candidate.key === localeKey);

  if (!locale) {
    throw new Error(`Unknown SEO locale key: ${localeKey}`);
  }

  return `${productionOrigin}/${locale.prefix}${encodeSeoFileName(pageFile)}`;
}

function stripAllowedProductionSeoLinks(html) {
  return html.replace(/<link\b[^>]*>/gi, (tag) => {
    const attributes = parseTagAttributes(tag);
    const rel = attributes.get("rel")?.toLowerCase();
    const href = attributes.get("href");
    const hreflang = attributes.get("hreflang");

    if (rel === "canonical" && href?.startsWith(`${productionOrigin}/`)) {
      return "";
    }

    if (rel === "alternate" && seoHreflangs.includes(hreflang) && href?.startsWith(`${productionOrigin}/`)) {
      return "";
    }

    return tag;
  });
}

function validateSeoLinks(relativePath, html) {
  const errors = [];
  const { locale, pageFile } = getSeoPageDetails(relativePath);
  const headMatch = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);

  if (!headMatch) {
    return ["Missing <head> block for SEO validation."];
  }

  const head = headMatch[0];
  const htmlWithoutHead = html.replace(headMatch[0], "");

  if (/<link\b[^>]*rel=["'](?:canonical|alternate)["']/i.test(htmlWithoutHead)) {
    errors.push("canonical and alternate link tags must stay inside <head>.");
  }

  if (!new RegExp(`<html\\b[^>]*\\blang=["']${locale.htmlLang}["']`, "i").test(html)) {
    errors.push(`Expected html lang="${locale.htmlLang}".`);
  }

  const headTitles = head.match(/<title>[\s\S]*?<\/title>/gi) || [];
  if (headTitles.length !== 1) {
    errors.push(`Expected exactly 1 head title, found ${headTitles.length}.`);
  } else if (!/<title>\s*[^<\s][\s\S]*<\/title>/i.test(headTitles[0])) {
    errors.push("Head title must not be empty.");
  }

  const descriptionMetas = [...head.matchAll(/<meta\b[^>]*>/gi)]
    .map((match) => parseTagAttributes(match[0]))
    .filter((attributes) => attributes.get("name")?.toLowerCase() === "description");
  if (descriptionMetas.length !== 1) {
    errors.push(`Expected exactly 1 meta description, found ${descriptionMetas.length}.`);
  } else if (!descriptionMetas[0].get("content")?.trim()) {
    errors.push("Meta description must not be empty.");
  }

  const linkTags = [...head.matchAll(/<link\b[^>]*>/gi)].map((match) => parseTagAttributes(match[0]));
  const canonicalLinks = linkTags.filter((attributes) => attributes.get("rel")?.toLowerCase() === "canonical");
  const alternateLinks = linkTags.filter((attributes) => attributes.get("rel")?.toLowerCase() === "alternate");
  const expectedCanonical = getSeoUrl(locale.key, pageFile);
  const expectedAlternates = new Map([
    ...seoLocaleConfigs.map((config) => [config.hreflang, getSeoUrl(config.key, pageFile)]),
    ["x-default", getSeoUrl("zh", pageFile)]
  ]);

  if (canonicalLinks.length !== 1) {
    errors.push(`Expected exactly 1 canonical link, found ${canonicalLinks.length}.`);
  } else if (canonicalLinks[0].get("href") !== expectedCanonical) {
    errors.push(`Expected canonical ${expectedCanonical}, found ${canonicalLinks[0].get("href") || "missing href"}.`);
  }

  if (alternateLinks.length !== seoHreflangs.length) {
    errors.push(`Expected exactly ${seoHreflangs.length} hreflang links, found ${alternateLinks.length}.`);
  }

  const seenAlternates = new Map();
  for (const attributes of alternateLinks) {
    const hreflang = attributes.get("hreflang");
    const href = attributes.get("href");

    if (!seoHreflangs.includes(hreflang)) {
      errors.push(`Unexpected hreflang "${hreflang || "missing"}" on alternate link.`);
      continue;
    }

    if (seenAlternates.has(hreflang)) {
      errors.push(`Duplicate hreflang "${hreflang}" alternate link.`);
      continue;
    }

    seenAlternates.set(hreflang, href);
  }

  for (const [hreflang, expectedHref] of expectedAlternates) {
    const foundHref = seenAlternates.get(hreflang);

    if (foundHref !== expectedHref) {
      errors.push(`Expected hreflang ${hreflang} href ${expectedHref}, found ${foundHref || "missing"}.`);
    }
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

function validateEnglishHome(html) {
  const errors = [];
  const expectedTitle = "Honey Badger Software | ZennoLab Official Operating Entity in China";
  const expectedDescription = "Honey Badger undertakes ZennoLab product capabilities, localized technical support, enterprise consulting and service delivery for the Chinese market, focusing on browser automation, CAPTCHA recognition, anti-detect browsers, proxy quality management and mobile automation.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English home must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English home meta title must match the SSOT exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English home meta description must match the SSOT exactly.");
  }

  for (const marker of [
    "Honey Badger 蜜獾",
    "Honey Badger Software",
    "ZennoLab Official Operating Entity in China",
    expectedDescription,
    "Explore Products & Services",
    "Contact Service Team",
    "4 Regular Products/Services + Cross-border Network Services",
    "3 Language Structures",
    "24h Persistent Support Entry",
    "Product & Service Scope",
    "Digital Agriculture Integrated Management System",
    "Full-chain smart agriculture control platform, IoT + AI for digital production, supervision and traceability management",
    "Honey Badger Original Image",
    "Cross-border AI image originality tool, batch processing of product images, duplicate-check avoidance, compatible with all overseas e-commerce platforms",
    "AI-FDE VibeCoding Training",
    "Cutting-edge AI natural language development practical training, hands-on delivery of commercial AI system projects",
    "Social Commerce Private Domain Coaching",
    "TikTok/FB/INS full-domain operation coaching, full-process practical guidance from traffic acquisition to private domain conversion",
    "Cross-border Network Services",
    "Combines static residential IP, datacenter IP and dynamic IP services for stable account environments, high-concurrency exits and rotating residential IP pools",
    "Detail page pending",
    "Brand Relationship Notes",
    "Product Localization",
    "Establish product descriptions and inquiry channels around smart agriculture, cross-border e-commerce, AI development training, overseas social private domain growth and cross-border network services",
    "Local Support",
    "Provide local language, delivery workflow and troubleshooting support for Chinese enterprises, developers and partners",
    "Compliant Launch",
    "ICP filing, customer service accounts, corporate email and copyright information all retain configuration positions, to be updated after administrators provide real values",
    "News and Careers Preview",
    "News Preview",
    "Careers Preview",
    "Corporate email: To be configured",
    "Support accounts: To be configured",
    "ICP filing information: To be configured",
    "Copyright information: To be configured",
    expectedFooterRelationship,
    "Support Placeholder",
    "To be configured"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English home production marker: ${marker}.`);
    }
  }

  for (const selector of [
    "en-home-page",
    "home-hero",
    "en-products",
    "en-brand-relationship",
    "en-news-preview",
    "en-careers-preview",
    "en-support-note"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing English home section marker: ${selector}.`);
    }
  }

  if (!html.includes('<a class="nav-link" href="./index.html" aria-current="page">Home</a>')) {
    errors.push("English home header must mark Home as the current real page.");
  }

  const productsNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/products\.html["']>Products<\/a>/g) || [];
  if (productsNavLinks.length !== 2) {
    errors.push(`English home Products navigation must point to ./products.html on desktop and mobile; found ${productsNavLinks.length}.`);
  }

  const aboutNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/about\.html["']>About<\/a>/g) || [];
  if (aboutNavLinks.length !== 2) {
    errors.push(`English home About navigation must point to ./about.html on desktop and mobile; found ${aboutNavLinks.length}.`);
  }

  const newsNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/news\.html["']>News<\/a>/g) || [];
  if (newsNavLinks.length !== 2) {
    errors.push(`English home News navigation must point to ./news.html on desktop and mobile; found ${newsNavLinks.length}.`);
  }

  const careersNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/careers\.html["']>Careers<\/a>/g) || [];
  if (careersNavLinks.length !== 2) {
    errors.push(`English home Careers navigation must point to ./careers.html on desktop and mobile; found ${careersNavLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>Careers<\/a>/i.test(html)) {
    errors.push("English home Careers navigation must not remain a placeholder link.");
  }

  if (/data-placeholder=["']true["'][^>]*>News<\/a>/i.test(html)) {
    errors.push("English home News navigation must not remain a placeholder link.");
  }

  if (/data-placeholder=["']true["'][^>]*>About<\/a>/i.test(html)) {
    errors.push("English home About navigation must not remain a placeholder link.");
  }

  for (const languagePath of ['href="../index.html"', 'href="./index.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English home language switcher missing ${languagePath}.`);
    }
  }

  const productEntries = html.match(/data-en-product-entry=/g) || [];
  if (productEntries.length !== 5) {
    errors.push(`English home must render exactly 5 product/service entries; found ${productEntries.length}.`);
  }

  const regularEntries = html.match(/data-en-product-entry="regular"/g) || [];
  if (regularEntries.length !== 4) {
    errors.push(`English home must render 4 regular product/service entries; found ${regularEntries.length}.`);
  }

  const networkEntries = html.match(/data-en-product-entry="network"/g) || [];
  if (networkEntries.length !== 1) {
    errors.push(`English home must render 1 network-services entry; found ${networkEntries.length}.`);
  }

  const pendingProductLinks = html.match(/<a class=["']link-more["'] href=["']#en-product-detail-pending["']>Detail page pending<\/a>/g) || [];
  if (pendingProductLinks.length !== 5) {
    errors.push(`English product entries must use same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (/href=["'][^"']*(Agriculture|mihuan_yuantu|AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip|network)[^#"']*\.html/i.test(html)) {
    errors.push("English home must not link to nonexistent English product or service detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English home must not include a fake contact or application form.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English home contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateEnglishProducts(html) {
  const errors = [];
  const expectedTitle = "Products | Honey Badger";
  const expectedDescription = "Learn about Honey Badger Digital Agriculture Integrated Management System, Honey Badger Original Image, AI-FDE VibeCoding Training, social commerce private domain coaching and cross-border network services.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English products page must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English products page meta title must match the SSOT exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English products page meta description must match the SSOT exactly.");
  }

  for (const marker of [
    "Honey Badger Products &amp; Services Introduction",
    "Providing practical product and service solutions around digital agriculture, cross-border e-commerce image originality, AI natural language development training, overseas social private domain operations and cross-border network services.",
    "Product &amp; Service Scope",
    "Digital Agriculture Integrated Management System",
    "Full-chain smart agriculture control platform, IoT + AI for digital production, supervision and traceability management",
    "Honey Badger Original Image",
    "Cross-border AI image originality tool, batch processing of product images, duplicate-check avoidance, compatible with all overseas e-commerce platforms",
    "AI-FDE VibeCoding Training",
    "Cutting-edge AI natural language development practical training, hands-on delivery of commercial AI system projects",
    "Social Commerce Private Domain Coaching",
    "TikTok/FB/INS full-domain operation coaching, full-process practical guidance from traffic acquisition to private domain conversion",
    "Cross-border Network Services",
    "Combines static residential IP, datacenter IP and dynamic IP services for stable account environments, high-concurrency exits and rotating residential IP pools",
    "English detail pages for the four regular entries remain pending, while the merged English network page is now connected from the NET card.",
    "Opens the merged English network page for static residential IP, datacenter IP and dynamic IP",
    "The merged English network page is connected; the three IP child service detail entries remain pending inside that page.",
    "Core Capabilities",
    "Industrial Digital Control",
    "Integrating IoT, big data and AI to bring production, supervision, warehousing and traceability into a unified management chain",
    "Cross-border Image Originality",
    "Batch reconstruction of original product images, retaining core details and adapting to main image and scene image requirements of overseas e-commerce platforms",
    "AI Development Capability Building",
    "Centered on the Vibe Coding natural language development paradigm, training teams to build commercial AI systems from scratch",
    "Overseas Private Domain Growth",
    "Connecting the traffic acquisition, retention, conversion and review processes of TikTok, Facebook and Instagram",
    "Combines static residential IP, datacenter IP and dynamic IP under one service entry for stable accounts, high concurrency and rotating access scenarios",
    "Four-Step Service Implementation Path",
    "Confirm business objectives, scenario boundaries and delivery scope",
    "Select the corresponding product or coaching service solution",
    "Establish pilot processes, materials or system prototypes",
    "Complete training, delivery, review and continuous iteration",
    "Contact and Support Entry",
    "Corporate email: To be configured",
    "Support accounts: To be configured",
    "ICP filing information: To be configured",
    "Copyright information: To be configured",
    expectedFooterRelationship,
    "Support Placeholder",
    "To be configured"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English products page marker: ${marker}.`);
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
      errors.push(`Missing English products page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("English products page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Home</a>') || !html.includes('aria-current="page">Products</span>')) {
    errors.push("English products page breadcrumb must be Home / Products with a working home link.");
  }

  if (!html.includes('href="./products.html" aria-current="page">Products</a>')) {
    errors.push("English products page header must mark Products as current.");
  }

  for (const languagePath of ['href="../products.html"', 'href="./products.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English products page language switcher missing ${languagePath}.`);
    }
  }

  const productEntries = html.match(/data-product-entry=/g) || [];
  if (productEntries.length !== 5) {
    errors.push(`English products page must render exactly 5 top-level product entries; found ${productEntries.length}.`);
  }

  const regularEntries = html.match(/data-product-entry="regular"/g) || [];
  if (regularEntries.length !== 4) {
    errors.push(`English products page must render 4 regular product/service entries; found ${regularEntries.length}.`);
  }

  const networkEntries = html.match(/data-product-entry="network"/g) || [];
  if (networkEntries.length !== 1) {
    errors.push(`English products page must render 1 network-services entry; found ${networkEntries.length}.`);
  }

  const pendingProductLinks = html.match(/<a class=["']link-more["'] href=["']#en-product-detail-pending["']>Detail page pending<\/a>/g) || [];
  if (pendingProductLinks.length !== 2) {
    errors.push(`English products page regular product entries must keep same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']en-product-agriculture["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/Agriculture\.html["']>View details<\/a>/.test(html)) {
    errors.push("English products page agriculture card must link to ./Agriculture.html.");
  }

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']en-product-image["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/mihuan_yuantu\.html["']>View details<\/a>/.test(html)) {
    errors.push("English products page Original Image card must link to ./mihuan_yuantu.html.");
  }

  if (!html.includes('href="./跨境网络服务.html">View merged page</a>')) {
    errors.push("English products page NET card must link to the merged English network services page.");
  }

  const detailLinks = [...html.matchAll(/<a class=["']link-more["'] href=["']([^"']+)["'][^>]*>/g)].map((match) => match[1]);
  const externalDetailLinks = detailLinks.filter((href) => href !== "#en-product-detail-pending" && href !== "./Agriculture.html" && href !== "./mihuan_yuantu.html" && href !== "./跨境网络服务.html");
  if (externalDetailLinks.length > 0) {
    errors.push(`English products page detail links must stay on #en-product-detail-pending, ./Agriculture.html, ./mihuan_yuantu.html or ./跨境网络服务.html; found ${externalDetailLinks.join(", ")}.`);
  }

  if (/href=["'][^"']*(AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip)[^#"']*\.html/i.test(html)) {
    errors.push("English products page must not link to nonexistent product or network-service detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English products page must not include a fake contact form.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English products page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateEnglishNetworkServices(html) {
  const errors = [];
  const expectedTitle = "Cross-border Network Services | Honey Badger";
  const expectedDescription = "Cross-border Network Services consolidates static residential IP, datacenter IP and dynamic IP to help cross-border teams choose network resources by account stability, access frequency, concurrency scale and cost requirements.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English network services page must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English network services page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English network services page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "Cross-border Network Services",
    "Static residential IP, datacenter IP and dynamic IP presented under one service page for stable, flexible and scalable network resources",
    "Cross-border Network Services consolidates three IP capabilities into one product detail entry. It helps cross-border e-commerce, overseas social media operations, ad verification, public data collection and localization testing teams choose suitable network resources based on account stability, access frequency, concurrency scale and cost requirements.",
    "Service Positioning",
    "Three Network Services",
    "Static Residential IP",
    "For long-term account operations, store login, ad account management and other stable identity scenarios, focusing on fixed exits, environment consistency and lower risk-control recognition.",
    "Datacenter IP",
    "For batch collection, monitoring, testing and server workload exits, focusing on bandwidth, latency, cost and batch access efficiency.",
    "Dynamic IP",
    "For short-cycle research, ad verification, public data collection and high-frequency multi-session tasks, focusing on IP pool rotation, anonymity and flexible integration.",
    "Unified Entry",
    "The product page and navigation no longer split the three IP types as top-level products; they are grouped under Cross-border Network Services.",
    "Scenario-Based Matching",
    "Match network resources by stable accounts, batch concurrency and high-frequency rotation needs.",
    "Flexible Integration",
    "Supports fixed nodes, port rotation, endpoint rotation and API integration.",
    "Controlled Operations",
    "Supports batch management, node monitoring, exception replacement and usage tracking.",
    "Compliant Claims",
    "Describes cross-border network environment setup without unconfirmed node counts, refund promises or absolute SLA claims.",
    "Applicable Scenarios",
    "Long-term cross-border store operations, overseas social account farming, ad account management, public data collection, ad effectiveness verification, localization access testing, lightweight server workload exits",
    "Access &amp; Assurance",
    "Confirm target regions, protocols, concurrency, rotation method and operations requirements by business goal; specific node resources, packages, SLA and after-sales policy must follow administrator-confirmed production wording",
    "Detail page pending",
    "Back to Products",
    "Corporate email: To be configured",
    "Support accounts: To be configured",
    "ICP filing information: To be configured",
    "Copyright information: To be configured",
    expectedFooterRelationship,
    "Support Placeholder",
    "To be configured"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English network services page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "network-services-hero",
    "network-positioning",
    "network-services-modules",
    "service-static-residential-ip",
    "service-idc-ip",
    "service-dynamic-ip",
    "network-scenarios",
    "network-consult"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing English network services page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("English network services page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Home</a>') || !html.includes('href="./products.html">Products</a>') || !html.includes('aria-current="page">Cross-border Network Services</span>')) {
    errors.push("English network services breadcrumb must be Home / Products / Cross-border Network Services with working parent links.");
  }

  if (!html.includes('href="./products.html" aria-current="page">Products</a>')) {
    errors.push("English network services page header must mark Products as current.");
  }

  for (const languagePath of ['href="../跨境网络服务.html"', 'href="./跨境网络服务.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English network services page language switcher missing ${languagePath}.`);
    }
  }

  const networkServices = html.match(/data-network-service=/g) || [];
  if (networkServices.length !== 3) {
    errors.push(`English network services page must render exactly 3 child service sections; found ${networkServices.length}.`);
  }

  for (const service of ['data-network-service="static-residential-ip"', 'data-network-service="idc-ip"', 'data-network-service="dynamic-ip"']) {
    if (!html.includes(service)) {
      errors.push(`English network services page missing ${service}.`);
    }
  }

  if (/href=["'][^"']*(static-ip|idc-ip|dynamic-ip)\.html/i.test(html)) {
    errors.push("English network child service detail links must stay as same-page placeholder anchors.");
  }

  for (const anchor of ['href="#static-ip-detail-pending"', 'href="#idc-ip-detail-pending"', 'href="#dynamic-ip-detail-pending"']) {
    if (!html.includes(anchor)) {
      errors.push(`English network child service missing placeholder detail anchor ${anchor}.`);
    }
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English network services page must not include a fake contact form.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English network services page contains over-scoped ZennoLab relationship wording.");
  }

  if (/node count:\s*\d+|nodes:\s*\d+|\d+\s+nodes|refund guarantee|money-back|guaranteed SLA|100%\s*SLA/i.test(html)) {
    errors.push("English network services page contains unconfirmed node counts, refund guarantees or absolute SLA wording.");
  }

  return errors;
}

function validateEnglishAbout(html) {
  const errors = [];
  const expectedTitle = "About Us | Honey Badger";
  const expectedDescription = "Learn about Guangzhou Honey Badger Software Co., Ltd., its company profile, positioning, background, ZennoLab China operating entity relationship and contact placeholders.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English about page must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English about page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English about page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "About Us",
    "Brand Introduction",
    "Brand Positioning and Image",
    "Company Background",
    "Company Entity Statement",
    "Contact Us",
    "Guangzhou Honey Badger Software Co., Ltd.",
    "founded on January 25, 2017",
    "Mission and Vision",
    "Core Positioning",
    "Business Direction",
    "Service Features",
    "Development Background",
    "Registered Business Scope",
    "Business Coverage",
    "4 regular products/services plus cross-border network services",
    "The statement is not expanded into any stronger authorization, agency or distribution claim.",
    "Contact Information Placeholder",
    "The About page keeps a formal contact module for brand inquiries, product inquiries, cross-border network service inquiries and partnership communication.",
    "Corporate email: To be configured",
    "Support accounts: To be configured",
    "Offline contact information: To be configured",
    "ICP filing information: To be configured",
    "Copyright information: To be configured",
    expectedFooterRelationship,
    "Support Placeholder",
    "To be configured"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English about page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "en-about-page",
    "about-hero",
    "about-brand",
    "about-positioning",
    "about-background",
    "about-entity",
    "about-contact"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing English about page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("English about page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Home</a>') || !html.includes('aria-current="page">About Us</span>')) {
    errors.push("English about page breadcrumb must be Home / About Us with a working home link.");
  }

  if (!html.includes('href="./about.html" aria-current="page">About</a>')) {
    errors.push("English about page header must mark About as current.");
  }

  for (const languagePath of ['href="../about.html"', 'href="./about.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English about page language switcher missing ${languagePath}.`);
    }
  }

  const relationshipMatches = html.match(new RegExp(expectedFooterRelationship.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || [];
  if (relationshipMatches.length !== 2) {
    errors.push(`English about page must render the exact ZennoLab relationship sentence in entity and footer blocks; found ${relationshipMatches.length}.`);
  }

  if (!/<section class=["'][^"']*home-section[^"']*home-section-soft[^"']*["'] id=["']about-entity["'][\s\S]*?<p class=["']about-entity-statement["']>Honey Badger is ZennoLab's operating entity in China\.<\/p>/i.test(html)) {
    errors.push("English about page entity block must contain the exact relationship sentence.");
  }

  if (!/<footer class=["']site-footer["'][\s\S]*?<p>Honey Badger is ZennoLab's operating entity in China\.<\/p>/i.test(html)) {
    errors.push("English about page footer must contain the exact relationship sentence.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English about page must not include a fake contact form.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English about page contains over-scoped ZennoLab relationship wording.");
  }

  if (/\b(ZennoProxy|order system|payment system|member system|CMS backend|RDS|Redis|OSS)\b/i.test(html)) {
    errors.push("English about page contains out-of-scope historical project facts.");
  }

  return errors;
}

function validateEnglishNews(html) {
  const errors = [];
  const expectedTitle = "News | Honey Badger";
  const expectedDescription = "Read Honey Badger company news, product updates, industry news and technical sharing entries from the English website news center.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";
  const newsEntries = [
    ["Company News", "Honey Badger Software Officially Becomes ZennoLab China Operating Entity", "2026-06-15"],
    ["Product Update", "Honey Badger Original Image V2.0 Launched: New Batch Scene Image Generation Feature", "2026-06-01"],
    ["Industry News", "2026 Cross-Border E-Commerce AI Tool Application Trend Report Released", "2026-05-20"],
    ["Tech Sharing", "How to Choose Between Residential IP and Datacenter IP? Complete Guide to Proxy Selection", "2026-05-08"],
    ["Company News", "First AI-FDE VibeCoding Training Successfully Concluded", "2026-04-25"],
    ["Product Update", "Cross-border Network Services Add Southeast Asia Node Resources", "2026-04-10"]
  ];

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English news page must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English news page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English news page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "News Center",
    "News",
    "Static entry for company news, product updates, industry news and technical sharing",
    "News Categories",
    "All",
    "Company News",
    "Product Updates",
    "Industry News",
    "Tech Sharing",
    "News Entry List",
    "Summaries are neutral placeholders",
    "News Detail Pages Pending",
    "Detail page pending",
    "Consultation and Contact Entry",
    "Corporate email: To be configured",
    "Support accounts: To be configured",
    "ICP filing information: To be configured",
    "Copyright information: To be configured",
    expectedFooterRelationship,
    "Support Placeholder",
    "To be configured"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English news page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "en-news-page",
    "news-hero",
    "news-categories",
    "news-list",
    "news-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing English news page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("English news page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Home</a>') || !html.includes('aria-current="page">News</span>')) {
    errors.push("English news page breadcrumb must be Home / News with a working home link.");
  }

  if (!html.includes('href="./news.html" aria-current="page">News</a>')) {
    errors.push("English news page header must mark News as current.");
  }

  for (const languagePath of ['href="../news.html"', 'href="./news.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English news page language switcher missing ${languagePath}.`);
    }
  }

  const entryMarkers = html.match(/data-news-entry=/g) || [];
  if (entryMarkers.length !== 6) {
    errors.push(`English news page must render exactly 6 news entries; found ${entryMarkers.length}.`);
  }

  for (const [category, title, date] of newsEntries) {
    if (!html.includes(category) || !html.includes(title) || !html.includes(`datetime="${date}"`) || !html.includes(`>${date}</time>`)) {
      errors.push(`Missing English news entry category/title/date: ${category} / ${title} / ${date}.`);
    }
  }

  const dateMatches = html.match(/<time datetime=["']\d{4}-\d{2}-\d{2}["']>\d{4}-\d{2}-\d{2}<\/time>/g) || [];
  if (dateMatches.length !== 6) {
    errors.push(`English news page must render 6 YYYY-MM-DD time elements; found ${dateMatches.length}.`);
  }

  const thumbLabels = html.match(/aria-label=["'][^"']*thumbnail["']/g) || [];
  if (thumbLabels.length !== 6) {
    errors.push(`English news page must render 6 inline thumbnail labels; found ${thumbLabels.length}.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#news-detail-pending["']>Detail page pending<\/a>/g) || [];
  if (detailLinks.length !== 6) {
    errors.push(`English news entry links must stay as same-page detail placeholders; found ${detailLinks.length}.`);
  }

  if (/href=["'][^"']*news-detail[^#"']*\.html/i.test(html) || /href=["'][^"']*news\/[^#"']+/i.test(html)) {
    errors.push("English news page must not link to nonexistent news detail or category pages.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("English news page must not include fake filter interaction buttons.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English news page must not include a fake contact form.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English news page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateEnglishCareers(html) {
  const errors = [];
  const expectedTitle = "Careers | Honey Badger";
  const expectedDescription = "Explore Honey Badger careers, why join us, benefits, open positions with configured placeholders, recruitment process and application contact placeholders.";
  const expectedFooterRelationship = "Honey Badger is ZennoLab's operating entity in China.";
  const jobEntries = [
    ["Cross-Border Operations Specialist", "TikTok/FB/INS content operation and private domain conversion"],
    ["Frontend Developer", "Official website and product backend development, exploring AI-assisted development"],
    ["Customer Success Manager", "Enterprise customer liaison and service, upsell and lifecycle management"],
    ["AI Training Instructor Assistant", "Course material preparation, student Q&amp;A, community operation"]
  ];

  if (!/<html\s+lang=["']en-US["']/i.test(html)) {
    errors.push('English careers page must render <html lang="en-US">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("English careers page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("English careers page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "Join Honey Badger, Do Something Valuable Together",
    "A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.",
    "Why Join Us",
    "Broad industry prospects",
    "Flat management",
    "Technology-driven atmosphere",
    "Competitive compensation",
    "Benefits",
    "Five social insurances and housing fund + commercial insurance",
    "Flexible work system",
    "Team building and holiday benefits",
    "Annual health checkup",
    "Paid annual leave",
    "Learning and training budget",
    "Open Positions",
    "Location",
    "Role type",
    "To be configured",
    "Role details pending",
    "Recruitment Process",
    "Resume Submission",
    "Initial Screening",
    "Business Interview",
    "Final Interview / Offer",
    "Application and Contact",
    "Corporate email: To be configured",
    "Support panel: To be configured",
    "开发骨架，非正式内容",
    expectedFooterRelationship
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing English careers page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "en-careers-page",
    "careers-hero",
    "careers-why",
    "careers-benefits",
    "careers-jobs",
    "careers-process",
    "careers-apply",
    "career-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing English careers page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("English careers page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Home</a>') || !html.includes('aria-current="page">Careers</span>')) {
    errors.push("English careers page breadcrumb must be Home / Careers with a working home link.");
  }

  if (!html.includes('href="./careers.html" aria-current="page">Careers</a>')) {
    errors.push("English careers page header must mark Careers as current.");
  }

  for (const languagePath of ['href="../careers.html"', 'href="./careers.html" aria-current="true"', 'href="../ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`English careers page language switcher missing ${languagePath}.`);
    }
  }

  const jobMarkers = html.match(/data-career-job=/g) || [];
  if (jobMarkers.length !== 4) {
    errors.push(`English careers page must render exactly 4 job entries; found ${jobMarkers.length}.`);
  }

  for (const [title, summary] of jobEntries) {
    if (!html.includes(title) || !html.includes(summary)) {
      errors.push(`Missing English careers job title/summary: ${title} / ${summary}.`);
    }
  }

  const benefitMarkers = html.match(/data-career-benefit=/g) || [];
  if (benefitMarkers.length !== 6) {
    errors.push(`English careers page must render exactly 6 benefit entries; found ${benefitMarkers.length}.`);
  }

  const locationPlaceholders = html.match(/data-career-location=["']To be configured["']/g) || [];
  const typePlaceholders = html.match(/data-career-type=["']To be configured["']/g) || [];
  if (locationPlaceholders.length !== 4 || typePlaceholders.length !== 4) {
    errors.push(`English careers job cards must keep location/type as To be configured; found ${locationPlaceholders.length} locations and ${typePlaceholders.length} types.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#career-detail-pending["']>Role details pending<\/a>/g) || [];
  if (detailLinks.length !== 4) {
    errors.push(`English careers job detail links must stay as same-page placeholders; found ${detailLinks.length}.`);
  }

  const processMarkers = html.match(/data-career-process=/g) || [];
  if (processMarkers.length !== 4) {
    errors.push(`English careers page must render exactly 4 process steps; found ${processMarkers.length}.`);
  }

  if (!html.includes(expectedFooterRelationship)) {
    errors.push("English careers page footer relationship statement must match exactly.");
  }

  if (/href=["'][^"']*career-detail[^#"']*\.html|href=["'][^"']*jobs\/[^#"']+/i.test(html)) {
    errors.push("English careers page must not link to nonexistent job detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("English careers page must not include a fake application form.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("English careers page must not include fake recruiting interaction buttons.");
  }

  if (/\b(job location|full-time|part-time|internship|hybrid|remote|onsite|salary|resume upload|submitted successfully|apply now|HR phone)\b/i.test(html)) {
    errors.push("English careers page contains unconfirmed recruiting facts or fake application wording.");
  }

  if (/\b(exclusive|sole|only authorized|sole agent|exclusive distributor|exclusive agent|official sole)\b/i.test(html)) {
    errors.push("English careers page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateRussianHome(html) {
  const errors = [];
  const expectedTitle = "Honey Badger Software | Официальная операционная структура ZennoLab в Китае";
  const expectedDescription = "Honey Badger принимает возможности продуктов ZennoLab, локальную техническую поддержку, корпоративные консультации и сервисную поставку для китайского рынка, фокусируясь на автоматизации браузера, распознавании CAPTCHA, антидетект-браузерах, качестве прокси и мобильной автоматизации.";
  const expectedSubtitle = "Официальная операционная структура ZennoLab в Китае";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian home must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian home meta title must match the SSOT exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian home meta description must match the SSOT exactly.");
  }

  for (const marker of [
    "Honey Badger 蜜獾",
    "Honey Badger Software",
    expectedSubtitle,
    expectedDescription,
    "Honey Badger принимает возможности продуктов ZennoLab, локальную техническую поддержку, корпоративные консультации и сервисную поставку для китайского рынка. С момента основания мы всегда фокусировались на автоматизации браузера, распознавании CAPTCHA, антидетект-браузерах, управлении качеством прокси и мобильной автоматизации, помогая клиентам создавать эффективные и надежные рабочие процессы в сложных сетевых средах.",
    "Изучить продукты и услуги",
    "Связаться с сервисной командой",
    "4 стандартных продукта/услуги + кроссбордерные сетевые сервисы",
    "3 языковые версии",
    "24-часовой доступ к поддержке",
    "Объем продуктов и услуг",
    "Интегрированная система цифрового сельского хозяйства",
    "Платформа полного цикла для умного сельского хозяйства, IoT + ИИ для цифрового управления производством, контролем и прослеживаемостью",
    "Оригинальные изображения Honey Badger",
    "Кроссбордерный ИИ-инструмент для оригинальности изображений, пакетная обработка товарных фото, избежание проверок на дубликаты, адаптация ко всем зарубежным e-commerce платформам",
    "Обучение AI-FDE VibeCoding",
    "Практическое обучение разработке на естественном языке с помощью передового ИИ, пошаговая реализация коммерческих проектов на базе ИИ-систем",
    "Сопровождение приватной зоны в соцсетях",
    "Полномасштабное сопровождение операций в TikTok/FB/INS, практическое руководство по всему процессу от привлечения трафика до конверсии в приватной зоне",
    "Кроссбордерные сетевые сервисы",
    "Объединяют статический домашний IP, датацентровый IP и динамический IP для стабильных аккаунтных сред, высокопараллельных выходов и ротационных домашних IP-пулов",
    "Страница деталей ожидает подключения",
    "Пояснения к бренд-отношениям",
    "Локализация продуктов",
    "Создание описаний продуктов и каналов консультаций вокруг умного сельского хозяйства, кроссбордерной электронной коммерции, обучения разработке ИИ, роста приватной зоны в зарубежных соцсетях и кроссбордерных сетевых сервисов",
    "Локальная поддержка",
    "Предоставление поддержки на местном языке, процессов доставки и диагностики проблем для китайских предприятий, разработчиков и партнеров",
    "Запуск с соблюдением требований",
    "Регистрация ICP, аккаунты поддержки, корпоративная почта и информация об авторских правах сохраняют позиции для конфигурации, будут обновлены после предоставления реальных значений администраторами",
    "Предпросмотр новостей и вакансий",
    "Предпросмотр новостей",
    "Предпросмотр вакансий",
    "Корпоративная почта: Будет настроено",
    "Аккаунты поддержки: Будет настроено",
    "Информация о регистрации ICP: Будет настроено",
    "Информация об авторских правах: Будет настроено",
    expectedFooterRelationship,
    "Заполнитель поддержки",
    "Будет настроено"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian home production marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-home-page",
    "home-hero",
    "ru-products",
    "ru-brand-relationship",
    "ru-news-preview",
    "ru-careers-preview",
    "ru-support-note"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian home section marker: ${selector}.`);
    }
  }

  if (!html.includes('<a class="nav-link" href="./index.html" aria-current="page">Главная</a>')) {
    errors.push("Russian home header must mark Главная as the current real page.");
  }

  const productsNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/products\.html["']>Продукты<\/a>/g) || [];
  if (productsNavLinks.length !== 2) {
    errors.push(`Russian home Продукты navigation must point to ./products.html on desktop and mobile; found ${productsNavLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>Продукты<\/a>/i.test(html)) {
    errors.push("Russian home Продукты navigation must not remain a placeholder link.");
  }

  const newsNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/news\.html["']>Новости<\/a>/g) || [];
  if (newsNavLinks.length !== 2) {
    errors.push(`Russian home Новости navigation must point to ./news.html on desktop and mobile; found ${newsNavLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>Новости<\/a>/i.test(html)) {
    errors.push("Russian home Новости navigation must not remain a placeholder link.");
  }

  const careersNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/careers\.html["']>Карьера<\/a>/g) || [];
  if (careersNavLinks.length !== 2) {
    errors.push(`Russian home Карьера navigation must point to ./careers.html on desktop and mobile; found ${careersNavLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>Карьера<\/a>/i.test(html)) {
    errors.push("Russian home Карьера navigation must not remain a placeholder link.");
  }

  const aboutNavLinks = html.match(/<a class=["']nav-link["'] href=["']\.\/about\.html["']>О нас<\/a>/g) || [];
  if (aboutNavLinks.length !== 2) {
    errors.push(`Russian home О нас navigation must point to ./about.html on desktop and mobile; found ${aboutNavLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>О нас<\/a>/i.test(html)) {
    errors.push("Russian home О нас navigation must not remain a placeholder link.");
  }

  for (const languagePath of ['href="../index.html"', 'href="../en/index.html"', 'href="./index.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian home language switcher missing ${languagePath}.`);
    }
  }

  const productEntries = html.match(/data-ru-product-entry=/g) || [];
  if (productEntries.length !== 5) {
    errors.push(`Russian home must render exactly 5 product/service entries; found ${productEntries.length}.`);
  }

  const regularEntries = html.match(/data-ru-product-entry="regular"/g) || [];
  if (regularEntries.length !== 4) {
    errors.push(`Russian home must render 4 regular product/service entries; found ${regularEntries.length}.`);
  }

  const networkEntries = html.match(/data-ru-product-entry="network"/g) || [];
  if (networkEntries.length !== 1) {
    errors.push(`Russian home must render 1 network-services entry; found ${networkEntries.length}.`);
  }

  const pendingProductLinks = html.match(/<a class=["']link-more["'] href=["']#ru-product-detail-pending["']>Страница деталей ожидает подключения<\/a>/g) || [];
  if (pendingProductLinks.length !== 5) {
    errors.push(`Russian product entries must use same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (/href=["'][^"']*(Agriculture|mihuan_yuantu|AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip|network|продукт)[^#"']*\.html/i.test(html)) {
    errors.push("Russian home must not link to nonexistent Russian product or service detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian home must not include a fake contact or application form.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian home contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateRussianNews(html) {
  const errors = [];
  const expectedTitle = "Новости | Honey Badger";
  const expectedDescription = "Читайте новости компании Honey Badger, обновления продуктов, отраслевые новости и технические материалы на русской странице новостей официального сайта.";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";
  const newsEntries = [
    ["Новости компании", "Honey Badger Software официально становится операционной структурой ZennoLab в Китае", "2026-06-15", "15.06.2026"],
    ["Обновления продуктов", "Запущена версия Honey Badger Original Image V2.0: добавлена функция пакетной генерации сценарных изображений", "2026-06-01", "01.06.2026"],
    ["Отраслевые новости", "Опубликован отчет о тенденциях применения ИИ-инструментов в кроссбордерной электронной коммерции 2026", "2026-05-20", "20.05.2026"],
    ["Технические материалы", "Как выбрать между домашним IP и датацентровым IP? Полное руководство по выбору прокси", "2026-05-08", "08.05.2026"],
    ["Новости компании", "Первое обучение AI-FDE VibeCoding успешно завершено", "2026-04-25", "25.04.2026"],
    ["Обновления продуктов", "Кроссбордерные сетевые сервисы добавили ресурсы узлов в Юго-Восточной Азии", "2026-04-10", "10.04.2026"]
  ];

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian news page must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian news page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian news page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "Центр новостей",
    "Новости",
    "Статический вход для новостей компании, обновлений продуктов, отраслевых новостей и технических материалов",
    "Категории новостей",
    "Все",
    "Новости компании",
    "Обновления продуктов",
    "Отраслевые новости",
    "Технические материалы",
    "Список новостей",
    "Резюме являются нейтральными заполнителями",
    "Страницы деталей новостей ожидают подключения",
    "Страница деталей ожидает подключения",
    "Вход для консультации и контакта",
    "Корпоративная почта: Будет настроено",
    "Аккаунты поддержки: Будет настроено",
    "Информация о регистрации ICP: Будет настроено",
    "Информация об авторских правах: Будет настроено",
    expectedFooterRelationship,
    "Заполнитель поддержки",
    "Будет настроено"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian news page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-news-page",
    "news-hero",
    "news-categories",
    "news-list",
    "news-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian news page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Russian news page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Главная</a>') || !html.includes('aria-current="page">Новости</span>')) {
    errors.push("Russian news page breadcrumb must be Главная / Новости with a working home link.");
  }

  if (!html.includes('href="./news.html" aria-current="page">Новости</a>')) {
    errors.push("Russian news page header must mark Новости as current.");
  }

  for (const languagePath of ['href="../news.html"', 'href="../en/news.html"', 'href="./news.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian news page language switcher missing ${languagePath}.`);
    }
  }

  const entryMarkers = html.match(/data-news-entry=/g) || [];
  if (entryMarkers.length !== 6) {
    errors.push(`Russian news page must render exactly 6 news entries; found ${entryMarkers.length}.`);
  }

  for (const [category, title, datetime, displayDate] of newsEntries) {
    if (!html.includes(category) || !html.includes(title) || !html.includes(`datetime="${datetime}"`) || !html.includes(`>${displayDate}</time>`)) {
      errors.push(`Missing Russian news entry category/title/date: ${category} / ${title} / ${datetime} / ${displayDate}.`);
    }
  }

  const timeMatches = html.match(/<time datetime=["']\d{4}-\d{2}-\d{2}["']>\d{2}\.\d{2}\.\d{4}<\/time>/g) || [];
  if (timeMatches.length !== 6) {
    errors.push(`Russian news page must render 6 time elements with datetime YYYY-MM-DD and visible DD.MM.YYYY; found ${timeMatches.length}.`);
  }

  const thumbnailMatches = html.match(/class=["']news-thumb["'][\s\S]*?aria-label=["'][^"']*Миниатюра[^"']*["']/g) || [];
  if (thumbnailMatches.length !== 6) {
    errors.push(`Russian news page must render 6 inline SVG thumbnails with Russian aria labels; found ${thumbnailMatches.length}.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#news-detail-pending["']>Страница деталей ожидает подключения<\/a>/g) || [];
  if (detailLinks.length !== 6) {
    errors.push(`Russian news entry links must stay as same-page detail placeholders; found ${detailLinks.length}.`);
  }

  if (/href=["'][^"']*news-detail[^#"']*\.html/i.test(html) || /href=["'][^"']*news\/[^#"']+/i.test(html)) {
    errors.push("Russian news page must not link to nonexistent news detail or category pages.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("Russian news page must not include fake filter interaction buttons.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian news page must not include a fake contact form.");
  }

  if (/zennolabchina|48151650|marketing@honeybadgersoft\.com/i.test(html)) {
    errors.push("Russian news page must not include real contact values.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian news page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateRussianCareers(html) {
  const errors = [];
  const expectedTitle = "Карьера | Honey Badger";
  const expectedDescription = "Изучите карьерные возможности Honey Badger, причины присоединиться, социальный пакет, открытые вакансии с безопасными заполнителями, процесс найма и контактные позиции для отклика.";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";
  const whyEntries = [
    "Широкие перспективы отрасли",
    "плоская структура управления",
    "атмосфера технологического драйва",
    "конкурентоспособная компенсация"
  ];
  const benefitEntries = [
    "Пять социальных страховок и жилищный фонд + коммерческая страховка",
    "гибкий график работы",
    "корпоративные мероприятия и праздничные бонусы",
    "ежегодный медицинский осмотр",
    "оплачиваемый отпуск",
    "бюджет на обучение и повышение квалификации"
  ];
  const jobEntries = [
    ["Специалист по кроссбордерным операциям", "Операции с контентом в TikTok/FB/INS и конверсия в приватной зоне"],
    ["Frontend-разработчик", "Разработка официального сайта и бэкенда продукта, исследование ИИ-помощи в разработке"],
    ["Менеджер по успеху клиентов", "Взаимодействие с корпоративными клиентами и поддержка, дополнительные продажи и управление жизненным циклом"],
    ["Помощник преподавателя по обучению ИИ", "Подготовка учебных материалов, ответы на вопросы слушателей, управление сообществом"]
  ];
  const processEntries = [
    "Отправка резюме",
    "Первичный отбор",
    "Собеседование по профилю",
    "Финальное собеседование / Оффер"
  ];

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian careers page must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian careers page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian careers page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "Присоединяйтесь к Honey Badger, делайте ценные вещи вместе",
    "Молодая и эффективная команда, сосредоточенная на предоставлении передовых мировых технологий автоматизации и возможностей ИИ китайским клиентам.",
    "Почему стоит присоединиться",
    "Социальный пакет",
    "Открытые вакансии",
    "Местоположение",
    "Тип должности",
    "Будет настроено",
    "Детали вакансии ожидают подключения",
    "Процесс найма",
    "Отклик и контакт",
    "Корпоративная почта: Будет настроено",
    "Панель поддержки: Будет настроено",
    "开发骨架，非正式内容",
    expectedFooterRelationship,
    "Заполнитель поддержки"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian careers page marker: ${marker}.`);
    }
  }

  for (const marker of [...whyEntries, ...benefitEntries, ...processEntries]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian careers SSOT marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-careers-page",
    "careers-hero",
    "careers-why",
    "careers-benefits",
    "careers-jobs",
    "careers-process",
    "careers-apply",
    "career-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian careers page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Russian careers page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Главная</a>') || !html.includes('aria-current="page">Карьера</span>')) {
    errors.push("Russian careers page breadcrumb must be Главная / Карьера with a working home link.");
  }

  if (!html.includes('href="./careers.html" aria-current="page">Карьера</a>')) {
    errors.push("Russian careers page header must mark Карьера as current.");
  }

  for (const languagePath of ['href="../careers.html"', 'href="../en/careers.html"', 'href="./careers.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian careers page language switcher missing ${languagePath}.`);
    }
  }

  const jobMarkers = html.match(/data-career-job=/g) || [];
  if (jobMarkers.length !== 4) {
    errors.push(`Russian careers page must render exactly 4 job entries; found ${jobMarkers.length}.`);
  }

  for (const [title, summary] of jobEntries) {
    if (!html.includes(title) || !html.includes(summary)) {
      errors.push(`Missing Russian careers job title/summary: ${title} / ${summary}.`);
    }
  }

  const benefitMarkers = html.match(/data-career-benefit=/g) || [];
  if (benefitMarkers.length !== 6) {
    errors.push(`Russian careers page must render exactly 6 benefit entries; found ${benefitMarkers.length}.`);
  }

  const whyMarkers = html.match(/class=["']career-why-card["']/g) || [];
  if (whyMarkers.length !== 4) {
    errors.push(`Russian careers page must render exactly 4 why-join entries; found ${whyMarkers.length}.`);
  }

  const locationPlaceholders = html.match(/data-career-location=["']Будет настроено["']/g) || [];
  const typePlaceholders = html.match(/data-career-type=["']Будет настроено["']/g) || [];
  if (locationPlaceholders.length !== 4 || typePlaceholders.length !== 4) {
    errors.push(`Russian careers job cards must keep location/type as Будет настроено; found ${locationPlaceholders.length} locations and ${typePlaceholders.length} types.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#career-detail-pending["']>Детали вакансии ожидают подключения<\/a>/g) || [];
  if (detailLinks.length !== 4) {
    errors.push(`Russian careers job detail links must stay as same-page placeholders; found ${detailLinks.length}.`);
  }

  const processMarkers = html.match(/data-career-process=/g) || [];
  if (processMarkers.length !== 4) {
    errors.push(`Russian careers page must render exactly 4 process steps; found ${processMarkers.length}.`);
  }

  if (!html.includes(expectedFooterRelationship)) {
    errors.push("Russian careers page footer relationship statement must match exactly.");
  }

  if (/href=["'][^"']*career-detail[^#"']*\.html|href=["'][^"']*jobs\/[^#"']+/i.test(html)) {
    errors.push("Russian careers page must not link to nonexistent job detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian careers page must not include a fake application form.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("Russian careers page must not include fake recruiting interaction buttons.");
  }

  if (/zennolabchina|48151650|marketing@honeybadgersoft\.com/i.test(html)) {
    errors.push("Russian careers page must not include real contact values.");
  }

  if (/зарплат|оклад|полная\s+занятость|частичная\s+занятость|стажировк|гибрид|удален|офис|телефон\s+HR|отправлено\s+успешно|откликнуться\s+сейчас/i.test(html)) {
    errors.push("Russian careers page contains unconfirmed recruiting facts or fake application wording.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian careers page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateRussianAbout(html) {
  const errors = [];
  const expectedTitle = "О нас | Honey Badger";
  const expectedDescription = "Узнайте о Guangzhou Honey Badger Software Co., Ltd., профиле компании, позиционировании, бэкграунде, структуре Honey Badger как операционной структуре ZennoLab в Китае и контактных заполнителях.";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian about page must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian about page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian about page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "О нас",
    "Бренд",
    "Позиционирование",
    "Бэкграунд",
    "Структура",
    "Контакты",
    "Guangzhou Honey Badger Software Co., Ltd.",
    "основана 25 января 2017 года",
    "Миссия и видение",
    "Основное позиционирование",
    "Бизнес-направления",
    "Сервисные особенности",
    "Профиль компании",
    "Зарегистрированные виды деятельности",
    "Охват бизнеса 4+1",
    "4 стандартных продукта/услуги + кроссбордерные сетевые сервисы",
    "Формулировка не расширяется до более сильных заявлений об авторизации, агентстве или дистрибуции.",
    "Контактная информация",
    "Страница «О нас» сохраняет официальный контактный модуль для запросов по бренду, продуктам, кроссбордерным сетевым сервисам и партнерству.",
    "Корпоративная почта: Будет настроено",
    "Аккаунты поддержки: Будет настроено",
    "Офлайн-контактная информация: Будет настроено",
    "Информация о регистрации ICP: Будет настроено",
    "Информация об авторских правах: Будет настроено",
    expectedFooterRelationship,
    "Заполнитель поддержки",
    "Будет настроено"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian about page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-about-page",
    "about-hero",
    "about-brand",
    "about-positioning",
    "about-background",
    "about-entity",
    "about-contact"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian about page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Russian about page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Главная</a>') || !html.includes('aria-current="page">О нас</span>')) {
    errors.push("Russian about page breadcrumb must be Главная / О нас with a working home link.");
  }

  if (!html.includes('href="./about.html" aria-current="page">О нас</a>')) {
    errors.push("Russian about page header must mark О нас as current.");
  }

  for (const languagePath of ['href="../about.html"', 'href="../en/about.html"', 'href="./about.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian about page language switcher missing ${languagePath}.`);
    }
  }

  const relationshipMatches = html.match(new RegExp(expectedFooterRelationship.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || [];
  if (relationshipMatches.length !== 2) {
    errors.push(`Russian about page must render the exact ZennoLab relationship sentence in entity and footer blocks; found ${relationshipMatches.length}.`);
  }

  if (!/<section class=["'][^"']*home-section[^"']*home-section-soft[^"']*["'] id=["']about-entity["'][\s\S]*?<p class=["']about-entity-statement["']>Honey Badger является операционной структурой российской компании ZennoLab в Китае\.<\/p>/i.test(html)) {
    errors.push("Russian about page entity block must contain the exact relationship sentence.");
  }

  if (!/<footer class=["']site-footer["'][\s\S]*?<p>Honey Badger является операционной структурой российской компании ZennoLab в Китае\.<\/p>/i.test(html)) {
    errors.push("Russian about page footer must contain the exact relationship sentence.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian about page must not include a fake contact form.");
  }

  if (/zennolabchina|48151650|marketing@honeybadgersoft\.com/i.test(html)) {
    errors.push("Russian about page must not include real contact values.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian about page contains over-scoped ZennoLab relationship wording.");
  }

  if (/\b(ZennoProxy|order system|payment system|member system|CMS backend|RDS|Redis|OSS|代理销售平台|资金链路)\b/i.test(html)) {
    errors.push("Russian about page contains out-of-scope historical project facts.");
  }

  return errors;
}

function validateRussianProducts(html) {
  const errors = [];
  const expectedTitle = "Продукты | Honey Badger";
  const expectedDescription = "Узнайте об интегрированной системе цифрового сельского хозяйства Honey Badger, оригинальных изображениях Honey Badger, обучении AI-FDE VibeCoding, сопровождении приватной зоны в соцсетях и кроссбордерных сетевых сервисах.";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian products page must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian products page meta title must match the SSOT exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian products page meta description must match the SSOT exactly.");
  }

  for (const marker of [
    "Описание продуктов и услуг Honey Badger",
    "Предоставление практичных решений продуктов и услуг вокруг цифрового сельского хозяйства, оригинальности кроссбордерных товарных изображений, обучения разработке на естественном языке ИИ, операций в приватной зоне зарубежных соцсетей и кроссбордерных сетевых сервисов.",
    "Объем продуктов и услуг",
    "Интегрированная система цифрового сельского хозяйства",
    "Платформа полного цикла для умного сельского хозяйства, IoT + ИИ для цифрового управления производством, контролем и прослеживаемостью",
    "Оригинальные изображения Honey Badger",
    "Кроссбордерный ИИ-инструмент для оригинальности изображений, пакетная обработка товарных фото, избежание проверок на дубликаты, адаптация ко всем зарубежным e-commerce платформам",
    "Обучение AI-FDE VibeCoding",
    "Практическое обучение разработке на естественном языке с помощью передового ИИ, пошаговая реализация коммерческих проектов на базе ИИ-систем",
    "Сопровождение приватной зоны в соцсетях",
    "Полномасштабное сопровождение операций в TikTok/FB/INS, практическое руководство по всему процессу от привлечения трафика до конверсии в приватной зоне",
    "Кроссбордерные сетевые сервисы",
    "Объединяют статический домашний IP, датацентровый IP и динамический IP для стабильных аккаунтных сред, высокопараллельных выходов и ротационных домашних IP-пулов",
    "Русские страницы деталей четырех стандартных продуктов ожидают подключения, а русская объединенная страница сетевых сервисов уже подключена из карточки NET.",
    "Открывает русскую объединенную страницу сетевых сервисов для статического домашнего IP, датацентрового IP и динамического IP",
    "Русские страницы деталей четырех стандартных продуктов ожидают подключения; эти входы остаются якорями на текущей странице.",
    "Русская объединенная страница сетевых сервисов подключена; три дочерних IP-сервиса остаются ожидающими внутри этой страницы.",
    "Основные возможности",
    "Цифровой контроль промышленности",
    "Интеграция Интернета вещей, больших данных и ИИ для объединения производства, контроля, хранения и прослеживаемости в единую цепь управления",
    "Оригинальность кроссбордерных изображений",
    "Пакетная реконструкция исходных товарных изображений с сохранением ключевых деталей и адаптацией под требования основных и сценарных изображений зарубежных e-commerce платформ",
    "Формирование навыков разработки ИИ",
    "Основанное на парадигме разработки на естественном языке Vibe Coding обучение команд созданию коммерческих ИИ-систем с нуля",
    "Рост зарубежной приватной зоны",
    "Объединение процессов привлечения трафика, накопления, конверсии и анализа в TikTok, Facebook и Instagram",
    "Объединение статического домашнего IP, датацентрового IP и динамического IP в один сервисный вход для стабильных аккаунтов, высокой параллельности и ротационных сценариев доступа",
    "Четырехэтапный путь внедрения услуг",
    "Подтверждение бизнес-целей, границ сценария и объема поставки",
    "Выбор соответствующего продукта или решения услуг сопровождения",
    "Создание пилотных процессов, материалов или прототипов системы",
    "Завершение обучения, поставки, анализа и непрерывной итерации",
    "Вход для консультации и контакта",
    "Корпоративная почта: Будет настроено",
    "Аккаунты поддержки: Будет настроено",
    "Информация о регистрации ICP: Будет настроено",
    "Информация об авторских правах: Будет настроено",
    expectedFooterRelationship,
    "Заполнитель поддержки",
    "Будет настроено"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian products page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-products-page",
    "products-hero",
    "product-overview",
    "products-capabilities",
    "service-path",
    "products-consult"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian products page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Russian products page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Главная</a>') || !html.includes('aria-current="page">Продукты</span>')) {
    errors.push("Russian products page breadcrumb must be Главная / Продукты with a working home link.");
  }

  if (!html.includes('href="./products.html" aria-current="page">Продукты</a>')) {
    errors.push("Russian products page header must mark Продукты as current.");
  }

  for (const languagePath of ['href="../products.html"', 'href="../en/products.html"', 'href="./products.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian products page language switcher missing ${languagePath}.`);
    }
  }

  const productEntries = html.match(/data-product-entry=/g) || [];
  if (productEntries.length !== 5) {
    errors.push(`Russian products page must render exactly 5 top-level product entries; found ${productEntries.length}.`);
  }

  const regularEntries = html.match(/data-product-entry="regular"/g) || [];
  if (regularEntries.length !== 4) {
    errors.push(`Russian products page must render 4 regular product/service entries; found ${regularEntries.length}.`);
  }

  const networkEntries = html.match(/data-product-entry="network"/g) || [];
  if (networkEntries.length !== 1) {
    errors.push(`Russian products page must render 1 network-services entry; found ${networkEntries.length}.`);
  }

  const pendingProductLinks = html.match(/<a class=["']link-more["'] href=["']#ru-product-detail-pending["']>Страница деталей ожидает подключения<\/a>/g) || [];
  if (pendingProductLinks.length !== 2) {
    errors.push(`Russian products page regular entries must keep same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']ru-product-agriculture["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/Agriculture\.html["']>Подробнее<\/a>/.test(html)) {
    errors.push("Russian products page agriculture card must link to ./Agriculture.html.");
  }

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']ru-product-image["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/mihuan_yuantu\.html["']>Подробнее<\/a>/.test(html)) {
    errors.push("Russian products page Original Image card must link to ./mihuan_yuantu.html.");
  }

  if (!html.includes('href="./跨境网络服务.html">Открыть объединенную страницу</a>')) {
    errors.push("Russian products page NET card must link to the merged Russian network services page.");
  }

  const detailLinks = [...html.matchAll(/<a class=["']link-more["'] href=["']([^"']+)["'][^>]*>/g)].map((match) => match[1]);
  const externalDetailLinks = detailLinks.filter((href) => href !== "#ru-product-detail-pending" && href !== "./Agriculture.html" && href !== "./mihuan_yuantu.html" && href !== "./跨境网络服务.html");
  if (externalDetailLinks.length > 0) {
    errors.push(`Russian products page detail links must stay on #ru-product-detail-pending, ./Agriculture.html, ./mihuan_yuantu.html or ./跨境网络服务.html; found ${externalDetailLinks.join(", ")}.`);
  }

  if (/href=["'][^"']*(AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip|network|продукт)[^#"']*\.html/i.test(html)) {
    errors.push("Russian products page must not link to nonexistent product or network-service detail pages.");
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian products page must not include a fake contact form.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian products page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateRussianNetworkServices(html) {
  const errors = [];
  const expectedTitle = "Кроссбордерные сетевые сервисы | Honey Badger";
  const expectedDescription = "Кроссбордерные сетевые сервисы объединяют три типа IP-возможностей в один вход деталей продукта для подбора сетевых ресурсов по стабильности аккаунтов, частоте доступа, масштабу параллельности и требованиям к затратам.";
  const expectedFooterRelationship = "Honey Badger является операционной структурой российской компании ZennoLab в Китае.";

  if (!/<html\s+lang=["']ru-RU["']/i.test(html)) {
    errors.push('Russian network services page must render <html lang="ru-RU">.');
  }

  if (!html.includes(`<title>${expectedTitle}</title>`)) {
    errors.push("Russian network services page meta title must match the issue requirement exactly.");
  }

  if (!html.includes(`<meta name="description" content="${expectedDescription}">`)) {
    errors.push("Russian network services page meta description must match the production wording exactly.");
  }

  for (const marker of [
    "Кроссбордерные сетевые сервисы",
    "Статический домашний IP, датацентровый IP и динамический IP представлены на одной сервисной странице для стабильных, гибких и масштабируемых сетевых ресурсов",
    "Кроссбордерные сетевые сервисы объединяют три типа IP-возможностей в один вход деталей продукта. Они помогают командам кроссбордерной электронной коммерции, зарубежных соцсетей, проверки рекламы, сбора публичных данных и локализационного тестирования выбирать подходящие сетевые ресурсы по стабильности аккаунтов, частоте доступа, масштабу параллельности и требованиям к затратам.",
    "Позиционирование сервиса",
    "Три сетевых сервиса",
    "Статический домашний IP",
    "Для долгосрочной работы аккаунтов, входа в магазины, управления рекламными аккаунтами и других сценариев стабильной идентичности; акцент на фиксированном выходе, согласованности среды и более низком распознавании риск-контролем.",
    "Датацентровый IP",
    "Для пакетного сбора, мониторинга, тестирования и серверных выходов; акцент на пропускной способности, задержке, стоимости и эффективности массового подключения.",
    "Динамический IP",
    "Для краткосрочных исследований, проверки рекламы, сбора публичных данных и высокочастотных многосессионных задач; акцент на ротации IP-пула, анонимности и гибкой интеграции.",
    "Единый вход",
    "Страница продуктов и навигация больше не разделяют три типа IP как верхнеуровневые продукты; они сгруппированы в кроссбордерные сетевые сервисы.",
    "Подбор по сценариям",
    "Сопоставление сетевых ресурсов с потребностями стабильных аккаунтов, пакетной параллельности и высокочастотной ротации.",
    "Гибкая интеграция",
    "Поддержка фиксированных узлов, ротации портов, ротации конечных точек и API-интеграции.",
    "Контролируемая эксплуатация",
    "Поддержка пакетного управления, мониторинга узлов, замены при исключениях и отслеживания использования.",
    "Корректные формулировки",
    "Описание построения кроссбордерной сетевой среды без неподтвержденных чисел узлов, обещаний возврата или абсолютных SLA.",
    "Применимые сценарии",
    "Долгосрочная работа кроссбордерных магазинов, ведение зарубежных соцсетевых аккаунтов, управление рекламными аккаунтами, сбор публичных данных, проверка эффективности рекламы, локализационное тестирование доступа, легкие серверные выходы",
    "Доступ и гарантии",
    "Регионы, протоколы, параллельность, способ ротации и требования к эксплуатации подтверждаются по бизнес-цели; конкретные ресурсы узлов, пакеты, SLA и послепродажная политика должны следовать производственным формулировкам, подтвержденным администратором",
    "Страница деталей ожидает подключения",
    "Вернуться к Продуктам",
    "Корпоративная почта: Будет настроено",
    "Аккаунты поддержки: Будет настроено",
    "Информация о регистрации ICP: Будет настроено",
    "Информация об авторских правах: Будет настроено",
    expectedFooterRelationship,
    "Заполнитель поддержки",
    "Будет настроено"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Russian network services page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "ru-network-services-page",
    "network-services-hero",
    "network-positioning",
    "network-services-modules",
    "service-static-residential-ip",
    "service-idc-ip",
    "service-dynamic-ip",
    "network-scenarios",
    "network-consult"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing Russian network services page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Russian network services page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">Главная</a>') || !html.includes('href="./products.html">Продукты</a>') || !html.includes('aria-current="page">Кроссбордерные сетевые сервисы</span>')) {
    errors.push("Russian network services breadcrumb must be Главная / Продукты / Кроссбордерные сетевые сервисы with working parent links.");
  }

  if (!html.includes('href="./products.html" aria-current="page">Продукты</a>')) {
    errors.push("Russian network services page header must mark Продукты as current.");
  }

  for (const languagePath of ['href="../跨境网络服务.html"', 'href="../en/跨境网络服务.html"', 'href="./跨境网络服务.html" aria-current="true"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Russian network services page language switcher missing ${languagePath}.`);
    }
  }

  const networkServices = html.match(/data-network-service=/g) || [];
  if (networkServices.length !== 3) {
    errors.push(`Russian network services page must render exactly 3 child service sections; found ${networkServices.length}.`);
  }

  for (const service of ['data-network-service="static-residential-ip"', 'data-network-service="idc-ip"', 'data-network-service="dynamic-ip"']) {
    if (!html.includes(service)) {
      errors.push(`Russian network services page missing ${service}.`);
    }
  }

  if (/href=["'][^"']*(static-ip|idc-ip|dynamic-ip)\.html/i.test(html)) {
    errors.push("Russian network child service detail links must stay as same-page placeholder anchors.");
  }

  for (const anchor of ['href="#static-ip-detail-pending"', 'href="#idc-ip-detail-pending"', 'href="#dynamic-ip-detail-pending"']) {
    if (!html.includes(anchor)) {
      errors.push(`Russian network child service missing placeholder detail anchor ${anchor}.`);
    }
  }

  if (/<form[\s>]/i.test(html) || /type=["']submit["']/i.test(html)) {
    errors.push("Russian network services page must not include a fake contact form.");
  }

  if (/эксклюзивн|единственн|официальн[а-яё]*\s+единственн/i.test(html)) {
    errors.push("Russian network services page contains over-scoped ZennoLab relationship wording.");
  }

  if (/node count:\s*\d+|nodes:\s*\d+|\d+\s+nodes|refund guarantee|money-back|guaranteed SLA|100%\s*SLA|гарантированн[а-яё]*\s+SLA|\d+\s+узл/i.test(html)) {
    errors.push("Russian network services page contains unconfirmed node counts, refund guarantees or absolute SLA wording.");
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

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']product-agriculture["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/Agriculture\.html["']>查看详情<\/a>/.test(html)) {
    errors.push("Products page agriculture card must link to ./Agriculture.html.");
  }

  const pendingProductLinks = html.match(/<a class=["']link-more["'] href=["']#details-pending["']>详情页待接入<\/a>/g) || [];
  if (pendingProductLinks.length !== 2) {
    errors.push(`Products page regular product entries must keep same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (!/<article class=["'][^"']*\bproduct-card\b[^"']*["'] id=["']product-image["'][\s\S]*?<a class=["']link-more["'] href=["']\.\/mihuan_yuantu\.html["']>查看详情<\/a>/.test(html)) {
    errors.push("Products page Original Image card must link to ./mihuan_yuantu.html.");
  }

  if (/href=["'][^"']*(AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip)\.html/i.test(html)) {
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

function validateAgricultureDetailPage(relativePath, html) {
  const errors = [];
  const locale = relativePath.startsWith("en/")
    ? "en"
    : relativePath.startsWith("ru/")
      ? "ru"
      : "zh";
  const expectations = {
    zh: {
      title: "数字化农业综合管理系统",
      subtitle: "物联网 + AI 驱动的全链条智慧农业管控平台",
      lead: "面向现代农业产业园、种植基地与涉农企业，提供从生产监测、环境调控、质量溯源到供应链管理的一体化数字解决方案。",
      functionsTitle: "六大核心功能",
      scenarioTitle: "适用场景",
      valueTitle: "客户价值",
      features: [
        ["物联网数据采集", "土壤温湿度、光照、CO₂、气象站等多维度传感器实时接入"],
        ["AI 智能决策", "基于作物生长模型的灌溉、施肥、病虫害预警，产量预测"],
        ["生产过程管理", "种植计划、农事记录、投入品管理全流程数字化"],
        ["质量溯源体系", "一物一码，从田间到餐桌全链路可追溯"],
        ["仓储与供应链", "库存智能管理、冷链温湿度监控、订单配送协同"],
        ["可视化数据大屏", "园区整体运营态势一屏掌握，多级下钻"]
      ],
      scenarios: "现代农业产业园、规模化种植基地、政府智慧监管平台、生鲜品牌溯源体系、农业科研院所",
      value: "降本（水肥药减少 15%-30%）、增效（人力成本下降 40%）、提质（标准化生产）、增值（溯源赋能品牌溢价）",
      breadcrumb: ['href="./index.html">首页</a>', 'href="./products.html">产品介绍</a>', 'aria-current="page">数字化农业综合管理系统</span>'],
      languagePaths: ['href="./Agriculture.html" aria-current="true"', 'href="./en/Agriculture.html"', 'href="./ru/Agriculture.html"']
    },
    en: {
      title: "Digital Agriculture Integrated Management System",
      subtitle: "Full-Chain Smart Agriculture Control Platform Driven by IoT + AI",
      lead: "Providing integrated digital solutions from production monitoring, environmental regulation, quality traceability to supply chain management for modern agricultural industrial parks, planting bases and agriculture-related enterprises.",
      functionsTitle: "Six Core Functions",
      scenarioTitle: "Applicable Scenarios",
      valueTitle: "Customer Value",
      features: [
        ["IoT Data Collection", "Real-time access to multi-dimensional sensors such as soil temperature and humidity, light, CO₂ and weather stations"],
        ["AI Intelligent Decision-Making", "Irrigation, fertilization, pest and disease warning based on crop growth models, yield prediction"],
        ["Production Process Management", "Full-process digitalization of planting plans, farming records and input management"],
        ["Quality Traceability System", "One item one code, full-chain traceability from field to table"],
        ["Warehousing &amp; Supply Chain", "Intelligent inventory management, cold chain temperature and humidity monitoring, order and delivery coordination"],
        ["Visual Data Dashboard", "One-screen overview of overall park operation status, multi-level drill-down"]
      ],
      scenarios: "Modern agricultural industrial parks, large-scale planting bases, government smart supervision platforms, fresh food brand traceability systems, agricultural research institutes",
      value: "Cost reduction (15%-30% less water, fertilizer and pesticides), efficiency improvement (40% lower labor costs), quality improvement (standardized production), value addition (traceability empowers brand premium)",
      breadcrumb: ['href="./index.html">Home</a>', 'href="./products.html">Products</a>', 'aria-current="page">Digital Agriculture Integrated Management System</span>'],
      languagePaths: ['href="../Agriculture.html"', 'href="./Agriculture.html" aria-current="true"', 'href="../ru/Agriculture.html"']
    },
    ru: {
      title: "Интегрированная система цифрового сельского хозяйства",
      subtitle: "Платформа полного цикла управления умным сельским хозяйством на базе IoT + ИИ",
      lead: "Предоставление комплексных цифровых решений от мониторинга производства и регулирования окружающей среды до прослеживаемости качества и управления цепочками поставок для современных сельскохозяйственных парков, посевных баз и предприятий агросектора.",
      functionsTitle: "Шесть основных функций",
      scenarioTitle: "Применимые сценарии",
      valueTitle: "Ценность для клиента",
      features: [
        ["Сбор данных Интернета вещей", "Доступ в реальном времени к многомерным датчикам: температура и влажность почвы, освещение, CO₂, метеостанции"],
        ["Интеллектуальные решения ИИ", "Предупреждения о поливе, удобрении, вредителях и болезнях на основе моделей роста культур, прогнозирование урожайности"],
        ["Управление производственным процессом", "Полная цифровизация планов посевов, сельскохозяйственных записей и управления ресурсами"],
        ["Система прослеживаемости качества", "Один код на единицу продукции, полная прослеживаемость от поля до стола"],
        ["Склад и цепочка поставок", "Интеллектуальное управление запасами, мониторинг температуры и влажности холодовой цепи, координация заказов и доставки"],
        ["Визуальная панель данных", "Обзор общей оперативной ситуации парка на одном экране, многоуровневая детализация"]
      ],
      scenarios: "Современные сельскохозяйственные парки, масштабные посевные базы, правительственные платформы интеллектуального контроля, системы прослеживаемости брендов свежих продуктов, сельскохозяйственные научно-исследовательские институты",
      value: "Снижение затрат (на 15-30% меньше воды, удобрений и пестицидов), повышение эффективности (снижение трудовых затрат на 40%), улучшение качества (стандартизированное производство), добавленная стоимость (прослеживаемость повышает премиальность бренда)",
      breadcrumb: ['href="./index.html">Главная</a>', 'href="./products.html">Продукты</a>', 'aria-current="page">Интегрированная система цифрового сельского хозяйства</span>'],
      languagePaths: ['href="../Agriculture.html"', 'href="../en/Agriculture.html"', 'href="./Agriculture.html" aria-current="true"']
    }
  }[locale];

  for (const marker of [
    expectations.title,
    expectations.subtitle,
    expectations.lead,
    expectations.functionsTitle,
    expectations.scenarioTitle,
    expectations.valueTitle,
    expectations.scenarios,
    expectations.value,
    "agriculture-detail-hero",
    "agriculture-core-functions",
    "agriculture-scenarios",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Agriculture detail marker for ${relativePath}: ${marker}.`);
    }
  }

  for (const [featureTitle, featureBody] of expectations.features) {
    if (!html.includes(featureTitle) || !html.includes(featureBody)) {
      errors.push(`Missing Agriculture SSOT feature for ${relativePath}: ${featureTitle}.`);
    }
  }

  for (const breadcrumbPart of expectations.breadcrumb) {
    if (!html.includes(breadcrumbPart)) {
      errors.push(`Agriculture breadcrumb missing ${breadcrumbPart} in ${relativePath}.`);
    }
  }

  for (const languagePath of expectations.languagePaths) {
    if (!html.includes(languagePath)) {
      errors.push(`Agriculture language switcher missing ${languagePath} in ${relativePath}.`);
    }
  }

  const featureCount = (html.match(/data-agriculture-feature=/g) || []).length;
  if (featureCount !== 6) {
    errors.push(`Agriculture detail page must render 6 feature cards; found ${featureCount}.`);
  }

  if (/data-product=|seo-prerender/i.test(html)) {
    errors.push("Agriculture detail page must be full static HTML, not prototype dynamic rendering.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一|\b(exclusive|sole|only authorized)\b|эксклюзивн|единственн/i.test(html)) {
    errors.push("Agriculture detail page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateYuantuDetailPage(relativePath, html) {
  const errors = [];
  const locale = relativePath.startsWith("en/")
    ? "en"
    : relativePath.startsWith("ru/")
      ? "ru"
      : "zh";
  const expectations = {
    zh: {
      title: "蜜獾原图",
      subtitle: "AI 驱动的跨境商品图原创化批量处理工具",
      lead: "专为跨境电商卖家打造的图片原创化解决方案。基于深度生成模型，在保留商品核心特征的前提下智能重构，有效规避平台查重与侵权风险。",
      functionsTitle: "六大核心功能",
      valueTitle: "客户价值",
      features: [
        ["智能原创重构", "AI 深度生成，原创度检测自动校验通过率"],
        ["批量处理引擎", "百张级批量上传，单张秒级完成"],
        ["平台规格适配", "内置 Amazon、TikTok Shop、eBay 等平台尺寸模板"],
        ["细节增强优化", "商品轮廓锐化、文字清晰化、色彩校正"],
        ["水印与合规处理", "自动移除水印、敏感元素检测替换"],
        ["API 与工作流集成", "开放 RESTful API，对接 ERP / 上架系统"]
      ],
      value: "上新效率提升 10 倍，美工成本下降 70%，原创检测通过率 &gt; 95%",
      breadcrumb: ['href="./index.html">首页</a>', 'href="./products.html">产品介绍</a>', 'aria-current="page">蜜獾原图</span>'],
      languagePaths: ['href="./mihuan_yuantu.html" aria-current="true"', 'href="./en/mihuan_yuantu.html"', 'href="./ru/mihuan_yuantu.html"'],
      forbiddenScenario: "适用场景"
    },
    en: {
      title: "Honey Badger Original Image",
      subtitle: "AI-Driven Cross-Border Product Image Originality Batch Processing Tool",
      lead: "An image originality solution built exclusively for cross-border e-commerce sellers. Based on deep generative models, it performs intelligent reconstruction while retaining core product features, effectively avoiding platform duplicate checks and infringement risks.",
      functionsTitle: "Six Core Functions",
      valueTitle: "Customer Value",
      features: [
        ["Intelligent Original Reconstruction", "AI deep generation, originality detection automatically verifies pass rate"],
        ["Batch Processing Engine", "Hundreds of images batch upload, single image completed in seconds"],
        ["Platform Specification Adaptation", "Built-in size templates for Amazon, TikTok Shop, eBay and other platforms"],
        ["Detail Enhancement &amp; Optimization", "Product contour sharpening, text clarification, color correction"],
        ["Watermark &amp; Compliance Processing", "Automatic watermark removal, sensitive element detection and replacement"],
        ["API &amp; Workflow Integration", "Open RESTful API, connects with ERP / listing systems"]
      ],
      value: "10x faster listing efficiency, 70% lower design costs, &gt;95% originality detection pass rate",
      breadcrumb: ['href="./index.html">Home</a>', 'href="./products.html">Products</a>', 'aria-current="page">Honey Badger Original Image</span>'],
      languagePaths: ['href="../mihuan_yuantu.html"', 'href="./mihuan_yuantu.html" aria-current="true"', 'href="../ru/mihuan_yuantu.html"'],
      forbiddenScenario: "Applicable Scenarios"
    },
    ru: {
      title: "Оригинальные изображения Honey Badger",
      subtitle: "ИИ-инструмент для пакетной обработки и оригинализации кроссбордерных товарных фото",
      lead: "Решение для оригинализации изображений, созданное специально для продавцов кроссбордерной электронной коммерции. На основе моделей глубокой генерации выполняет интеллектуальную реконструкцию с сохранением ключевых характеристик товара, эффективно избегая проверок на дубликаты и рисков нарушения авторских прав на платформах.",
      functionsTitle: "Шесть основных функций",
      valueTitle: "Ценность для клиента",
      features: [
        ["Интеллектуальная оригинальная реконструкция", "Глубокая генерация ИИ, автоматическая проверка степени оригинальности и подтверждение прохождения"],
        ["Движок пакетной обработки", "Пакетная загрузка сотен изображений, обработка одного фото за секунды"],
        ["Адаптация под спецификации платформ", "Встроенные шаблоны размеров для Amazon, TikTok Shop, eBay и других платформ"],
        ["Улучшение и оптимизация деталей", "Заточка контуров товара, улучшение четкости текста, цветокоррекция"],
        ["Обработка водяных знаков и соответствие требованиям", "Автоматическое удаление водяных знаков, обнаружение и замена чувствительных элементов"],
        ["Интеграция API и рабочих процессов", "Открытый RESTful API, интеграция с ERP / системами размещения товаров"]
      ],
      value: "Эффективность размещения новых товаров выше в 10 раз, затраты на дизайн ниже на 70%, доля прохождения проверки оригинальности &gt; 95%",
      breadcrumb: ['href="./index.html">Главная</a>', 'href="./products.html">Продукты</a>', 'aria-current="page">Оригинальные изображения Honey Badger</span>'],
      languagePaths: ['href="../mihuan_yuantu.html"', 'href="../en/mihuan_yuantu.html"', 'href="./mihuan_yuantu.html" aria-current="true"'],
      forbiddenScenario: "Применимые сценарии"
    }
  }[locale];

  for (const marker of [
    expectations.title,
    expectations.subtitle,
    expectations.lead,
    expectations.functionsTitle,
    expectations.valueTitle,
    expectations.value,
    "yuantu-detail-hero",
    "yuantu-core-functions",
    "yuantu-customer-value",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing Original Image detail marker for ${relativePath}: ${marker}.`);
    }
  }

  for (const [featureTitle, featureBody] of expectations.features) {
    if (!html.includes(featureTitle) || !html.includes(featureBody)) {
      errors.push(`Missing Original Image SSOT feature for ${relativePath}: ${featureTitle}.`);
    }
  }

  for (const breadcrumbPart of expectations.breadcrumb) {
    if (!html.includes(breadcrumbPart)) {
      errors.push(`Original Image breadcrumb missing ${breadcrumbPart} in ${relativePath}.`);
    }
  }

  for (const languagePath of expectations.languagePaths) {
    if (!html.includes(languagePath)) {
      errors.push(`Original Image language switcher missing ${languagePath} in ${relativePath}.`);
    }
  }

  const featureCount = (html.match(/data-yuantu-feature=/g) || []).length;
  if (featureCount !== 6) {
    errors.push(`Original Image detail page must render 6 feature cards; found ${featureCount}.`);
  }

  if (html.includes(expectations.forbiddenScenario) || /data-yuantu-scenario|agriculture-scenarios/i.test(html)) {
    errors.push("Original Image detail page must not invent an applicable-scenarios section.");
  }

  if (/data-product=|seo-prerender/i.test(html)) {
    errors.push("Original Image detail page must be full static HTML, not prototype dynamic rendering.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一|\b(exclusive|sole|only authorized)\b|эксклюзивн|единственн/i.test(html)) {
    errors.push("Original Image detail page contains over-scoped ZennoLab relationship wording.");
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

function validateNewsNavigation(html, relativePath) {
  const errors = [];
  const isNewsPage = relativePath === "news.html";
  const expectedLink = isNewsPage
    ? /<a class=["']nav-link["'] href=["']\.\/news\.html["'] aria-current=["']page["']>新闻资讯<\/a>/g
    : /<a class=["']nav-link["'] href=["']\.\/news\.html["']>新闻资讯<\/a>/g;
  const newsLinks = html.match(expectedLink) || [];

  if (newsLinks.length !== 2) {
    errors.push(`${relativePath} must render desktop and mobile 新闻资讯 nav links to ./news.html; found ${newsLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>新闻资讯<\/a>/i.test(html)) {
    errors.push(`${relativePath} must not keep 新闻资讯 as a placeholder nav link.`);
  }

  return errors;
}

function validateCareersNavigation(html, relativePath) {
  const errors = [];
  const isCareersPage = relativePath === "careers.html";
  const expectedLink = isCareersPage
    ? /<a class=["']nav-link["'] href=["']\.\/careers\.html["'] aria-current=["']page["']>人才招聘<\/a>/g
    : /<a class=["']nav-link["'] href=["']\.\/careers\.html["']>人才招聘<\/a>/g;
  const careersLinks = html.match(expectedLink) || [];

  if (careersLinks.length !== 2) {
    errors.push(`${relativePath} must render desktop and mobile 人才招聘 nav links to ./careers.html; found ${careersLinks.length}.`);
  }

  if (/data-placeholder=["']true["'][^>]*>人才招聘<\/a>/i.test(html)) {
    errors.push(`${relativePath} must not keep 人才招聘 as a placeholder nav link.`);
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

function validateNewsPage(html) {
  const errors = [];
  const newsEntries = [
    ["公司动态", "蜜獾软件正式成为 ZennoLab 中国运营实体", "2026-06-15"],
    ["产品更新", "蜜獾原图 V2.0 上线：新增批量场景图生成功能", "2026-06-01"],
    ["行业资讯", "2026 跨境电商 AI 工具应用趋势报告发布", "2026-05-20"],
    ["技术分享", "住宅 IP 与机房 IP 怎么选？代理选型完全指南", "2026-05-08"],
    ["公司动态", "AI-FDE 首期 VibeCoding 培训圆满结业", "2026-04-25"],
    ["产品更新", "跨境网络服务新增东南亚节点资源", "2026-04-10"]
  ];

  for (const marker of [
    "新闻资讯",
    "企业动态",
    "产品更新",
    "行业洞察",
    "资讯分类展示",
    "全部",
    "公司动态",
    "行业资讯",
    "技术分享",
    "资讯列表",
    "详情页待接入",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing news page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "news-hero",
    "news-categories",
    "news-list",
    "news-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing news page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("News page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">首页</a>') || !html.includes('aria-current="page">新闻资讯</span>')) {
    errors.push("News page breadcrumb must be 首页 / 新闻资讯 with a working home link.");
  }

  if (!html.includes('href="./news.html" aria-current="page">新闻资讯</a>')) {
    errors.push("News page header must mark 新闻资讯 as current.");
  }

  for (const languagePath of ['href="./news.html"', 'href="./en/index.html"', 'href="./ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`News page language switcher missing ${languagePath}.`);
    }
  }

  const entryMarkers = html.match(/data-news-entry=/g) || [];
  if (entryMarkers.length !== 6) {
    errors.push(`News page must render exactly 6 news entries; found ${entryMarkers.length}.`);
  }

  for (const [category, title, date] of newsEntries) {
    if (!html.includes(category) || !html.includes(title) || !html.includes(`datetime="${date}"`) || !html.includes(`>${date}</time>`)) {
      errors.push(`Missing news entry category/title/date: ${category} / ${title} / ${date}.`);
    }
  }

  const dateMatches = html.match(/<time datetime=["']\d{4}-\d{2}-\d{2}["']>\d{4}-\d{2}-\d{2}<\/time>/g) || [];
  if (dateMatches.length !== 6) {
    errors.push(`News page must render 6 YYYY-MM-DD time elements; found ${dateMatches.length}.`);
  }

  const thumbLabels = html.match(/aria-label=["'][^"']*缩略图["']/g) || [];
  if (thumbLabels.length !== 6) {
    errors.push(`News page must render 6 inline thumbnail labels; found ${thumbLabels.length}.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#news-detail-pending["']>详情页待接入<\/a>/g) || [];
  if (detailLinks.length !== 6) {
    errors.push(`News entry links must stay as same-page detail placeholders; found ${detailLinks.length}.`);
  }

  if (/href=["'][^"']*news-detail[^#"']*\.html/i.test(html) || /href=["'][^"']*news\/[^#"']+/i.test(html)) {
    errors.push("News page must not link to nonexistent news detail or category pages.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("News page must not include fake filter interaction buttons.");
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("News page must not include a fake contact form.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("News page contains over-scoped ZennoLab relationship wording.");
  }

  return errors;
}

function validateCareersPage(html) {
  const errors = [];
  const jobEntries = [
    ["跨境运营专员", "TikTok/FB/INS 内容运营与私域转化"],
    ["前端开发工程师", "官网与产品后台开发，探索 AI 辅助开发"],
    ["客户成功经理", "企业客户对接与服务，增购与生命周期管理"],
    ["AI 培训讲师助理", "课程素材准备、学员答疑、社群运营"]
  ];

  for (const marker of [
    "人才招聘",
    "加入蜜獾，一起做有价值的事",
    "年轻高效的团队，专注将全球领先的自动化技术与 AI 能力带给中国客户。",
    "为什么加入",
    "赛道前景广阔",
    "扁平化管理",
    "技术驱动氛围",
    "有竞争力的薪酬",
    "福利待遇",
    "五险一金 + 商保",
    "弹性工作制",
    "团建节日福利",
    "年度体检",
    "带薪年假",
    "学习培训预算",
    "在招岗位",
    "工作地点",
    "岗位类型",
    "待配置",
    "岗位详情待接入",
    "招聘流程",
    "简历投递",
    "初筛沟通",
    "业务面试",
    "终面 / Offer",
    "投递与联系",
    "企业邮箱：待配置",
    "开发骨架，非正式内容"
  ]) {
    if (!html.includes(marker)) {
      errors.push(`Missing careers page marker: ${marker}.`);
    }
  }

  for (const selector of [
    "careers-hero",
    "careers-why",
    "careers-benefits",
    "careers-jobs",
    "careers-process",
    "careers-apply",
    "career-detail-pending"
  ]) {
    if (!html.includes(selector)) {
      errors.push(`Missing careers page section marker: ${selector}.`);
    }
  }

  if (!/class=["'][^"']*\bbreadcrumb\b/i.test(html)) {
    errors.push("Careers page must render breadcrumb markup.");
  }

  if (!html.includes('href="./index.html">首页</a>') || !html.includes('aria-current="page">人才招聘</span>')) {
    errors.push("Careers page breadcrumb must be 首页 / 人才招聘 with a working home link.");
  }

  if (!html.includes('href="./careers.html" aria-current="page">人才招聘</a>')) {
    errors.push("Careers page header must mark 人才招聘 as current.");
  }

  for (const languagePath of ['href="./careers.html"', 'href="./en/index.html"', 'href="./ru/index.html"']) {
    if (!html.includes(languagePath)) {
      errors.push(`Careers page language switcher missing ${languagePath}.`);
    }
  }

  const jobMarkers = html.match(/data-career-job=/g) || [];
  if (jobMarkers.length !== 4) {
    errors.push(`Careers page must render exactly 4 job entries; found ${jobMarkers.length}.`);
  }

  for (const [title, summary] of jobEntries) {
    if (!html.includes(title) || !html.includes(summary)) {
      errors.push(`Missing careers job title/summary: ${title} / ${summary}.`);
    }
  }

  const benefitMarkers = html.match(/data-career-benefit=/g) || [];
  if (benefitMarkers.length !== 6) {
    errors.push(`Careers page must render exactly 6 benefit entries; found ${benefitMarkers.length}.`);
  }

  const locationPlaceholders = html.match(/data-career-location=["']待配置["']/g) || [];
  const typePlaceholders = html.match(/data-career-type=["']待配置["']/g) || [];
  if (locationPlaceholders.length !== 4 || typePlaceholders.length !== 4) {
    errors.push(`Careers job cards must keep location/type as 待配置; found ${locationPlaceholders.length} locations and ${typePlaceholders.length} types.`);
  }

  const detailLinks = html.match(/<a class=["']link-more["'] href=["']#career-detail-pending["']>岗位详情待接入<\/a>/g) || [];
  if (detailLinks.length !== 4) {
    errors.push(`Careers job detail links must stay as same-page placeholders; found ${detailLinks.length}.`);
  }

  const processMarkers = html.match(/data-career-process=/g) || [];
  if (processMarkers.length !== 4) {
    errors.push(`Careers page must render exactly 4 process steps; found ${processMarkers.length}.`);
  }

  if (/href=["'][^"']*career-detail[^#"']*\.html|href=["'][^"']*jobs\/[^#"']+/i.test(html)) {
    errors.push("Careers page must not link to nonexistent job detail pages.");
  }

  if (/<form[\s>]/i.test(html)) {
    errors.push("Careers page must not include a fake application form.");
  }

  if (/<button[\s>]/i.test(html) && !/class=["']menu-button["']|class=["']support-close["']|class=["']support-toggle["']/.test(html)) {
    errors.push("Careers page must not include fake recruiting interaction buttons.");
  }

  if (/立即投递|提交成功|上传简历|在线表单|薪资|广州|全职|社招|校招|实习|人力资源电话|HR 电话/i.test(html)) {
    errors.push("Careers page contains unconfirmed recruiting facts or fake application wording.");
  }

  if (/唯一代理|独家授权|官方总代理|官方唯一/i.test(html)) {
    errors.push("Careers page contains over-scoped ZennoLab relationship wording.");
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
  htmlErrors.push(...validateSeoLinks(relativePath, html));

  if (!html.includes("开发骨架，非正式内容")) {
    htmlErrors.push("Missing explicit scaffold notice.");
  }

  if (/\bhttps?:\/\//i.test(stripAllowedProductionSeoLinks(html))) {
    htmlErrors.push("Skeleton page must not reference external URLs outside canonical or alternate SEO links.");
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
    htmlErrors.push(...validateNewsNavigation(html, relativePath));
    htmlErrors.push(...validateCareersNavigation(html, relativePath));
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

  if (relativePath === "en/index.html") {
    htmlErrors.push(...validateEnglishHome(html));
  }

  if (relativePath === "en/products.html") {
    htmlErrors.push(...validateEnglishProducts(html));
  }

  if (relativePath === "en/Agriculture.html") {
    htmlErrors.push(...validateAgricultureDetailPage(relativePath, html));
  }

  if (relativePath === "en/mihuan_yuantu.html") {
    htmlErrors.push(...validateYuantuDetailPage(relativePath, html));
  }

  if (relativePath === "en/跨境网络服务.html") {
    htmlErrors.push(...validateEnglishNetworkServices(html));
  }

  if (relativePath === "en/about.html") {
    htmlErrors.push(...validateEnglishAbout(html));
  }

  if (relativePath === "en/news.html") {
    htmlErrors.push(...validateEnglishNews(html));
  }

  if (relativePath === "en/careers.html") {
    htmlErrors.push(...validateEnglishCareers(html));
  }

  if (relativePath === "ru/index.html") {
    htmlErrors.push(...validateRussianHome(html));
  }

  if (relativePath === "ru/products.html") {
    htmlErrors.push(...validateRussianProducts(html));
  }

  if (relativePath === "ru/Agriculture.html") {
    htmlErrors.push(...validateAgricultureDetailPage(relativePath, html));
  }

  if (relativePath === "ru/mihuan_yuantu.html") {
    htmlErrors.push(...validateYuantuDetailPage(relativePath, html));
  }

  if (relativePath === "ru/about.html") {
    htmlErrors.push(...validateRussianAbout(html));
  }

  if (relativePath === "ru/news.html") {
    htmlErrors.push(...validateRussianNews(html));
  }

  if (relativePath === "ru/careers.html") {
    htmlErrors.push(...validateRussianCareers(html));
  }

  if (relativePath === "ru/跨境网络服务.html") {
    htmlErrors.push(...validateRussianNetworkServices(html));
  }

  if (relativePath === "products.html") {
    htmlErrors.push(...validateProductsPage(html));
  }

  if (relativePath === "Agriculture.html") {
    htmlErrors.push(...validateAgricultureDetailPage(relativePath, html));
  }

  if (relativePath === "mihuan_yuantu.html") {
    htmlErrors.push(...validateYuantuDetailPage(relativePath, html));
  }

  if (relativePath === "跨境网络服务.html") {
    htmlErrors.push(...validateNetworkServicesPage(html));
  }

  if (relativePath === "about.html") {
    htmlErrors.push(...validateAboutPage(html));
  }

  if (relativePath === "news.html") {
    htmlErrors.push(...validateNewsPage(html));
  }

  if (relativePath === "careers.html") {
    htmlErrors.push(...validateCareersPage(html));
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

async function validateIssue50HeroAssetReferences() {
  const stylesPath = resolve(distDir, "assets", "styles.css");
  const css = await readFile(stylesPath, "utf8");
  const requiredHeroAssets = new Set([
    "stacked-peaks-haikei_4.svg",
    "stacked-waves-haikei.svg",
    "stacked-waves-haikei_2.svg",
    "stacked-waves-haikei_3.svg",
    "waves-haikei.svg",
    "waves-haikei-2.svg",
    "IP.svg",
    "nongye.svg",
    "yuantu.svg"
  ]);
  const cssUrls = [...css.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((match) => match[1]);
  const heroAssetRefs = cssUrls.filter((url) => url.startsWith("./img/"));

  for (const url of cssUrls) {
    if (/^https?:\/\//i.test(url)) {
      throw new Error(`CSS must not reference external assets: ${url}`);
    }
  }

  for (const assetName of requiredHeroAssets) {
    if (!heroAssetRefs.includes(`./img/${assetName}`)) {
      throw new Error(`Missing Issue #50 hero asset CSS reference: ./img/${assetName}`);
    }
  }

  for (const ref of heroAssetRefs) {
    const assetPath = resolve(distDir, "assets", ref.replace(/^\.\//, ""));
    const assetStats = await stat(assetPath).catch(() => null);

    if (!assetStats?.isFile() || assetStats.size <= 0) {
      throw new Error(`Missing or empty CSS background asset: ${ref}`);
    }
  }

  console.log(`Checked ${heroAssetRefs.length} local hero background asset reference(s).`);
}

function getCanonicalHref(relativePath, html) {
  const headMatch = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);

  if (!headMatch) {
    throw new Error(`Missing <head> block while reading canonical for ${relativePath}.`);
  }

  const canonicalLinks = [...headMatch[0].matchAll(/<link\b[^>]*>/gi)]
    .map((match) => parseTagAttributes(match[0]))
    .filter((attributes) => attributes.get("rel")?.toLowerCase() === "canonical");

  if (canonicalLinks.length !== 1) {
    throw new Error(`Expected exactly 1 canonical while reading ${relativePath}, found ${canonicalLinks.length}.`);
  }

  const href = canonicalLinks[0].get("href");

  if (!href) {
    throw new Error(`Canonical link missing href in ${relativePath}.`);
  }

  return href;
}

async function validateSitemapAndRobots() {
  const sitemapPath = resolve(distDir, "sitemap.xml");
  const robotsPath = resolve(distDir, "robots.txt");
  const sitemapStats = await stat(sitemapPath).catch(() => null);
  const robotsStats = await stat(robotsPath).catch(() => null);

  if (!sitemapStats?.isFile() || sitemapStats.size <= 0) {
    throw new Error(`Missing or empty sitemap output: ${sitemapPath}`);
  }

  if (!robotsStats?.isFile() || robotsStats.size <= 0) {
    throw new Error(`Missing or empty robots output: ${robotsPath}`);
  }

  const sitemap = await readFile(sitemapPath, "utf8");
  const robots = await readFile(robotsPath, "utf8");
  const expectedCanonicals = [];

  for (const requiredHtmlPath of requiredHtmlPaths) {
    const html = await readFile(resolve(distDir, requiredHtmlPath), "utf8");
    expectedCanonicals.push(getCanonicalHref(requiredHtmlPath, html));
  }

  if (!/^<\?xml version="1\.0" encoding="UTF-8"\?>\n<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">[\s\S]*<\/urlset>\s*$/u.test(sitemap)) {
    throw new Error("sitemap.xml must be a static XML sitemap using the sitemap.org urlset namespace.");
  }

  if (/<lastmod>|<changefreq>|<priority>/i.test(sitemap)) {
    throw new Error("sitemap.xml must not include dynamic lastmod, changefreq, or priority fields at this stage.");
  }

  const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const uniqueLocs = new Set(sitemapLocs);

  if (sitemapLocs.length !== requiredHtmlPaths.length) {
    throw new Error(`sitemap.xml must contain ${requiredHtmlPaths.length} loc entries, found ${sitemapLocs.length}.`);
  }

  if (uniqueLocs.size !== sitemapLocs.length) {
    throw new Error("sitemap.xml must not contain duplicate loc entries.");
  }

  for (const loc of sitemapLocs) {
    if (!loc.startsWith(`${productionOrigin}/`)) {
      throw new Error(`sitemap.xml loc must stay under ${productionOrigin}: ${loc}`);
    }

    if (loc.includes("://") && !loc.startsWith(`${productionOrigin}/`)) {
      throw new Error(`sitemap.xml loc contains an unexpected external URL: ${loc}`);
    }
  }

  for (const canonical of expectedCanonicals) {
    if (!uniqueLocs.has(canonical)) {
      throw new Error(`sitemap.xml missing canonical loc: ${canonical}`);
    }
  }

  if (!/^User-agent:\s*\*\s*$/mi.test(robots)) {
    throw new Error("robots.txt must contain User-agent: *.");
  }

  if (!/^Allow:\s*\/\s*$/mi.test(robots)) {
    throw new Error("robots.txt must contain Allow: /.");
  }

  if (!/^Sitemap:\s*https:\/\/www\.honeybadgersoft\.com\/sitemap\.xml\s*$/mi.test(robots)) {
    throw new Error("robots.txt must point to https://www.honeybadgersoft.com/sitemap.xml.");
  }

  const disallowLines = robots.split(/\r?\n/).filter((line) => /^Disallow:/i.test(line.trim()) && line.trim() !== "Disallow:");
  if (disallowLines.length > 0) {
    throw new Error(`robots.txt must not disallow core paths: ${disallowLines.join(", ")}`);
  }

  if (/zennolabchina|48151650|marketing@honeybadgersoft\.com|dingtalk|钉钉/i.test(robots)) {
    throw new Error("robots.txt must not contain contact-channel or unapproved support content.");
  }

  console.log(`Checked sitemap.xml with ${sitemapLocs.length} canonical loc entry(s).`);
  console.log("Checked robots.txt allow-all and sitemap directive.");
}

async function validateFaviconOutput() {
  const faviconPath = resolve(distDir, "assets", "img", "favicon.png");
  const faviconStats = await stat(faviconPath).catch(() => null);
  const oldFaviconPath = resolve(distDir, "favicon.svg");
  const oldFaviconStats = await stat(oldFaviconPath).catch(() => null);

  if (!faviconStats?.isFile() || faviconStats.size <= 0) {
    throw new Error(`Missing or empty favicon output: ${faviconPath}`);
  }

  if (oldFaviconStats?.isFile()) {
    throw new Error(`Old SVG favicon must not be present in build output: ${oldFaviconPath}`);
  }

  for (const requiredHtmlPath of requiredHtmlPaths) {
    const html = await readFile(resolve(distDir, requiredHtmlPath), "utf8");
    const headMatch = html.match(/<head\b[^>]*>[\s\S]*?<\/head>/i);

    if (!headMatch) {
      throw new Error(`Missing <head> block while validating favicon for ${requiredHtmlPath}.`);
    }

    const head = headMatch[0];
    const htmlWithoutHead = html.replace(head, "");
    const iconLinks = [...head.matchAll(/<link\b[^>]*>/gi)]
      .map((match) => parseTagAttributes(match[0]))
      .filter((attributes) => attributes.get("rel")?.toLowerCase().split(/\s+/).includes("icon"));
    const expectedHref = requiredHtmlPath.startsWith("en/") || requiredHtmlPath.startsWith("ru/")
      ? "../assets/img/favicon.png"
      : "./assets/img/favicon.png";

    if (/<link\b[^>]*\brel=["'][^"']*\bicon\b/i.test(htmlWithoutHead)) {
      throw new Error(`Favicon link must stay inside <head> for ${requiredHtmlPath}.`);
    }

    if (iconLinks.length !== 1) {
      throw new Error(`Expected exactly 1 favicon icon link in ${requiredHtmlPath}, found ${iconLinks.length}.`);
    }

    const iconLink = iconLinks[0];

    if (iconLink.get("href") !== expectedHref) {
      throw new Error(`Favicon href mismatch in ${requiredHtmlPath}: expected ${expectedHref}, found ${iconLink.get("href") || "missing"}.`);
    }

    if (iconLink.get("type") !== "image/png") {
      throw new Error(`Favicon type mismatch in ${requiredHtmlPath}: expected image/png, found ${iconLink.get("type") || "missing"}.`);
    }
  }

  console.log(`Checked favicon.png output and ${requiredHtmlPaths.length} favicon link(s).`);
}

function findCssBlocks(css, selector) {
  const blocks = [];
  const blockPattern = /([^{}]+)\{([^{}]*)\}/g;
  let match;

  while ((match = blockPattern.exec(css)) !== null) {
    const selectorList = match[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);

    if (selectorList.includes(selector)) {
      blocks.push(match[2]);
    }
  }

  return blocks;
}

async function validateIssue60HeroOverlayRemoval() {
  const stylesPath = resolve(distDir, "assets", "styles.css");
  const css = await readFile(stylesPath, "utf8");
  const requiredBackgrounds = [
    [".home-hero", "stacked-waves-haikei.svg", "var(--hero)"],
    ["#home-relation", "stacked-peaks-haikei_4.svg", "#f6f9fd"],
    ["#en-brand-relationship", "stacked-peaks-haikei_4.svg", "#f6f9fd"],
    ["#ru-brand-relationship", "stacked-peaks-haikei_4.svg", "#f6f9fd"],
    [".products-hero", "stacked-waves-haikei_2.svg", "var(--hero)"],
    [".about-hero", "waves-haikei-2.svg", "var(--hero)"],
    [".news-hero", "stacked-waves-haikei_3.svg", "var(--hero)"],
    [".careers-hero", "waves-haikei.svg", "var(--hero)"],
    [".network-services-hero", "IP.svg", "var(--hero)"],
    [".agriculture-detail-hero", "nongye.svg", "var(--hero)"],
    [".network-services-page #network-services-modules", "stacked-waves-haikei.svg", "var(--hero)"],
    [".network-service-module > header", "stacked-waves-haikei.svg", "var(--hero)"]
  ];

  for (const [selector, assetName, expectedBase] of requiredBackgrounds) {
    const matchingBlocks = findCssBlocks(css, selector).filter((block) => block.includes(`./img/${assetName}`));

    if (matchingBlocks.length === 0) {
      throw new Error(`Missing Issue #60 background asset for ${selector}: ./img/${assetName}`);
    }

    for (const block of matchingBlocks) {
      if (/linear-gradient/i.test(block)) {
        throw new Error(`Issue #60 background for ${selector} must not use linear-gradient over ./img/${assetName}.`);
      }

      if (!block.includes(expectedBase)) {
        throw new Error(`Issue #60 background for ${selector} must use base ${expectedBase}.`);
      }
    }
  }

  for (const selector of ["#home-relation", "#en-brand-relationship", "#ru-brand-relationship"]) {
    const relationBlocks = findCssBlocks(css, selector).join("\n");

    if (!relationBlocks.includes("color: white")) {
      throw new Error(`Issue #60 relation section must use white text color: ${selector}`);
    }
  }

  console.log(`Checked ${requiredBackgrounds.length} Issue #60 SVG background rule(s) without blue overlay gradients.`);
}

async function validateBrandLogoOutput() {
  const logoPath = resolve(distDir, "assets", "img", "honeybadger-logo-mark.png");
  const logoStats = await stat(logoPath).catch(() => null);

  if (!logoStats?.isFile() || logoStats.size <= 0) {
    throw new Error(`Missing or empty brand logo output: ${logoPath}`);
  }

  for (const requiredHtmlPath of requiredHtmlPaths) {
    const html = await readFile(resolve(distDir, requiredHtmlPath), "utf8");
    const brandMatch = html.match(/<a\b[^>]*class=["'][^"']*\bbrand\b[^"']*["'][^>]*>[\s\S]*?<\/a>/i);

    if (!brandMatch) {
      throw new Error(`Missing header brand anchor while validating logo for ${requiredHtmlPath}.`);
    }

    if (/\bbrand-mark\b/.test(brandMatch[0])) {
      throw new Error(`Old brand-mark must not remain in header brand area for ${requiredHtmlPath}.`);
    }

    const logoTags = [...brandMatch[0].matchAll(/<img\b[^>]*>/gi)]
      .map((match) => parseTagAttributes(match[0]))
      .filter((attributes) => attributes.get("class")?.split(/\s+/).includes("brand-logo"));
    const expectedSrc = requiredHtmlPath.startsWith("en/") || requiredHtmlPath.startsWith("ru/")
      ? "../assets/img/honeybadger-logo-mark.png"
      : "./assets/img/honeybadger-logo-mark.png";
    const expectedAlt = requiredHtmlPath.startsWith("en/")
      ? "Honey Badger logo"
      : requiredHtmlPath.startsWith("ru/")
        ? "Логотип Honey Badger"
        : "蜜獾软件标志";

    if (logoTags.length !== 1) {
      throw new Error(`Expected exactly 1 header brand-logo image in ${requiredHtmlPath}, found ${logoTags.length}.`);
    }

    const logo = logoTags[0];

    if (logo.get("src") !== expectedSrc) {
      throw new Error(`Header logo src mismatch in ${requiredHtmlPath}: expected ${expectedSrc}, found ${logo.get("src") || "missing"}.`);
    }

    if (logo.get("alt") !== expectedAlt) {
      throw new Error(`Header logo alt mismatch in ${requiredHtmlPath}: expected ${expectedAlt}, found ${logo.get("alt") || "missing"}.`);
    }

    if (logo.get("width") !== "52" || logo.get("height") !== "36") {
      throw new Error(`Header logo dimensions mismatch in ${requiredHtmlPath}; expected width=52 height=36.`);
    }
  }

  console.log(`Checked brand logo output and ${requiredHtmlPaths.length} header logo reference(s).`);
}

async function validateIssue62HeroVisualFrame() {
  const stylesPath = resolve(distDir, "assets", "styles.css");
  const css = await readFile(stylesPath, "utf8");
  const visualFrameBlocks = findCssBlocks(css, ".visual-frame");

  if (visualFrameBlocks.length !== 1) {
    throw new Error(`Expected one .visual-frame rule, found ${visualFrameBlocks.length}.`);
  }

  const visualFrameBlock = visualFrameBlocks[0];

  if (!visualFrameBlock.includes("fill: #fff")) {
    throw new Error("Issue #62 visual frame must use white fill.");
  }

  if (!visualFrameBlock.includes("stroke: #d8e5f3")) {
    throw new Error("Issue #62 visual frame must use the approved light border stroke.");
  }

  console.log("Checked Issue #62 home hero visual frame white fill and light border.");
}

await validateIssue50HeroAssetReferences();
await validateSitemapAndRobots();
await validateFaviconOutput();
await validateIssue60HeroOverlayRemoval();
await validateBrandLogoOutput();
await validateIssue62HeroVisualFrame();
