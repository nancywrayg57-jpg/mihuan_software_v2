# Issue #32 Visual E2E Report

- Production page reviewed: `site/dist/en/careers.html`
- UI reference reviewed: `UI/en/careers.html`
- Viewports: desktop 1440x900, mobile 390x844
- Browser: Google Chrome via Playwright

## Artifacts

- `docs/review-artifacts/issue-32/en-careers-desktop.png`
- `docs/review-artifacts/issue-32/en-careers-mobile.png`
- `docs/review-artifacts/issue-32/en-careers-mobile-nav.png`
- `docs/review-artifacts/issue-32/ui-reference-en-careers-desktop.png`
- `docs/review-artifacts/issue-32/ui-reference-en-careers-mobile.png`
- `docs/review-artifacts/issue-32/playwright-results.json`

## UI Reference Comparison

- The production page uses the established English static shell, header, breadcrumb, footer and support floating control from the `site/src` production pages.
- Compared with `UI/en/careers.html`, the target preserves the Careers page structure and responsive behavior while replacing prototype-only recruiting facts with Issue #32 English SSOT copy and explicit `To be configured` placeholders.
- Desktop and mobile target screenshots were checked against the UI reference screenshots for navigation, breadcrumb, role cards, process area, spacing, footer placement and support control visibility.

## Assertion Summary

| Check | Status | Evidence |
|---|---|---|
| en-careers-desktop: no horizontal overflow | PASS | {"title":"Careers \| Honey Badger","h1":"Join Honey Badger, Do Something Valuable Together","scrollWidth":1440,"clientWidth":1440,"bodyScrollWidth":1440,"bodyClientWidth":1440,"brokenImages":[],"navCurrent":2,"supportExists":true} |
| en-careers-desktop: 0 broken images | PASS | [] |
| careers hero title | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers hero lead | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers breadcrumb home/current | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers current nav markers | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers required counts | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers no fake form | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers footer relationship exact | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers no real contact or over-scoped wording | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers job placeholders | PASS | {"title":"Join Honey Badger, Do Something Valuable Together","lead":"A young and efficient team focused on bringing world-leading automation technology and AI capabilities to Chinese customers.","breadcrumbHome":"Home","breadcrumbCurrent":"Careers","currentNavCount":2,"jobs":4,"benefits":6,"processes":4,"fakeForms":0,"footerRelationship":true,"realForbidden":false,"overscope":false,"locations":["To be configured","To be configured","To be configured","To be configured"],"types":["To be configured","To be configured","To be configured","To be configured"]} |
| careers support float opens | PASS | {"expanded":"true","configuredCount":4} |
| careers breadcrumb navigates home | PASS | file:///D:/workspace/mihuan_software_v2/site/dist/en/index.html |
| en home desktop nav has careers link | PASS | {"homeNavCount":1} |
| en home desktop nav reaches careers | PASS | {"url":"file:///D:/workspace/mihuan_software_v2/site/dist/en/careers.html","h1":"Join Honey Badger, Do Something Valuable Together"} |
| careers zh language switch keeps careers context | PASS | {"url":"file:///D:/workspace/mihuan_software_v2/site/dist/careers.html","h1":"加入蜜獾，一起做有价值的事"} |
| en-careers-mobile: no horizontal overflow | PASS | {"title":"Careers \| Honey Badger","h1":"Join Honey Badger, Do Something Valuable Together","scrollWidth":390,"clientWidth":390,"bodyScrollWidth":390,"bodyClientWidth":390,"brokenImages":[],"navCurrent":2,"supportExists":true} |
| en-careers-mobile: 0 broken images | PASS | [] |
| careers mobile nav opens | PASS | {"expanded":"true","mobileCareersCurrent":true} |
| ui-reference-en-careers-desktop: no horizontal overflow | PASS | {"title":"Careers \| Honey Badger","h1":"Careers","scrollWidth":1440,"clientWidth":1440,"bodyScrollWidth":1440,"bodyClientWidth":1440,"brokenImages":[],"navCurrent":2,"supportExists":false} |
| ui-reference-en-careers-desktop: 0 broken images | PASS | [] |
| ui reference desktop renders careers page | PASS | {"title":"Careers \| Honey Badger","h1":"Careers","sectionCount":5} |
| ui-reference-en-careers-mobile: no horizontal overflow | PASS | {"title":"Careers \| Honey Badger","h1":"Careers","scrollWidth":390,"clientWidth":390,"bodyScrollWidth":390,"bodyClientWidth":390,"brokenImages":[],"navCurrent":2,"supportExists":false} |
| ui-reference-en-careers-mobile: 0 broken images | PASS | [] |
| en-careers-desktop: no console/page errors | PASS | [] |
| en-home-nav: no console/page errors | PASS | [] |
| language-switch: no console/page errors | PASS | [] |
| en-careers-mobile: no console/page errors | PASS | [] |
| ui-reference-en-careers-desktop: no console/page errors | PASS | [] |
| ui-reference-en-careers-mobile: no console/page errors | PASS | [] |

## E2E Checklist

| ID | Status | Evidence |
|---|---|---|
| CAREER-001 | PASS | Hero title, lead, breadcrumb, and Careers current nav were asserted on site/dist/en/careers.html. |
| CAREER-002 | PASS | Why Join Us 4 items, Benefits 6 items, and Open Positions 4 cards were counted and source checker validates exact English SSOT markers. |
| CAREER-003 | N-A | Role details/responsibilities are intentionally pending because Issue #32 only authorizes role name and one-line summary. |
| CAREER-004 | N-A | Application submission remains a placeholder; no fake form or fake submission state exists. |
| CAREER-005 | PASS | Recruitment process renders exactly 4 configured steps: Resume Submission, Initial Screening, Business Interview, Final Interview / Offer. |
| CAREER-006 | PASS | Footer relationship sentence is exact and support/footer contact values remain To be configured. |
| LANG-002 | PARTIAL | English careers page is complete; RU careers page is intentionally out of Issue #32 scope and links to the RU home fallback. |
| LANG-003 | PASS | html lang en-US, English title/description, and EN current language state are validated by check.mjs and browser pass. |
| LANG-004 | PASS | Language switch from en/careers.html to zh careers context reached site/dist/careers.html. |
| LANG-005 | PASS | English production page content remains English except the explicit skeleton notice required by this static scaffold. |
| LANG-006 | PASS | Desktop and mobile screenshots show stable responsive layout with no horizontal overflow. |
| LANG-007 | N-A | RU careers page is not implemented in this issue; fallback remains ../ru/index.html by requirement. |
| LANG-008 | PASS | No broken images and no console/page errors were observed across target and UI reference pages. |
| NAV-002 | PASS | English home desktop Careers nav was clicked and reached site/dist/en/careers.html. |
| NAV-005 | PASS | Mobile menu opened on en/careers.html and Careers remained marked as the current item. |

## Notes

- CAREER-003 and CAREER-004 are N/A by design because Issue #32 requires placeholder-only role details and application channels.
- LANG-002 is PARTIAL and LANG-007 is N/A because Russian careers implementation is out of this issue scope.
- No real contact values, fake application form, fake submission state, or over-scoped ZennoLab relationship wording were observed.
