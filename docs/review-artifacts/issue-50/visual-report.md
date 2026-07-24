# Issue #50 Visual Report

## Scope

- Implementation change: copied authorized hero SVG backgrounds from `UI/assets/` into `site/src/assets/img/`.
- CSS change: `site/src/assets/styles.css` only; hero sections now use local `./img/*.svg` backgrounds with dark gradient overlays.
- Check change: `site/scripts/check.mjs` appended Issue #50 assertions for local CSS hero asset references and no external CSS asset URLs.
- HTML: 0 changes across all 18 pages.
- `site/src/assets/app.js`: 0 changes.
- External resources: none added.

## Asset Inventory

| Asset | Source | Production path | Source bytes | Final bytes | Delta | Usage |
|---|---|---|---:|---:|---:|---|
| `hero-light-blue.svg` | `UI/assets/hero-light-blue.svg` | `site/src/assets/img/hero-light-blue.svg` | 5,493 | 5,493 | 0 | zh/en/ru home hero |
| `stacked-waves-haikei_2.svg` | `UI/assets/stacked-waves-haikei_2.svg` | `site/src/assets/img/stacked-waves-haikei_2.svg` | 7,538 | 7,538 | 0 | zh/en/ru products hero |
| `stacked-waves-haikei_3.svg` | `UI/assets/stacked-waves-haikei_3.svg` | `site/src/assets/img/stacked-waves-haikei_3.svg` | 8,551 | 8,551 | 0 | zh/en/ru news hero |
| `waves-haikei.svg` | `UI/assets/waves-haikei.svg` | `site/src/assets/img/waves-haikei.svg` | 10,360 | 10,360 | 0 | zh/en/ru careers hero |
| `waves-haikei-2.svg` | `UI/assets/waves-haikei-2.svg` | `site/src/assets/img/waves-haikei-2.svg` | 9,211 | 9,211 | 0 | zh/en/ru about hero |
| `IP.svg` | `UI/assets/IP.svg` | `site/src/assets/img/IP.svg` | 5,204 | 5,204 | 0 | zh/en/ru network services hero |

The copied SVGs are already compact, contain no comments, and no detected editor metadata markers. They were kept byte-identical to the authorized source assets to avoid introducing path or rendering drift.

## Visual Comparison

| View | Result | Evidence |
|---|---|---|
| zh home desktop 1440x900 | PASS. Production home hero now uses the authorized light-blue wave background, protected by a dark overlay for white text readability. | `compare-desktop-1440x900-zh-home.png` |
| zh products desktop 1440x900 | PASS. Production products hero uses the same `stacked-waves-haikei_2.svg` family as the UI reference. | `compare-desktop-1440x900-zh-products.png` |
| zh network desktop 1440x900 | PASS. Production network hero uses local `IP.svg`; text panel remains readable and aligned. | `compare-desktop-1440x900-zh-network.png` |
| zh about desktop 1440x900 | PASS. Production about hero uses local `waves-haikei-2.svg` and keeps existing approved page structure. | `compare-desktop-1440x900-zh-about.png` |
| en home desktop 1440x900 | PASS. English hero uses the same home background treatment and does not overflow with longer text. | `compare-desktop-1440x900-en-home.png` |
| ru home desktop 1440x900 | PASS. Russian hero uses the same home background treatment and does not overflow with longer text. | `compare-desktop-1440x900-ru-home.png` |
| zh news/careers desktop 1440x900 | PASS. Production screenshots confirm the new news/careers backgrounds are applied. | `prod-desktop-1440x900-zh-news.png`, `prod-desktop-1440x900-zh-careers.png` |
| zh/en/ru home mobile 390x844 | PASS. Backgrounds crop safely, CTA text remains visible, and the visible support toggle does not cover hero text or CTA after the mobile CTA reservation. | `prod-mobile-390x844-zh-home.png`, `prod-mobile-390x844-en-home.png`, `prod-mobile-390x844-ru-home.png` |

## E2E Feedback Table

| Item | Status | Evidence |
|---|---|---|
| Hero background assets load | PASS | `playwright-results.json`: 54/54 checks passed; each checked page loaded the expected `/assets/img/*.svg`. |
| Asset size and local path | PASS | `node scripts/check.mjs` validates all 6 CSS `./img/*.svg` references exist in `dist/assets/img/`. |
| No broken images | PASS | `playwright-results.json`: `brokenImageCount=0`; current site has no `<img>` elements. |
| No external CSS asset URL | PASS | `site/scripts/check.mjs` rejects `http(s)` URLs inside CSS `url(...)`; none found. |
| Text readability | PASS | White hero text preserved with dark gradient overlays; screenshots show no contrast regression. |
| Desktop/tablet/mobile regression | PASS | Playwright checked 18 pages at 1440x900, 768x1024, and 390x844: 54 total checks. |
| Console/page errors | PASS | `consoleErrorCount=0`, `pageErrorCount=0`. |
| Failed requests / 4xx / 5xx | PASS | `failedRequestCount=0`, `badResponseCount=0`. |
| Support overlay no obstruction | PASS | Visible `.support-toggle` does not intersect hero H1 or CTA groups in all 54 checks. |
| HOME-010 | PASS | `playwright-results.json`: `home010=true`. |
| LANG-008 | PASS | `playwright-results.json`: `lang008=true`; zh/en/ru home language switchers remain present. |
| WebP/AVIF | N/A | This issue introduces SVG backgrounds only; no bitmap assets were added. |
| Lazy loading | N/A | CSS backgrounds do not support `loading="lazy"`; no `<img>` elements exist in the current production site. |

## Alt And Aria Audit

| Area | Result |
|---|---|
| `<img>` elements | None present across `site/src/**/*.html`; no missing `alt` to fix in this authorized scope. |
| Decorative inline SVG | Existing home/careers visual SVGs remain `aria-hidden="true"` inside labelled figures. |
| Informative inline SVG | Existing news thumbnails use `role="img"` with locale-specific `aria-label` in zh/en/ru. |
| CSS background assets | Decorative hero backgrounds; `alt` does not apply to CSS backgrounds. |
| HTML changes needed | None for this issue. |

## Validation Commands

| Command | Result |
|---|---|
| `node -v` | `v24.14.0` |
| `npm -v` | Unavailable in this PowerShell session; npm-based command is marked unverified. |
| `cd site && node scripts/clean.mjs && node scripts/build.mjs && node scripts/check.mjs` | PASS |
| Bundled Playwright script using `NODE_PATH=.../node_modules` | PASS, wrote `playwright-results.json` and screenshots. |

## Screenshot Inventory

- Desktop production: `prod-desktop-1440x900-zh-home.png`, `prod-desktop-1440x900-zh-products.png`, `prod-desktop-1440x900-zh-network.png`, `prod-desktop-1440x900-zh-about.png`, `prod-desktop-1440x900-zh-news.png`, `prod-desktop-1440x900-zh-careers.png`, `prod-desktop-1440x900-en-home.png`, `prod-desktop-1440x900-ru-home.png`.
- Desktop UI references: `ui-desktop-1440x900-zh-home.png`, `ui-desktop-1440x900-zh-products.png`, `ui-desktop-1440x900-zh-network.png`, `ui-desktop-1440x900-zh-about.png`, `ui-desktop-1440x900-en-home.png`, `ui-desktop-1440x900-ru-home.png`.
- Desktop comparisons: `compare-desktop-1440x900-zh-home.png`, `compare-desktop-1440x900-zh-products.png`, `compare-desktop-1440x900-zh-network.png`, `compare-desktop-1440x900-zh-about.png`, `compare-desktop-1440x900-en-home.png`, `compare-desktop-1440x900-ru-home.png`.
- Mobile production: `prod-mobile-390x844-zh-home.png`, `prod-mobile-390x844-en-home.png`, `prod-mobile-390x844-ru-home.png`.
- Machine-readable results: `playwright-results.json`.

## Downstream Authorization Candidates

- If exact UI home hero parity is required, authorize HTML-level `<img>`/layer work for the reference `hero-bg-svg` model.
- If non-hero product card imagery should be converted from inline SVG placeholders to real assets, authorize HTML/app.js scope in a separate issue.
- If bitmap marketing imagery is introduced later, authorize a WebP/AVIF pass with explicit source licensing and `loading`/dimension rules.
