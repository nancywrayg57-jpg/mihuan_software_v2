# Issue #13 Visual Review

## Scope

- Target page: `site/dist/about.html`
- Related zh navigation flows:
  - `site/dist/index.html` -> `site/dist/about.html`
  - `site/dist/products.html` -> `site/dist/about.html`
  - `site/dist/跨境网络服务.html` -> `site/dist/about.html`
- Reference capture: `UI/about.html`

## Artifacts

- `about-desktop.png`: target page, 1440x900, full page
- `about-mobile.png`: target page, 390x844, full page
- `about-mobile-nav.png`: target page, 390x844 with mobile navigation open
- `ui-reference-about-desktop.png`: reference page, 1440x900, full page
- `ui-reference-about-mobile.png`: reference page, 390x844, full page
- `playwright-results.json`: raw browser validation result list

## Browser Checks

- Target about page rendered with zero console errors and zero page errors.
- Desktop and mobile viewports had no horizontal overflow.
- Mobile navigation opened and kept `aria-expanded="true"` without creating horizontal overflow.
- Target page reported zero broken images.
- Header current-page highlight rendered for both desktop and mobile `关于我们` links.
- Required modules were present: brand introduction, positioning and image, company background, entity statement, and contact placeholders.
- The exact relationship wording was present: `蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体`.
- Contact placeholders were present for enterprise email, support path, and offline contact information.
- No fake form was present.
- Breadcrumb `首页 / 关于我们` navigated back to `index.html`.
- Homepage, products page, and network-services page desktop navigation reached `about.html`.
- Floating support control opened and set `aria-expanded="true"`.
- `UI/about.html` loaded for comparison with header, mobile nav, footer, service float, and about content present.

## UI Comparison Conclusion

- Navigation shell, language control placement, active-page underline, breadcrumb band, footer, and floating support placement were compared against `UI/about.html`.
- The target keeps the S1 static shell used by the current production scaffold, while restoring the about-page information architecture required by Issue #13.
- Desktop layout preserves the reference direction: blue corporate hero, right-side product/service visual, primary and outline CTAs, structured entity explanation, contact area, and dark footer.
- Mobile layout remains single-column and readable; the opened mobile navigation sits above the hero without overlap or sideways scrolling.
- The reference page includes over-scoped relationship wording and real/example contact entries from the old dynamic prototype. The target intentionally replaces those with the exact approved relationship sentence and explicit `待配置` placeholders.
- The target expands the reference three-card about structure into the five required Issue #13 modules, so the visual comparison is aligned at shell, hierarchy, spacing, color, footer, and responsiveness level rather than a one-for-one content copy.

## Notes

- The page does not include a form, real contact values, ICP value, copyright year, unconfirmed extra support-channel entry, or expanded ZennoLab authorization wording.
- Evidence was captured from local `file://` URLs after `npm run clean` and a fresh `npm run build`.
