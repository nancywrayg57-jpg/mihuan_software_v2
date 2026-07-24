# Issue #48 Visual Report

## Scope

- Implementation change: `site/src/assets/styles.css` only.
- `site/src/assets/app.js`: 0 changes.
- `site/scripts/check.mjs`: 0 changes.
- HTML: 0 changes across all 18 pages.
- External resources: none added.

## Responsive Result

| Area | Result | Evidence |
|---|---|---|
| Mobile 390x844 | PASS. `--section` is 60px, all tested pages have no horizontal overflow, CTA height is at least 48px, buttons render full width. | `playwright-results.json`, `mobile-zh-*-390x844.png`, `mobile-en-index-390x844.png`, `mobile-ru-index-390x844.png` |
| Mobile navigation | PASS. Navigation opens below the 76px header, closes with Escape, and each link is at least 46px high. | `mobile-nav-zh-*-390x844.png`, `playwright-results.json` |
| Mobile support overlay | PASS. Support panel opens under the header instead of over the lower CTA area; the bottom trigger is hidden while the panel is open and the panel close control remains available. | `mobile-support-zh-index-390x844.png`, `mobile-support-ru-index-390x844.png`, `playwright-results.json` |
| Tablet 834x1112 | PASS. `--section` is 80px, header language switch stays in bounds, mobile nav fallback fits, and dense modules use tablet-safe 2-column reductions where appropriate. | `tablet-zh-index-834x1112.png`, `tablet-zh-products-834x1112.png`, `tablet-zh-network-834x1112.png` |
| Desktop 1440x900 regression | PASS. Current `desktop-zh-index-1440x900.png` is pixel-identical to Issue #46 `zh-index-site.png`: 0 differing pixels. | `desktop-zh-index-1440x900.png`, `playwright-results.json` |

## UI Reference Comparison

- The local `UI/` reference already uses the same core responsive rhythm: 64px tablet gutters, 32px mobile gutters, 1100px and 760px breakpoints, and full-width mobile CTA buttons.
- Production now matches the reference rhythm for section spacing: tablet `80px`, mobile `60px`, while preserving the Issue #46 desktop calibration.
- Production keeps the current governance-approved HTML structure. The UI reference has richer product-dropdown/mobile subnav behavior and more decorative hero treatments, but those require HTML/assets authorization and were not copied in this CSS-only pass.
- Three-language pressure was validated on all 18 pages at mobile, tablet, and desktop sizes; en/ru long labels do not cause horizontal overflow or broken navigation bounds.

## E2E Feedback Table

| Item | Status | Notes |
|---|---|---|
| HOME-010 responsive full page | PASS | Mobile, tablet, and desktop assertions pass for all 18 static pages; zh full-page screenshots cover all 6 templates. |
| LANG-008 en/ru pressure | PASS | en/ru all 6 pages checked in `playwright-results.json`; mobile en/ru index screenshots included; no overflow or console errors. |
| Mobile navigation | PASS | Open/close assertions pass; nav open screenshots included for all 6 zh pages. |
| Support overlay | PASS | Open/close assertions pass; overlay does not intersect visible CTA or footer text in automated checks. |
| App.js adaptation | N/A | Existing behavior was sufficient; no script change was made. |
| Migration | N/A | Static CSS-only responsive adjustment; no data or deployment migration. |

## Screenshot Inventory

- Mobile full page: `mobile-zh-index-390x844.png`, `mobile-zh-products-390x844.png`, `mobile-zh-network-390x844.png`, `mobile-zh-about-390x844.png`, `mobile-zh-news-390x844.png`, `mobile-zh-careers-390x844.png`, `mobile-en-index-390x844.png`, `mobile-ru-index-390x844.png`.
- Mobile nav open: `mobile-nav-zh-index-390x844.png`, `mobile-nav-zh-products-390x844.png`, `mobile-nav-zh-network-390x844.png`, `mobile-nav-zh-about-390x844.png`, `mobile-nav-zh-news-390x844.png`, `mobile-nav-zh-careers-390x844.png`.
- Mobile support open: `mobile-support-zh-index-390x844.png`, `mobile-support-ru-index-390x844.png`.
- Tablet: `tablet-zh-index-834x1112.png`, `tablet-zh-products-834x1112.png`, `tablet-zh-network-834x1112.png`.
- Desktop regression: `desktop-zh-index-1440x900.png`.
- UI reference samples: `ui-reference-mobile-index-390x844.png`, `ui-reference-tablet-index-834x1112.png`.

## Downstream Authorization Candidates

- If exact UI reference mobile product-dropdown parity is required, authorize HTML/app.js work for structured product subnavigation.
- If the reference hero wave/background treatments must be restored, authorize asset migration and HTML/CSS structure work in a separate issue.
- If language switching must preserve the current subpage across every locale path, authorize HTML route-link updates across all 18 pages.
