# Issue #18 Visual Report

## Scope

- Production page reviewed: `site/dist/careers.html`
- UI reference reviewed: `UI/careers.html`
- Viewports: desktop `1440x900`, mobile `390x844`
- Browser: Chrome via Playwright

## Artifacts

- `docs/review-artifacts/issue-18/careers-desktop.png`
- `docs/review-artifacts/issue-18/careers-mobile.png`
- `docs/review-artifacts/issue-18/careers-mobile-nav.png`
- `docs/review-artifacts/issue-18/ui-reference-careers-desktop.png`
- `docs/review-artifacts/issue-18/ui-reference-careers-mobile.png`
- `docs/review-artifacts/issue-18/playwright-results.json`

## UI Comparison

The production page keeps the shared static shell, fixed header, breadcrumb, language switcher, scaffold notice, footer, and support float used by the existing zh pages.

The reference page uses a dynamic recruiting filter, confirmed-looking location values, detailed responsibilities, disabled resume upload buttons, and older recruiting content. The production page intentionally diverges from those details because Issue #18 limits the SSOT to the Hero lead, 4 why-join points, 6 benefits, 4 job names with one-line summaries, and the 4-step recruiting process.

Production layout preserves the reference rhythm with a blue Hero, right-side recruiting visual, card grids for benefits and roles, a process section, and a contact placeholder block. Mobile renders as a single-column flow; the expanded mobile nav is visible and does not overlap page controls.

## Playwright Assertions

| Check | Result | Evidence |
| --- | --- | --- |
| Desktop overflow | PASS | `scrollWidth=1440`, viewport `1440` |
| Mobile overflow | PASS | `scrollWidth=390`, viewport `390` |
| Broken images | PASS | `0` broken images on desktop and mobile |
| Console/page errors | PASS | No console errors or page errors recorded |
| Careers current nav | PASS | Desktop and mobile current markers found |
| Breadcrumb home link | PASS | Breadcrumb navigated back to `index.html` |
| Support float | PASS | Support panel opened and `aria-expanded=true` |
| Five zh page nav links | PASS | `index/products/跨境网络服务/about/news` nav clicked through to `careers.html` |

## E2E Checklist

| ID | Result | Notes |
| --- | --- | --- |
| CAREER-001 | PASS | Hero title, lead, breadcrumb, and current nav asserted on `careers.html`. |
| CAREER-002 | PASS | 4 job cards and 6 benefit entries asserted in DOM. |
| CAREER-003 | N/A | Job details are SSOT-missing; same-page placeholder anchors only. |
| CAREER-004 | N/A | Application submission remains a structure placeholder; no form or fake success state. |
| CAREER-005 | PASS | 4 process steps asserted in DOM. |
| CAREER-006 | PASS | Support float interaction asserted. |
| NAV-002 | PASS | Five zh page desktop nav links reach `careers.html`. |
| NAV-005 | PASS | Mobile nav opens on `careers.html`; current careers state is present. |
