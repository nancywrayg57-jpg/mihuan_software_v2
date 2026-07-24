# Issue #22 Visual Report

Generated with Chrome via Playwright against `site/dist/ru/index.html` and `UI/ru/index.html`.

## Artifacts

| Artifact | Viewport | Notes |
|---|---:|---|
| `docs/review-artifacts/issue-22/ru-home-desktop.png` | 1440x900 | Full-page production Russian home |
| `docs/review-artifacts/issue-22/ru-home-mobile.png` | 390x844 | Full-page production Russian home |
| `docs/review-artifacts/issue-22/ru-home-mobile-nav.png` | 390x844 | Mobile navigation expanded |
| `docs/review-artifacts/issue-22/ui-reference-ru-home-desktop.png` | 1440x900 | Full-page UI reference |
| `docs/review-artifacts/issue-22/ui-reference-ru-home-mobile.png` | 390x844 | Full-page UI reference |
| `docs/review-artifacts/issue-22/playwright-results.json` | n/a | Assertions, metrics, console, and flow output |

## UI Comparison

| Area | Result |
|---|---|
| Layout | Production page follows the merged Issue #20 English home structure: fixed header, notice banner, hero grid, five-entry product matrix, relationship band, preview cards, support entry, footer, and floating support. |
| UI reference | `UI/ru/index.html` is the older Russian shell with seven product/service cards and legacy dynamic-shell content. Issue #22 requires five entries and same-page pending anchors, so the production page intentionally differs there. |
| Navigation | `Главная` is the real current page. `Продукты`, `Новости`, `Карьера`, and `О нас` remain same-page placeholder anchors because Russian subpages are not built in this issue. Language links resolve to zh, en, and ru home pages. |
| Hero | Hero uses exact SSOT title, subtitle, lead, CTA, and metrics. The visual matrix uses Russian labels and stays within the shared production layout. |
| Product matrix | Five required entries render, including merged `Кроссбордерные сетевые сервисы`. All product actions point to `#ru-product-detail-pending`. |
| Relationship and footer | `Пояснения к бренд-отношениям` and the footer relationship statement match the Issue #22 Russian wording. Contact, support, ICP, and copyright values remain `Будет настроено` placeholders. |
| Responsive behavior | Desktop and mobile screenshots show no horizontal overflow. Long Russian text wraps inside hero, cards, relationship panel, preview cards, and footer. |
| Support float | Floating support opens and exposes only `Будет настроено` placeholders; it does not obscure actionable CTA text in desktop or mobile screenshots. |

## E2E Checklist

| ID | Status | Evidence |
|---|---|---|
| LANG-001 | PASS | zh -> ru -> zh round trip and ru -> en navigation passed in `playwright-results.json`. |
| LANG-002 | PARTIAL | Russian secondary pages are out of Issue #22 scope; RU nav entries intentionally remain same-page placeholders. |
| LANG-003 | PARTIAL | Current-page context is validated for RU home only; cross-page RU context will be covered when RU secondary pages exist. |
| LANG-004 | PASS | Home breadcrumb count is 0 on desktop and mobile. |
| LANG-005 | PASS | RU CTAs are `Изучить продукты и услуги` and `Связаться с сервисной командой`. |
| LANG-006 | PASS | RU footer includes `Honey Badger является операционной структурой российской компании ZennoLab в Китае.` and placeholder contact/compliance values. |
| LANG-007 | PARTIAL | RU `lang`, title, and description passed; full hreflang/canonical SEO is deferred by Issue #22. |
| LANG-008 | PASS | Desktop and mobile `scrollWidth` equals `clientWidth`; no broken images and no console errors. |
| HOME-009 | PASS | zh and ru homes resolve to distinct localized content; RU renders 5 product entries and 5 pending same-page detail anchors. |

## Playwright Assertions

- `LANG_001_languageSwitcherRoundTrip`: true
- `LANG_004_noHomeBreadcrumb`: true
- `LANG_005_russianCtas`: true
- `LANG_006_russianFooter`: true
- `LANG_007_russianSeoPartial`: true
- `LANG_008_noOverflowDesktopMobile`: true
- `HOME_009_zhRuRealContent`: true
- `supportFloat`: true
- `noBrokenImages`: true
- `noConsoleErrors`: true
- `noOverScopedWording`: true
- `noProhibitedContactValues`: true
- `noFakeForms`: true
