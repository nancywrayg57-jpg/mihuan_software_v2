# Issue #52 Visual Report

## Scope

- CSS-only interaction polish for hover, active, focus-visible, support panel open state, and reduced-motion handling.
- `site/src/assets/app.js` unchanged. Existing click toggle, outside-click close, and Escape close behavior was validated.
- HTML files were not changed.

## Evidence Summary

| Check | Result | Evidence |
|---|---|---|
| Hover: desktop navigation | PASS | `interaction-hover-nav-desktop.png` |
| Hover: primary button | PASS | `interaction-hover-main-button-desktop.png` |
| Hover: product card | PASS | `interaction-hover-product-card-desktop.png` |
| Hover: link-more | PASS | `interaction-hover-link-more-desktop.png` |
| Hover: language switcher | PASS | `interaction-hover-language-switch-desktop.png` |
| Active: primary button | PASS | `interaction-active-main-button-desktop.png` |
| Active: product-card link path | PASS | `interaction-active-product-card-link-desktop.png` |
| Focus-visible: skip link | PASS | `interaction-focus-skip-link-desktop.png` |
| Focus-visible: navigation | PASS | `interaction-focus-nav-desktop.png` |
| Focus-visible: language switcher | PASS | `interaction-focus-language-switch-desktop.png` |
| Focus-visible: primary button | PASS | `interaction-focus-main-button-desktop.png` |
| Focus-visible: product link-more | PASS | `interaction-focus-product-link-desktop.png` |
| Focus-visible: support toggle | PASS | `interaction-focus-support-toggle-desktop.png` |
| Support panel desktop 1440 | PASS | `support-open-desktop-1440.png` |
| Support panel mobile 390 | PASS | `support-open-mobile-390.png` |
| zh index desktop static regression | PASS | `regression-zh-index-desktop-current.png`, `regression-zh-index-desktop-baseline-main.png` |
| zh index tablet static regression | PASS | `regression-zh-index-tablet-current.png`, `regression-zh-index-tablet-baseline-main.png` |
| zh index mobile static regression | PASS | `regression-zh-index-mobile-current.png`, `regression-zh-index-mobile-baseline-main.png` |

## Automated Assertions

- Console errors: 0.
- Horizontal overflow: desktop 1440, tablet 768, mobile 390 all PASS.
- Keyboard Escape closes support panel and mobile navigation.
- Focus rings use a visible 3px solid outline.
- `prefers-reduced-motion: reduce` lowers transitions to `0.001s`.
- Support panel desktop: `backgroundColor=rgb(255, 255, 255)`, `opacity=1`, `backgroundAlpha=1`.
- Support panel mobile: `backgroundColor=rgb(255, 255, 255)`, `opacity=1`, `backgroundAlpha=1`.

## Static Regression

Pixel comparison used current Issue #52 output against a temporary #50 merged baseline generated from `main:site/src/assets/styles.css`.

| Viewport | Result | Diff |
|---|---|---|
| 1440 desktop | PASS | 1 pixel / 5,603,040; max delta 2 |
| 768 tablet | PASS | 1 pixel / 4,068,864; max delta 2 |
| 390 mobile | PASS | 0 pixels / 2,559,180; max delta 0 |

The tolerance was capped at 2 pixels and max channel delta 2 to account for browser screenshot rounding noise. No visible static layout regression was observed.

## #49 Carryover Check

PASS. The support panel no longer fades with panel opacity during open/close. It uses a fully opaque white background and visibility/transform transitions, so mobile text remains readable and no background text bleeds through the panel.

## Next Authorization Candidates

- Real support channel content remains outside this issue scope. The current page still shows configured placeholder text in the support panel.
- If full-card click behavior is desired later, HTML or JS changes would be required and should be authorized separately.
