# Issue #60 Visual Report

## Baseline

- Before baseline: `origin/main` at `9a0fc8e91b40b3ceec368f876336e7f932c6ecc8`.
- After baseline: current build output from `site/dist`.
- Screenshot viewport: desktop `1440x900`, mobile `390x844`.
- Browser regression: 18 pages across `1440x900`, `820x1180`, `390x844`.

## Hero Overlay Fixes

| Area | Selector(s) | Change | Readability | Evidence |
|---|---|---|---|---|
| Home hero | `.home-hero` | Removed blue `linear-gradient`; final review follow-up replaces `hero-light-blue.svg` with `var(--hero) + stacked-waves-haikei.svg` and removes the obsolete light-blue asset. | Kept white hero copy and text shadow per administrator instruction; dark blue waves restore contrast without changing font color. | `before-01-zh-home-hero.png`, `after-01-zh-home-hero.png`, `after-mobile-zh-home-390x844.png` |
| Brand relationship | `#home-relation`, `#en-brand-relationship`, `#ru-brand-relationship` | Removed blue `linear-gradient`, now `#f6f9fd + stacked-peaks-haikei_4.svg`. | Restored white heading/copy per review correction and added text shadow. | `before-02-zh-home-relation.png`, `after-02-zh-home-relation.png`, `after-02b-en-brand-relationship.png`, `after-02c-ru-brand-relationship.png` |
| Products hero | `.products-hero` | Removed blue `linear-gradient`, now `var(--hero) + stacked-waves-haikei_2.svg`; final review follow-up deletes the shared `.products-hero::before` white grid pseudo-element. | Kept white copy and text shadow; browser validation confirms the pseudo-element no longer renders a grid. | `before-03-zh-products-hero.png`, `after-03-zh-products-hero.png` |
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
| Static build/check using bundled Node v24.14.0 | PASS | `scripts/clean.mjs`, `scripts/build.mjs`, `scripts/check.mjs` completed locally after the final review follow-up. |
| Issue #60 static CSS assertions | PASS | `check.mjs` reports 11 SVG background rules without overlay gradients. |
| Header LOGO 18 pages | PASS | `check.mjs` reports 18 header logo references; browser validation found no broken images. |
| Favicon 18 pages | PASS | `check.mjs` reports 18 PNG favicon links; trilingual tab screenshot captured. |
| Desktop/tablet/mobile 18-page regression | PASS | `browser-validation.json`: 54 checks, 0 console errors, 0 request/response failures, 0 broken images, 0 horizontal overflow; final assertions confirm home uses `stacked-waves-haikei.svg`, white home text remains, and `.products-hero::before` grid is removed. |
| Exact `npm ci && npm run build && npm run check` | [未经本地验证] | Local PATH has no `node`, `npm`, or `npx`; bundled Node has no bundled npm binary. |

## Notes

- Final review follow-up: home hero now uses `stacked-waves-haikei.svg`; `hero-light-blue.svg` is removed from source and static checks.
- Final review follow-up: `.products-hero::before` was deleted, removing the shared white grid from products/about/news/careers/network hero surfaces.
- Review follow-up: `browser-validation.json` records home hero h1/lead as white and verifies no product hero pseudo-grid is rendered.
- No external assets were introduced.
- No `UI/`, `LOGO/`, `.github/`, `site/src/assets/app.js`, or page body outside the authorized Header brand area was modified.
- `site/src/favicon.svg` was removed and must not reappear in build output.
