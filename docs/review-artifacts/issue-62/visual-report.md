# Issue #62 Visual Report

## Scope

- Target: home hero right-side capability matrix visual frame.
- CSS change: `.visual-frame` `fill: transparent` -> `fill: #fff`; `stroke: rgb(255 255 255 / 34%)` -> `stroke: #d8e5f3`.
- No HTML, asset, app.js, or text color changes.

## Evidence

| View | Result | Artifact |
|---|---|---|
| zh desktop 1440x900 home hero | PASS: white rounded visual board behind matrix is visible; dark blue wave background remains. | `zh-home-hero-desktop-1440x900.png` |
| en desktop 1440x900 home hero | PASS: same CSS result verified on English home page. | `en-home-hero-desktop-1440x900.png` |
| zh mobile 390x844 home | PASS: responsive first viewport keeps white text and no horizontal overflow. | `zh-home-mobile-390x844.png` |
| zh mobile 390x844 hero visual | PASS: stacked mobile hero matrix uses the white rounded visual board. | `zh-home-visual-mobile-390x844.png` |

## E2E Feedback Table

| Check | Result | Evidence |
|---|---|---|
| Visual frame white fill | PASS | `browser-validation.json`: 9 home checks computed `.visual-frame` fill as `rgb(255, 255, 255)`. |
| Visual frame light stroke | PASS | `browser-validation.json`: 9 home checks computed stroke as `rgb(216, 229, 243)`. |
| Text color zero-change guard | PASS | `browser-validation.json`: hero h1/lead remain white; SVG text fills observed: `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.86)`, `rgb(30, 30, 30)`. |
| Three-viewport 18-page regression | PASS | 18 pages x 3 viewports = 54 checks; 0 console errors, 0 broken images, 0 overflow cases. |

## Local Validation

- Bundled Node `site/scripts/build.mjs`: PASS.
- Bundled Node `site/scripts/check.mjs`: PASS, including Issue #62 visual frame assertion.
- Bundled Node `site/scripts/clean.mjs && build.mjs && check.mjs`: PASS.
- `git diff --check`: PASS.
- Exact `npm run build && npm run check`: [未经本地验证] because this Windows PATH has no `node`, `npm`, or `npx`; equivalent package scripts were executed directly with the bundled Node runtime.
