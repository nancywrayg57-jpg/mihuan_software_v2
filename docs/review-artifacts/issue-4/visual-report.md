# Issue #4 Visual Report

Date: 2026-07-24

Target: `site/dist` opened through `file://` after `npm run build`.

## Screenshots

- `desktop-zh-1440x900.png`
- `desktop-en-1440x900.png`
- `desktop-ru-1440x900.png`
- `desktop-support-open-1440x900.png`
- `mobile-zh-390x844.png`
- `mobile-en-390x844.png`
- `mobile-ru-390x844.png`
- `mobile-nav-open-390x844.png`

## Assertions

- Desktop 1440x900: zh/en/ru home pages rendered with `scrollWidth` equal to viewport width and 0 broken images.
- Mobile 390x844: zh/en/ru home pages rendered with `scrollWidth` equal to viewport width and 0 broken images.
- Language switcher: zh/en/ru three-way relative links reached the expected `file://` paths.
- Mobile navigation: menu button opened the nav and set `aria-expanded="true"`.
- Floating support: desktop hover, desktop click, and mobile click opened the panel; close button hid the panel.
- Resources: no request failures or console errors observed.

## Placeholder Boundary

Footer and support entries remain structural placeholders only. No unconfigured extra support channel, confirmed account, ICP number, copyright year, external URL, or real email value is present in the S1 pages.
