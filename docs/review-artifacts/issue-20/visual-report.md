# Issue #20 Visual Report

Generated with Chrome via Playwright against `site/dist/en/index.html` and `UI/en/index.html`.

## Artifacts

| Artifact | Viewport | Notes |
|---|---:|---|
| `docs/review-artifacts/issue-20/en-home-desktop.png` | 1440x900 | Full-page production English home |
| `docs/review-artifacts/issue-20/en-home-mobile.png` | 390x844 | Full-page production English home |
| `docs/review-artifacts/issue-20/en-home-mobile-nav.png` | 390x844 | Mobile navigation expanded |
| `docs/review-artifacts/issue-20/ui-reference-en-home-desktop.png` | 1440x900 | Full-page UI reference |
| `docs/review-artifacts/issue-20/ui-reference-en-home-mobile.png` | 390x844 | Full-page UI reference |
| `docs/review-artifacts/issue-20/playwright-results.json` | n/a | Assertions, metrics, console, and flow output |

## UI Comparison

| Area | Result |
|---|---|
| Layout | Production page follows the S2 Chinese production home structure: fixed header, notice banner, hero grid, five-entry product matrix, relationship band, preview cards, support entry, footer, and floating support. |
| UI reference | `UI/en/index.html` is the older English shell with seven product/service cards and legacy visual copy. Issue #20 requires five entries and same-page pending anchors, so the production page intentionally differs there. |
| Navigation | Home is a real current page. Products, News, Careers, and About remain same-page placeholder anchors because English subpages are not built in this issue. Language links resolve to zh, en, and ru home pages. |
| Hero | Hero uses exact SSOT title/subtitle/lead/CTA/metrics, with the same production visual matrix pattern used by the Chinese home. |
| Product matrix | Five required entries render, including merged Cross-border Network Services. All product actions point to `#en-product-detail-pending`. |
| Relationship and footer | Brand Relationship Notes and footer relationship statement match the Issue #20 English wording. Contact, support, ICP, and copyright values remain placeholders. |
| Responsive behavior | Desktop and mobile screenshots show no horizontal overflow. Product cards and long English descriptions wrap within their containers. |
| Support float | Floating support opens and exposes only To be configured placeholders; it does not block the hero CTAs in desktop or mobile screenshots. |

## E2E Checklist

| ID | Status | Evidence |
|---|---|---|
| LANG-001 | PASS | zh -> en -> zh round trip and en -> ru navigation passed in `playwright-results.json`. |
| LANG-002 | PARTIAL | English secondary pages are out of Issue #20 scope; EN nav entries intentionally remain same-page placeholders. |
| LANG-003 | PARTIAL | Current-page context is validated for EN home only; cross-page EN context will be covered when EN secondary pages exist. |
| LANG-004 | PASS | Home breadcrumb count is 0 on desktop and mobile. |
| LANG-005 | PASS | EN CTAs are `Explore Products & Services` and `Contact Service Team`. |
| LANG-006 | PASS | EN footer includes `Honey Badger is ZennoLab's operating entity in China.` and placeholder contact/compliance values. |
| LANG-007 | PARTIAL | EN `lang`, title, and description passed; full hreflang/canonical SEO is explicitly deferred by Issue #20. |
| LANG-008 | PASS | Desktop and mobile `scrollWidth` equals `clientWidth`; no broken images and no console errors. |
| HOME-009 | PASS | zh and en homes resolve to distinct localized content; EN renders 5 product entries and 5 pending same-page detail anchors. |

## Playwright Assertions

- `LANG_001_languageSwitcherRoundTrip`: true
- `LANG_004_noHomeBreadcrumb`: true
- `LANG_005_englishCtas`: true
- `LANG_006_englishFooter`: true
- `LANG_007_englishSeoPartial`: true
- `LANG_008_noOverflowDesktopMobile`: true
- `HOME_009_zhEnRealContent`: true
- `supportFloat`: true
- `noBrokenImages`: true
- `noConsoleErrors`: true
- `noOverScopedWording`: true
- `noFakeForms`: true
