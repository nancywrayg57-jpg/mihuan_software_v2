# Issue #70 Visual Report

Generated: 2026-07-25T11:09:26.268Z

## Scope

- Added static Social Commerce Private Domain Coaching / 社媒跨境私域陪跑 / Сопровождение приватной зоны в соцсетях detail pages for zh-CN, en-US and ru-RU.
- Verified the products page Social Commerce card link and zh click-through flow.
- Verified desktop 1440x900, tablet 820x1180 and mobile 390x844 browser states from `site/dist`.

## Artifacts

| Artifact | Purpose |
|---|---|
| `zh-tiktok-desktop-1440x900.png` | Chinese TikTok detail desktop full-page screenshot |
| `en-tiktok-desktop-1440x900.png` | English TikTok detail desktop full-page screenshot |
| `ru-tiktok-desktop-1440x900.png` | Russian TikTok detail desktop full-page screenshot |
| `zh-products-tiktok-card.png` | Chinese products page Social Commerce card close-up |
| `zh-products-after-click-detail.png` | Chinese products card click-through detail result |
| `zh-tiktok-mobile-390x844.png` | Chinese TikTok detail mobile full-page screenshot |
| `browser-validation.json` | Chrome CDP validation data |

## E2E Checklist

| Check | Result | Evidence |
|---|---|---|
| SSOT text shape | PASS | 3 detail pages contain hero title/subtitle only, 4 phase cards and coaching format section; `site/scripts/check.mjs` validates SSOT strings. |
| Product entry wiring | PASS | `zh-products-tiktok-card.png`; card href is `./TikTok.html`, text is `查看详情`. |
| Click-through | PASS | `zh-products-after-click-detail.png`; browser landed on `/TikTok.html`. |
| SEO four-link set | PASS | `browser-validation.json`; zh/en/ru pages have canonical plus zh-CN/en-US/ru-RU/x-default hreflang. |
| 1440x900 trilingual regression | PASS | zh/en/ru desktop screenshots; horizontal overflow=false, brokenImages=0. |
| 820x1180 trilingual regression | PASS | `browser-validation.json`; zh/en/ru tablet checks show no broken images or horizontal overflow. |
| 390x844 trilingual regression | PASS | `browser-validation.json`; zh/en/ru mobile checks show no broken images or horizontal overflow; zh screenshot included. |
| Hero asset rendering | PASS | Computed backgrounds include `/assets/img/tiktok.svg`; hero title/subtitle color values recorded without color override changes. |
| Support float overlap | PASS | `browser-validation.json`; visible support toggle does not overlap phase or format text in checked detail states. |

## Notes

- `npx` was unavailable locally, so screenshots were generated through local Chrome DevTools Protocol against `site/dist`.
- Local static server base URL: `http://127.0.0.1:58067`.
- SVG assets were served with `image/svg+xml` during browser validation.
