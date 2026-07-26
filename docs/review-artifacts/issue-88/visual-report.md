# Issue #88 Visual Report

## Scope

- Target: 18 first-level pages, 6 templates x zh/en/ru.
- Change: `.home-section-soft` sections now reuse the same SVG background family as each page hero.
- Capture mode: viewport screenshots at requested dimensions after scrolling the first soft section into view.
- Automation evidence: `visual-evidence.json`.

## Mapping

| Template | Soft section background | Hero source |
|---|---|---|
| index | `stacked-waves-haikei.svg` | `.home-hero` |
| products | `stacked-waves-haikei_2.svg` | `.products-hero` |
| news | `stacked-waves-haikei_3.svg` | `.news-hero` |
| careers | `waves-haikei.svg` | `.careers-hero` |
| about | `waves-haikei-2.svg` | `.about-hero` |
| network-services | `IP.svg` | `.network-services-hero` |

## Screenshots

| File | Viewport | Page |
|---|---|---|
| `desktop-zh-index-soft.png` | 1440x900 | zh index |
| `desktop-zh-products-soft.png` | 1440x900 | zh products |
| `desktop-zh-news-soft.png` | 1440x900 | zh news |
| `desktop-zh-careers-soft.png` | 1440x900 | zh careers |
| `desktop-zh-about-soft.png` | 1440x900 | zh about |
| `desktop-zh-network-services-soft.png` | 1440x900 | zh network-services |
| `desktop-en-products-soft.png` | 1440x900 | en products |
| `desktop-ru-news-soft.png` | 1440x900 | ru news |
| `mobile-zh-index-soft.png` | 390x844 | zh index |
| `mobile-zh-network-services-soft.png` | 390x844 | zh network-services |

## E2E Feedback

Automated browser sweep: 54/54 passed. Each row checked expected SVG background on every `.home-section-soft` section and horizontal overflow <= 1px.

| Locale | Template | 1440x900 | 768x1024 | 390x844 |
|---|---|---|---|---|
| zh | index | PASS | PASS | PASS |
| zh | products | PASS | PASS | PASS |
| zh | news | PASS | PASS | PASS |
| zh | careers | PASS | PASS | PASS |
| zh | about | PASS | PASS | PASS |
| zh | network-services | PASS | PASS | PASS |
| en | index | PASS | PASS | PASS |
| en | products | PASS | PASS | PASS |
| en | news | PASS | PASS | PASS |
| en | careers | PASS | PASS | PASS |
| en | about | PASS | PASS | PASS |
| en | network-services | PASS | PASS | PASS |
| ru | index | PASS | PASS | PASS |
| ru | products | PASS | PASS | PASS |
| ru | news | PASS | PASS | PASS |
| ru | careers | PASS | PASS | PASS |
| ru | about | PASS | PASS | PASS |
| ru | network-services | PASS | PASS | PASS |

## Notes

- HTML, app.js, assets, sitemap, and robots were not modified.
- No text color rules or overlay gradients were added for Issue #88.
