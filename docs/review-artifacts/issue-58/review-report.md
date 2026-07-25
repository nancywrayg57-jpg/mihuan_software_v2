# Issue #58 Review Artifacts

## Scope

- Favicon source decision: used the existing site brand-mark style instead of converting `LOGO/` assets. The SVG is a blue `#005ab4` rounded square with white `HB`, matching the production header mark style.
- HTML scope: 18 source pages changed only by adding one favicon link inside `<head>`.
- Build/package scope: added an independent package command that runs build and check before producing a SHA-named `tar.gz` archive under ignored `site/release/`.
- Deploy docs scope: added `site/DEPLOY.md` for the administrator-confirmed HTTP-first manual FinalShell release flow.

## Evidence Files

- `browser-zh-tab-favicon.png`: visible Chromium tab favicon evidence for `site/dist/index.html`.
- `browser-en-tab-favicon.png`: visible Chromium tab favicon evidence for `site/dist/en/index.html`.
- `browser-ru-tab-favicon.png`: visible Chromium tab favicon evidence for `site/dist/ru/index.html`.
- `browser-favicon-results.json`: headless browser DOM/fetch verification for zh/en/ru favicon links.
- `package-results.json`: archive-vs-dist entry, size, and SHA-256 consistency report.
- `tar-list.txt`: parsed archive entry list written as UTF-8.
- `system-tar-results.json`: `tar -xzf` extraction consistency report, including Chinese path checks.
- `validation-log.txt`: bundled Node validation output plus diff/scope checks.

## Local Validation Summary

- Bundled Node runtime: `v24.14.0`.
- Exact npm pipeline status: `[未经本地验证]` because `npm` and `npx` are unavailable in the local PATH/runtime.
- Equivalent local script validation: `scripts/clean.mjs`, `scripts/build.mjs`, `scripts/check.mjs`, and `scripts/package.mjs` were run with bundled Node.
- Package evidence: `site/release/honeybadger-dist-6dfb59c06fdd.tar.gz`, 83,165 bytes, 31 archive entries.
- Dist consistency: `package-results.json` reports `extractedMatchesDist: true`, with zero mismatches.
- System tar extraction consistency: `tar -xzf` into an ignored verification directory produced 31 files matching `dist` by size and SHA-256, including the Chinese file names.

## E2E Checklist

| Item | Result | Evidence |
| --- | --- | --- |
| Favicon file in dist root | PASS | `scripts/check.mjs`, `browser-favicon-results.json` |
| 18 pages have exactly one head icon link | PASS | `scripts/check.mjs` |
| zh browser tab favicon visible | PASS | `browser-zh-tab-favicon.png` |
| en browser tab favicon visible | PASS | `browser-en-tab-favicon.png` |
| ru browser tab favicon visible | PASS | `browser-ru-tab-favicon.png` |
| Package archive produced | PASS | `package-results.json` |
| Archive entries match dist | PASS | `package-results.json`, `tar-list.txt` |
| DEPLOY.md covers 7 smoke items | PASS | `site/DEPLOY.md` |
| Exact `npm ci && npm run build && npm run check` | `[未经本地验证]` | local `npm`/`npx` unavailable |

## Notes

- `site/dist/` and `site/release/` are ignored and are not intended to be committed.
- No production IP address, account, password, secret, certificate, or production credential is included in the deploy documentation or review artifacts. Browser JSON evidence only contains local loopback URLs from the temporary validation server.
