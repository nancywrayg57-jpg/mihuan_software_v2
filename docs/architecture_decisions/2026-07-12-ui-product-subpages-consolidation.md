# UI Product Subpages Consolidation

Date: 2026-07-12

> Status: Historical record only. This ADR preserves the 2026-07-12 ZennoLab product-subpage implementation trace and is no longer the active product-page baseline. Current product scope and navigation behavior are superseded by `UI/docs/architecture_decisions/2026-07-21-cross-border-network-services-group.md`, `docs/生产物料清单.md`, and the latest page-copy/product-scope documents.

## Context

The existing `UI/` implementation had five primary static pages with shared CSS and JavaScript. The 2026-07-12 request added product subpages from then-available ZennoLab-oriented reference material; this ADR is historical and no longer defines the current product-page baseline.

## Decision

Add six product detail subpages as second-level content under the existing Products section:

- `UI/product-zennoposter.html`
- `UI/product-capmonster-cloud.html`
- `UI/product-zennobrowser.html`
- `UI/product-zennodroid.html`
- `UI/product-capmonster.html`
- Legacy ProxyChecker product detail page, later removed from the current public product-page baseline.

Primary navigation remains unchanged: Home, Products, News, Careers, About. Product cards and footer product links now route to the local product detail pages.

The pages reuse `UI/assets/app.js` and `UI/assets/styles.css`. Each HTML file declares `data-page="product-detail"` and a `data-product` slug; shared JavaScript renders the localized content, breadcrumb, page title, product sections, support cards, related product links and contact CTA.

## Source Mapping

The local ZennoLab analysis informed the structure:

- Home/product matrix: ZennoPoster, CapMonster Cloud, ZennoDroid, CapMonster, ZennoProxyChecker, ZennoBrowser.
- ZennoPoster: easy onboarding, no-code automation, flexible workspace, support and community sections.
- ZennoBrowser: anonymity, profile limits, efficiency, real browser fingerprints, API integration, cloud data and support/community.
- CapMonster: core features, CAPTCHA type blocks, workflow steps and support cards.
- Product visual style: white/light blue-gray surfaces, restrained raised cards, pill CTAs and product accent colors.

## Constraints Preserved

- No new primary navigation items.
- No external framework, image tags, external images or remote CSS/JS.
- ZennoLab relationship wording stays conservative and does not claim exclusivity.
- Contact, ICP, official support accounts and enterprise email remain placeholders until administrator confirmation.
- Product pages are static display pages; no fake form submission or unsupported API behavior was added.

## Validation Plan

- `node --check UI/assets/app.js`
- Static scan for image tags, external assets, inline style blocks, `fetch`, and `XMLHttpRequest`.
- DOM-mock render smoke test for 5 primary pages plus 6 product pages across zh/en/ru.

## Open Risks

- Real browser visual QA is still required for desktop and mobile breakpoints.
- Final official product copy, pricing, support accounts and legal/brand wording still require administrator confirmation before public launch.
