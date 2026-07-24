# Issue #28 Visual Report

- Target: site/dist/en/about.html
- Reference: UI/en/about.html
- Desktop screenshot: en-about-desktop.png (1440x900 full page)
- Mobile screenshot: en-about-mobile.png (390x844 full page)
- Mobile nav screenshot: en-about-mobile-nav.png
- Reference desktop: ui-reference-en-about-desktop.png
- Reference mobile: ui-reference-en-about-mobile.png

## UI Comparison

| Area | Result | Evidence |
| --- | --- | --- |
| Reference source | PASS | UI/en/about.html exists and was captured for desktop/mobile comparison. |
| Five-module structure | PASS | Brand, Positioning, Background, Entity and Contact sections render on the production page. |
| Navigation and breadcrumb | PASS | Header highlights About; breadcrumb reads Home / About Us. |
| Entity relationship | PASS | Exact relationship sentence appears in the entity block and footer. |
| Contact placeholders | PASS | Corporate email, support accounts and offline contact information remain To be configured. |
| Responsive behavior | PASS | 1440px and 390px screenshots have no horizontal overflow; mobile nav opens. |
| Runtime health | PASS | Console errors: 0; broken images: 0. |

## E2E Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| ABOUT-004 | PASS | Entity block and footer both contain the exact ZennoLab relationship sentence. |
| LANG-003 | PASS | EN About zh switcher opened file:///D:/workspace/mihuan_software_v2/site/dist/about.html. |
| LANG-004 | PASS | Breadcrumb text: Home / About Us |
| LANG-005 | PASS | Footer relationship statement checked exactly. |
| LANG-006 | PASS | EN home About nav reached file:///D:/workspace/mihuan_software_v2/site/dist/en/about.html; breadcrumb returned file:///D:/workspace/mihuan_software_v2/site/dist/en/index.html. |
| LANG-008 | PASS | Desktop/mobile overflow, broken image and console checks completed. |
| NAV-002 | PASS | Header marks About current; mobile navigation opens on 390px viewport. |
| NAV-005 | PASS | Two-level breadcrumb Home / About Us verified. |
| LANG-002 | PARTIAL | This issue adds the EN About page; zh About exists and RU target remains RU home by scope. |
| LANG-007 | N-A | RU About page is outside Issue #28 scope; RU switch intentionally targets RU home. |

## Runtime Signals

- Console errors: 0
- Broken images: 0
- Horizontal overflow: none
- Fake forms: 0
- Support panel opened: yes
