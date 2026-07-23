# UI Static Split Consolidation

Date: 2026-07-12

> Status: Historical record only. This ADR preserves the 2026-07-12 static split implementation trace and is no longer the active design baseline. Current design and implementation references are `UI/`, `docs/生产物料清单.md`, and `docs/蜜獾官网页面文案.md`.

## Context

The source file `workspace\mihuan_software\honey_badger_standalone_site.html` was a single-file static prototype with inline CSS and inline JavaScript. The requested delivery was to split it into five page-level HTML files under `UI/`, with shared CSS and JavaScript referenced globally by each page.

## Decision

Create a standalone `UI/` directory with five HTML entry files:

- `UI/index.html` maps to the home page.
- `UI/products.html` maps to the products page.
- `UI/news.html` maps to the news / case-style content page.
- `UI/careers.html` maps to the careers / service-style content page.
- `UI/about.html` maps to the about page; the contact configuration block is embedded here because the first-phase website scope is five pages.

Shared resources:

- `UI/assets/styles.css` contains the extracted global styles.
- `UI/assets/app.js` contains the shared multilingual content, page rendering, navigation, language switcher, and customer-service floating entry.

## Constraints Preserved

- No external frontend framework.
- No image tags, external image links, or external CSS/JS.
- Five first-phase pages only: home, products, news, careers, about.
- Language switch state is persisted with `localStorage` and rendered per page.
- Customer service entries route to the about/contact block until real WeChat, QQ, DingTalk, and enterprise email values are confirmed.

## Validation

- `node --check UI/assets/app.js`
- Static scan for inline style blocks, image tags, external style/script references, `fetch`, and `XMLHttpRequest`.
- DOM-mock render smoke test for 5 pages.
- DOM-mock multilingual render smoke test for 5 pages x 3 languages.

## Open Risks

- Real browser visual QA was not executed in this session.
- Official support account values, ICP text, enterprise email, and final copyright text remain placeholders pending administrator confirmation.
