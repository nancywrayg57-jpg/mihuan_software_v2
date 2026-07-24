# Issue #44 SEO Summary

Generated with Playwright 1.61.1 against built static HTML in `site/dist`.

## URL Rules

- Production origin: `https://www.honeybadgersoft.com/`.
- Chinese filename encoding: `跨境网络服务.html` -> `%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html`.
- No keywords/og/twitter meta tags were added because Issue #44 says the SSOT does not provide them.
- `x-default` points to the zh-CN URL for each page.

## Canonical URLs

| Locale | Page | Source file | Canonical URL |
|---|---|---|---|
| zh-CN | home | `site/src/index.html` | https://www.honeybadgersoft.com/index.html |
| en-US | home | `site/src/en/index.html` | https://www.honeybadgersoft.com/en/index.html |
| ru-RU | home | `site/src/ru/index.html` | https://www.honeybadgersoft.com/ru/index.html |
| zh-CN | products | `site/src/products.html` | https://www.honeybadgersoft.com/products.html |
| en-US | products | `site/src/en/products.html` | https://www.honeybadgersoft.com/en/products.html |
| ru-RU | products | `site/src/ru/products.html` | https://www.honeybadgersoft.com/ru/products.html |
| zh-CN | network-services | `site/src/跨境网络服务.html` | https://www.honeybadgersoft.com/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html |
| en-US | network-services | `site/src/en/跨境网络服务.html` | https://www.honeybadgersoft.com/en/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html |
| ru-RU | network-services | `site/src/ru/跨境网络服务.html` | https://www.honeybadgersoft.com/ru/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html |
| zh-CN | about | `site/src/about.html` | https://www.honeybadgersoft.com/about.html |
| en-US | about | `site/src/en/about.html` | https://www.honeybadgersoft.com/en/about.html |
| ru-RU | about | `site/src/ru/about.html` | https://www.honeybadgersoft.com/ru/about.html |
| zh-CN | news | `site/src/news.html` | https://www.honeybadgersoft.com/news.html |
| en-US | news | `site/src/en/news.html` | https://www.honeybadgersoft.com/en/news.html |
| ru-RU | news | `site/src/ru/news.html` | https://www.honeybadgersoft.com/ru/news.html |
| zh-CN | careers | `site/src/careers.html` | https://www.honeybadgersoft.com/careers.html |
| en-US | careers | `site/src/en/careers.html` | https://www.honeybadgersoft.com/en/careers.html |
| ru-RU | careers | `site/src/ru/careers.html` | https://www.honeybadgersoft.com/ru/careers.html |

## Alternate Groups

| Page | zh-CN | en-US | ru-RU | x-default |
|---|---|---|---|---|
| home | https://www.honeybadgersoft.com/index.html | https://www.honeybadgersoft.com/en/index.html | https://www.honeybadgersoft.com/ru/index.html | https://www.honeybadgersoft.com/index.html |
| products | https://www.honeybadgersoft.com/products.html | https://www.honeybadgersoft.com/en/products.html | https://www.honeybadgersoft.com/ru/products.html | https://www.honeybadgersoft.com/products.html |
| network-services | https://www.honeybadgersoft.com/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html | https://www.honeybadgersoft.com/en/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html | https://www.honeybadgersoft.com/ru/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html | https://www.honeybadgersoft.com/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html |
| about | https://www.honeybadgersoft.com/about.html | https://www.honeybadgersoft.com/en/about.html | https://www.honeybadgersoft.com/ru/about.html | https://www.honeybadgersoft.com/about.html |
| news | https://www.honeybadgersoft.com/news.html | https://www.honeybadgersoft.com/en/news.html | https://www.honeybadgersoft.com/ru/news.html | https://www.honeybadgersoft.com/news.html |
| careers | https://www.honeybadgersoft.com/careers.html | https://www.honeybadgersoft.com/en/careers.html | https://www.honeybadgersoft.com/ru/careers.html | https://www.honeybadgersoft.com/careers.html |

## E2E Feedback

| Item | Result | Evidence |
|---|---|---|
| LANG-007 | PASS | 18 built pages have lang/title/description plus exactly 1 canonical and 4 hreflang links; `node scripts/check.mjs` passed. |
| LANG-002 | PASS | zh/en/ru coverage exists for 5 primary pages plus the merged network-services page. |
| Visual regression sample | PASS | Playwright screenshots: `zh-index-desktop.png`, `en-products-desktop.png`, `ru-network-services-desktop.png`; source body zero-diff passed for all 18 HTML files. |
| Console and overflow sample | PASS | `playwright-results.json` records no console/page errors and no horizontal overflow for 3 sampled pages. |
| Non-SEO E2E items | N/A | Issue #44 is a head-only SEO change; no body, navigation, copy, style, form, or API behavior changed. |
