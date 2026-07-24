# Issue #46 Visual Report

## Scope

- Issue: #46 S4 design-system alignment and desktop visual calibration.
- Allowed implementation file changed: `site/src/assets/styles.css`.
- Viewport: Chrome/Playwright desktop `1440x900`.
- UI reference source: `UI/assets/styles.css` and the corresponding `UI/*.html` pages.
- Production target source: built static HTML from `site/dist`.

## Token Calibration

| Token | Before | After | Basis | Result |
|---|---|---|---|---|
| Visual palette | `--surface-soft: #f6f9fc`, `--surface-blue: #eef5ff`, darker blue-gray text and border values | UI reference palette: `#f7f8fa`, `#eef3ff`, `#1e1e1e`, `#333a45`, `#5a5a64`, `#e6e6e6`; primary `#005ab4`; green/purple/cyan accents aligned | `Agent.md` section 4 and `UI/assets/styles.css` | PASS |
| Font stack | `Inter, "Open Sans", "Noto Sans SC", "Microsoft YaHei", Arial, sans-serif` | unchanged; no `@import`, `@font-face`, or external font URL added | `Agent.md` section 4; no external font redline | PASS |
| 12-column container / width | `--container: 1200px`; `.container` and `.header-inner` use `width: min(100% - 96px, var(--container))` | unchanged; confirmed against UI reference | `Agent.md` section 4 and `UI/assets/styles.css` | PASS |
| 8px spacing rhythm | ad hoc `18px/20px` matrix gaps and `22px` card padding in key desktop groups | key desktop matrices moved to `--gutter: 24px` where they map to 3 x 8px; card padding calibrated to `24px/28px`; section remains tokenized | `UI/assets/styles.css` uses `--gutter: 24px`; Agent requires 8px rhythm | PASS |
| Header height | `--header-h: 76px` | unchanged; confirmed | `Agent.md` section 4 and `UI/assets/styles.css` | PASS |
| Desktop section spacing | `--section: 96px`; `.home-section` was `88px 0`; home/products hero were `94/84` and `86/84` | `.home-section` now uses `var(--section)`; home/products hero use `112px 0 92px`; mobile override remains `60px 0` | UI hero and section rhythm; Agent desktop section about 100px | PASS |
| Stable cards/buttons | many primary cards used `8px` radius, weak `0 10px 26px` shadows, and tighter gaps | primary cards/panels use `--radius: 16px`, icon chips use `10/12px`, hover uses `--shadow-hover`, core grids use stable `--gutter` | `UI/assets/styles.css` card/radius/shadow tokens; Agent requires stable card/button dimensions | PASS |

## Page Comparisons

| Page | Comparison artifact | Result | Notes |
|---|---|---|---|
| zh homepage | `zh-index-comparison.png` | PASS | Hero scale, h1 hierarchy, product card radius/gap/shadow, and section rhythm calibrated. Exact UI wave background is not present because adding assets is out of scope. |
| zh products | `zh-products-comparison.png` | PASS | Product hero spacing, dashboard panel radius, product cards, capability grid, and CTA buttons aligned to tokens. |
| zh network services | `zh-network-comparison.png` | PASS | Hero panel, service modules, scenario cards, and feature cards use shared radius/shadow/gutter tokens. |
| zh about | `zh-about-comparison.png` | PASS | About hero panel, brand cards, timeline cards, and entity panels follow shared tokens. |
| zh news | `zh-news-comparison.png` | PASS | News category cards and list cards use shared card treatment; no content or structure changes. |
| zh careers | `zh-careers-comparison.png` | PASS | Recruitment cards, job cards, and process cards use stable radius/shadow/gutter tokens. |
| en homepage | `en-index-comparison.png` | PASS | Shared desktop styles hold under English text length; no overflow. |
| ru homepage | `ru-index-comparison.png` | PASS | Shared desktop styles hold under Russian text length; no overflow. |

## Interaction And Regression Checks

| Check | Result | Evidence |
|---|---|---|
| Console errors | PASS | `playwright-results.json` records 0 site console errors on 8 sampled pages. |
| Horizontal overflow | PASS | `playwright-results.json` records `hasHorizontalOverflow: false` on 8 sampled pages. |
| Broken images | PASS | `playwright-results.json` records 0 broken `img` elements on 8 sampled pages. |
| Floating support overlap | PASS | `playwright-results.json` records `supportOverlapsCta: false` on 8 sampled pages. |
| LANG-008 index | PASS | zh/en/ru index pages have no overflow and no console errors; hero height changes are text-length-driven only. |
| LANG-008 products | PASS | zh/en/ru products pages have no overflow and no console errors; hero height changes are text-length-driven only. |

## Downstream Authorization Candidates

- Exact hero background parity with `UI/assets/*.svg` would require authorizing production asset additions or a broader asset migration; this issue only allowed `styles.css`, so no new assets were added.
- Exact one-to-one reference structure for UI-only cards is out of scope because all HTML and `app.js` changes are forbidden in Issue #46.

## Artifacts

- `playwright-results.json`
- `zh-index-comparison.png`
- `zh-products-comparison.png`
- `zh-network-comparison.png`
- `zh-about-comparison.png`
- `zh-news-comparison.png`
- `zh-careers-comparison.png`
- `en-index-comparison.png`
- `ru-index-comparison.png`
