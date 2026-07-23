# About Page Contact Module Restoration

Date: 2026-07-13

## Decision

Restore the About page Contact content section in the shared static renderer.

The earlier removal of the Contact section is superseded because `docs/蜜獾官网项目需求分析.md` requires the About page to include “联系我们”, and `docs/生产物料清单.md` tracks About as `SITE.about/contact`.

## Scope

- `assets/app.js` renders the About page with hero, three brand/entity cards, and a restored `#contact-block`.
- The restored contact module is multilingual and lists confirmed WeChat, QQ, and corporate email entries plus the DingTalk launch blocker.
- Links may target `about.html#contact-block` for contact-oriented flows.
- Multilingual About HTML meta descriptions and prerender summaries now include the restored contact module.

## API And Schema

No API, database schema, OpenAPI contract, or backend behavior changes.

## Verification

- `node --check assets/app.js`
- DOM checks for `about.html`, `en/about.html`, and `ru/about.html` should confirm the rendered `#contact-block`
