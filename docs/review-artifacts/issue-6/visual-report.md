# Issue #6 Visual Report

Date: 2026-07-24

Target: `site/dist/index.html` opened through `file://` after `npm run build`.

## Screenshots

- `site-home-desktop-1440x900.png`
- `site-home-mobile-390x844.png`
- `site-home-support-open-1440x900.png`
- `site-home-mobile-nav-open-390x844.png`
- `ui-reference-desktop-1440x900.png`
- `ui-reference-mobile-390x844.png`

## Site Assertions

- Desktop 1440x900: no horizontal overflow, 0 broken images.
- Mobile 390x844: no horizontal overflow, 0 broken images.
- Required sections present: brand hero, ZennoLab relationship statement, product matrix, news preview, careers preview, contact CTA.
- Language switcher: zh home links reached `en/index.html` and `ru/index.html` under `file://`.
- Interactions: product nav anchor, contact CTA anchor, desktop support hover/click, mobile nav, and mobile support click all worked.
- Safety: no form element, no over-scoped ZennoLab wording, no request failures, no console errors.
- Mobile overlap: floating support button did not overlap hero CTA actions.

## UI Comparison

- Layout: both pages use a fixed 76px header, 1200px desktop container, two-column desktop hero, product cards, preview cards, and single-column mobile flow.
- Navigation: both expose the same top-level home/product/news/careers/about structure plus language control. The production page keeps non-home entries as same-page anchors because downstream pages are out of scope.
- Buttons: both use pill-shaped CTA buttons with white primary hero CTA and blue interaction states.
- Color: the production hero and relationship band now use the blue brand system from `UI/index.html`; white content sections and dark footer match the reference structure.
- Spacing: production desktop sections use 88-94px vertical rhythm, close to the reference 96-112px hero/section rhythm; mobile sections collapse to 60px like the reference.
- Footer: both retain a dark footer. Production footer keeps only explicit placeholders for contact, compliance, copyright, and external links.
- Responsive: production and reference screenshots at 390x844 both render without horizontal overflow.

## Boundaries

The production page intentionally does not copy unconfirmed UI reference data. Footer and support entries remain placeholders only; no real account, real email, ICP number, copyright year, external resource, fake news item, fake job, or unconfigured extra support channel is present.
