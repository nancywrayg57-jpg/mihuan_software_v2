# Issue #54 SEO File Report

## Scope

- Added `site/src/sitemap.xml` and `site/src/robots.txt`.
- Appended sitemap/robots assertions to `site/scripts/check.mjs`.
- `site/scripts/build.mjs` unchanged because it already recursively copies all `site/src` files into `site/dist`.
- HTML, CSS, JS assets, `UI/`, `LOGO/`, `.github/`, and other docs were not changed.

## Sitemap Policy

- `sitemap.xml` includes only static `<loc>` entries.
- No `<lastmod>`, `<changefreq>`, or `<priority>` fields are included, preserving build idempotency and avoiding dynamic dates.
- `xhtml:link` alternates are not included in the sitemap. The canonical and hreflang source of truth remains the existing HTML `<head>` tags, and `check.mjs` verifies sitemap loc values directly against those page canonicals.

## Loc List

1. `https://www.honeybadgersoft.com/index.html`
2. `https://www.honeybadgersoft.com/products.html`
3. `https://www.honeybadgersoft.com/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html`
4. `https://www.honeybadgersoft.com/about.html`
5. `https://www.honeybadgersoft.com/news.html`
6. `https://www.honeybadgersoft.com/careers.html`
7. `https://www.honeybadgersoft.com/en/index.html`
8. `https://www.honeybadgersoft.com/en/products.html`
9. `https://www.honeybadgersoft.com/en/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html`
10. `https://www.honeybadgersoft.com/en/about.html`
11. `https://www.honeybadgersoft.com/en/news.html`
12. `https://www.honeybadgersoft.com/en/careers.html`
13. `https://www.honeybadgersoft.com/ru/index.html`
14. `https://www.honeybadgersoft.com/ru/products.html`
15. `https://www.honeybadgersoft.com/ru/%E8%B7%A8%E5%A2%83%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.html`
16. `https://www.honeybadgersoft.com/ru/about.html`
17. `https://www.honeybadgersoft.com/ru/news.html`
18. `https://www.honeybadgersoft.com/ru/careers.html`

## Robots Policy

```txt
User-agent: *
Allow: /

Sitemap: https://www.honeybadgersoft.com/sitemap.xml
```

## E2E Feedback

| Item | Result | Evidence |
|---|---|---|
| INFRA-007 sitemap copied to dist | PASS | `seo-file-results.json` |
| INFRA-007 loc count exactly 18 | PASS | `seo-file-results.json` |
| INFRA-007 locs match page canonicals | PASS | `site/scripts/check.mjs` output |
| INFRA-007 no dynamic lastmod/changefreq/priority | PASS | `seo-file-results.json` |
| INFRA-008 robots copied to dist | PASS | `seo-file-results.json` |
| INFRA-008 allow-all and sitemap directive | PASS | `seo-file-results.json` |
| INFRA-008 no Disallow core-path blocker | PASS | `seo-file-results.json` |
| File open: sitemap.xml | PASS | `file-open-sitemap.png` |
| File open: robots.txt | PASS | `file-open-robots.png` |
| Production domain live availability | N/A | Requires deployment/server-side rollout after PR merge |

## Idempotency

- First build manifest: 28 files, 452251 bytes.
- Second build manifest: 28 files, 452251 bytes.
- Result: PASS. File paths, byte counts, and SHA-256 hashes matched exactly.

## Validation Summary

- `node scripts/clean.mjs && node scripts/build.mjs && node scripts/check.mjs`: PASS.
- Added check output:
  - `Checked sitemap.xml with 18 canonical loc entry(s).`
  - `Checked robots.txt allow-all and sitemap directive.`
- `seo-file-results.json`: PASS.
