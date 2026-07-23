# Issue #8 Visual Report

## Evidence

- `docs/review-artifacts/issue-8/site-products-desktop-1440x900.png`
- `docs/review-artifacts/issue-8/site-products-mobile-390x844.png`
- `docs/review-artifacts/issue-8/site-products-mobile-nav-open-390x844.png`
- `docs/review-artifacts/issue-8/ui-products-reference-desktop-1440x900.png`
- `docs/review-artifacts/issue-8/ui-products-reference-mobile-390x844.png`

## UI Comparison

- Header, language switcher, footer, and floating support keep the S1 shell shape and spacing from the current production home page.
- Breadcrumb renders below the fixed header on the product page as `首页 / 产品介绍`; the home page remains without breadcrumb.
- The product page keeps the blue enterprise hero, dashboard-style product visual, rounded buttons, white content sections, and dark footer rhythm from `UI/products.html`.
- Product scope intentionally differs from the UI reference: the reference still shows the old seven-entry matrix, while this implementation uses the required 4+1 scope and keeps network services as one merged entry.
- Detail CTAs stay as same-page placeholder anchors. The network-services entry states `合并页待接入`; regular product entries state `详情页待接入`.
- Contact CTAs point to the support placeholder and footer contact placeholder only; no form or fake submit state is present.

## Playwright Assertions

- Desktop product page at 1440 x 900 has no horizontal overflow.
- Mobile product page at 390 x 844 has no horizontal overflow.
- Product page has zero broken images.
- Product page emitted no console errors.
- Breadcrumb home link returns to `index.html`, and the home page still has no breadcrumb.
- Desktop header navigation returns from home to `products.html`.
- Hero/product overview and consult anchors work.
- Floating support opens and updates its expanded state.
- Mobile navigation opens and updates `aria-expanded` to `true`.
- Product page language switcher paths are `products.html`, `en/index.html`, and `ru/index.html`.
