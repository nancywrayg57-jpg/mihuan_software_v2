import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..");
const distDir = resolve(projectRoot, "dist");
const indexPath = resolve(distDir, "index.html");
const requiredHtmlPaths = ["index.html", "products.html", "跨境网络服务.html", "about.html", "news.html", "careers.html", "en/index.html", "en/products.html", "en/跨境网络服务.html", "en/about.html", "en/news.html", "en/careers.html", "ru/index.html", "ru/products.html", "ru/跨境网络服务.html", "ru/about.html", "ru/news.html", "ru/careers.html"];
const homeHtmlPaths = new Set(["index.html", "en/index.html", "ru/index.html"]);
const zhHtmlPaths = new Set(["index.html", "products.html", "跨境网络服务.html", "about.html", "news.html", "careers.html"]);

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
  if (pendingProductLinks.length !== 4) {
    errors.push(`English products page regular product entries must keep same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (!html.includes('href="./跨境网络服务.html">View merged page</a>')) {
    errors.push("English products page NET card must link to the merged English network services page.");
  }

  const detailLinks = [...html.matchAll(/<a class=["']link-more["'] href=["']([^"']+)["'][^>]*>/g)].map((match) => match[1]);
  const externalDetailLinks = detailLinks.filter((href) => href !== "#en-product-detail-pending" && href !== "./跨境网络服务.html");
  if (externalDetailLinks.length > 0) {
    errors.push(`English products page detail links must stay on #en-product-detail-pending or ./跨境网络服务.html; found ${externalDetailLinks.join(", ")}.`);
  }

  if (/href=["'][^"']*(Agriculture|mihuan_yuantu|AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip)[^#"']*\.html/i.test(html)) {
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
  if (pendingProductLinks.length !== 4) {
    errors.push(`Russian products page regular entries must keep same-page pending detail anchors; found ${pendingProductLinks.length}.`);
  }

  if (!html.includes('href="./跨境网络服务.html">Открыть объединенную страницу</a>')) {
    errors.push("Russian products page NET card must link to the merged Russian network services page.");
  }

  const detailLinks = [...html.matchAll(/<a class=["']link-more["'] href=["']([^"']+)["'][^>]*>/g)].map((match) => match[1]);
  const externalDetailLinks = detailLinks.filter((href) => href !== "#ru-product-detail-pending" && href !== "./跨境网络服务.html");
  if (externalDetailLinks.length > 0) {
    errors.push(`Russian products page detail links must stay on #ru-product-detail-pending or ./跨境网络服务.html; found ${externalDetailLinks.join(", ")}.`);
  }

  if (/href=["'][^"']*(Agriculture|mihuan_yuantu|AI-FDE|TikTok|static-ip|idc-ip|dynamic-ip|network|продукт)[^#"']*\.html/i.test(html)) {
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
