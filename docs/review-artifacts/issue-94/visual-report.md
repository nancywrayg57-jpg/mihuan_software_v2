# Issue #94 Visual Report

## Design Direction

- Home and careers hero visuals keep the existing inline SVG approach. This avoids new assets, external links, or changes outside the authorized six hero visual regions.
- The redesigned visuals use the products dashboard and Issue #84 panel language: white framed surface, top dashboard bar, token-based accent colors, card nodes, connector rails, existing border radius, and existing shadow rhythm.
- All visual terms were preserved exactly in each locale. Page body copy, hero-left text color, ZennoLab relationship wording, contact values, sitemap, robots, app.js, and existing asset directories were not changed.

## Detail Panel Sizing

- `.detail-hero-panel` final target: `max-width: 560px`.
- Base desktop detail grid: `minmax(0, 1fr) minmax(500px, 0.95fr)`.
- Russian desktop detail grid: `minmax(0, 1fr) minmax(500px, 0.9fr)`.
- Russian desktop detail hero padding: `47px 0`, added only to preserve the unchanged Issue #82 desktop height after Russian copy wrapping with the wider panel.
- Mobile behavior remains stacked with `max-width: none`.

## Height And Overflow Measurements

Full measurement details are in `hero-measurements.json`.

| Viewport | Products hero baseline | Detail pages checked | Max height diff | Panel width range | Overflow routes |
|---|---:|---:|---:|---:|---:|
| Desktop 1440x900 | 678px | 21 | 0px | 555-560px | 0 |
| Tablet 900x1000 | 1164px | 21 | 0px | 560px | 0 |
| Mobile 390x844 | 1664px | 21 | 0px | 358px | 0 |

## Screenshot Artifacts

- `before-zh-home-1440x900.png`
- `after-zh-home-1440x900.png`
- `before-zh-careers-1440x900.png`
- `after-zh-careers-1440x900.png`
- `after-zh-agriculture-panel-1440x900.png`
- `after-zh-static-ip-panel-1440x900.png`
- `after-en-home-1440x900.png`
- `after-ru-home-1440x900.png`
- `after-zh-home-390x844.png`

## Check Updates

- Issue #84/#94 detail panel checks now assert the enlarged desktop grid, `max-width: 560px`, Russian desktop grid override, and Russian padding override.
- The Issue #84 CSS check strips CSS comments before selector matching so a comment immediately before `.detail-hero-panel` does not hide the rule from validation.
- Issue #62 `.visual-frame` white fill and light border assertions remain in force.
- Issue #82 min-height values remain unchanged: `678px`, `1164px`, `1664px`.
