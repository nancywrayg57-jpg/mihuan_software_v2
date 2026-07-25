# Issue #78 Visual Report

## Scope

- Added static Datacenter IP detail pages:
  - `site/src/idc-ip.html`
  - `site/src/en/idc-ip.html`
  - `site/src/ru/idc-ip.html`
- Copied `UI/assets/idc.svg` to `site/src/assets/img/idc.svg`.
- Connected only the Datacenter IP block on the three merged network service pages to `./idc-ip.html`.
- Kept `sitemap.xml` at the core 30-loc roadmap scope; IP child pages are required build outputs but not sitemap entries.

## Artifacts

| View | Artifact |
|---|---|
| zh detail, desktop 1440x900 | `idc-ip-zh-desktop.png` |
| en detail, desktop 1440x900 | `idc-ip-en-desktop.png` |
| ru detail, desktop 1440x900 | `idc-ip-ru-desktop.png` |
| zh merged page Datacenter IP block | `network-idc-ip-link-zh-desktop.png` |
| zh detail, mobile 390x844 | `idc-ip-zh-mobile.png` |
| Browser validation data | `browser-validation.json` |

## E2E Checklist

| Item | Result | Evidence |
|---|---|---|
| Three static detail pages return HTTP 200 | PASS | `browser-validation.json` checked zh/en/ru detail pages |
| Source content counts match Issue #78 | PASS | Each detail page has 3 specs, 5 features, 4 scenarios, 4 workflow steps, 3 support cards |
| Datacenter IP merged-page link is connected | PASS | zh merged block link href is `./idc-ip.html`; click-through reached `idc-ip.html` with h1 `机房 IP` |
| Static Residential IP link remains connected | PASS | zh merged block still records `./static-ip.html` in `browser-validation.json` |
| Dynamic IP placeholder remains pending | PASS | zh merged block still records `#dynamic-ip-detail-pending` in `browser-validation.json` |
| Language switcher keeps zh/en/ru idc-ip context | PASS | `browser-validation.json` recorded reciprocal idc-ip links |
| Four-level breadcrumb is present | PASS | zh/en/ru breadcrumbs include Home/Products/Network Services/Datacenter IP equivalents |
| Broken images | PASS | 0 broken images in Playwright scan |
| Horizontal overflow | PASS | 0 pages with horizontal overflow across zh/en/ru desktop/tablet/mobile detail checks |
| Desktop/mobile visual review | PASS | zh/en/ru desktop, zh mobile and zh merged block screenshots reviewed; text remains readable and no overlap observed |
| Sitemap remains core 30 locs | PASS | `npm run check` reported 30 canonical loc entries |

## Manual Notes

- Initial browser pass found only the ru mobile breadcrumb overflowing because the four-level breadcrumb was single-line. The final patch lets `idc-ip-detail-page` breadcrumbs wrap, and the rerun recorded 0 horizontal overflow.
- The hero keeps `var(--hero) url("./img/idc.svg") center / cover no-repeat;` and uses the existing hero text system. No text color changes were made.
