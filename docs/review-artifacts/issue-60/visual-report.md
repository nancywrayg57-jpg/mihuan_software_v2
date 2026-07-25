# Issue #60 Visual Report

## Baseline

- Before baseline: `origin/main` at `9a0fc8e91b40b3ceec368f876336e7f932c6ecc8`.
- After baseline: current build output from `site/dist`.
- Screenshot viewport: desktop `1440x900`, mobile `390x844`.
- Browser regression: 18 pages across `1440x900`, `820x1180`, `390x844`.

## Hero Overlay Fixes

| Area | Selector(s) | Change | Readability | Evidence |
|---|---|---|---|---|
| Home hero | `.home-hero` | Removed blue `linear-gradient`, now `var(--hero) + hero-light-blue.svg`; follow-up removed local white translucent backgrounds from hero eyebrow, stats cards, visual panel, and SVG frame. | Kept white hero copy and text shadow; no home hero font color change in the follow-up. | `before-01-zh-home-hero.png`, `after-01-zh-home-hero.png` |
| Brand relationship | `#home-relation`, `#en-brand-relationship`, `#ru-brand-relationship` | Removed blue `linear-gradient`, now `#f6f9fd + stacked-peaks-haikei_4.svg`. | Restored white heading/copy per review correction and added text shadow. | `before-02-zh-home-relation.png`, `after-02-zh-home-relation.png`, `after-02b-en-brand-relationship.png`, `after-02c-ru-brand-relationship.png` |
| Products hero | `.products-hero` | Removed blue `linear-gradient`, now `var(--hero) + stacked-waves-haikei_2.svg`. | Kept white copy and added text shadow. Existing fine grid overlay is unchanged because it is not a blue block overlay. | `before-03-zh-products-hero.png`, `after-03-zh-products-hero.png` |
| News hero | `.news-hero` | Removed blue `linear-gradient`, now `var(--hero) + stacked-waves-haikei_3.svg`. | Inherits products hero white copy with text shadow. | `before-04-zh-news-hero.png`, `after-04-zh-news-hero.png` |
| About hero | `.about-hero` | Removed blue `linear-gradient`, now `var(--hero) + waves-haikei-2.svg`. | Inherits products hero white copy with text shadow. | `before-05-zh-about-hero.png`, `after-05-zh-about-hero.png` |
| Careers hero | `.careers-hero` | Removed blue `linear-gradient`, now `var(--hero) + waves-haikei.svg`. | Inherits products hero white copy with text shadow. | `before-06-zh-careers-hero.png`, `after-06-zh-careers-hero.png` |
| Network hero | `.network-services-hero` | Removed blue/purple `linear-gradient`, now `var(--hero) + IP.svg`. | Inherits products hero white copy with text shadow. | `before-07-zh-network-hero.png`, `after-07-zh-network-hero.png` |
| Network modules section | `.network-services-page #network-services-modules` | Removed prototype-era blue `linear-gradient`, now `var(--hero) + stacked-waves-haikei.svg`. | Kept white section copy; SVG contrast remains visible. | `before-08b-zh-network-modules-viewport.png`, `after-08b-zh-network-modules-viewport.png` |
| Network module headers | `.network-service-module > header` | Removed blue `linear-gradient`, now `var(--hero) + stacked-waves-haikei.svg`. | Kept white module copy and added text shadow. | `before-09-zh-network-module-header.png`, `after-09-zh-network-module-header.png` |

## LOGO And Favicon

- Source selected: `LOGO/PNG/无英文名水印.png`.
- Reason: Header already renders `Honey Badger` and `ZennoLab China Ops`; using the English-name logo would duplicate adjacent text.
- Source handling: source files under `LOGO/` were read-only; derived transparent PNGs were generated into `site/src/assets/img/`.
- Derived files:
  - `site/src/assets/img/honeybadger-logo-mark.png`, 512 x 270.
  - `site/src/assets/img/favicon.png`, 256 x 256.
- Transparency evidence: `logo-transparency-check.json`; source PNGs are `Format32bppArgb`, sampled corners have alpha `0`, and derived PNGs have non-transparent bounds plus transparent background.
- Header evidence: `after-header-logo-closeup.png`.
- Favicon tab evidence: `favicon-tabs-trilingual.png`.

## Regression Summary

| Check | Result | Evidence |
|---|---|---|
| Static build/check using bundled Node v24.14.0 | PASS | `scripts/clean.mjs`, `scripts/build.mjs`, `scripts/check.mjs` completed locally. |
| Issue #60 static CSS assertions | PASS | `check.mjs` reports 11 SVG background rules without overlay gradients. |
| Header LOGO 18 pages | PASS | `check.mjs` reports 18 header logo references; browser validation found no broken images. |
| Favicon 18 pages | PASS | `check.mjs` reports 18 PNG favicon links; trilingual tab screenshot captured. |
| Desktop/tablet/mobile 18-page regression | PASS | `browser-validation.json`: 54 checks, 0 console errors, 0 request/response failures, 0 broken images, 0 horizontal overflow. |
| Exact `npm ci && npm run build && npm run check` | [未经本地验证] | Local PATH has no `node`, `npm`, or `npx`; bundled Node has no bundled npm binary. |

## Notes

- Review follow-up: `browser-validation.json` records home hero computed backgrounds for eyebrow/stat/visual/frame as transparent while h1/lead remain white.
- No external assets were introduced.
- No `UI/`, `LOGO/`, `.github/`, `site/src/assets/app.js`, or page body outside the authorized Header brand area was modified.
- `site/src/favicon.svg` was removed and must not reappear in build output.
