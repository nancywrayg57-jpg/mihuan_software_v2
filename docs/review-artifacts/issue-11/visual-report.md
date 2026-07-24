# Issue #11 Visual Review

## Scope

- Target page: `site/dist/跨境网络服务.html`
- Related flow: `site/dist/index.html#product-network` -> `site/dist/跨境网络服务.html` -> `site/dist/products.html#product-network`
- Related flow: `site/dist/products.html#product-network` -> `site/dist/跨境网络服务.html`
- Reference capture: `UI/跨境网络服务.html`

## Artifacts

- `network-services-desktop.png`: target page, 1440x900, full page
- `network-services-mobile.png`: target page, 390x844, full page
- `network-services-mobile-nav.png`: target page, 390x844 with mobile navigation open
- `ui-reference-network-services-desktop.png`: reference page, 1440x900, full page
- `ui-reference-network-services-mobile.png`: reference page, 390x844, full page
- `playwright-results.json`: raw browser validation result list

## Browser Checks

- Chinese filename `file://` URL resolved and loaded.
- Desktop viewport had no horizontal overflow.
- Mobile viewport had no horizontal overflow.
- Target page reported zero broken images.
- Target page reported zero console errors and zero page errors.
- The page rendered exactly three child service sections: `static-residential-ip`, `idc-ip`, and `dynamic-ip`.
- Breadcrumb structure and navigation were verified for `首页` and `产品介绍`.
- Homepage NET card navigated directly to `跨境网络服务.html`.
- Products page NET card navigated to `跨境网络服务.html`.
- Return link navigated back to `products.html#product-network`.
- Same-page anchors worked for the service module and placeholder detail section.
- Floating support control opened and set `aria-expanded="true"`.
- Mobile navigation opened without horizontal overflow.

## UI Comparison Conclusion

- Navigation shell, language switcher placement, notice banner, breadcrumb band, footer, and floating support placement were compared against `UI/跨境网络服务.html`.
- The target page keeps the S1 static shell and project tokens while replacing the UI dynamic shell with static production sections for the merged network-services page.
- Desktop layout follows the reference direction: blue hero, right-side service summary, in-page three-service content, CTA buttons, and reserved consultation/support area.
- Mobile layout remains single-column and readable; the opened mobile navigation does not overlap content or create horizontal overflow.
- The three IP services remain in-page sections with placeholder anchors; no `static-ip.html`, `idc-ip.html`, or `dynamic-ip.html` detail page links were introduced.

## Notes

- Issue #10 had already landed the merged page; Issue #11 adds the homepage direct NET-card route and records fresh issue-specific visual evidence.
- The page does not include a form, real contact values, ICP value, copyright year, or extra unconfirmed support-channel entry.
