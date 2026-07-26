# Issue #92 Visual Report

## SSOT Section Mapping

| SSOT section | zh page block | en page block | ru page block | Notes |
|---|---|---|---|---|
| I. 企业简介 / Company Profile / Профиль компании | `#about-brand` | `#about-brand` | `#about-brand` | Includes the exact registered business scope and exact ZennoLab relationship statement. |
| II. 企业使命、愿景与核心价值观 / Mission, Vision and Core Values / Миссия, видение и основные ценности | `#about-positioning` | `#about-positioning` | `#about-positioning` | First retained `home-section-soft` block. |
| III. 产品与服务范围 / Product and Service Scope / Объем продуктов и услуг | `#about-services` | `#about-services` | `#about-services` | Includes four business blocks and the three server service paragraphs. English static residential wording uses `stable dedicated environments`. |
| IV. 核心竞争力 / Core Competitiveness / Ключевые конкурентные преимущества | `#about-competitiveness` | `#about-competitiveness` | `#about-competitiveness` | Uses the existing about timeline card system. |
| V. 企业服务承诺 / Service Commitments / Сервисные обязательства | `#about-commitments` | `#about-commitments` | `#about-commitments` | Uses the existing about card system with a scoped two-column desktop helper. |
| VI. 品牌结语 / Brand Closing Statement / Заключительное слово бренда | `#about-entity` | `#about-entity` | `#about-entity` | Second retained `home-section-soft` block; also carries the exact body relationship statement. |
| VII. 联系我们 / Contact Us / Связаться с нами | `#about-contact` | `#about-contact` | `#about-contact` | Preserved the Issue #90 formal contact module and values. |

## E2E Evidence

| Check | Result | Evidence |
|---|---|---|
| Build + validation loop | Passed | `pnpm.cmd run build && pnpm.cmd run check && pnpm.cmd run clean && pnpm.cmd run build` |
| zh desktop 1440x900 | Passed | `about-zh-desktop-1440x900.png`; width 1440, full height 7260, no horizontal overflow |
| en desktop 1440x900 | Passed | `about-en-desktop-1440x900.png`; width 1440, full height 9140, no horizontal overflow |
| ru desktop 1440x900 | Passed | `about-ru-desktop-1440x900.png`; width 1440, full height 10613, no horizontal overflow |
| zh mobile 390x844 | Passed | `about-zh-mobile-390x844.png`; width 390, full height 12387, no horizontal overflow |
| Built DOM sanity | Passed | `main`, footer, `h1`, one `.site-header`, and one `.about-hero` present in inspected build |

## Artifacts

- `about-zh-desktop-1440x900.png`
- `about-en-desktop-1440x900.png`
- `about-ru-desktop-1440x900.png`
- `about-zh-mobile-390x844.png`
