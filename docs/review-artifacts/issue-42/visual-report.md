# Issue #42 Visual Review

## Scope

Target page: `site/dist/ru/careers.html`

Reference page opened: `UI/ru/careers.html`. The reference is the older prerender shell, so the production target follows `site/src/en/careers.html` for careers structure and `site/src/ru/news.html` for the Russian production shell.

## Screenshots

- `ru-careers-desktop.png`
- `ru-careers-mobile.png`
- `ru-careers-mobile-nav.png`
- `ui-reference-ru-careers-desktop.png`
- `ui-reference-ru-careers-mobile.png`

## UI Comparison

- Layout: target upgrades the reference shell into the production section sequence: hero, why-join grid, benefits grid, job cards, process, application placeholder, detail pending anchor, footer and floating support.
- Navigation: target uses the Russian production header/footer shell and marks `Карьера` current on desktop and mobile.
- Breadcrumb: target renders `Главная / Карьера` below the header and the home link returns to the Russian home page.
- Job cards: four cards retain only SSOT role names and summaries; location/type stay `Будет настроено`.
- Process: four SSOT process steps render as an ordered process list.
- Color/spacing: target reuses the existing shared careers/news CSS classes and matches the production card/grid rhythm.
- Responsive: desktop 1440x900 and mobile 390x844 screenshots show no horizontal overflow; mobile navigation expands without covering core content incoherently.
- Footer/support: exact ZennoLab relationship sentence is present; support/contact values remain placeholders.

## E2E Checklist

| ID | Result | Evidence |
| --- | --- | --- |
| CAREER-001 | PASS | Hero, why-join 4 points, benefits 6 items, 4 job cards and process 4 steps are present. |
| CAREER-002 | PASS | Each job card keeps location/type as Будет настроено and links only to #career-detail-pending. |
| CAREER-003 | N/A | No confirmed responsibilities/requirements in Russian SSOT §X; details remain pending anchor. |
| CAREER-004 | N/A | No real application endpoint or email confirmed for this page; no fake application form is present. |
| CAREER-005 | PASS | No fake submit flow and no invented salary/location/type/responsibility facts. |
| CAREER-006 | PASS | Footer relationship is exact; real contact values and over-scoped wording are absent. |
| LANG-002 | PARTIAL | Russian careers is complete; remaining S3 SEO alignment is outside Issue #42 scope. |
| LANG-003 | PASS | zh/en language switches land on careers pages. |
| LANG-004 | PASS | ru-RU metadata, title and breadcrumb are present. |
| LANG-005 | PASS | Russian page content has no Chinese outside the explicit scaffold notice. |
| LANG-006 | PASS | Desktop and mobile scroll widths do not exceed viewport width. |
| LANG-007 | N/A | No child job-detail page introduced in Issue #42. |
| LANG-008 | PASS | No broken images, console errors or page errors during target/reference/navigation checks. |
| NAV-002/005 | PASS | RU home careers nav reaches ru/careers and breadcrumb returns to ru home. |

## Assertions

| Result | Assertion | Evidence |
| --- | --- | --- |
| PASS | Desktop target title/lang/meta | {"title":"Карьера \| Honey Badger","lang":"ru-RU"} |
| PASS | Career structure counts | {"jobs":4,"benefits":6,"why":4,"process":4} |
| PASS | Job placeholders and pending links | {"locations":4,"types":4,"details":4} |
| PASS | No fake application form | No form or submit button present |
| PASS | Breadcrumb and current nav | {"breadcrumb":"Главная\n/\nКарьера","currentLinks":2} |
| PASS | Language switcher context | [{"lang":"zh-CN","href":"../careers.html","current":null},{"lang":"en-US","href":"../en/careers.html","current":null},{"lang":"ru-RU","href":"./careers.html","current":"true"}] |
| PASS | Footer relationship exact | Footer relationship sentence present exactly |
| PASS | No real contacts or over-scoped wording | {"realContact":false,"overScoped":false,"unconfirmedRecruiting":false} |
| PASS | No broken images desktop | [] |
| PASS | Desktop no horizontal overflow | overflow delta 0 |
| PASS | Russian content outside scaffold notice | [] |
| PASS | Mobile no horizontal overflow | overflow delta 0 |
| PASS | Mobile navigation expands | Menu button aria-expanded=true and mobile nav visible |
| PASS | RU home nav reaches careers | file:///D:/workspace/mihuan_software_v2/site/dist/ru/careers.html |
| PASS | Careers breadcrumb returns home | file:///D:/workspace/mihuan_software_v2/site/dist/ru/index.html |
| PASS | ZH language switch keeps careers context | file:///D:/workspace/mihuan_software_v2/site/dist/careers.html |
| PASS | EN language switch keeps careers context | file:///D:/workspace/mihuan_software_v2/site/dist/en/careers.html |
| PASS | Floating support toggles | support-toggle aria-expanded=true after click |
| PASS | No console or page errors | [] |
