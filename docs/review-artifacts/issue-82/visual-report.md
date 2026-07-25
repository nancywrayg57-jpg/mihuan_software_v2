# Issue #82 Visual Validation Report

Generated: 2026-07-25T16:20Z follow-up run

## Scope

- Target: product detail hero sections on 21 second-level product detail pages.
- Baseline: `site/src/products.html` `.products-hero`.
- Visual intent: align detail hero heights to the first-level products page at desktop, tablet, and mobile breakpoints, and make the content section immediately below each detail hero render on a white background by removing `home-section-soft`.
- No neutral border or shadow adjustment was needed after the soft background removal; existing cards remain readable on the white page background.

## Browser Measurements

| Viewport | Products baseline | Agriculture | YuanTu | AI-FDE | TikTok | Static IP | IDC IP | Dynamic IP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop 1440x900 | 678px | 678px | 678px | 678px | 678px | 678px | 678px | 678px |
| Tablet 820x1180 | 1164px | 1164px | 1164px | 1164px | 1164px | 1164px | 1164px | 1164px |
| Mobile 390x844 | 1664px | 1664px | 1664px | 1664px | 1664px | 1664px | 1664px | 1664px |

All measured detail hero deltas versus the products baseline are `0px`.

## Soft Section Removal

- `home-section-soft` was removed from the single target section on all 21 detail pages.
- Browser validation confirmed `home-section-soft` count is `0` on the seven zh detail page templates.
- Static check coverage in `site/scripts/check.mjs` asserts the 21 authorized detail pages do not retain `home-section-soft`.

## Artifacts

- `browser-validation.json`: Playwright measurement payload for all three viewports.
- `hero-height-comparison-desktop.png`: desktop comparison table screenshot.
- `products-zh-desktop.png`: zh products baseline screenshot.
- `agriculture-zh-desktop.png`
- `yuantu-zh-desktop.png`
- `aifde-zh-desktop.png`
- `tiktok-zh-desktop.png`
- `static-ip-zh-desktop.png`
- `idc-ip-zh-desktop.png`
- `dynamic-ip-zh-desktop.png`
- `agriculture-zh-mobile.png`
- `dynamic-ip-zh-mobile.png`

## Result

- Desktop: PASS
- Tablet: PASS
- Mobile: PASS
- Detail section white background: PASS
