# Issue #84 Visual Validation Report

Generated: 2026-07-25 follow-up run

## Scope

- Target pages: 7 product detail pages x 3 languages = 21 pages.
- Change target: hero right-side decorative `product-dashboard` panel only, plus scoped CSS/check coverage.
- Baseline hero heights retained from Issue #82: desktop `678px`, tablet `1164px`, mobile `1664px`.
- No first-level pages or cross-border network services merge pages were changed.
- No hero left-side text content was changed. No text color rules were added.

## Browser Validation

`browser-validation.json` contains 63 browser measurements: 21 pages x 3 viewports.

| Viewport | Expected detail hero height | Result |
| --- | ---: | --- |
| Desktop 1440x900 | 678px | PASS, all deltas within 8px |
| Tablet 820x1180 | 1164px | PASS, all deltas within 8px |
| Mobile 390x844 | 1664px | PASS, all deltas within 8px |

Additional checks in the browser payload:

- `panelCount = 1` on every measured detail page.
- `itemCount` matches the SSOT item count on every measured detail page.
- No left-copy overflow, panel overflow, or horizontal page overflow in the final run.

## SSOT Mapping

| Page group | Paths | SSOT source | SSOT section | Panel item titles |
| --- | --- | --- | --- | --- |
| Agriculture zh | `Agriculture.html` | `docs/蜜獾官网页面文案.md` zh §三 `六大核心功能` | 六大核心功能 | 物联网数据采集; AI 智能决策; 生产过程管理; 质量溯源体系; 仓储与供应链; 可视化数据大屏 |
| Agriculture en | `en/Agriculture.html` | en §III `Six Core Functions` | Six Core Functions | IoT Data Collection; AI Intelligent Decision-Making; Production Process Management; Quality Traceability System; Warehousing & Supply Chain; Visual Data Dashboard |
| Agriculture ru | `ru/Agriculture.html` | ru §III `Шесть основных функций` | Шесть основных функций | Сбор данных Интернета вещей; Интеллектуальные решения ИИ; Управление производственным процессом; Система прослеживаемости качества; Склад и цепочка поставок; Визуальная панель данных |
| YuanTu zh | `mihuan_yuantu.html` | zh §四 `六大核心功能` | 六大核心功能 | 智能原创重构; 批量处理引擎; 平台规格适配; 细节增强优化; 水印与合规处理; API 与工作流集成 |
| YuanTu en | `en/mihuan_yuantu.html` | en §IV `Six Core Functions` | Six Core Functions | Intelligent Original Reconstruction; Batch Processing Engine; Platform Specification Adaptation; Detail Enhancement & Optimization; Watermark & Compliance Processing; API & Workflow Integration |
| YuanTu ru | `ru/mihuan_yuantu.html` | ru §IV `Шесть основных функций` | Шесть основных функций | Интеллектуальная оригинальная реконструкция; Движок пакетной обработки; Адаптация под спецификации платформ; Улучшение и оптимизация деталей; Обработка водяных знаков и соответствие требованиям; Интеграция API и рабочих процессов |
| AI-FDE zh | `AI-FDE.html` | zh §五 `四大核心模块` | 四大核心模块 | AI 开发思维与工具链; 全栈技术栈实战; AI 原生应用开发; 商用项目交付实战 |
| AI-FDE en | `en/AI-FDE.html` | en §V `Four Core Modules` | Four Core Modules | AI Development Mindset & Toolchain; Full-Stack Tech Stack Practice; AI-Native Application Development; Commercial Project Delivery Practice |
| AI-FDE ru | `ru/AI-FDE.html` | ru §V `Четыре основных модуля` | Четыре основных модуля | Мышление разработки ИИ и инструментарий; Практика полностековых технологий; Разработка ИИ-оригинальных приложений; Практика поставки коммерческих проектов |
| TikTok zh | `TikTok.html` | zh §六 `四阶段 12 周陪跑内容` | 四阶段 12 周陪跑内容 | 第 1-2 周 账号基建与定位; 第 3-6 周 内容生产与流量启动; 第 7-10 周 引流矩阵与私域沉淀; 第 11-12 周 转化变现与复购体系 |
| TikTok en | `en/TikTok.html` | en §VI `Four-Phase 12-Week Coaching Content` | Four-Phase 12-Week Coaching Content | Weeks 1-2 Account Infrastructure & Positioning; Weeks 3-6 Content Production & Traffic Launch; Weeks 7-10 Traffic Matrix & Private Domain Accumulation; Weeks 11-12 Conversion Monetization & Repurchase System |
| TikTok ru | `ru/TikTok.html` | ru §VI `Содержание 12-недельного сопровождения в четыре этапа` | Содержание 12-недельного сопровождения в четыре этапа | Недели 1-2. Инфраструктура и позиционирование аккаунтов; Недели 3-6. Производство контента и запуск трафика; Недели 7-10. Матрица привлечения трафика и накопление приватной зоны; Недели 11-12. Монетизация конверсии и система повторных покупок |

## IP Panel Selection

IP detail panels use the SSOT service name, the service scenario phrase before the emphasis clause, and three selected core advantage titles.

| Service | Language | Service + scenario phrase | Selected core advantage titles |
| --- | --- | --- | --- |
| Static Residential IP | zh | 静态住宅 IP; 面向长期账号运营、店铺登录、广告账户管理等稳定身份场景 | 场景分层; 接入灵活; 运维可控 |
| Static Residential IP | en | Static Residential IP; For long-term account operations, store login, ad account management and other stable identity scenarios | Scenario-Based Matching; Flexible Integration; Controlled Operations |
| Static Residential IP | ru | Статический домашний IP; Для долгосрочной работы аккаунтов, входа в магазины, управления рекламными аккаунтами и других сценариев стабильной идентичности | Подбор по сценариям; Гибкая интеграция; Контролируемая эксплуатация |
| Datacenter IP | zh | 机房 IP; 面向批量采集、监测、测试、服务器业务出口等高并发场景 | 场景分层; 接入灵活; 运维可控 |
| Datacenter IP | en | Datacenter IP; For batch collection, monitoring, testing and server workload exits | Scenario-Based Matching; Flexible Integration; Controlled Operations |
| Datacenter IP | ru | Датацентровый IP; Для пакетного сбора, мониторинга, тестирования и серверных выходов | Подбор по сценариям; Гибкая интеграция; Контролируемая эксплуатация |
| Dynamic IP | zh | 动态 IP; 面向短周期调研、广告验证、公开数据抓取和高频多会话任务 | 场景分层; 接入灵活; 运维可控 |
| Dynamic IP | en | Dynamic IP; For short-cycle research, ad verification, public data collection and high-frequency multi-session tasks | Scenario-Based Matching; Flexible Integration; Controlled Operations |
| Dynamic IP | ru | Динамический IP; Для краткосрочных исследований, проверки рекламы, сбора публичных данных и высокочастотных многосессионных задач | Подбор по сценариям; Гибкая интеграция; Контролируемая эксплуатация |

Selection rationale: `场景分层 / Scenario-Based Matching / Подбор по сценариям`, `接入灵活 / Flexible Integration / Гибкая интеграция`, and `运维可控 / Controlled Operations / Контролируемая эксплуатация` are the three SSOT advantage titles most directly tied to choosing, integrating, and operating the three IP service types. `统一入口` and `合规表达` are page-level governance advantages, so they were not used inside per-service hero panels.

## Screenshot Artifacts

- `agriculture-zh-desktop.png`
- `yuantu-zh-desktop.png`
- `aifde-zh-desktop.png`
- `tiktok-zh-desktop.png`
- `static-ip-zh-desktop.png`
- `idc-ip-zh-desktop.png`
- `dynamic-ip-zh-desktop.png`
- `agriculture-en-desktop.png`
- `dynamic-ip-ru-desktop.png`
- `agriculture-zh-mobile.png`
- `dynamic-ip-zh-mobile.png`

## Result

- 21 hero panels: PASS
- SSOT title mapping: PASS
- Desktop/tablet/mobile hero-height regression: PASS
- Overflow and clipping check: PASS
