# Issue #16 Visual Review

## Scope

- Target page: `site/dist/news.html`
- Related zh navigation flows:
  - `site/dist/index.html` -> `site/dist/news.html`
  - `site/dist/products.html` -> `site/dist/news.html`
  - `site/dist/跨境网络服务.html` -> `site/dist/news.html`
  - `site/dist/about.html` -> `site/dist/news.html`
- Reference capture: `UI/news.html`

## Artifacts

- `news-desktop.png`: target page, 1440x900, full page
- `news-mobile.png`: target page, 390x844, full page
- `news-mobile-nav.png`: target page, 390x844 with mobile navigation open
- `ui-reference-news-desktop.png`: reference page, 1440x900, full page
- `ui-reference-news-mobile.png`: reference page, 390x844, full page
- `playwright-results.json`: raw browser validation result list and numbered E2E checklist

## E2E Checklist

| ID | Result | Evidence |
|---|---|---|
| NEWS-001 | PASS | Hero lead includes enterprise updates, product updates, and industry insight positioning. |
| NEWS-002 | PASS | Static category area includes all / company updates / product updates / industry information / technical sharing, with company activity and industry news visible. |
| NEWS-003 | PASS | News list renders exactly 6 entries from docs section 9. |
| NEWS-004 | PASS | Six `<time>` elements use matching `YYYY-MM-DD` text and `datetime` values. |
| NEWS-005 | PASS | Six inline SVG thumbnails expose Chinese `aria-label` and `<title>` text. |
| NEWS-010 | PASS | Detail entries link only to `#news-detail-pending`; no fake filters, fake form, or missing detail page links. |
| NAV-002 | PASS | Desktop navigation from index, products, network-services, and about reaches `news.html`. |
| NAV-005 | PASS | Breadcrumb is `首页 / 新闻资讯`; home link returns to `index.html`. |

## Browser Checks

- Target news page rendered with zero console errors and zero page errors.
- Desktop and mobile viewports had no horizontal overflow.
- Mobile navigation opened and kept `aria-expanded="true"` without creating horizontal overflow.
- Target page reported zero broken images.
- Header current-page highlight rendered for both desktop and mobile `新闻资讯` links.
- Floating support control opened and set `aria-expanded="true"`.
- `UI/news.html` loaded for comparison with header, mobile nav, footer, service float, and news content present.

## UI Comparison Conclusion

- Navigation shell, language control placement, active-page underline, breadcrumb band, blue hero direction, footer, and floating support placement were compared against `UI/news.html`.
- The target keeps the static S1 shell and follows the reference hierarchy: news hero, category area, news list, detail/contact continuation area, and dark footer.
- The reference page contains dynamic-style search, sidebar ranking, pagination, and detail sections. Issue #16 explicitly forbids fake filtering and keeps detail pages for later, so the target intentionally uses static category anchors and same-page detail placeholders.
- Desktop target layout uses a two-column card grid for the six entries and keeps thumbnails, category labels, titles, summaries, dates, and placeholder links scannable.
- Mobile target layout collapses to a single column; the opened mobile navigation stays above the hero and does not overlap page content.

## Notes

- The page does not include a form, real contact values, ICP value, copyright year, unconfirmed extra support-channel entry, external image, or expanded relationship wording.
- Evidence was captured from local `file://` URLs after `npm run clean` and a fresh `npm run build`.
