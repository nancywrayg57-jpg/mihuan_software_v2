# UI Language Path and SEO Consolidation

Date: 2026-07-12
Scope: Honey Badger static UI in `UI/`

## Decision

The static site now uses language-specific HTML entry paths for SEO and deterministic runtime language selection:

- Chinese: root HTML files, for example `index.html`, `products.html`, `news.html`, `careers.html`, `about.html`.
- English: `en/*.html`.
- Russian: `ru/*.html`.

Every generated HTML entry includes:

- localized `<html lang>`;
- localized `<title>` and `meta[name="description"]`;
- canonical URL;
- `hreflang` alternates for `zh-CN`, `en-US`, `ru-RU`, and `x-default`;
- `body[data-lang]` so root Chinese pages are not affected by stale `localStorage`;
- a small pre-rendered summary in `<main id="app">` before `assets/app.js` hydrates the page.

## Runtime Contract

`UI/assets/app.js` determines language in this order:

1. `body[data-lang]`
2. language directory in the current path (`en` or `ru`)
3. `?lang=` query fallback
4. `localStorage.hb-lang` fallback
5. Chinese (`zh`)

Language switching stores the preference but navigates to the corresponding static path instead of re-rendering in place. Page links and product links are generated relative to the current language directory.

## Naming Cleanup

The active top-level page keys are:

- `home`
- `products`
- `news`
- `careers`
- `about`

Legacy page-key mappings for `solutions`, `cases`, `services`, and standalone `contact` were removed from the active route/nav model. Contact remains only as an about-page contact section and shared CTA text.

## Validation Notes

- `node --check UI/assets/app.js` passed.
- Static scans found no `??` placeholders or replacement-character mojibake in HTML files.
- Static scans found no `solutions:`, `cases:`, `services:`, `renderCases`, `renderServices`, `viewCases`, or `viewServices` residues in `app.js`.
- A minimal Node DOM sandbox executed `app.js` for root Chinese, English news, and Russian product-detail entries and confirmed language/path selection behavior.
- Real Chromium verification was not completed because the local Playwright package was missing `playwright-core`, the Windows host has no `bash` for the wrapper, and `npx.cmd` timed out while attempting package resolution.