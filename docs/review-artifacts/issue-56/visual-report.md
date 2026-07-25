# Issue #56 Visual Report

## Scope

- Issue: #56, S4 supplemental SVG alignment.
- Branch: `codex/issue-56-svg-align`.
- Baseline for before screenshots: `main` at `5cc3ff567f675c8d0663c600af86bad4e23ed12f`.
- Production HTML and `site/src/assets/app.js`: unchanged.

## Asset Copy Check

| Asset | UI source | Production copy | Bytes | SHA256 | Result |
|---|---|---|---:|---|---|
| `stacked-peaks-haikei_4.svg` | `UI/assets/stacked-peaks-haikei_4.svg` | `site/src/assets/img/stacked-peaks-haikei_4.svg` | 2,902 | `36F62DDFF4770A84D864A39272844B4A8A953881D40E43F066B076BB8815649C` | PASS |
| `stacked-waves-haikei.svg` | `UI/assets/stacked-waves-haikei.svg` | `site/src/assets/img/stacked-waves-haikei.svg` | 7,470 | `FDD6A72C1165FFA1A21F8847955F5D48B7C44FB025DB80BE8641D649ABB0F278` | PASS |

Both production copies are byte-identical to their `UI/assets/` sources.

## Implementation Notes

| Item | Result |
|---|---|
| Missing 1, home relation texture | PASS. `#home-relation`, `#en-brand-relationship`, and `#ru-brand-relationship` now use `stacked-peaks-haikei_4.svg` with the prototype `#f6f9fd` base. Because production uses a dark `home-section-soft` layout with white text, the SVG is applied below a deep blue gradient overlay to preserve contrast. |
| Missing 2, network services texture | PASS. `.network-services-page #network-services-modules` and `.network-service-module > header` now use `stacked-waves-haikei.svg` with deep blue gradients. Header text and labels keep white contrast. |
| Out-of-scope hero asset | PASS. `hero-light-blue.svg` remains unchanged. Prototype hero is pure color, while production keeps the administrator-authorized hero asset; this known deviation is retained for governance review. |
| Check script | PASS. `site/scripts/check.mjs` only extends `requiredHeroAssets` with the two newly required SVG assets. |

## Screenshot Evidence

Desktop 1440x900 before/after comparisons:

| Area | zh | en | ru |
|---|---|---|---|
| Home relation | `compare-desktop-1440x900-zh-home-relation.png` | `compare-desktop-1440x900-en-home-relation.png` | `compare-desktop-1440x900-ru-home-relation.png` |
| Network service modules | `compare-desktop-1440x900-zh-network-modules.png` | `compare-desktop-1440x900-en-network-modules.png` | `compare-desktop-1440x900-ru-network-modules.png` |

Mobile 390x844 focused checks:

| Area | Screenshot |
|---|---|
| zh home relation | `after-mobile-390x844-zh-home-relation.png` |
| zh network service modules | `after-mobile-390x844-zh-network-modules.png` |

Mobile artifact PNGs are target-section screenshots at 390x844 with fixed header/support/skip-link hidden only during capture to avoid screenshot stitching occlusion. Runtime assertions were collected against the actual page without disabling those elements.

## Playwright Assertions

Recorded in `playwright-results.json`.

| Check | Result |
|---|---|
| Desktop zh/en/ru home relation expected SVG present | PASS |
| Desktop zh/en/ru network modules expected SVG present | PASS |
| Mobile zh home and network expected SVG present | PASS |
| Console errors | PASS, 0 errors |
| Failed requests | PASS, 0 failures |
| Broken images | PASS, 0 broken images |
| Horizontal overflow | PASS, none detected |

## Local Validation

Environment:

- Bundled Node: `v24.14.0`.
- `node`, `npm`, and `npx` are not available on PATH.
- Bundled runtime contains Playwright and Sharp Node modules, but does not contain npm.

Commands executed:

```powershell
node scripts/clean.mjs
node scripts/build.mjs
node scripts/check.mjs
```

Output summary:

```text
Built static site: site/src -> site/dist
Checked 18 required static HTML page(s).
Build output contains 30 file(s), 463270 byte(s).
Checked 9 local hero background asset reference(s).
Checked sitemap.xml with 18 canonical loc entry(s).
Checked robots.txt allow-all and sitemap directive.
```

Exact `npm ci && npm run build && npm run check`: [未经本地验证], because npm/npx are not installed in PATH or the bundled Node runtime on this host. The equivalent project scripts passed with bundled Node.
