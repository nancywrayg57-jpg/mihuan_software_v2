# Issue #76 Visual Report

## Scope

- Added static detail pages for Static Residential IP:
  - `site/src/static-ip.html`
  - `site/src/en/static-ip.html`
  - `site/src/ru/static-ip.html`
- Connected only the Static Residential IP block on the three merged network service pages to `./static-ip.html`.
- Kept `sitemap.xml` at the core 30-loc roadmap scope; the three IP child pages are required build outputs but are not sitemap entries.

## Artifacts

| View | Artifact |
|---|---|
| zh detail, desktop 1440x900 | `static-ip-zh-desktop.png` |
| en detail, desktop 1440x900 | `static-ip-en-desktop.png` |
| ru detail, desktop 1440x900 | `static-ip-ru-desktop.png` |
| zh merged page Static Residential IP block | `network-static-ip-link-zh-desktop.png` |
| zh detail, mobile 390x844 | `static-ip-zh-mobile.png` |
| Browser validation data | `browser-validation.json` |

## E2E Checklist

| Item | Result | Evidence |
|---|---|---|
| Three static detail pages return HTTP 200 | PASS | `browser-validation.json` checked zh/en/ru detail pages |
| Source content counts match Issue #76 | PASS | Each detail page has 3 specs, 5 features, 4 scenarios, 4 workflow steps, 3 support cards |
| Static Residential IP merged-page link is connected | PASS | zh merged block link href is `./static-ip.html`; screenshot `network-static-ip-link-zh-desktop.png` |
| Language switcher keeps zh/en/ru static-ip context | PASS | `browser-validation.json` recorded reciprocal static-ip links |
| Four-level breadcrumb is present | PASS | zh/en/ru breadcrumbs include Home/Products/Network Services/Static Residential IP equivalents |
| Broken images | PASS | 0 broken images in Playwright scan |
| Horizontal overflow | PASS | 0 pages with horizontal overflow in Playwright scan |
| Desktop/mobile visual review | PASS | zh desktop, ru desktop, zh mobile screenshots reviewed; text remains readable and no overlap observed |
| Sitemap remains core 30 locs | PASS | `npm run check` reported 30 canonical loc entries |

## Manual Notes

- Initial visual pass found the specs table inside a blue soft section inherited white text on a white table. The specs section was moved to the normal page band so the table remains readable without changing any text color.
- The hero keeps `var(--hero) url("./img/sip.svg") center / cover no-repeat;` and uses the existing hero text system.
