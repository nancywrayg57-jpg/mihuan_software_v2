# Issue #30 Visual Report

- Target: site/dist/en/news.html
- Reference: UI/en/news.html
- Desktop screenshot: en-news-desktop.png (1440x900 full page)
- Mobile screenshot: en-news-mobile.png (390x844 full page)
- Mobile nav screenshot: en-news-mobile-nav.png
- Reference desktop: ui-reference-en-news-desktop.png
- Reference mobile: ui-reference-en-news-mobile.png

## UI Comparison

| Area | Result | Evidence |
| --- | --- | --- |
| Reference source | PASS | UI/en/news.html exists and was captured for desktop/mobile comparison. |
| Navigation and breadcrumb | PASS | Header highlights News; breadcrumb reads Home / News. |
| Category area | PASS | Static category anchors render without fake filtering controls. |
| Entry list cards | PASS | Six SSOT entries render with category, title and date. |
| Thumbnails and pending links | PASS | Inline SVG thumbnails are present; detail links stay as same-page anchors. |
| Footer and support | PASS | Exact relationship sentence and contact/compliance placeholders remain. |
| Responsive behavior | PASS | 1440px and 390px screenshots have no horizontal overflow; mobile nav opens. |
| Runtime health | PASS | Console errors: 0; broken images: 0. |

## E2E Checklist

| Check | Status | Evidence |
| --- | --- | --- |
| NEWS-001 | PASS | Categories: All / Company News / Product Updates / Industry News / Tech Sharing. |
| NEWS-002 | PASS | Exactly 6 SSOT English news entries render with category, title and date. |
| NEWS-003 | PASS | Six time elements use YYYY-MM-DD datetime and display text. |
| NEWS-004 | PASS | Six inline SVG thumbnails expose English thumbnail aria-labels. |
| NEWS-005 | PASS | All entry detail links stay on #news-detail-pending. |
| NEWS-010 | PASS | No fake filter buttons, fake forms or fake submission controls are present. |
| LANG-003 | PASS | EN News zh switcher opened file:///D:/workspace/mihuan_software_v2/site/dist/news.html. |
| LANG-004 | PASS | Breadcrumb text: Home / News |
| LANG-005 | PASS | Footer relationship statement checked exactly. |
| LANG-006 | PASS | EN home News nav reached file:///D:/workspace/mihuan_software_v2/site/dist/en/news.html; breadcrumb returned file:///D:/workspace/mihuan_software_v2/site/dist/en/index.html. |
| LANG-008 | PASS | Desktop/mobile overflow, broken image and console checks completed. |
| NAV-002 | PASS | Header marks News current; mobile navigation opens on 390px viewport. |
| NAV-005 | PASS | Two-level breadcrumb Home / News verified. |
| LANG-002 | PARTIAL | This issue adds the EN News page; zh News exists and RU target remains RU home by scope. |
| LANG-007 | N-A | RU News page is outside Issue #30 scope; RU switch intentionally targets RU home. |

## Runtime Signals

- Console errors: 0
- Broken images: 0
- Horizontal overflow: none
- Fake forms: 0
- Disallowed filter buttons: 0
- Support panel opened: yes
