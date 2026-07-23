// Extracted and adapted from D:\workspace\mihuan\honey_badger_standalone_site.html.
// Shared behavior and multilingual content for the five split Honey Badger UI pages.
const SITE = {
      zh: {
        langAttr: "zh-CN",
        title: "蜜獾软件 | ZennoLab 中国官方运营实体",
        description: "蜜獾面向中国市场承接 ZennoLab 产品能力、本地化技术支持、企业咨询与服务交付，专注浏览器自动化、验证码识别、反检测浏览器、代理质量管理及移动端自动化。",
        nav: {
          home: "首页",
          products: "产品",
          news: "新闻资讯",
          careers: "人才招聘",
          about: "关于我们"
        },
        common: {
          menu: "菜单",
          home: "首页",
          learnMore: "了解更多",
          contact: "联系我们",
          products: "了解产品",
          consult: "咨询合作",
          viewNews: "查看资讯",
          viewCareers: "查看招聘",
          service: "客服",
          wechat: "微信",
          qq: "QQ",
          dingtalk: "钉钉",
          pending: "官方账号待确认，正式上线前替换为真实渠道。"
        },
        productItems: [
          { code: "AG", name: "数字化农业综合管理系统", accent: "accent-green", summary: "全链条智慧农业管控平台，物联网+AI实现生产、监管、溯源数字化管理。", tags: ["智慧农业", "物联网", "AI监管"], href: "Agriculture.html" },
          { code: "IMG", name: "蜜獾原图", accent: "accent-cyan", summary: "跨境AI图片原创工具，批量处理商品图，规避查重，适配全海外电商平台。", tags: ["AI图片", "跨境电商", "批量处理"], href: "mihuan_yuantu.html" },
          { code: "AI", name: "AI-FDE VibeCoding培训", accent: "accent-violet", summary: "前沿AI自然语言开发实战教学，手把手落地商用AI系统项目。", tags: ["Vibe Coding", "AI实战", "商用项目"], href: "AI-FDE.html" },
          { code: "SM", name: "社媒跨境私域陪跑", accent: "accent-warning", summary: "TikTok/FB/INS全域运营陪跑，从引流到私域转化全流程实操指导。", tags: ["TikTok", "私域转化", "陪跑服务"], href: "TikTok.html" },
          { code: "SIP", name: "静态住宅IP", accent: "accent-purple", summary: "真实家庭宽带、长期固定IP、风控识别低、独享稳定，适合社媒养号、店铺运营与跨境登录。", tags: ["住宅网络", "固定IP", "低风控"], href: "static-ip.html" },
          { code: "IDC", name: "机房IP", accent: "accent-green", summary: "带宽高、延迟低、成本低、IP固定、并发强，适合批量采集、服务器业务与多账号轻量运营。", tags: ["高带宽", "低延迟", "强并发"], href: "idc-ip.html" },
          { code: "DIP", name: "动态IP", accent: "accent-cyan", summary: "海量家庭IP池，支持自动轮换与防封禁，适合大规模数据抓取、广告验证与高频多会话任务。", tags: ["自动轮换", "IP池", "高频任务"], href: "dynamic-ip.html" }
        ],
        home: {
          eyebrow: "Honey Badger 蜜獾",
          title: "蜜獾软件",
          subtitle: "ZennoLab 中国官方运营实体",
          lead: "蜜獾（Honey Badger）是俄罗斯 ZennoLab 公司在中国的官方运营实体，全面负责 ZennoLab 旗下全系列自动化产品在中国市场的本地化运营、技术支持与客户服务。我们依托原厂核心技术能力与全球行业经验，深度结合国内市场的实际需求与业务场景，为国内客户提供稳定可靠、适配本土环境的自动化解决方案与全周期服务保障，助力企业与开发者降低技术门槛、提升运营效率。",
          ctaPrimary: "了解产品矩阵",
          ctaSecondary: "联系服务团队",
          stats: [
            ["7", "产品与服务方向"],
            ["3", "语言内容结构"],
            ["24h", "服务入口常驻"]
          ],
          productTitle: "产品矩阵",
          productLead: "围绕数字化农业、跨境电商图片原创化、AI自然语言开发培训、海外社媒私域运营与IP资源服务，提供可落地的产品和服务方案。",
          relationTitle: "品牌关系与本地服务边界",
          relationLead: "蜜獾（Honey Badger）是俄罗斯 ZennoLab 公司在中国的官方运营实体，负责 ZennoLab 旗下自动化产品在中国市场的本地化运营与服务支持。我们依托 ZennoLab 全球成熟的工业级自动化技术积累，结合本土团队的行业经验与服务能力，为国内客户提供适配本地场景的自动化解决方案、技术支持与落地服务，保障产品在国内环境下的稳定运行与高效适配。",
          relationItems: [
            { title: "产品承接", body: "围绕智慧农业、跨境电商、AI开发培训和海外社媒私域增长建立产品说明和咨询入口。" },
            { title: "本地支持", body: "为中国企业、开发者和合作方提供本地语言、交付流程和问题定位支持。" },
            { title: "合规上线", body: "作为 ZennoLab 中国官方运营实体，我们严格遵守国内相关法规要求，确保所有产品服务与运营环节均符合本地化合规标准。" }
          ],
          newsTitle: "新闻资讯预览",
          newsLead: "浏览公司动态、行业资讯与产品更新，了解蜜獾本地服务和 ZennoLab 产品能力的上线进展。",
          careerTitle: "人才招聘预览",
          careerLead: "查看岗位机会、福利待遇、招聘流程和简历投递指引，了解蜜獾团队的人才需求。"
        },
        products: {
          eyebrow: "Products",
          title: "蜜獾产品与服务介绍",
          lead: "覆盖智慧农业、跨境电商图片原创化、AI自然语言开发培训与海外社媒私域陪跑。",
          capabilityTitle: "核心能力",
          capabilityLead: "每项产品与服务都对应明确业务问题、适用场景和落地价值。",
          capabilities: [
            { title: "产业数字化管控", body: "融合物联网、大数据与AI，把生产、监管、仓储和溯源纳入统一管理链路。" },
            { title: "跨境图片原创化", body: "批量重构商品原图，保留核心细节并适配海外电商平台主图和场景图要求。" },
            { title: "AI开发能力建设", body: "以Vibe Coding自然语言开发范式为核心，训练团队从零搭建商用AI系统。" },
            { title: "海外私域增长", body: "打通TikTok、Facebook、Instagram的引流、沉淀、转化和复盘流程。" }
          ],
          flowTitle: "服务落地路径",
          flow: [
            ["01", "确认业务目标、场景边界与交付范围"],
            ["02", "选择对应产品或陪跑服务方案"],
            ["03", "建立试点流程、素材或系统原型"],
            ["04", "完成培训、交付、复盘与持续迭代"]
          ]
        },
        about: {
          eyebrow: "About Honey Badger",
          title: "以工业级可靠性承接全球自动化产品能力",
          lead: "蜜獾（Honey Badger）是俄罗斯 ZennoLab 公司在中国的官方运营实体，全面负责 ZennoLab 旗下全系列自动化产品在中国市场的本地化运营、技术支持与客户服务。我们依托原厂核心技术能力与全球行业经验，深度结合国内市场的实际需求与业务场景，为国内客户提供稳定可靠、适配本土环境的自动化解决方案与全周期服务保障，助力企业与开发者降低技术门槛、提升运营效率。",
          sections: [
            { title: "品牌定位", body: "蜜獾定位为面向中国市场的专业自动化产品运营与服务实体，以「工业级可靠性、透明化服务、本地化响应」为核心服务准则，聚焦企业级自动化与效率提升需求，为国内开发者团队、跨境电商从业者、海外社媒运营团队、数字化转型企业等各类客户，提供从产品咨询、部署适配到技术运维的全链路配套服务，打造可落地、可信赖、可持续的自动化产品支持体系。" },
            { title: "企业背景", body: "依托 ZennoLab 在全球自动化领域十余年的技术积累与成熟产品体系，在自动化工具研发、网络代理服务、验证码识别、流程自动化等多个领域拥有深厚的技术沉淀与广泛的行业应用基础。我们针对中国市场组建了由产品、技术、客服、运营构成的本土化专业团队，搭建完整的中文信息架构、标准化服务流程、专属技术咨询通道与客户支持体系，同时针对国内网络环境、使用习惯与业务场景做了专项适配优化，确保原厂工业级自动化技术能力在国内场景下的高效落地与稳定运行。" },
            { title: "主体说明", body: "我们严格以 ZennoLab 中国官方运营实体的身份开展所有业务，所有服务范围、产品授权与合作模式均以 ZennoLab 官方公开信息为准，严格遵循国内相关法律法规与行业规范开展运营，涵盖数据安全、网络安全、个人信息保护等多个合规维度。我们坚持透明、合规的运营原则，不做超出运营实体范畴的资质表述与夸大承诺，所有合作均签订明确的服务协议、权责清晰可追溯，保障所有客户的合作权益与服务稳定性，所有官方信息均通过本官网正规渠道统一发布。" }
          ],
          contactEyebrow: "Contact",
          contactTitle: "联系我们",
          contactLead: "关于我们页保留正式联系模块，统一承接品牌咨询、产品咨询、跨境网络服务咨询和合作沟通。",
          contact: [
            ["微信客服", "zennolabchina"],
            ["QQ 客服", "48151650"],
            ["企业邮箱", "marketing@honeybadgersoft.com"],
            ["钉钉客服", "待配置，未配置前为上线阻塞项"]
          ],
          contactNotice: ""
        },
        footer: {
          relation: "蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体。",
          products: "产品",
          resources: "资源",
          company: "公司",
          copyright: "版权信息待确认",
          icp: "ICP 备案号待确认"
        }
      },
      en: {
        langAttr: "en-US",
        title: "Honey Badger Software | ZennoLab Official Operating Entity in China",
        description: "Honey Badger undertakes ZennoLab product capabilities, localized technical support, enterprise consulting and service delivery for China, focusing on browser automation, CAPTCHA recognition, anti-detect browsers, proxy quality and mobile automation.",
        nav: {
          home: "Home",
          products: "Products",
          news: "News",
          careers: "Careers",
          about: "About"
        },
        common: {
          menu: "Menu",
          home: "Home",
          learnMore: "Learn more",
          contact: "Contact us",
          products: "Explore products",
          consult: "Talk to us",
          viewNews: "View news",
          viewCareers: "View careers",
          service: "Support",
          wechat: "WeChat",
          qq: "QQ",
          dingtalk: "DingTalk",
          pending: "Official accounts are pending confirmation and must be replaced before launch."
        },
        productItems: [
          { code: "AG", name: "Digital Agriculture Integrated Management System", accent: "accent-green", summary: "A full-chain smart agriculture control platform using IoT + AI for digital production, supervision and traceability.", tags: ["Smart agriculture", "IoT", "AI oversight"], href: "Agriculture.html" },
          { code: "IMG", name: "Honey Badger Original Image", accent: "accent-cyan", summary: "A cross-border AI image originality tool for batch product image processing, duplicate-check avoidance and overseas marketplace adaptation.", tags: ["AI images", "Cross-border", "Batch processing"], href: "mihuan_yuantu.html" },
          { code: "AI", name: "AI-FDE VibeCoding Training", accent: "accent-violet", summary: "Practical training in frontier AI natural-language development, guiding teams to deliver commercial AI system projects.", tags: ["Vibe Coding", "AI practice", "Commercial projects"], href: "AI-FDE.html" },
          { code: "SM", name: "Social Commerce Private Domain Coaching", accent: "accent-warning", summary: "TikTok/FB/INS full-channel operations coaching, from public traffic acquisition to private-domain conversion.", tags: ["TikTok", "Private domain", "Coaching"], href: "TikTok.html" },
          { code: "SIP", name: "Static Residential IP", accent: "accent-purple", summary: "Real home broadband with long-term fixed IPs, low risk-control recognition and stable exclusive access for accounts and stores.", tags: ["Residential", "Fixed IP", "Low risk"], href: "static-ip.html" },
          { code: "IDC", name: "Datacenter IP", accent: "accent-green", summary: "High bandwidth, low latency, low cost, fixed IPs and strong concurrency for bulk collection, server workloads and light multi-account operations.", tags: ["High bandwidth", "Low latency", "Concurrency"], href: "idc-ip.html" },
          { code: "DIP", name: "Dynamic IP", accent: "accent-cyan", summary: "Large residential IP pools with automatic rotation and anti-blocking support for scraping, ad verification and high-frequency sessions.", tags: ["Auto rotation", "IP pool", "High frequency"], href: "dynamic-ip.html" }
        ],
        home: {
          eyebrow: "Honey Badger",
          title: "Honey Badger Software",
          subtitle: "ZennoLab Official Operating Entity in China",
          lead: "Honey Badger undertakes ZennoLab product capabilities, localized technical support, enterprise consulting and service delivery for the Chinese market. Since its establishment, we have focused on browser automation, CAPTCHA recognition, anti-detect browsers, proxy quality management and mobile automation, helping clients build efficient and reliable workflows in complex network environments.",
          ctaPrimary: "Explore products",
          ctaSecondary: "Contact service team",
          stats: [["7", "Product and service lines"], ["3", "Language layers"], ["24h", "Persistent support entry"]],
          productTitle: "Product Matrix",
          productLead: "Honey Badger combines digital agriculture, cross-border image originality, AI natural-language development training, overseas social private-domain operations and IP resource services into practical product and service options.",
          relationTitle: "Brand Relationship and Local Service Boundary",
          relationLead: "Honey Badger is ZennoLab's operations entity in China. The wording stays precise and avoids unconfirmed claims such as exclusive or sole agent.",
          relationItems: [
            { title: "Product localization", body: "Chinese product narratives and inquiry paths for ZennoPoster, CapMonster, ZennoBrowser and more." },
            { title: "Local support", body: "Local language, delivery workflow and troubleshooting support for enterprises and developers in China." },
            { title: "Launch readiness", body: "ICP, support accounts, enterprise email and copyright information remain configurable until real values are confirmed." }
          ],
          newsTitle: "News Preview",
          newsLead: "Read company updates, industry notes and product progress for Honey Badger local services and ZennoLab capabilities in China.",
          careerTitle: "Careers Preview",
          careerLead: "Review open roles, benefits, recruiting process and resume submission guidance for the Honey Badger team."
        },
        products: {
          eyebrow: "Products",
          title: "Localized ZennoLab product capabilities for China",
          lead: "The products page follows ZennoLab's product-matrix logic: overview first, then capabilities, scenarios and inquiry paths.",
          capabilityTitle: "Core Capabilities",
          capabilityLead: "Each capability maps to a clear problem, scenario and customer value.",
          capabilities: [
            { title: "Visual automation orchestration", body: "For repetitive browser operations, bulk tasks and maintainable workflows across operations, testing and data teams." },
            { title: "CAPTCHA recognition and API integration", body: "Turns recognition into a callable capability and reduces manual handling costs." },
            { title: "Multi-account environment isolation", body: "Uses browser fingerprints and profile management to improve isolation and risk control." },
            { title: "Network quality assurance", body: "Proxy validation, rotation and health checks support stable high-frequency tasks." }
          ],
          flowTitle: "Adoption Path",
          flow: [["01", "Confirm scenario and automation boundaries"], ["02", "Select the ZennoLab product mix"], ["03", "Build test flows and recognition links"], ["04", "Add local service, training and support"]]
        },
        about: {
          eyebrow: "About Honey Badger",
          title: "Industrial reliability for global automation products",
          lead: "Honey Badger must clearly state the corporate relationship: Honey Badger is ZennoLab's operations entity in China.",
          sections: [
            { title: "Brand positioning", body: "Honey Badger serves the Chinese market as an automation product operations and service entity with reliability and transparency." },
            { title: "Company background", body: "It builds Chinese information architecture, service workflows and inquiry entrances around ZennoLab products." },
            { title: "Entity statement", body: "Without further confirmation, wording must not expand into exclusive, sole-agent or general-agent claims." }
          ],
          contactEyebrow: "Contact",
          contactTitle: "Contact Us",
          contactLead: "The About page keeps a formal contact module for brand inquiries, product inquiries, cross-border network service inquiries and partnership communication.",
          contact: [
            ["WeChat Support", "zennolabchina"],
            ["QQ Support", "48151650"],
            ["Corporate Email", "marketing@honeybadgersoft.com"],
            ["DingTalk Support", "Pending configuration; blocks launch until configured"]
          ],
          contactNotice: ""
        },
        footer: {
          relation: "Honey Badger is ZennoLab's operations entity in China.",
          products: "Products",
          resources: "Resources",
          company: "Company",
          copyright: "Copyright pending confirmation",
          icp: "ICP record pending"
        }
      },
      ru: {
        langAttr: "ru-RU",
        title: "Honey Badger Software | Официальная операционная структура ZennoLab в Китае",
        description: "Honey Badger принимает возможности ZennoLab, локальную техническую поддержку, консультации и сервисную поставку для Китая, фокусируясь на автоматизации браузера, CAPTCHA, антидетект-браузерах, прокси и мобильной автоматизации.",
        nav: {
          home: "Главная",
          products: "Продукты",
          news: "Новости",
          careers: "Карьера",
          about: "О нас"
        },
        common: {
          menu: "Меню",
          home: "Главная",
          learnMore: "Подробнее",
          contact: "Связаться",
          products: "Продукты",
          consult: "Консультация",
          viewNews: "Новости",
          viewCareers: "Вакансии",
          service: "Поддержка",
          wechat: "WeChat",
          qq: "QQ",
          dingtalk: "DingTalk",
          pending: "Официальные аккаунты ожидают подтверждения и должны быть заменены перед запуском."
        },
        productItems: [
          { code: "AG", name: "Интегрированная система цифрового сельского хозяйства", accent: "accent-green", summary: "Платформа полного цикла для умного сельского хозяйства: IoT + AI для цифрового производства, контроля и прослеживаемости.", tags: ["Умное сельское хозяйство", "IoT", "AI-контроль"], href: "Agriculture.html" },
          { code: "IMG", name: "Honey Badger Original Image", accent: "accent-cyan", summary: "AI-инструмент оригинализации изображений для трансграничной торговли: пакетная обработка, снижение риска дублей и адаптация к зарубежным площадкам.", tags: ["AI-изображения", "E-commerce", "Пакетная обработка"], href: "mihuan_yuantu.html" },
          { code: "AI", name: "AI-FDE VibeCoding обучение", accent: "accent-violet", summary: "Практическое обучение разработке с AI и естественным языком, с доведением коммерческих AI-систем до запуска.", tags: ["Vibe Coding", "AI-практика", "Коммерческие проекты"], href: "AI-FDE.html" },
          { code: "SM", name: "Сопровождение private-domain для соцсетей", accent: "accent-warning", summary: "Сопровождение TikTok/FB/INS по всему циклу: от привлечения трафика до конверсии в private-domain.", tags: ["TikTok", "Private domain", "Сопровождение"], href: "TikTok.html" },
          { code: "SIP", name: "Статический residential IP", accent: "accent-purple", summary: "Реальный домашний широкополосный доступ, долгосрочный фиксированный IP, низкое распознавание риск-контролем и стабильный выделенный доступ.", tags: ["Residential", "Фиксированный IP", "Низкий риск"], href: "static-ip.html" },
          { code: "IDC", name: "Datacenter IP", accent: "accent-green", summary: "Высокая пропускная способность, низкая задержка, низкая стоимость, фиксированный IP и высокая параллельность для сбора данных и серверных задач.", tags: ["Высокая скорость", "Низкая задержка", "Параллельность"], href: "idc-ip.html" },
          { code: "DIP", name: "Динамический IP", accent: "accent-cyan", summary: "Большой пул домашних IP с автоматической ротацией и защитой от блокировок для сбора данных, проверки рекламы и частых сессий.", tags: ["Авто-ротация", "IP-пул", "Частые сессии"], href: "dynamic-ip.html" }
        ],
        home: {
          eyebrow: "Honey Badger",
          title: "Honey Badger Software",
          subtitle: "Официальная операционная структура ZennoLab в Китае",
          lead: "Honey Badger принимает на себя продуктовые возможности ZennoLab, локальную техническую поддержку, корпоративные консультации и сервисную поставку для китайского рынка. С момента основания мы фокусируемся на автоматизации браузера, распознавании CAPTCHA, антидетект-браузерах, управлении качеством прокси и мобильной автоматизации, помогая клиентам строить эффективные и надежные рабочие процессы в сложной сетевой среде.",
          ctaPrimary: "Матрица продуктов",
          ctaSecondary: "Связаться с командой",
          stats: [["7", "Продуктов и сервисов"], ["3", "Языковые версии"], ["24h", "Постоянный вход поддержки"]],
          productTitle: "Матрица продуктов",
          productLead: "Honey Badger объединяет цифровое сельское хозяйство, оригинализацию изображений для e-commerce, AI-обучение, overseas social private-domain операции и IP-ресурсы в практичные продукты и сервисы.",
          relationTitle: "Брендовая связь и локальные границы сервиса",
          relationLead: "Honey Badger является операционной структурой ZennoLab в Китае. Формулировки точные и не используют неподтвержденные заявления об эксклюзивности.",
          relationItems: [
            { title: "Локализация продуктов", body: "Китайские описания и маршруты консультаций для ZennoPoster, CapMonster, ZennoBrowser и других продуктов." },
            { title: "Локальная поддержка", body: "Язык, процесс поставки и диагностика для компаний и разработчиков в Китае." },
            { title: "Готовность к запуску", body: "ICP, аккаунты поддержки, корпоративная почта и авторские данные остаются настраиваемыми до подтверждения." }
          ],
          newsTitle: "Новости",
          newsLead: "Читайте новости компании, отраслевые заметки и обновления продуктов для локального сервиса Honey Badger и возможностей ZennoLab в Китае.",
          careerTitle: "Карьера",
          careerLead: "Смотрите вакансии, льготы, процесс найма и правила отправки резюме для команды Honey Badger."
        },
        products: {
          eyebrow: "Products",
          title: "Локализованные возможности ZennoLab для Китая",
          lead: "Страница продуктов следует логике ZennoLab: обзор, затем возможности, сценарии и маршрут консультации.",
          capabilityTitle: "Ключевые возможности",
          capabilityLead: "Каждая возможность связана с проблемой, сценарием и ценностью для клиента.",
          capabilities: [
            { title: "Визуальная оркестрация", body: "Для повторяющихся операций браузера, пакетных задач и поддерживаемых рабочих процессов." },
            { title: "CAPTCHA и API-интеграция", body: "Превращает распознавание в вызываемую возможность и снижает ручную нагрузку." },
            { title: "Изоляция аккаунтов", body: "Отпечатки браузера и профили повышают изоляцию и контроль риска." },
            { title: "Качество сети", body: "Проверка, ротация и контроль прокси поддерживают стабильность высокочастотных задач." }
          ],
          flowTitle: "Путь внедрения",
          flow: [["01", "Уточнить сценарий и границы автоматизации"], ["02", "Выбрать комбинацию продуктов ZennoLab"], ["03", "Собрать тестовые сценарии и распознавание"], ["04", "Добавить локальный сервис, обучение и поддержку"]]
        },
        about: {
          eyebrow: "About Honey Badger",
          title: "Промышленная надежность для глобальных продуктов автоматизации",
          lead: "Honey Badger должен ясно указать корпоративную связь: Honey Badger является операционной структурой ZennoLab в Китае.",
          sections: [
            { title: "Позиционирование", body: "Honey Badger обслуживает китайский рынок как операционная и сервисная структура продуктов автоматизации." },
            { title: "Фон компании", body: "Компания строит китайскую информационную архитектуру, сервисные процессы и входы консультаций вокруг продуктов ZennoLab." },
            { title: "Заявление о субъекте", body: "Без подтверждения нельзя расширять формулировки до эксклюзивного, единственного или генерального агента." }
          ],
          contactEyebrow: "Контакты",
          contactTitle: "Связаться с нами",
          contactLead: "Страница «О нас» сохраняет официальный контактный модуль для запросов по бренду, продуктам, кроссбордерным сетевым сервисам и партнерству.",
          contact: [
            ["Поддержка WeChat", "zennolabchina"],
            ["Поддержка QQ", "48151650"],
            ["Корпоративная почта", "marketing@honeybadgersoft.com"],
            ["Поддержка DingTalk", "Ожидает настройки; до настройки блокирует запуск"]
          ],
          contactNotice: ""
        },
        footer: {
          relation: "Honey Badger является операционной структурой ZennoLab в Китае.",
          products: "Продукты",
          resources: "Ресурсы",
          company: "Компания",
          copyright: "Авторские данные ожидают подтверждения",
          icp: "ICP ожидает подтверждения"
        }
      }
    };

    const PRODUCT_DETAILS = {
      zh: {
        zennoposter: {
          code: "AG",
          name: "数字化农业综合管理系统",
          accent: "accent-green",
          eyebrow: "Smart Agriculture",
          title: "数字化农业综合管理系统",
          lead: "融合物联网、大数据与AI技术，覆盖种植、农事、仓储、溯源全产业链。实现田间环境实时监测、智能农事调度、产销数据可视化，为农场、产业园、农业监管部门提供一体化数字管控方案，降本增效、标准化管理农业全流程。",
          specs: [["定位", "全链条智慧农业管控平台"], ["能力", "物联网监测、大数据分析、AI调度与溯源管理"], ["适用对象", "农场、产业园、农业监管部门"]],
          featureTitle: "核心能力",
          featureLead: "把田间环境、农事执行、仓储流转和溯源监管纳入同一套数字化管理闭环。",
          features: [
            { title: "田间环境实时监测", body: "通过传感设备采集温湿度、光照、土壤等生产数据，支撑实时预警与远程巡检。" },
            { title: "智能农事调度", body: "将种植计划、农事任务、人员设备和执行记录统一管理，提高协同效率。" },
            { title: "产销数据可视化", body: "打通生产、仓储和销售数据，帮助管理者快速掌握产能、库存和流向。" },
            { title: "溯源监管闭环", body: "围绕批次、作业、检测和流通环节形成标准化记录，提升监管与品牌可信度。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "农场需要统一管理种植、农事、仓储和销售数据。",
            "农业产业园需要对多基地、多批次生产过程进行可视化监管。",
            "农业监管部门需要建立标准化数据采集、溯源和风险预警体系。"
          ],
          workflowTitle: "建设路径",
          workflow: [["01", "梳理生产、仓储、溯源和监管业务流程"], ["02", "接入物联网设备与关键生产数据"], ["03", "配置农事调度、数据看板和溯源规则"], ["04", "完成试点验收、人员培训和持续优化"]],
          supportTitle: "交付支持",
          support: [
            { title: "业务调研", body: "结合农场、园区或监管部门的组织结构和数据基础明确上线范围。" },
            { title: "系统配置", body: "围绕种植、农事、仓储、溯源和看板模块完成字段、流程和权限配置。" },
            { title: "培训验收", body: "提供管理端、执行端和数据复盘培训，形成可持续运营机制。" }
          ],
          related: ["capmonster-cloud", "zennobrowser", "zennodroid"]
        },
        "capmonster-cloud": {
          code: "IMG",
          name: "蜜獾原图",
          accent: "accent-cyan",
          eyebrow: "AI Image Originality",
          title: "蜜獾原图（跨境电商图片原创化工具平台）",
          lead: "专为跨境卖家打造的AI图像处理平台，批量对商品原图做原创化重构。保留产品核心细节，智能规避平台图片查重判定，一键生成多尺寸合规主图、场景图，适配TikTok、亚马逊、Shopee等全海外电商站点，大幅降低美工成本与违规风险。",
          specs: [["定位", "跨境AI图片原创工具"], ["能力", "批量原创化、细节保留、多尺寸生成"], ["适用对象", "TikTok、亚马逊、Shopee等跨境卖家"]],
          featureTitle: "核心能力",
          featureLead: "围绕商品图批量处理、平台合规和内容生产效率，帮助跨境团队降低设计与违规成本。",
          features: [
            { title: "商品图原创化重构", body: "在保留核心卖点和产品细节的基础上，生成更具差异化的商品展示图。" },
            { title: "批量处理工作流", body: "支持批量导入、批量生成和批量导出，减少重复修图与人工排版时间。" },
            { title: "多平台尺寸适配", body: "面向TikTok、亚马逊、Shopee等平台输出主图、场景图和多尺寸素材。" },
            { title: "降低违规风险", body: "通过原创化处理降低图片查重和素材重复带来的运营风险。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "跨境卖家需要快速批量处理大量SKU商品图。",
            "团队需要减少平台图片查重、重复素材和违规风险。",
            "运营人员需要一键生成不同站点、不同尺寸的合规主图和场景图。"
          ],
          workflowTitle: "使用流程",
          workflow: [["01", "上传商品原图或素材包"], ["02", "选择原创化风格、尺寸和平台规则"], ["03", "批量生成主图、场景图和详情素材"], ["04", "人工复核后导出并用于跨境店铺运营"]],
          supportTitle: "服务支持",
          support: [
            { title: "素材规范", body: "协助团队明确原图质量、输出尺寸和平台使用场景。" },
            { title: "批量流程", body: "帮助运营人员建立从导入、生成、筛选到导出的标准流程。" },
            { title: "平台适配", body: "围绕不同电商平台的图片规范和运营需求调整输出方案。" }
          ],
          related: ["zennoposter", "zennobrowser", "zennodroid"]
        },
        zennobrowser: {
          code: "AI",
          name: "AI-FDE VibeCoding培训",
          accent: "accent-violet",
          eyebrow: "AI-FDE Training",
          title: "AI-FDE前沿VibeCoding实战培训",
          lead: "面向数字化从业者的AI落地实战课程，核心掌握Vibe Coding自然语言驱动开发范式。覆盖AI项目全流程部署、大模型Agent集成、商用系统从零搭建，70%实操教学，零基础也可实现AI软件自主开发，赋能企业数字化项目落地。",
          specs: [["定位", "AI自然语言开发实战培训"], ["能力", "Vibe Coding、Agent集成、商用系统搭建"], ["适用对象", "数字化从业者、企业项目团队、AI转型人员"]],
          featureTitle: "课程能力",
          featureLead: "以真实项目为主线，把自然语言驱动开发、大模型Agent集成和系统部署拆成可训练步骤。",
          features: [
            { title: "Vibe Coding开发范式", body: "训练学员用自然语言描述需求、拆解功能并驱动AI辅助完成代码实现。" },
            { title: "AI项目全流程部署", body: "覆盖需求、原型、前后端实现、部署和验收，让学习结果可落到业务项目。" },
            { title: "大模型Agent集成", body: "围绕工具调用、任务编排和业务流程，学习把Agent能力接入实际系统。" },
            { title: "商用系统从零搭建", body: "以可交付系统为目标，提升企业数字化项目的独立开发和落地能力。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "数字化从业者希望掌握AI辅助开发和项目交付能力。",
            "企业团队需要快速搭建内部管理系统、AI工具或自动化应用。",
            "零基础或转型人员希望通过实操完成AI软件自主开发。"
          ],
          workflowTitle: "学习路径",
          workflow: [["01", "建立AI开发环境与提示词协作方法"], ["02", "拆解业务需求并完成项目原型"], ["03", "集成大模型Agent和核心业务流程"], ["04", "部署商用系统并完成复盘迭代"]],
          supportTitle: "教学支持",
          support: [
            { title: "70%实操教学", body: "课程以项目实操为核心，减少纯理论讲解，强化可交付成果。" },
            { title: "项目陪练", body: "围绕学员自己的业务场景提供拆解、实现和调试指导。" },
            { title: "落地复盘", body: "帮助企业团队总结开发规范、部署经验和后续迭代计划。" }
          ],
          related: ["zennoposter", "capmonster-cloud", "zennodroid"]
        },
        zennodroid: {
          code: "SM",
          name: "社媒跨境私域陪跑",
          accent: "accent-warning",
          eyebrow: "Social Commerce Growth",
          title: "跨境电商私域陪跑",
          lead: "一站式海外社媒全域运营陪跑服务，打通TikTok公域引流、Facebook社群沉淀、Instagram品牌种草链路。包含账号冷启动、本地化内容策划、私域用户分层运营、广告投放与数据复盘全流程，手把手指导外贸商家搭建可持续海外私域流量池，稳定提升海外订单转化。",
          specs: [["定位", "海外社媒全域运营陪跑服务"], ["能力", "账号冷启动、内容策划、私域分层、广告投放与复盘"], ["适用对象", "外贸商家、跨境电商团队、海外品牌运营团队"]],
          featureTitle: "陪跑能力",
          featureLead: "把海外社媒从公域引流到私域转化拆成可执行动作，帮助团队建立长期流量资产。",
          features: [
            { title: "账号冷启动", body: "围绕TikTok、Facebook、Instagram建立账号定位、内容节奏和启动动作。" },
            { title: "本地化内容策划", body: "结合目标市场语言、文化和消费场景设计短视频、图文和互动内容。" },
            { title: "私域用户分层运营", body: "将公域流量沉淀到社群和私域触点，并按意向、行为和转化阶段分层维护。" },
            { title: "广告投放与数据复盘", body: "围绕投放目标、素材测试、转化数据和订单表现建立复盘机制。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "外贸商家希望从TikTok等平台获得稳定海外询盘和订单。",
            "跨境团队需要建立Facebook社群和Instagram品牌内容阵地。",
            "已有广告或内容投入，但缺少私域承接、用户分层和数据复盘体系。"
          ],
          workflowTitle: "陪跑流程",
          workflow: [["01", "诊断产品、市场、账号和现有素材基础"], ["02", "制定平台定位、内容计划和私域承接路径"], ["03", "执行账号运营、广告测试和用户分层转化"], ["04", "按周期复盘数据并优化内容、投放和私域动作"]],
          supportTitle: "服务支持",
          support: [
            { title: "全流程指导", body: "从账号启动到内容发布、私域承接和订单转化提供实操陪跑。" },
            { title: "素材与话术", body: "协助沉淀本地化内容模板、私域沟通话术和用户运营 SOP。" },
            { title: "数据复盘", body: "定期复盘流量、互动、私域沉淀和订单转化表现，持续优化执行策略。" }
          ],
          related: ["zennoposter", "capmonster-cloud", "zennobrowser"]
        },
        "static-ip": {
          code: "SIP",
          name: "静态住宅IP",
          accent: "accent-purple",
          eyebrow: "Static Residential IP",
          title: "静态住宅 IP",
          lead: "来自真实家庭宽带线路的长期固定住宅 IP，适合需要稳定网络身份、城市属地和长效会话的合规业务。",
          specs: [["定位", "固定住宅代理资源"], ["网络属性", "真实 ISP 家庭宽带、长期固定、独享稳定"], ["适用团队", "跨境电商、社媒运营、SEO 与本地化测试团队"]],
          featureTitle: "核心优势",
          featureLayout: "split-3-2",
          featureLead: "静态住宅 IP 重点解决长期账号、固定身份访问和地域一致性问题。",
          features: [
            { title: "真实住宅原生属性", body: "源自家庭宽带线路，具备民用 ISP 标识，访问形态更接近普通本地用户。" },
            { title: "IP 长期固定不轮换", body: "单个 IP 可持续绑定业务，适合店铺运营、账号托管和广告投放等长期场景。" },
            { title: "地域精细化定位", body: "可按国家、城市等维度筛选资源，用于本地化访问、调研和测试。" },
            { title: "独立稳定带宽", body: "独享链路减少共享拥挤，适合长期挂机、批量登录和稳定会话。" },
            { title: "协议与 API 接入", body: "支持 HTTP/SOCKS5 与 API 管理，便于接入爬虫框架、自动化工具和业务系统。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "跨境电商多店铺运营、价格监控和海外广告投放。",
            "海外社交媒体矩阵账号托管与品牌本地化运营。",
            "搜索引擎本地化排名监测和关键词长期数据采集。",
            "海外软件本地化兼容性测试与地区网络访问验证。"
          ],
          workflowTitle: "接入流程",
          workflow: [["01", "确认目标国家、城市和业务场景"], ["02", "分配固定住宅 IP 并配置鉴权"], ["03", "接入浏览器、脚本或企业系统"], ["04", "持续监测稳定性并按业务复盘"]],
          supportTitle: "服务支持",
          support: [
            { title: "资源筛选", body: "按区域、稳定性和业务类型匹配住宅 IP 资源。" },
            { title: "接入指导", body: "提供协议、鉴权和 API 管理的接入说明。" },
            { title: "稳定性复盘", body: "围绕延迟、可用性和会话质量进行定期检查。" }
          ],
          hideRelatedProducts: true,
          related: ["idc-ip", "dynamic-ip"]
        },
        "idc-ip": {
          code: "IDC",
          name: "机房IP",
          accent: "accent-green",
          eyebrow: "Datacenter IP",
          title: "机房 IP",
          lead: "部署于专业 IDC 数据中心的静态虚拟 IP 资源，强调高带宽、低延迟和高并发，适合大规模公开数据处理。",
          specs: [["定位", "IDC 数据中心代理资源"], ["网络属性", "高带宽、低延迟、固定 IP、强并发"], ["适用团队", "数据采集、监测系统、服务器业务和测试团队"]],
          featureTitle: "核心优势",
          featureLayout: "split-3-2",
          featureLead: "机房 IP 更适合速度、并发和成本优先的批量任务。",
          features: [
            { title: "超高带宽与快速响应", body: "依托机房骨干网络，适合海量请求和高并发公开数据采集。" },
            { title: "海量 IP 池扩容", body: "资源供给稳定，可按业务峰值快速扩容和分组使用。" },
            { title: "成本经济", body: "相比住宅资源单价更低，适合大规模商用采集和监测任务。" },
            { title: "7x24 机房运维", body: "机房运维与节点切换机制支撑持续在线任务。" },
            { title: "灵活授权管理", body: "支持白名单、账号密码鉴权、分组管理和 API 批量操作。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "公开网页资讯、行业舆情和商品基础数据批量采集。",
            "搜索引擎关键词收录、快照和公开榜单监测。",
            "企业比价系统、公开市场数据同步和行业分析。",
            "服务器压力测试与多地区访问速度检测。"
          ],
          workflowTitle: "接入流程",
          workflow: [["01", "确认并发量、地区和协议需求"], ["02", "开通机房 IP 池与鉴权方式"], ["03", "接入采集、监测或测试系统"], ["04", "按可用性、延迟和成本持续优化"]],
          supportTitle: "服务支持",
          support: [
            { title: "容量规划", body: "根据并发、带宽和任务周期估算资源规模。" },
            { title: "分组管理", body: "为不同业务配置独立 IP 池、权限和启停策略。" },
            { title: "监控复盘", body: "围绕在线率、延迟和异常类型进行记录。" }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "dynamic-ip"]
        },
        "dynamic-ip": {
          code: "DIP",
          name: "动态IP",
          accent: "accent-cyan",
          eyebrow: "Dynamic Residential IP",
          title: "动态住宅 IP",
          lead: "基于全球真实家庭宽带节点池，支持按请求或时间周期自动轮换，适合公开数据的高频、短周期采集任务。",
          specs: [["定位", "轮换住宅代理资源"], ["网络属性", "海量住宅节点、自动轮换、可保持短会话"], ["适用团队", "公开数据采集、广告验证、舆情监测和竞品调研团队"]],
          featureTitle: "核心优势",
          featureLayout: "split-3-2",
          featureLead: "动态住宅 IP 重点解决访问频率、匿名性和短周期采集效率问题。",
          features: [
            { title: "海量住宅节点轮换", body: "每次请求或周期切换新的住宅 IP，降低单一地址访问频率压力。" },
            { title: "自定义轮换规则", body: "支持按请求、分钟、小时或会话策略切换，兼顾效率与短时稳定性。" },
            { title: "匿名性与防封禁", body: "通过住宅节点轮换减少长期固定访问痕迹，降低短时高频风险。" },
            { title: "混合与定点模式", body: "可使用全球混合节点，也可锁定单一城市动态池。" },
            { title: "轻量化集成", body: "代理通道开箱即用，API 支持重置 IP 和自动化接入。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "大规模公开商品数据、资讯和评论的合规采集。",
            "全网舆情实时监控与多渠道公开信息同步。",
            "短周期竞品数据调研和限时活动公开数据统计。",
            "公开榜单、短视频公开内容的合规分析。"
          ],
          workflowTitle: "接入流程",
          workflow: [["01", "明确采集频率、地区和会话策略"], ["02", "配置轮换周期与鉴权方式"], ["03", "接入采集脚本或自动化流程"], ["04", "监测验证码、拉黑和成功率并优化规则"]],
          supportTitle: "服务支持",
          support: [
            { title: "策略配置", body: "根据请求频率和站点规则设置轮换与会话保持。" },
            { title: "API 接入", body: "支持自动重置 IP、批量任务接入和日志核对。" },
            { title: "风险复盘", body: "围绕验证码、失败率和封禁风险做持续优化。" }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "idc-ip"]
        }
      },
      en: {
        zennoposter: {
          code: "ZP",
          name: "ZennoPoster",
          accent: "accent-green",
          eyebrow: "ZennoPoster",
          title: "Visual browser automation and RPA workflow orchestration",
          lead: "A localized product page for repeatable browser work, public data tasks, operations workflows and cross-site automation.",
          specs: [["Positioning", "Desktop browser automation"], ["Capabilities", "Workflow design, multi-thread execution, proxy and CAPTCHA links"], ["Teams", "Operations, QA, data and internal tools"]],
          featureTitle: "Core capabilities",
          featureLead: "The structure follows ZennoPoster's emphasis on easy onboarding, no-code automation and flexible workspaces.",
          features: [
            { title: "Easy to start", body: "Turn repeated browser actions into maintainable workflow nodes." },
            { title: "No-code automation", body: "Build task robots through a visual designer and reduce script handoff cost." },
            { title: "Flexible workspace", body: "Organize templates, menus and execution settings around team habits." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: ["Public web data collection and archiving.", "Account workflow checks and recurring form tasks.", "Bulk tasks that need proxy, CAPTCHA and result export links."],
          workflowTitle: "Adoption workflow",
          workflow: [["01", "Break manual work into nodes"], ["02", "Build a visual task template"], ["03", "Connect proxy, CAPTCHA and storage"], ["04", "Complete training, troubleshooting and acceptance"]],
          supportTitle: "Support model",
          support: [
            { title: "Continuous updates", body: "The page reserves an update area; formal release notes must come from confirmed material." },
            { title: "Technical support", body: "Honey Badger handles Chinese inquiry, diagnosis records and delivery training." },
            { title: "Developer community", body: "Community resources are referenced without inventing accounts or usage data." }
          ],
          related: ["capmonster-cloud", "zennobrowser", "zennodroid"]
        },
        "capmonster-cloud": {
          code: "CC",
          name: "CapMonster Cloud",
          accent: "accent-cyan",
          eyebrow: "CapMonster Cloud",
          title: "Cloud CAPTCHA recognition and API integration",
          lead: "A cloud recognition path for teams that need elastic calls, quick integration and stable automation links.",
          specs: [["Positioning", "Cloud CAPTCHA recognition service"], ["Capabilities", "API calls, elastic capacity and result callbacks"], ["Teams", "Automation platforms, data teams and internal systems"]],
          featureTitle: "Core capabilities",
          featureLead: "A lightweight cloud-service pattern: fast integration, stable calls and workflow collaboration.",
          features: [
            { title: "API integration", body: "Connect recognition to existing task systems and reduce manual handling." },
            { title: "Elastic recognition link", body: "Separate recognition capacity from local execution environments." },
            { title: "Workflow collaboration", body: "Combine with ZennoPoster, proxy quality checks and result storage." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: ["Automation tasks that need stable cloud recognition.", "Internal systems that centralize CAPTCHA recognition requests.", "Teams with limited local deployment capacity."],
          workflowTitle: "Integration path",
          workflow: [["01", "Confirm recognition types and call frequency"], ["02", "Design API calls and retry behavior"], ["03", "Connect automation tasks or internal systems"], ["04", "Record stability and delivery boundaries"]],
          supportTitle: "Support model",
          support: [
            { title: "Fit assessment", body: "Confirm whether cloud recognition suits the scenario without making unverified rate claims." },
            { title: "API guidance", body: "Explain parameters, error handling and log retention." },
            { title: "Local inquiry", body: "Official support accounts and mailbox values remain pending." }
          ],
          related: ["zennoposter", "zennobrowser", "zennodroid"]
        },
        zennobrowser: {
          code: "ZB",
          name: "ZennoBrowser",
          accent: "accent-violet",
          eyebrow: "ZennoBrowser",
          title: "Anti-detect browser capabilities from ZennoLab",
          lead: "A modern product page focused on anonymity, profile limits, efficiency and team workflows.",
          specs: [["Positioning", "Anti-detect browser and profile management"], ["Capabilities", "Real browser fingerprints, API, cloud data and team workflow"], ["Teams", "Multi-account operations and environment-isolation teams"]],
          featureTitle: "Core capabilities",
          featureLead: "The page highlights real fingerprints, API integration, cloud storage and support resources.",
          features: [
            { title: "Unique real browser fingerprints", body: "Keep task environments isolated and reduce profile mixing risks." },
            { title: "API integration and scripts", body: "Automate profile creation, launch and maintenance workflows." },
            { title: "Cloud data storage", body: "Set clear boundaries for profiles, teamwork and synchronization." },
            { title: "Support and community", body: "Support entrances are reserved until real channels are confirmed." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: ["Independent browser profiles for multi-account work.", "Shared governance for fingerprints, proxies and profile data.", "Automation scripts tied to browser lifecycle events."],
          workflowTitle: "Usage path",
          workflow: [["01", "Confirm account, environment and permission boundaries"], ["02", "Create profiles and proxy rules"], ["03", "Connect scripts or manual workflows"], ["04", "Document exceptions, sync rules and team standards"]],
          supportTitle: "Support model",
          support: [
            { title: "Anonymity boundary", body: "Explain isolation boundaries without promising rule evasion." },
            { title: "Profile governance", body: "Help define naming, grouping and handoff standards." },
            { title: "Local service", body: "Provide Chinese onboarding, training and troubleshooting notes." }
          ],
          related: ["zennoposter", "zennodroid", "capmonster-cloud"]
        },
        zennodroid: {
          code: "ZD",
          name: "ZennoDroid",
          accent: "accent-purple",
          eyebrow: "ZennoDroid",
          title: "Private E-commerce Coaching",
          lead: "Extends automation into Android workflows for mobile verification, app task execution and repeatable testing.",
          specs: [["Positioning", "Android app automation"], ["Capabilities", "Mobile flows, simulated execution and scriptable tasks"], ["Teams", "Mobile QA, operations verification and internal automation"]],
          featureTitle: "Core capabilities",
          featureLead: "Mobile tasks are divided into workflow, execution environment and result collection modules.",
          features: [
            { title: "Mobile workflow automation", body: "Organize repeated Android taps, inputs and checks into task flows." },
            { title: "Execution environment", body: "Supports repeatable mobile verification and continuous testing work." },
            { title: "Web automation collaboration", body: "Can be combined with browser automation, recognition and proxy management." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: ["Android flow testing and regression checks.", "Mobile operations tasks and status verification.", "Projects that cover both Web and App automation."],
          workflowTitle: "Adoption workflow",
          workflow: [["01", "Confirm app flow and test boundary"], ["02", "Prepare execution environment and scripts"], ["03", "Configure recognition, proxy or result collection"], ["04", "Create repeatable acceptance records"]],
          supportTitle: "Support model",
          support: [
            { title: "Scenario assessment", body: "Confirm app environment, permissions and execution boundaries first." },
            { title: "Task modeling", body: "Break mobile workflows into reusable steps." },
            { title: "Delivery training", body: "Provide localized operation, diagnosis and maintenance guidance." }
          ],
          related: ["zennoposter", "capmonster-cloud", "zennobrowser"]
        },
        "static-ip": {
          code: "SIP",
          name: "Static Residential IP",
          accent: "accent-purple",
          eyebrow: "Static Residential IP",
          title: "Static Residential IP",
          lead: "A long-term fixed residential IP from real home broadband. It fits compliant work that needs a stable identity, city location and persistent sessions.",
          specs: [["Positioning", "Fixed residential proxy resource"], ["Network profile", "Real ISP broadband, fixed session, exclusive access"], ["Teams", "Cross-border commerce, social operations, SEO and localization testing"]],
          featureTitle: "Core advantages",
          featureLayout: "split-3-2",
          featureLead: "Static residential IPs solve long-term identity, location consistency and stable session needs.",
          features: [
            { title: "Real residential profile", body: "Uses home broadband lines with civilian ISP attributes, closer to normal local-user traffic." },
            { title: "Long-term fixed IP", body: "A single IP can stay bound to one business use, supporting stores, accounts and ad operations." },
            { title: "Precise location targeting", body: "Resources can be selected by country and city for local access, research and testing." },
            { title: "Stable dedicated bandwidth", body: "Dedicated access reduces shared congestion for long sessions and batch logins." },
            { title: "Protocol and API access", body: "Supports HTTP/SOCKS5 and API management for automation tools and business systems." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: [
            "Long-term cross-border store operations, price checks and overseas ad placement.",
            "Overseas social account management and localized brand operations.",
            "Local SEO ranking monitoring and long-term keyword data collection.",
            "Localization testing and regional network access verification."
          ],
          workflowTitle: "Onboarding flow",
          workflow: [["01", "Confirm target country, city and use case"], ["02", "Assign fixed residential IP and authentication"], ["03", "Connect browsers, scripts or internal systems"], ["04", "Monitor stability and review by business cycle"]],
          supportTitle: "Service support",
          support: [
            { title: "Resource matching", body: "Match residential IP resources by region, stability and business type." },
            { title: "Integration guidance", body: "Provide protocol, authentication and API management notes." },
            { title: "Stability review", body: "Check latency, availability and session quality over time." }
          ],
          hideRelatedProducts: true,
          related: ["idc-ip", "dynamic-ip"]
        },
        "idc-ip": {
          code: "IDC",
          name: "Datacenter IP",
          accent: "accent-green",
          eyebrow: "Datacenter IP",
          title: "Datacenter IP",
          lead: "Static virtual IP resources hosted in professional IDC data centers. They prioritize high bandwidth, low latency and strong concurrency for public data tasks.",
          specs: [["Positioning", "IDC datacenter proxy resource"], ["Network profile", "High bandwidth, low latency, fixed IP, strong concurrency"], ["Teams", "Data collection, monitoring, server workloads and testing"]],
          featureTitle: "Core advantages",
          featureLayout: "split-3-2",
          featureLead: "Datacenter IPs fit batch tasks where speed, concurrency and cost matter most.",
          features: [
            { title: "High bandwidth response", body: "Backbone datacenter networks support large request volumes and concurrent public-data collection." },
            { title: "Large IP pool", body: "Stable supply can scale by business peak and be grouped by task." },
            { title: "Cost efficient", body: "Lower unit cost than residential resources for large commercial monitoring and collection." },
            { title: "24/7 operations", body: "Datacenter maintenance and node switching support continuous online work." },
            { title: "Flexible authorization", body: "Supports whitelist, username/password auth, grouping and API batch operations." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: [
            "Bulk collection of public news, market information and basic product data.",
            "Search-index, snapshot and public ranking monitoring.",
            "Price comparison systems, public market data sync and industry analysis.",
            "Server stress tests and multi-region speed checks."
          ],
          workflowTitle: "Onboarding flow",
          workflow: [["01", "Confirm concurrency, region and protocol needs"], ["02", "Open datacenter IP pool and authentication"], ["03", "Connect collection, monitoring or testing systems"], ["04", "Optimize by availability, latency and cost"]],
          supportTitle: "Service support",
          support: [
            { title: "Capacity planning", body: "Estimate resource scale by concurrency, bandwidth and task cycle." },
            { title: "Grouped management", body: "Configure independent IP pools and policies for different teams." },
            { title: "Monitoring review", body: "Record uptime, latency and exception classes." }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "dynamic-ip"]
        },
        "dynamic-ip": {
          code: "DIP",
          name: "Dynamic IP",
          accent: "accent-cyan",
          eyebrow: "Dynamic Residential IP",
          title: "Dynamic Residential IP",
          lead: "A rotating residential IP pool based on real home broadband nodes. It fits high-frequency, short-cycle collection of publicly accessible data.",
          specs: [["Positioning", "Rotating residential proxy resource"], ["Network profile", "Large residential pool, automatic rotation, optional short sessions"], ["Teams", "Public data collection, ad verification, monitoring and competitor research"]],
          featureTitle: "Core advantages",
          featureLayout: "split-3-2",
          featureLead: "Dynamic residential IPs improve frequency control, anonymity and short-cycle collection efficiency.",
          features: [
            { title: "Large rotating pool", body: "Switches to new residential IPs by request or interval to reduce single-address pressure." },
            { title: "Custom rotation rules", body: "Supports per-request, minute, hour or session strategies." },
            { title: "Anonymity and blocking control", body: "Rotating residential nodes reduce long fixed-access traces in short-cycle tasks." },
            { title: "Mixed or targeted regions", body: "Use global mixed nodes or lock to a single city pool." },
            { title: "Lightweight integration", body: "Proxy channels are ready to use, with API support for IP reset and automation." }
          ],
          scenarioTitle: "Scenarios",
          scenarios: [
            "Compliant collection of public product, news and review data.",
            "Real-time public-opinion monitoring and public information sync.",
            "Short-cycle competitor research and limited-time campaign statistics.",
            "Analysis of public rankings and public short-video content."
          ],
          workflowTitle: "Onboarding flow",
          workflow: [["01", "Define frequency, region and session strategy"], ["02", "Configure rotation cycle and authentication"], ["03", "Connect collection scripts or automation flows"], ["04", "Monitor CAPTCHA, block rate and success rate"]],
          supportTitle: "Service support",
          support: [
            { title: "Strategy setup", body: "Set rotation and session rules based on request volume and site policies." },
            { title: "API integration", body: "Support automated IP reset, batch task access and log checks." },
            { title: "Risk review", body: "Review CAPTCHA, failure rate and blocking signals." }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "idc-ip"]
        }
      },
      ru: {
        zennoposter: {
          code: "ZP",
          name: "ZennoPoster",
          accent: "accent-green",
          eyebrow: "ZennoPoster",
          title: "Визуальная автоматизация браузера и RPA-процессы",
          lead: "Локализованная страница для повторяемых браузерных задач, сбора открытых данных и операционных процессов.",
          specs: [["Позиция", "Автоматизация браузера на рабочей станции"], ["Возможности", "Сценарии, потоки, прокси и CAPTCHA"], ["Команды", "Операции, QA, данные и внутренние инструменты"]],
          featureTitle: "Ключевые возможности",
          featureLead: "Структура повторяет акцент ZennoPoster на простом старте, no-code и гибкой рабочей среде.",
          features: [
            { title: "Простой старт", body: "Повторяемые действия в браузере превращаются в поддерживаемые узлы процесса." },
            { title: "No-code автоматизация", body: "Визуальный дизайнер снижает стоимость разработки и передачи сценариев." },
            { title: "Гибкая рабочая среда", body: "Шаблоны и настройки можно организовать под правила команды." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: ["Сбор и архивирование открытых веб-данных.", "Проверки аккаунтов и регулярные формы.", "Массовые задачи с прокси, CAPTCHA и экспортом результата."],
          workflowTitle: "Путь внедрения",
          workflow: [["01", "Разделить ручной процесс на узлы"], ["02", "Собрать визуальный шаблон"], ["03", "Подключить прокси, CAPTCHA и хранение"], ["04", "Провести обучение и приемку"]],
          supportTitle: "Поддержка",
          support: [
            { title: "Обновления", body: "Раздел обновлений зарезервирован до подтверждения официальных материалов." },
            { title: "Техподдержка", body: "Honey Badger ведет китайские консультации, диагностику и обучение." },
            { title: "Сообщество", body: "Ресурсы сообщества описаны без вымышленных данных." }
          ],
          related: ["capmonster-cloud", "zennobrowser", "zennodroid"]
        },
        "capmonster-cloud": {
          code: "CC",
          name: "CapMonster Cloud",
          accent: "accent-cyan",
          eyebrow: "CapMonster Cloud",
          title: "Облачное распознавание CAPTCHA и API-интеграция",
          lead: "Облачный путь для команд, которым нужны эластичные вызовы, быстрый запуск и стабильная связка с автоматизацией.",
          specs: [["Позиция", "Облачный сервис распознавания CAPTCHA"], ["Возможности", "API, эластичная емкость, возврат результата"], ["Команды", "Платформы автоматизации, данные, внутренние системы"]],
          featureTitle: "Ключевые возможности",
          featureLead: "Легкий сервисный подход: быстрая интеграция, стабильные вызовы и работа в общей цепочке.",
          features: [
            { title: "API-интеграция", body: "Подключает распознавание к существующим системам задач." },
            { title: "Эластичная цепочка", body: "Отделяет емкость распознавания от локальной среды исполнения." },
            { title: "Совместная работа", body: "Сочетается с ZennoPoster, проверкой прокси и хранением результатов." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: ["Автоматизация со стабильным облачным распознаванием.", "Централизация запросов CAPTCHA во внутренних системах.", "Команды с ограниченной локальной инфраструктурой."],
          workflowTitle: "Интеграция",
          workflow: [["01", "Уточнить типы и частоту вызовов"], ["02", "Спроектировать API и повторы"], ["03", "Подключить задачи или системы"], ["04", "Зафиксировать стабильность и границы поставки"]],
          supportTitle: "Поддержка",
          support: [
            { title: "Оценка применимости", body: "Сценарий проверяется без неподтвержденных обещаний по процентам." },
            { title: "API-консультация", body: "Параметры, ошибки и логи описываются заранее." },
            { title: "Локальный вход", body: "Официальные аккаунты и почта ожидают подтверждения." }
          ],
          related: ["zennoposter", "zennobrowser", "zennodroid"]
        },
        zennobrowser: {
          code: "ZB",
          name: "ZennoBrowser",
          accent: "accent-violet",
          eyebrow: "ZennoBrowser",
          title: "Антидетект-браузерные возможности ZennoLab",
          lead: "Современная продуктовая страница про анонимность, профили, эффективность и командные процессы.",
          specs: [["Позиция", "Антидетект-браузер и профили"], ["Возможности", "Реальные отпечатки, API, облачные данные, команды"], ["Команды", "Мультиаккаунты и изоляция сред"]],
          featureTitle: "Ключевые возможности",
          featureLead: "Страница выделяет реальные отпечатки, API, облачное хранение и поддержку.",
          features: [
            { title: "Реальные отпечатки браузера", body: "Помогают изолировать среды задач и снизить риск смешивания профилей." },
            { title: "API и сценарии", body: "Автоматизируют создание, запуск и обслуживание профилей." },
            { title: "Облачное хранение данных", body: "Задает границы для профилей, командной работы и синхронизации." },
            { title: "Поддержка и сообщество", body: "Входы поддержки зарезервированы до подтверждения каналов." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: ["Независимые профили для мультиаккаунтов.", "Единые правила для отпечатков, прокси и данных.", "Сценарии, связанные с жизненным циклом браузера."],
          workflowTitle: "Путь использования",
          workflow: [["01", "Уточнить аккаунты, среды и права"], ["02", "Создать профили и правила прокси"], ["03", "Подключить сценарии или ручной процесс"], ["04", "Зафиксировать ошибки и стандарты команды"]],
          supportTitle: "Поддержка",
          support: [
            { title: "Границы анонимности", body: "Объясняем изоляцию без обещаний обхода правил платформ." },
            { title: "Управление профилями", body: "Помогаем определить имена, группы и передачу профилей." },
            { title: "Локальный сервис", body: "Китайское внедрение, обучение и диагностика." }
          ],
          related: ["zennoposter", "zennodroid", "capmonster-cloud"]
        },
        zennodroid: {
          code: "ZD",
          name: "ZennoDroid",
          accent: "accent-purple",
          eyebrow: "ZennoDroid",
          title: "Сопровождение e-commerce",
          lead: "Расширяет автоматизацию на Android-сценарии: проверка мобильных процессов, задачи приложений и повторяемые тесты.",
          specs: [["Позиция", "Автоматизация Android-приложений"], ["Возможности", "Мобильные процессы, исполнение, сценарии"], ["Команды", "Mobile QA, операции и внутренняя автоматизация"]],
          featureTitle: "Ключевые возможности",
          featureLead: "Мобильные задачи разделены на процесс, среду исполнения и сбор результата.",
          features: [
            { title: "Мобильные процессы", body: "Повторяемые нажатия, ввод и проверки собираются в сценарии." },
            { title: "Среда исполнения", body: "Подходит для регулярной проверки и мобильного тестирования." },
            { title: "Связка с Web", body: "Может работать вместе с браузерной автоматизацией, CAPTCHA и прокси." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: ["Тестирование Android-процессов.", "Мобильные операционные задачи и проверки статуса.", "Проекты, где нужны Web и App сценарии."],
          workflowTitle: "Путь внедрения",
          workflow: [["01", "Уточнить процесс и границы теста"], ["02", "Подготовить среду и сценарии"], ["03", "Настроить распознавание, прокси или сбор результата"], ["04", "Сформировать повторяемые записи приемки"]],
          supportTitle: "Поддержка",
          support: [
            { title: "Оценка сценария", body: "Сначала уточняются среда, права и границы исполнения." },
            { title: "Моделирование задач", body: "Мобильные процессы разбиваются на повторяемые шаги." },
            { title: "Обучение", body: "Локальные инструкции по работе, диагностике и поддержке." }
          ],
          related: ["zennoposter", "capmonster-cloud", "zennobrowser"]
        },
        "static-ip": {
          code: "SIP",
          name: "Статический residential IP",
          accent: "accent-purple",
          eyebrow: "Static Residential IP",
          title: "Статический residential IP",
          lead: "Долгосрочный фиксированный residential IP из реальной домашней broadband-сети. Подходит для законных задач со стабильной сетевой идентичностью и городским таргетингом.",
          specs: [["Позиция", "Фиксированный residential proxy"], ["Сетевой профиль", "Реальный ISP, стабильная сессия, выделенный доступ"], ["Команды", "Cross-border commerce, соцсети, SEO и локализационное тестирование"]],
          featureTitle: "Ключевые преимущества",
          featureLayout: "split-3-2",
          featureLead: "Статический residential IP решает задачи долгой идентичности, стабильной сессии и постоянной географии.",
          features: [
            { title: "Реальный residential профиль", body: "Использует домашние broadband-линии с гражданским ISP-профилем." },
            { title: "Долгосрочный фиксированный IP", body: "Один IP может быть закреплен за конкретным бизнес-сценарием." },
            { title: "Точная география", body: "Ресурсы можно выбирать по стране и городу для локального доступа и тестов." },
            { title: "Стабильная выделенная полоса", body: "Меньше общего перегруза для долгих сессий и пакетных входов." },
            { title: "Протоколы и API", body: "Поддерживаются HTTP/SOCKS5 и API-управление для автоматизации." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: [
            "Долгая работа cross-border магазинов, мониторинг цен и overseas ads.",
            "Управление зарубежными social accounts и локальные brand operations.",
            "Локальный SEO-мониторинг и долгий сбор открытых keyword data.",
            "Локализационное тестирование и проверка регионального доступа."
          ],
          workflowTitle: "Подключение",
          workflow: [["01", "Уточнить страну, город и сценарий"], ["02", "Назначить fixed residential IP и авторизацию"], ["03", "Подключить браузеры, скрипты или системы"], ["04", "Отслеживать стабильность и делать ревью"]],
          supportTitle: "Сервисная поддержка",
          support: [
            { title: "Подбор ресурса", body: "Подбор residential IP по региону, стабильности и типу задачи." },
            { title: "Интеграция", body: "Инструкции по протоколам, авторизации и API." },
            { title: "Ревью стабильности", body: "Проверка задержки, доступности и качества сессий." }
          ],
          hideRelatedProducts: true,
          related: ["idc-ip", "dynamic-ip"]
        },
        "idc-ip": {
          code: "IDC",
          name: "Datacenter IP",
          accent: "accent-green",
          eyebrow: "Datacenter IP",
          title: "Datacenter IP",
          lead: "Статические virtual IP в профессиональных IDC дата-центрах. Приоритеты: высокая пропускная способность, низкая задержка и параллельность.",
          specs: [["Позиция", "IDC datacenter proxy"], ["Сетевой профиль", "Высокая полоса, низкая задержка, fixed IP, concurrency"], ["Команды", "Сбор данных, мониторинг, server workloads и тестирование"]],
          featureTitle: "Ключевые преимущества",
          featureLayout: "split-3-2",
          featureLead: "Datacenter IP подходит для пакетных задач, где важны скорость, параллельность и стоимость.",
          features: [
            { title: "Высокая полоса", body: "Магистральные сети дата-центров поддерживают большие объемы запросов." },
            { title: "Большой IP-пул", body: "Ресурсы можно масштабировать под пики и разделять по задачам." },
            { title: "Экономичность", body: "Ниже стоимость единицы ресурса для масштабного мониторинга и сбора." },
            { title: "24/7 эксплуатация", body: "Операции дата-центра и переключение узлов поддерживают непрерывные задачи." },
            { title: "Гибкая авторизация", body: "Whitelist, логин/пароль, группы и API-операции." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: [
            "Пакетный сбор открытых новостей, рыночной информации и product data.",
            "Мониторинг поисковой выдачи, snapshot data и публичных рейтингов.",
            "Системы сравнения цен, синхронизация открытых market data и анализ отрасли.",
            "Нагрузочные тесты серверов и проверка скорости из разных регионов."
          ],
          workflowTitle: "Подключение",
          workflow: [["01", "Уточнить concurrency, регион и протокол"], ["02", "Открыть datacenter IP pool и авторизацию"], ["03", "Подключить сбор, мониторинг или тесты"], ["04", "Оптимизировать доступность, задержку и стоимость"]],
          supportTitle: "Сервисная поддержка",
          support: [
            { title: "Планирование емкости", body: "Оценка ресурса по concurrency, полосе и циклу задач." },
            { title: "Групповое управление", body: "Отдельные IP-пулы и политики для разных команд." },
            { title: "Мониторинг", body: "Запись uptime, задержки и классов исключений." }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "dynamic-ip"]
        },
        "dynamic-ip": {
          code: "DIP",
          name: "Динамический IP",
          accent: "accent-cyan",
          eyebrow: "Dynamic Residential IP",
          title: "Динамический residential IP",
          lead: "Ротационный residential IP pool на базе реальных домашних broadband-узлов. Подходит для коротких циклов и high-frequency сбора открытых данных.",
          specs: [["Позиция", "Ротационный residential proxy"], ["Сетевой профиль", "Большой пул, auto-rotation, короткие сессии"], ["Команды", "Public data collection, ad verification, monitoring и competitor research"]],
          featureTitle: "Ключевые преимущества",
          featureLayout: "split-3-2",
          featureLead: "Динамический residential IP помогает управлять частотой, анонимностью и эффективностью коротких задач.",
          features: [
            { title: "Большой rotating pool", body: "Новый residential IP по запросу или интервалу снижает давление на один адрес." },
            { title: "Гибкие правила ротации", body: "Запрос, минуты, часы или session strategy." },
            { title: "Анонимность и снижение блокировок", body: "Ротация residential nodes уменьшает долгий фиксированный след." },
            { title: "Смешанные и точечные регионы", body: "Глобальный mixed pool или single-city pool." },
            { title: "Легкая интеграция", body: "Готовые proxy channels и API для IP reset и automation." }
          ],
          scenarioTitle: "Сценарии",
          scenarios: [
            "Законный сбор открытых product, news и review data.",
            "Мониторинг public opinion и синхронизация открытой информации.",
            "Короткие исследования конкурентов и статистика campaign data.",
            "Анализ public rankings и открытого short-video content."
          ],
          workflowTitle: "Подключение",
          workflow: [["01", "Определить frequency, регион и session strategy"], ["02", "Настроить rotation cycle и авторизацию"], ["03", "Подключить скрипты или automation flows"], ["04", "Контролировать CAPTCHA, block rate и success rate"]],
          supportTitle: "Сервисная поддержка",
          support: [
            { title: "Настройка стратегии", body: "Ротация и session rules под объем запросов и правила сайтов." },
            { title: "API-интеграция", body: "Автоматический IP reset, batch access и проверка логов." },
            { title: "Ревью риска", body: "Анализ CAPTCHA, failure rate и сигналов блокировки." }
          ],
          hideRelatedProducts: true,
          related: ["static-ip", "idc-ip"]
        }
      }
    };

    const NEWS_CONTENT = {
      zh: {
        eyebrow: "News",
        title: "新闻资讯",
        lead: "发布公司动态、行业资讯与技术干货，帮助访客了解蜜獾官网建设进展、自动化行业趋势和产品实践边界。",
        categoryTitle: "页面分类导航",
        searchPlaceholder: "搜索资讯标题、摘要或关键词",
        searchButton: "搜索",
        latestTitle: "最新资讯置顶",
        listTitle: "资讯列表",
        detailTitle: "资讯详情",
        hotTitle: "热门资讯排行",
        relatedTitle: "相关资讯推荐",
        previous: "上一篇",
        next: "下一篇",
        readDetail: "进入详情",
        pageLabel: "分页",
        noResults: "当前筛选条件下暂无资讯，请调整分类或搜索关键词。",
        categories: [
          { key: "company", label: "公司动态", body: "企业活动、团队动态、合作签约、公司公告。" },
          { key: "industry", label: "行业资讯", body: "行业政策、行业趋势、行业热点和市场观察。" },
          { key: "tech", label: "技术干货", body: "浏览器自动化、验证码识别、代理质量和反检测浏览器实践。" }
        ],
        allLabel: "全部资讯",
        articles: [
          {
            slug: "local-support-workflow",
            category: "公司动态",
            categoryKey: "company",
            date: "2026-07-12",
            pinned: true,
            hot: 1,
            title: "蜜獾本地服务流程进入上线准备阶段",
            summary: "围绕企业咨询、问题收敛、交付培训和验收记录，搭建可追踪的本地支持流程。",
            imageLabel: "公司动态",
            body: [
              "蜜獾官网当前阶段重点梳理企业访问者最关心的服务边界，包括产品咨询、场景评估、问题诊断、培训交付和上线验收。",
              "在真实客服账号、企业邮箱和备案信息确认前，页面只展示待配置入口，不编造联系方式或支持数据。"
            ],
            related: ["product-matrix-refresh", "automation-adoption"]
          },
          {
            slug: "automation-adoption",
            category: "行业资讯",
            categoryKey: "industry",
            date: "2026-07-10",
            hot: 2,
            title: "浏览器自动化从脚本工具走向团队级流程管理",
            summary: "自动化落地不再只关注单脚本执行，更强调流程可维护、网络质量、账号环境隔离和验收记录。",
            imageLabel: "行业趋势",
            body: [
              "企业团队在引入浏览器自动化时，需要同时管理流程编排、代理质量、验证码识别和执行日志。",
              "蜜獾官网将相关能力拆分到产品介绍和新闻资讯中，便于访客按业务场景理解产品组合。"
            ],
            related: ["proxy-quality", "captcha-choice"]
          },
          {
            slug: "captcha-choice",
            category: "技术干货",
            categoryKey: "tech",
            date: "2026-07-08",
            hot: 3,
            title: "验证码识别选择云端还是本地部署",
            summary: "CapMonster Cloud 与本地 CapMonster 的选择，应结合吞吐需求、数据边界、运维能力和集成方式判断。",
            imageLabel: "验证码识别",
            body: [
              "云端识别更适合弹性调用和快速集成，本地识别更适合有明确部署边界和内部运维能力的团队。",
              "正式项目中应先做小规模验证，记录识别类型、失败原因、日志留存和验收标准。"
            ],
            related: ["automation-adoption", "product-matrix-refresh"]
          },
          {
            slug: "product-matrix-refresh",
            category: "公司动态",
            categoryKey: "company",
            date: "2026-07-06",
            hot: 4,
            title: "产品矩阵页面补充二级产品详情入口",
            summary: "官网产品区新增 ZennoPoster、CapMonster Cloud、ZennoBrowser 等产品详情入口，便于用户逐项浏览。",
            imageLabel: "产品更新",
            body: [
              "产品详情页沿用 ZennoLab 官网的产品中心逻辑，但采用蜜獾自己的内容组织和本地化说明。",
              "所有产品页均保持静态展示，不引入未确认的购买、价格、客服账号或外部图片资源。"
            ],
            related: ["local-support-workflow", "captcha-choice"]
          },
          {
            slug: "proxy-quality",
            category: "技术干货",
            categoryKey: "tech",
            date: "2026-07-04",
            hot: 5,
            title: "代理质量是自动化任务稳定性的前置条件",
            summary: "在高频任务中，代理可用性、速度、地区和异常分类会直接影响自动化执行质量。",
            imageLabel: "代理质量",
            body: [
              "代理检测不应只看是否连通，还需要结合目标站点、协议、延迟和异常类型建立质量分组。",
              "通过 ZennoProxyChecker 等能力进行任务前置检查，可以减少运行中断和难以复盘的问题。"
            ],
            related: ["automation-adoption", "captcha-choice"]
          }
        ]
      },
      en: {
        eyebrow: "News",
        title: "News",
        lead: "Company updates, industry notes and technical articles for Honey Badger and automation product practices.",
        categoryTitle: "Categories",
        searchPlaceholder: "Search title, summary or keyword",
        searchButton: "Search",
        latestTitle: "Latest pinned news",
        listTitle: "News list",
        detailTitle: "News detail",
        hotTitle: "Popular news",
        relatedTitle: "Related news",
        previous: "Previous",
        next: "Next",
        readDetail: "Read detail",
        pageLabel: "Pagination",
        noResults: "No news matches the current filters.",
        categories: [
          { key: "company", label: "Company Updates", body: "Events, team updates, partnerships and announcements." },
          { key: "industry", label: "Industry News", body: "Policy, trends, technical topics and market signals." },
          { key: "tech", label: "Technical Notes", body: "Automation, CAPTCHA, proxy quality and anti-detect browser practices." }
        ],
        allLabel: "All",
        articles: [
          { slug: "local-support-workflow", category: "Company", categoryKey: "company", date: "2026-07-12", pinned: true, hot: 1, title: "Local support workflow moves toward launch readiness", summary: "A traceable loop for inquiry, triage, training and acceptance.", imageLabel: "Company", body: ["Honey Badger is organizing service boundaries for consulting, scenario checks, diagnostics and delivery training.", "Support accounts, enterprise email and ICP data remain pending until confirmed."], related: ["product-matrix-refresh", "automation-adoption"] },
          { slug: "automation-adoption", category: "Industry", categoryKey: "industry", date: "2026-07-10", hot: 2, title: "Browser automation is moving toward team workflow management", summary: "Automation adoption now emphasizes maintainability, network quality and acceptance records.", imageLabel: "Trend", body: ["Teams need to manage workflow orchestration, proxy quality, recognition and execution logs together.", "Honey Badger separates these topics into products and news for easier browsing."], related: ["proxy-quality", "captcha-choice"] },
          { slug: "captcha-choice", category: "Technical", categoryKey: "tech", date: "2026-07-08", hot: 3, title: "Choosing cloud or local CAPTCHA recognition", summary: "Choose based on throughput, data boundaries, operations capacity and integration style.", imageLabel: "CAPTCHA", body: ["Cloud recognition fits elastic API calls; local recognition fits clear deployment boundaries.", "A small validation should record types, failures, logs and acceptance criteria."], related: ["automation-adoption", "product-matrix-refresh"] },
          { slug: "product-matrix-refresh", category: "Company", categoryKey: "company", date: "2026-07-06", hot: 4, title: "Product matrix now links to product detail pages", summary: "ZennoPoster, CapMonster Cloud, ZennoBrowser and related products now have local detail pages.", imageLabel: "Product", body: ["Product detail pages follow ZennoLab's product-center logic with Honey Badger's own local content structure.", "No unconfirmed purchase, pricing, support account or external image assets were added."], related: ["local-support-workflow", "captcha-choice"] },
          { slug: "proxy-quality", category: "Technical", categoryKey: "tech", date: "2026-07-04", hot: 5, title: "Proxy quality is a precondition for automation stability", summary: "Availability, speed, region and exception classes affect high-frequency automation.", imageLabel: "Proxy", body: ["Proxy checks should consider target site, protocol, latency and exception class.", "Pre-flight validation can reduce runtime interruption and diagnosis cost."], related: ["automation-adoption", "captcha-choice"] }
        ]
      },
      ru: {
        eyebrow: "News",
        title: "Новости",
        lead: "Новости компании, отраслевые заметки и технические материалы по автоматизации.",
        categoryTitle: "Категории",
        searchPlaceholder: "Поиск по заголовку или ключевому слову",
        searchButton: "Искать",
        latestTitle: "Последняя новость",
        listTitle: "Список новостей",
        detailTitle: "Детали новости",
        hotTitle: "Популярное",
        relatedTitle: "Похожие материалы",
        previous: "Предыдущая",
        next: "Следующая",
        readDetail: "Подробнее",
        pageLabel: "Страницы",
        noResults: "Нет новостей по выбранным фильтрам.",
        categories: [
          { key: "company", label: "Новости компании", body: "События, команда, партнерства и объявления." },
          { key: "industry", label: "Отраслевые новости", body: "Тренды, политика, горячие темы и рынок." },
          { key: "tech", label: "Технические статьи", body: "Автоматизация, CAPTCHA, прокси и браузерные среды." }
        ],
        allLabel: "Все",
        articles: [
          { slug: "local-support-workflow", category: "Компания", categoryKey: "company", date: "2026-07-12", pinned: true, hot: 1, title: "Локальный процесс поддержки готовится к запуску", summary: "Цикл консультаций, диагностики, обучения и приемки.", imageLabel: "Компания", body: ["Honey Badger описывает границы сервиса для консультаций, диагностики и обучения.", "Реальные каналы поддержки и почта ожидают подтверждения."], related: ["product-matrix-refresh", "automation-adoption"] },
          { slug: "automation-adoption", category: "Отрасль", categoryKey: "industry", date: "2026-07-10", hot: 2, title: "Автоматизация браузера становится командным процессом", summary: "Важны поддерживаемость, качество сети и записи приемки.", imageLabel: "Тренд", body: ["Командам нужно вместе управлять сценариями, прокси, распознаванием и журналами.", "Материалы разделены по продуктам и новостям."], related: ["proxy-quality", "captcha-choice"] },
          { slug: "captcha-choice", category: "Техника", categoryKey: "tech", date: "2026-07-08", hot: 3, title: "Облако или локальное распознавание CAPTCHA", summary: "Выбор зависит от нагрузки, границ данных и интеграции.", imageLabel: "CAPTCHA", body: ["Облако подходит для API и эластичности, локальный вариант - для четких границ развертывания.", "Перед запуском нужен небольшой тест и журнал ошибок."], related: ["automation-adoption", "product-matrix-refresh"] },
          { slug: "product-matrix-refresh", category: "Компания", categoryKey: "company", date: "2026-07-06", hot: 4, title: "Матрица продуктов получила детальные страницы", summary: "Добавлены локальные страницы продуктов ZennoLab.", imageLabel: "Продукт", body: ["Страницы следуют логике продуктового центра, но используют локальную структуру Honey Badger.", "Неподтвержденные цены, покупки и контакты не добавлялись."], related: ["local-support-workflow", "captcha-choice"] },
          { slug: "proxy-quality", category: "Техника", categoryKey: "tech", date: "2026-07-04", hot: 5, title: "Качество прокси влияет на стабильность автоматизации", summary: "Доступность, скорость и регион важны для высокочастотных задач.", imageLabel: "Прокси", body: ["Проверка прокси должна учитывать целевой сайт, протокол и задержку.", "Предварительная проверка снижает число сбоев."], related: ["automation-adoption", "captcha-choice"] }
        ]
      }
    };

    const CAREER_CONTENT = {
      zh: {
        eyebrow: "Careers",
        title: "人才招聘",
        lead: "蜜獾欢迎理解自动化产品、重视交付质量和长期成长的伙伴加入。岗位信息、薪资和联系方式以正式招聘配置为准。",
        bannerTitle: "与可靠的自动化产品一起成长",
        bannerLead: "我们重视工程化思维、清晰沟通和可追踪交付。当前页面提供招聘信息结构，真实投递系统、邮箱和 HR 电话待管理员确认。",
        entryTitle: "招聘入口说明",
        entries: [
          { title: "社会招聘", body: "面向具备相关经验的技术、运营、市场和产品岗位。" },
          { title: "校园招聘", body: "面向应届毕业生和校招项目，岗位以正式发布为准。" },
          { title: "实习生招聘", body: "面向可持续参与项目实践的实习岗位。" }
        ],
        benefitsTitle: "企业优势与福利待遇",
        benefitNotice: "以下福利为官网展示结构，最终以公司正式制度和招聘信息为准。",
        benefits: [
          { title: "薪资福利", items: ["薪资体系", "绩效奖金", "年终奖励", "带薪假期"] },
          { title: "基础保障", items: ["五险一金", "团队建设", "节日福利", "培训体系"] },
          { title: "成长优势", items: ["晋升通道", "新人培养", "专项培训", "团队氛围"] }
        ],
        filterTitle: "招聘分类筛选",
        allLabel: "全部",
        filterLabels: { category: "岗位类型", type: "招聘类型", location: "工作地点" },
        jobLabels: { salary: "薪资范围", experience: "经验要求", education: "学历要求", responsibilities: "岗位职责", requirements: "任职要求" },
        categories: ["技术", "运营", "市场", "行政", "产品"],
        types: ["社招", "校招", "实习"],
        locations: ["广州"],
        jobsTitle: "招聘岗位列表",
        applyNow: "立即投递",
        uploadResume: "简历上传入口待接入",
        noJobs: "当前筛选条件下暂无岗位，请调整筛选条件。",
        jobs: [
          { title: "前端开发工程师", category: "技术", type: "社招", location: "广州", salary: "待确认", experience: "3 年及以上", education: "本科及以上", responsibilities: ["负责官网与产品展示页面的前端开发和响应式体验优化。", "与设计、内容和服务团队协作，维护多语言内容结构。"], requirements: ["熟悉 HTML、CSS、原生 JavaScript 和浏览器兼容性。", "重视可维护性、可访问性和交付验证。"] },
          { title: "自动化产品运营专员", category: "运营", type: "社招", location: "广州", salary: "待确认", experience: "2 年及以上", education: "本科及以上", responsibilities: ["梳理 ZennoLab 产品本地化内容、用户问题和服务流程。", "协助建设产品资料、FAQ 和交付记录。"], requirements: ["具备 SaaS 或工具类产品运营经验。", "能够把复杂技术能力转化为清晰业务说明。"] },
          { title: "市场内容实习生", category: "市场", type: "实习", location: "广州", salary: "待确认", experience: "不限", education: "本科在读及以上", responsibilities: ["协助整理行业资讯、产品更新和官网内容素材。", "维护新闻资讯列表和基础数据校对。"], requirements: ["文字表达清晰，关注技术产品和 B2B 官网内容。", "每周可稳定投入实习时间。"] },
          { title: "产品助理", category: "产品", type: "校招", location: "广州", salary: "待确认", experience: "应届", education: "本科及以上", responsibilities: ["协助整理用户场景、竞品信息和产品文档。", "参与产品页面信息架构和需求验收。"], requirements: ["具备结构化思考能力，愿意学习自动化工具链。", "能够进行基础原型、文档和数据整理。"] }
        ],
        guideTitle: "投递指引与须知",
        applyMethods: ["在线表单：待正式招聘系统接入。", "邮箱投递：企业邮箱账号待管理员确认。"],
        processTitle: "招聘流程",
        process: ["投递", "初筛", "面试", "复试", "Offer", "入职"],
        faqTitle: "常见 FAQ",
        faq: [
          { q: "工作时间如何安排？", a: "以正式岗位说明和 HR 沟通为准。" },
          { q: "是否有试用期？", a: "试用期规则以劳动合同和公司制度为准。" },
          { q: "是否支持落户或补贴？", a: "相关政策待公司正式招聘信息确认。" }
        ],
        contactTitle: "联系与简历保密",
        contact: [
          ["人力资源电话", "待管理员确认"],
          ["招聘邮箱", "阿里云企业邮箱账号待确认"],
          ["办公地址", "广州"],
          ["隐私声明", "简历仅用于招聘评估，未经授权不作其他用途。"]
        ]
      },
      en: {
        eyebrow: "Careers",
        title: "Careers",
        lead: "Honey Badger welcomes people who value automation products, delivery quality and long-term growth.",
        bannerTitle: "Grow with reliable automation products",
        bannerLead: "This page provides the recruiting structure; the real application system, email and HR phone are pending confirmation.",
        entryTitle: "Recruiting entrances",
        entries: [
          { title: "Experienced Hiring", body: "For technical, operations, marketing and product roles." },
          { title: "Campus Hiring", body: "For graduates; roles depend on formal postings." },
          { title: "Internships", body: "For internship roles with stable project participation." }
        ],
        benefitsTitle: "Advantages and Benefits",
        benefitNotice: "Benefits are structural placeholders and must follow the final company policy.",
        benefits: [
          { title: "Compensation", items: ["Salary system", "Performance bonus", "Year-end reward", "Paid leave"] },
          { title: "Protection", items: ["Social insurance", "Team building", "Holiday benefits", "Training system"] },
          { title: "Growth", items: ["Promotion path", "New hire training", "Special training", "Team culture"] }
        ],
        filterTitle: "Job filters",
        allLabel: "All",
        filterLabels: { category: "Role type", type: "Hiring type", location: "Location" },
        jobLabels: { salary: "Salary", experience: "Experience", education: "Education", responsibilities: "Responsibilities", requirements: "Requirements" },
        categories: ["Tech", "Operations", "Marketing", "Admin", "Product"],
        types: ["Experienced", "Campus", "Intern"],
        locations: ["Guangzhou"],
        jobsTitle: "Open roles",
        applyNow: "Apply now",
        uploadResume: "Resume upload pending",
        noJobs: "No roles match the current filters.",
        jobs: [
          { title: "Frontend Engineer", category: "Tech", type: "Experienced", location: "Guangzhou", salary: "Pending", experience: "3+ years", education: "Bachelor or above", responsibilities: ["Build responsive official-site and product pages.", "Maintain multilingual content structures with design and content teams."], requirements: ["HTML, CSS and native JavaScript experience.", "Care for maintainability, accessibility and validation."] },
          { title: "Automation Product Operations Specialist", category: "Operations", type: "Experienced", location: "Guangzhou", salary: "Pending", experience: "2+ years", education: "Bachelor or above", responsibilities: ["Organize local product content, user issues and service workflows.", "Maintain product materials, FAQ and delivery records."], requirements: ["SaaS or tool-product operations experience.", "Ability to translate technical capability into clear business language."] },
          { title: "Marketing Content Intern", category: "Marketing", type: "Intern", location: "Guangzhou", salary: "Pending", experience: "Open", education: "Undergraduate or above", responsibilities: ["Prepare industry news and product update materials.", "Maintain news lists and content checks."], requirements: ["Clear writing and interest in B2B technical products.", "Stable weekly availability."] },
          { title: "Product Assistant", category: "Product", type: "Campus", location: "Guangzhou", salary: "Pending", experience: "Graduate", education: "Bachelor or above", responsibilities: ["Organize user scenarios, product documents and competitor notes.", "Support page information architecture and acceptance checks."], requirements: ["Structured thinking and willingness to learn automation tools.", "Basic prototype, document and data organization skills."] }
        ],
        guideTitle: "Application guide",
        applyMethods: ["Online form: pending recruiting system.", "Email: enterprise mailbox pending confirmation."],
        processTitle: "Recruiting process",
        process: ["Apply", "Screen", "Interview", "Final", "Offer", "Onboard"],
        faqTitle: "FAQ",
        faq: [
          { q: "What are the working hours?", a: "Subject to the final role description and HR communication." },
          { q: "Is there a probation period?", a: "Subject to contract and company policy." },
          { q: "Are relocation benefits available?", a: "Pending formal recruiting information." }
        ],
        contactTitle: "Contact and privacy",
        contact: [["HR phone", "Pending"], ["Recruiting email", "Enterprise mailbox pending"], ["Address", "Guangzhou"], ["Privacy", "Resumes are used only for recruiting evaluation."]]
      },
      ru: {
        eyebrow: "Careers",
        title: "Карьера",
        lead: "Honey Badger приглашает людей, которым важны продукты автоматизации, качество поставки и рост.",
        bannerTitle: "Растите вместе с надежными продуктами автоматизации",
        bannerLead: "Система отклика, почта и телефон HR ожидают подтверждения.",
        entryTitle: "Типы найма",
        entries: [
          { title: "Опытные специалисты", body: "Технические, операционные, маркетинговые и продуктовые роли." },
          { title: "Выпускники", body: "Позиции зависят от официальных публикаций." },
          { title: "Стажировки", body: "Для стабильного участия в проектах." }
        ],
        benefitsTitle: "Преимущества и льготы",
        benefitNotice: "Финальные условия определяются официальной политикой компании.",
        benefits: [
          { title: "Оплата", items: ["Система зарплат", "Бонусы", "Годовая премия", "Оплачиваемый отпуск"] },
          { title: "База", items: ["Соцпакет", "Командные активности", "Праздничные льготы", "Обучение"] },
          { title: "Рост", items: ["Карьерный путь", "Адаптация", "Спецобучение", "Команда"] }
        ],
        filterTitle: "Фильтры вакансий",
        allLabel: "Все",
        filterLabels: { category: "Тип роли", type: "Тип найма", location: "Локация" },
        jobLabels: { salary: "Зарплата", experience: "Опыт", education: "Образование", responsibilities: "Обязанности", requirements: "Требования" },
        categories: ["Tech", "Operations", "Marketing", "Admin", "Product"],
        types: ["Experienced", "Campus", "Intern"],
        locations: ["Гуанчжоу"],
        jobsTitle: "Вакансии",
        applyNow: "Откликнуться",
        uploadResume: "Загрузка резюме ожидает подключения",
        noJobs: "Нет вакансий по выбранным фильтрам.",
        jobs: [
          { title: "Frontend Engineer", category: "Tech", type: "Experienced", location: "Гуанчжоу", salary: "Pending", experience: "3+ years", education: "Bachelor+", responsibilities: ["Разработка адаптивных страниц сайта и продуктов.", "Поддержка многоязычной структуры контента."], requirements: ["HTML, CSS и JavaScript.", "Внимание к поддерживаемости и проверке."] },
          { title: "Automation Product Operations Specialist", category: "Operations", type: "Experienced", location: "Гуанчжоу", salary: "Pending", experience: "2+ years", education: "Bachelor+", responsibilities: ["Локальный контент продуктов и сервисные процессы.", "Материалы, FAQ и записи поставки."], requirements: ["Опыт SaaS или tool-product operations.", "Умение объяснять технические продукты."] },
          { title: "Marketing Content Intern", category: "Marketing", type: "Intern", location: "Гуанчжоу", salary: "Pending", experience: "Open", education: "Undergraduate+", responsibilities: ["Отраслевые новости и обновления продуктов.", "Проверка списков новостей."], requirements: ["Ясное письмо и интерес к B2B tech.", "Стабильная доступность."] },
          { title: "Product Assistant", category: "Product", type: "Campus", location: "Гуанчжоу", salary: "Pending", experience: "Graduate", education: "Bachelor+", responsibilities: ["Сценарии пользователей и документы.", "Информационная архитектура и приемка."], requirements: ["Структурное мышление.", "Базовые навыки прототипов и документов."] }
        ],
        guideTitle: "Как откликнуться",
        applyMethods: ["Онлайн-форма: ожидает подключения.", "Почта: корпоративный ящик ожидает подтверждения."],
        processTitle: "Процесс",
        process: ["Отклик", "Скрининг", "Интервью", "Финал", "Offer", "Выход"],
        faqTitle: "FAQ",
        faq: [
          { q: "Какой график?", a: "По официальному описанию роли и HR-коммуникации." },
          { q: "Есть ли испытательный срок?", a: "По договору и политике компании." },
          { q: "Есть ли релокация?", a: "Ожидает официальной информации." }
        ],
        contactTitle: "Контакты и приватность",
        contact: [["HR телефон", "Pending"], ["Email", "Pending"], ["Адрес", "Гуанчжоу"], ["Privacy", "Резюме используется только для оценки найма."]]
      }
    };

    const productPageFiles = {
      zennoposter: "Agriculture.html",
      "capmonster-cloud": "mihuan_yuantu.html",
      zennobrowser: "AI-FDE.html",
      zennodroid: "TikTok.html",
      "static-ip": "static-ip.html",
      "idc-ip": "idc-ip.html",
      "dynamic-ip": "dynamic-ip.html"
    };

    const productCodeSlugs = {
      ZP: "zennoposter",
      CC: "capmonster-cloud",
      ZB: "zennobrowser",
      ZD: "zennodroid",
      SIP: "static-ip",
      IDC: "idc-ip",
      DIP: "dynamic-ip"
    };

    const pageOrder = ["home", "products", "news", "careers", "about"];
    const pageFiles = {
      home: "index.html",
      products: "products.html",
      "network-services": "跨境网络服务.html",
      news: "news.html",
      careers: "careers.html",
      about: "about.html"
    };
    const pageLabels = {
      home: "home",
      products: "products",
      news: "news",
      careers: "careers",
      about: "about"
    };
    const languageRoutes = {
      zh: { hreflang: "zh-CN", directory: "" },
      en: { hreflang: "en-US", directory: "en" },
      ru: { hreflang: "ru-RU", directory: "ru" }
    };
    const supportedLanguages = Object.keys(languageRoutes);
    const productionOrigin = "https://www.honeybadgersoft.com";
    const app = document.getElementById("app");
    const desktopNav = document.getElementById("desktop-nav");
    const mobileNav = document.getElementById("mobile-nav");
    const footer = document.getElementById("site-footer");
    const serviceFloat = document.getElementById("service-float");
    const languageSelect = document.getElementById("language-select");
    const menuButton = document.getElementById("menu-button");

    const state = {
      lang: getInitialLang(),
      page: getPageFromDocument(),
      product: getProductFromDocument(),
      newsCategory: "all",
      newsQuery: "",
      newsPage: 1,
      careerCategory: "all",
      careerType: "all",
      careerLocation: "all"
    };

    function normalizeLang(lang) {
      return supportedLanguages.includes(lang) ? lang : "";
    }

    function getPathLang() {
      const segments = window.location.pathname.split("/").filter(Boolean);
      const parent = segments.length > 1 ? segments[segments.length - 2] : "";
      return normalizeLang(parent);
    }

    function getQueryLang() {
      try {
        return normalizeLang(new URLSearchParams(window.location.search).get("lang"));
      } catch (error) {
        return "";
      }
    }

    function getStoredLang() {
      try {
        return normalizeLang(localStorage.getItem("hb-lang"));
      } catch (error) {
        return "";
      }
    }

    function getInitialLang() {
      return normalizeLang(document.body.dataset.lang) || getPathLang() || getQueryLang() || getStoredLang() || "zh";
    }

    function storeLang(lang) {
      try {
        localStorage.setItem("hb-lang", lang);
      } catch (error) {}
    }

    function getPageFromDocument() {
      const page = document.body.dataset.page || "home";
      if (page === "product-detail") return page;
      if (page === "network-services") return page;
      return pageOrder.includes(page) ? page : "home";
    }

    function getProductFromDocument() {
      const product = document.body.dataset.product || "zennoposter";
      return productPageFiles[product] ? product : "zennoposter";
    }

    function currentDepthPrefix() {
      return getPathLang() ? "../" : "";
    }

    function localizedFilePath(file, lang) {
      const prefix = currentDepthPrefix();
      if (lang === "zh") return `${prefix}${file}`;
      return `${prefix}${lang}/${file}`;
    }

    function pageHref(page, lang = state.lang) {
      return localizedFilePath(pageFiles[page] || pageFiles.home, lang);
    }

    function productSlugFromItem(item) {
      return productCodeSlugs[item.code] || item.name.toLowerCase().replace(/\s+/g, "-");
    }

    function productHref(slug, lang = state.lang) {
      return localizedFilePath(productPageFiles[slug] || pageFiles.products, lang);
    }

    function productItemHref(item, lang = state.lang) {
      return item.href ? localizedFilePath(item.href, lang) : productHref(productSlugFromItem(item), lang);
    }

    function currentPageHref(lang) {
      return state.page === "product-detail" ? productHref(state.product, lang) : pageHref(state.page, lang);
    }

    function productDetailMap() {
      return PRODUCT_DETAILS[state.lang] || PRODUCT_DETAILS.en;
    }

    function currentProductDetail() {
      const details = productDetailMap();
      return details[state.product] || PRODUCT_DETAILS.en[state.product] || PRODUCT_DETAILS.en.zennoposter;
    }

    function productDetailForSlug(slug) {
      const details = productDetailMap();
      return details[slug] || PRODUCT_DETAILS.en[slug] || null;
    }

    function newsData() {
      return NEWS_CONTENT[state.lang] || NEWS_CONTENT.en;
    }

    function careerData() {
      return CAREER_CONTENT[state.lang] || CAREER_CONTENT.en;
    }

    function bySlug(items, slug) {
      return items.find(item => item.slug === slug) || null;
    }

    function optionList(items, selected, allLabel) {
      return [`<option value="all">${escapeHtml(allLabel)}</option>`]
        .concat(items.map(item => `<option value="${escapeHtml(item)}"${item === selected ? " selected" : ""}>${escapeHtml(item)}</option>`))
        .join("");
    }

    function pageLabel(d, page) {
      const labelKey = pageLabels[page] || page;
      return d.nav[labelKey] || d.nav.home;
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function productNavDropdown(d) {
      const visibleProducts = d.productItems.slice(0, 4);
      const networkLabel = networkServicesCopy().title;
      return `
        <div class="product-nav-dropdown" aria-label="${escapeHtml(d.footer.products)}">
          ${visibleProducts.map(item => `
            <a class="product-nav-button" href="${escapeHtml(productItemHref(item))}">
              <span class="product-nav-code ${escapeHtml(item.accent)}">${escapeHtml(item.code)}</span>
              <span>${escapeHtml(item.name)}</span>
            </a>
          `).join("")}
          <a class="product-nav-button" href="${escapeHtml(pageHref("network-services"))}">
            <span class="product-nav-code accent-purple">NET</span>
            <span>${escapeHtml(networkLabel)}</span>
          </a>
        </div>
      `;
    }

    function navLinks(d) {
      const activePage = state.page === "product-detail" || state.page === "network-services" ? "products" : state.page;
      return pageOrder.map(page => {
        const active = activePage === page ? ' aria-current="page"' : "";
        if (page === "products") {
          return `
            <div class="nav-item nav-item-products">
              <a class="nav-link" href="${pageHref(page)}" data-page-link="${page}"${active}>${escapeHtml(pageLabel(d, page))}</a>
              ${productNavDropdown(d)}
            </div>
          `;
        }
        return `<a class="nav-link" href="${pageHref(page)}" data-page-link="${page}"${active}>${escapeHtml(pageLabel(d, page))}</a>`;
      }).join("");
    }

    function breadcrumb(d, pageLabel) {
      if (state.page === "home") return "";
      return `
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <div class="container">
            <a href="${pageHref("home")}" data-page-link="home">${escapeHtml(d.common.home)}</a>
            <span>/</span>
            <span>${escapeHtml(pageLabel)}</span>
          </div>
        </nav>
      `;
    }

    function productBreadcrumb(d, detail) {
      return `
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <div class="container">
            <a href="${pageHref("home")}" data-page-link="home">${escapeHtml(d.common.home)}</a>
            <span>/</span>
            <a href="${pageHref("products")}" data-page-link="products">${escapeHtml(pageLabel(d, "products"))}</a>
            <span>/</span>
            <span>${escapeHtml(detail.name)}</span>
          </div>
        </nav>
      `;
    }

    function visualCard() {
      const content = {
        zh: {
          label: "自动化产品能力界面示意图",
          flow: ["账号环境", "代理网络", "验证码", "执行结果"],
          metrics: ["自动化流程", "识别稳定性", "网络质量", "本地支持"]
        },
        en: {
          label: "Automation product capability interface mockup",
          flow: ["Profile", "Proxy", "Captcha", "Result"],
          metrics: ["Automation flow", "Recognition stability", "Network quality", "Local support"]
        },
        ru: {
          label: "Макет интерфейса возможностей продукта автоматизации",
          flow: ["Профиль", "Прокси", "CAPTCHA", "Результат"],
          metrics: ["Процесс автоматизации", "Стабильность распознавания", "Качество сети", "Локальная поддержка"]
        }
      }[state.lang] || {
        label: "Automation product capability interface mockup",
        flow: ["Profile", "Proxy", "Captcha", "Result"],
        metrics: ["Automation flow", "Recognition stability", "Network quality", "Local support"]
      };
      const metricWidths = [82, 74, 68, 90];
      return `
        <div class="visual-card" role="img" aria-label="${escapeHtml(content.label)}">
          <div class="browser-frame">
            <div class="browser-top"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
            <div class="screen-grid">
              <div class="flow-list">
                ${content.flow.map((label, index) => `
                  <div class="flow-item">
                    <span class="flow-index">${String(index + 1).padStart(2, "0")}</span>
                    <span>${escapeHtml(label)}</span>
                  </div>
                `).join("")}
              </div>
              <div class="metric-board">
                ${content.metrics.map((label, index) => `
                  <div class="metric-line">
                    <span>${escapeHtml(label)}</span>
                    <div class="bar"><i style="width: ${metricWidths[index]}%"></i></div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function productCard(item, d) {
      return `
        <article class="card">
          <div class="card-accent ${escapeHtml(item.accent)}">${escapeHtml(item.code)}</div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <div class="tag-list">${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="link-more" href="${escapeHtml(productItemHref(item))}" data-page-link="product-detail">${escapeHtml(d.common.learnMore)}</a>
        </article>
      `;
    }

    function productCards(d, limit) {
      const items = typeof limit === "number" ? d.productItems.slice(0, limit) : d.productItems;
      return items.map(item => productCard(item, d)).join("");
    }

    function networkServicesCopy() {
      return {
        zh: {
          eyebrow: "Network Services",
          title: "跨境网络服务",
          lead: "整合静态住宅 IP、机房 IP 与动态 IP，为跨境业务提供稳定、灵活且适配不同任务规模的网络资源。",
          productsLabel: "三大网络产品",
          featuresLabel: "核心优势",
          scenariosLabel: "适用场景",
          detailLabel: "查看完整详情"
        },
        en: {
          eyebrow: "Network Services",
          title: "Cross-border Network Services",
          lead: "Static residential, datacenter and dynamic IP services combined for stable, flexible cross-border network access at every workload scale.",
          productsLabel: "Three network products",
          featuresLabel: "Core advantages",
          scenariosLabel: "Scenarios",
          detailLabel: "View full details"
        },
        ru: {
          eyebrow: "Network Services",
          title: "Сетевые сервисы для международного бизнеса",
          lead: "Статические residential IP, datacenter IP и динамические IP для стабильного и гибкого доступа в международных проектах.",
          productsLabel: "Три сетевых продукта",
          featuresLabel: "Ключевые преимущества",
          scenariosLabel: "Сценарии",
          detailLabel: "Подробнее"
        }
      }[state.lang] || {
        eyebrow: "Network Services",
        title: "Cross-border Network Services",
        lead: "Static residential, datacenter and dynamic IP services for cross-border operations.",
        productsLabel: "Three network products",
        featuresLabel: "Core advantages",
        scenariosLabel: "Scenarios",
        detailLabel: "View full details"
      };
    }

    function productCoreCards(d) {
      const primaryItems = d.productItems.slice(0, 4);
      const networkItems = d.productItems.slice(4);
      const networkCopy = networkServicesCopy();
      return `
        <div class="products-core-grid">
          <div class="products-core-row products-core-row-top">
            ${primaryItems.map(item => productCard(item, d)).join("")}
          </div>
          ${networkItems.length ? `
            <section class="network-services-group" id="network-services" aria-labelledby="network-services-title">
              <div class="network-services-heading">
                <span class="eyebrow">Network Services</span>
                <h2 id="network-services-title">${escapeHtml(networkCopy.title)}</h2>
                <p>${escapeHtml(networkCopy.lead)}</p>
              </div>
              <div class="products-core-row products-core-row-centered network-services-cards">
                ${networkItems.map(item => productCard(item, d)).join("")}
              </div>
            </section>
          ` : ""}
        </div>
      `;
    }

    function hero(d, pageData, primaryPage, secondaryPage) {
      return `
        <section class="hero hero-home">
          <img class="hero-bg-svg" src="${currentDepthPrefix()}assets/stacked-waves-haikei.svg" alt="" aria-hidden="true">
          <div class="container">
            <div>
              <span class="eyebrow">${escapeHtml(pageData.eyebrow)}</span>
              <h1>${escapeHtml(pageData.title)}</h1>
              ${pageData.subtitle ? `<p class="hero-subtitle">${escapeHtml(pageData.subtitle)}</p>` : ""}
              <p class="lead">${escapeHtml(pageData.lead)}</p>
              <div class="actions">
                <a class="btn" href="${pageHref(primaryPage)}" data-page-link="${primaryPage}">${escapeHtml(pageData.ctaPrimary || d.common.consult)}</a>
                <a class="btn btn-outline" href="${pageHref(secondaryPage)}" data-page-link="${secondaryPage}">${escapeHtml(pageData.ctaSecondary || d.common.contact)}</a>
              </div>
              ${pageData.stats ? `<div class="stats">${pageData.stats.map(stat => `<div class="stat"><strong>${escapeHtml(stat[0])}</strong><span>${escapeHtml(stat[1])}</span></div>`).join("")}</div>` : ""}
            </div>
            ${visualCard()}
          </div>
        </section>
      `;
    }

    function simpleHero(d, pageKey, pageData) {
      return `
        ${breadcrumb(d, pageLabel(d, pageKey))}
        <section class="hero hero-simple">
          <div class="container">
            <div>
              <span class="eyebrow">${escapeHtml(pageData.eyebrow)}</span>
              <h1>${escapeHtml(pageData.title)}</h1>
              <p class="lead">${escapeHtml(pageData.lead)}</p>
              <div class="actions">
                <a class="btn" href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.contact)}</a>
                <a class="btn btn-outline" href="${pageHref("products")}" data-page-link="products">${escapeHtml(d.common.products)}</a>
              </div>
            </div>
            ${visualCard()}
          </div>
        </section>
      `;
    }

    function renderHome(d) {
      const p = d.home;
      return `
        ${hero(d, p, "products", "about")}
        <section class="section">
          <div class="container center">
            <span class="eyebrow eyebrow-dark">${escapeHtml(p.productTitle)}</span>
            <h2>${escapeHtml(p.productTitle)}</h2>
            <p class="lead">${escapeHtml(p.productLead)}</p>
            <div class="grid-3" style="margin-top: 36px">${productCards(d)}</div>
          </div>
        </section>
        <section class="section section-soft home-relation-section">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Entity</span>
              <h2>${escapeHtml(p.relationTitle)}</h2>
              <p class="lead">${escapeHtml(p.relationLead)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.nav.about)}</a>
              </div>
            </div>
            <div class="panel contact-panel">
              ${p.relationItems.map(item => `
                <div class="feature-row">
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.body)}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container grid-3">
            <article class="card">
              <div class="card-accent accent-cyan">P</div>
              <h3>${escapeHtml(d.nav.products)}</h3>
              <p>${escapeHtml(d.products.lead)}</p>
              <a class="link-more" href="${pageHref("products")}" data-page-link="products">${escapeHtml(d.common.learnMore)}</a>
            </article>
            <article class="card">
              <div class="card-accent accent-violet">C</div>
              <h3>${escapeHtml(p.newsTitle)}</h3>
              <p>${escapeHtml(p.newsLead)}</p>
              <a class="link-more" href="${pageHref("news")}" data-page-link="news">${escapeHtml(d.common.viewNews)}</a>
            </article>
            <article class="card">
              <div class="card-accent accent-green">V</div>
              <h3>${escapeHtml(p.careerTitle)}</h3>
              <p>${escapeHtml(p.careerLead)}</p>
              <a class="link-more" href="${pageHref("careers")}" data-page-link="careers">${escapeHtml(d.common.viewCareers)}</a>
            </article>
          </div>
        </section>
      `;
    }

    function renderProducts(d) {
      const p = d.products;
      return `
        ${simpleHero(d, "products", p)}
        <section class="section">
          <div class="container center">
            <h2>${escapeHtml(d.nav.products)}</h2>
            <p class="lead">${escapeHtml(p.lead)}</p>
            ${productCoreCards(d)}
          </div>
        </section>
        <section class="section section-soft">
          <div class="container">
            <div class="center">
              <h2>${escapeHtml(p.capabilityTitle)}</h2>
              <p class="lead">${escapeHtml(p.capabilityLead)}</p>
            </div>
            <div class="grid-4" style="margin-top: 36px">
              ${p.capabilities.map((item, index) => `
                <article class="card">
                  <div class="card-accent ${["accent-green","accent-cyan","accent-violet","accent-warning"][index % 4]}">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Workflow</span>
              <h2>${escapeHtml(p.flowTitle)}</h2>
              <p class="lead">${escapeHtml(d.common.pending)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.consult)}</a>
              </div>
            </div>
            <div class="panel contact-panel timeline">
              ${p.flow.map(item => `
                <div class="timeline-item">
                  <span class="timeline-number">${escapeHtml(item[0])}</span>
                  <p>${escapeHtml(item[1])}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `;
    }

    function renderNetworkServices(d) {
      const copy = networkServicesCopy();
      const products = ["static-ip", "idc-ip", "dynamic-ip"]
        .map(slug => ({ slug, detail: productDetailForSlug(slug) }))
        .filter(item => item.detail);

      return `
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <div class="container">
            <a href="${pageHref("home")}" data-page-link="home">${escapeHtml(d.common.home)}</a>
            <span>/</span>
            <a href="${pageHref("products")}" data-page-link="products">${escapeHtml(pageLabel(d, "products"))}</a>
            <span>/</span>
            <span>${escapeHtml(copy.title)}</span>
          </div>
        </nav>
        <section class="hero hero-simple network-services-hero">
          <div class="container">
            <div>
              <span class="eyebrow">${escapeHtml(copy.eyebrow)}</span>
              <h1>${escapeHtml(copy.title)}</h1>
              <p class="lead">${escapeHtml(copy.lead)}</p>
              <div class="actions">
                <a class="btn" href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.consult)}</a>
                <a class="btn btn-outline" href="${pageHref("products")}" data-page-link="products">${escapeHtml(pageLabel(d, "products"))}</a>
              </div>
            </div>
            <aside class="network-services-hero-panel panel" aria-label="${escapeHtml(copy.productsLabel)}">
              ${products.map(({ detail }) => `
                <div class="network-service-hero-item">
                  <span class="card-accent ${escapeHtml(detail.accent)}">${escapeHtml(detail.code)}</span>
                  <div><strong>${escapeHtml(detail.name)}</strong><small>${escapeHtml(detail.eyebrow)}</small></div>
                </div>
              `).join("")}
            </aside>
          </div>
        </section>
        <section class="section network-services-page" aria-labelledby="network-products-title">
          <div class="container">
            <div class="center section-heading">
              <span class="eyebrow eyebrow-dark">${escapeHtml(copy.eyebrow)}</span>
              <h2 id="network-products-title">${escapeHtml(copy.productsLabel)}</h2>
              <p class="lead">${escapeHtml(copy.lead)}</p>
            </div>
            <div class="network-product-modules">
              ${products.map(({ slug, detail }) => `
                <article class="network-product-module" id="${escapeHtml(slug)}">
                  <header class="network-product-module-head">
                    <div class="card-accent ${escapeHtml(detail.accent)}">${escapeHtml(detail.code)}</div>
                    <div>
                      <span class="eyebrow eyebrow-dark">${escapeHtml(detail.eyebrow)}</span>
                      <h2>${escapeHtml(detail.title)}</h2>
                      <p class="lead">${escapeHtml(detail.lead)}</p>
                    </div>
                  </header>
                  <div class="network-product-body">
                    <div class="network-product-column">
                      <ul class="product-spec-list panel">
                        ${detail.specs.map(spec => `<li><strong>${escapeHtml(spec[0])}</strong><span>${escapeHtml(spec[1])}</span></li>`).join("")}
                      </ul>
                      <h3>${escapeHtml(copy.featuresLabel)}</h3>
                      <div class="network-feature-list">
                        ${detail.features.map((feature, index) => `
                          <div class="network-feature-item">
                            <span>${String(index + 1).padStart(2, "0")}</span>
                            <div><strong>${escapeHtml(feature.title)}</strong><p>${escapeHtml(feature.body)}</p></div>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                    <div class="network-product-column network-scenario-column">
                      <h3>${escapeHtml(copy.scenariosLabel)}</h3>
                      <div class="product-scenario-list panel">
                        ${detail.scenarios.map((scenario, index) => `
                          <div class="product-scenario"><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(scenario)}</p></div>
                        `).join("")}
                      </div>
                      <a class="btn btn-primary" href="${productHref(slug)}" data-page-link="product-detail">${escapeHtml(copy.detailLabel)}</a>
                    </div>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
      `;
    }

    function renderProductDetail(d) {
      const detail = currentProductDetail();
      const relatedProducts = detail.related
        .map(slug => productDetailForSlug(slug))
        .filter(Boolean);

      return `
        ${productBreadcrumb(d, detail)}
        <section class="hero hero-simple product-hero">
          <div class="container">
            <div>
              <span class="eyebrow">${escapeHtml(detail.eyebrow)}</span>
              <h1>${escapeHtml(detail.title)}</h1>
              <p class="lead">${escapeHtml(detail.lead)}</p>
              <div class="actions">
                <a class="btn" href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.consult)}</a>
                <a class="btn btn-outline" href="${pageHref("products")}" data-page-link="products">${escapeHtml(pageLabel(d, "products"))}</a>
              </div>
            </div>
            <aside class="product-snapshot panel" aria-label="${escapeHtml(detail.name)}">
              <div class="product-snapshot-head">
                <div class="card-accent product-code ${escapeHtml(detail.accent)}">${escapeHtml(detail.code)}</div>
                <div>
                  <strong>${escapeHtml(detail.name)}</strong>
                  <span>${escapeHtml(detail.eyebrow)}</span>
                </div>
              </div>
              <ul class="product-spec-list">
                ${detail.specs.map(item => `
                  <li>
                    <strong>${escapeHtml(item[0])}</strong>
                    <span>${escapeHtml(item[1])}</span>
                  </li>
                `).join("")}
              </ul>
            </aside>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="center section-heading">
              <span class="eyebrow eyebrow-dark">${escapeHtml(detail.featureTitle)}</span>
              <h2>${escapeHtml(detail.featureTitle)}</h2>
              <p class="lead">${escapeHtml(detail.featureLead)}</p>
            </div>
            <div class="product-feature-grid${detail.featureLayout === "split-3-2" ? " product-feature-grid-split" : ""}">
              ${detail.features.map((item, index) => `
                <article class="card">
                  <div class="card-accent ${escapeHtml(detail.accent)}">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Scenario</span>
              <h2>${escapeHtml(detail.scenarioTitle)}</h2>
              <p class="lead">${escapeHtml(detail.lead)}</p>
            </div>
            <div class="panel product-scenario-list">
              ${detail.scenarios.map((item, index) => `
                <div class="product-scenario">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${escapeHtml(item)}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
        ${detail.complianceTitle ? `
        <section class="section product-compliance-section">
          <div class="container">
            <div class="panel product-compliance-panel">
              <div>
                <span class="eyebrow eyebrow-dark">Compliance</span>
                <h2>${escapeHtml(detail.complianceTitle)}</h2>
                <p class="lead">${escapeHtml(detail.complianceLead || "")}</p>
              </div>
              <ul class="product-compliance-list">
                ${detail.complianceItems.map((item, index) => `
                  <li>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${escapeHtml(item)}</p>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </section>
        ` : ""}
        <section class="section">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Workflow</span>
              <h2>${escapeHtml(detail.workflowTitle)}</h2>
              <p class="lead">${escapeHtml(d.common.pending)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.contact)}</a>
              </div>
            </div>
            <div class="panel contact-panel timeline">
              ${detail.workflow.map(item => `
                <div class="timeline-item">
                  <span class="timeline-number">${escapeHtml(item[0])}</span>
                  <p>${escapeHtml(item[1])}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container">
            <div class="center section-heading">
              <span class="eyebrow eyebrow-dark">${escapeHtml(detail.supportTitle)}</span>
              <h2>${escapeHtml(detail.supportTitle)}</h2>
            </div>
            <div class="grid-3">
              ${detail.support.map((item, index) => `
                <article class="card">
                  <div class="card-accent ${["accent-green","accent-cyan","accent-violet"][index % 3]}">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.body)}</p>
                </article>
              `).join("")}
            </div>
            ${detail.hideRelatedProducts ? "" : `<div class="related-products panel">
              <strong>${escapeHtml(pageLabel(d, "products"))}</strong>
              <div class="related-product-links">
                ${detail.related.map(slug => {
                  const item = productDetailForSlug(slug);
                  return item ? `
                  <a class="related-pill" href="${productHref(slug)}" data-page-link="product-detail">${escapeHtml(item.name)}</a>
                ` : "";
                }).join("")}
              </div>
            </div>`}
          </div>
        </section>
      `;
    }

    function renderNews(d) {
      const p = newsData();
      const pageSize = 3;
      const query = state.newsQuery.trim().toLowerCase();
      const filtered = p.articles.filter(article => {
        const categoryMatch = state.newsCategory === "all" || article.categoryKey === state.newsCategory;
        const queryMatch = !query || [article.title, article.summary, article.category, article.imageLabel].join(" ").toLowerCase().includes(query);
        return categoryMatch && queryMatch;
      });
      const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
      if (state.newsPage > pageCount) state.newsPage = pageCount;
      const pageItems = filtered.slice((state.newsPage - 1) * pageSize, state.newsPage * pageSize);
      const latest = p.articles.find(article => article.pinned) || p.articles[0];
      const hotItems = [...p.articles].sort((a, b) => (a.hot || 99) - (b.hot || 99)).slice(0, 5);
      return `
        ${simpleHero(d, "news", p)}
        <!-- 标注：news.html 新闻资讯页，覆盖分类导航、搜索、置顶、列表、分页、详情、热门与相关资讯。 -->
        <section class="section section-soft">
          <div class="container news-layout">
            <aside class="news-sidebar">
              <div class="panel news-tool">
                <h2>${escapeHtml(p.categoryTitle)}</h2>
                <div class="news-search">
                  <label class="visually-hidden" for="news-search">${escapeHtml(p.searchButton)}</label>
                  <input id="news-search" type="search" value="${escapeHtml(state.newsQuery)}" placeholder="${escapeHtml(p.searchPlaceholder)}">
                  <button class="btn btn-primary" type="button" data-news-search>${escapeHtml(p.searchButton)}</button>
                </div>
                <div class="news-category-nav" aria-label="${escapeHtml(p.categoryTitle)}">
                  <button type="button" class="${state.newsCategory === "all" ? "is-active" : ""}" data-news-category="all">${escapeHtml(p.allLabel)}</button>
                  ${p.categories.map(item => `
                    <button type="button" class="${state.newsCategory === item.key ? "is-active" : ""}" data-news-category="${escapeHtml(item.key)}">
                      <strong>${escapeHtml(item.label)}</strong>
                      <span>${escapeHtml(item.body)}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
              <div class="panel news-tool">
                <h2>${escapeHtml(p.hotTitle)}</h2>
                <ol class="rank-list">
                  ${hotItems.map(article => `<li><a href="#news-detail-${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a></li>`).join("")}
                </ol>
              </div>
            </aside>
            <div class="news-main">
              <article class="panel news-featured">
                <div class="news-thumb news-thumb-large"><span>${escapeHtml(latest.imageLabel)}</span></div>
                <div>
                  <span class="tag">${escapeHtml(p.latestTitle)}</span>
                  <h2>${escapeHtml(latest.title)}</h2>
                  <p class="news-meta">${escapeHtml(latest.date)} · ${escapeHtml(latest.category)}</p>
                  <p>${escapeHtml(latest.summary)}</p>
                  <a class="link-more" href="#news-detail-${escapeHtml(latest.slug)}">${escapeHtml(p.readDetail)}</a>
                </div>
              </article>
              <section class="news-list-block" aria-label="${escapeHtml(p.listTitle)}">
                <div class="section-title-row">
                  <h2>${escapeHtml(p.listTitle)}</h2>
                  <span>${escapeHtml(String(filtered.length))}</span>
                </div>
                <div class="news-list">
                  ${pageItems.map(article => `
                    <article class="news-card panel">
                      <div class="news-thumb"><span>${escapeHtml(article.imageLabel)}</span></div>
                      <div class="news-card-body">
                        <div class="news-card-meta">
                          <span class="tag">${escapeHtml(article.category)}</span>
                          <time>${escapeHtml(article.date)}</time>
                        </div>
                        <h3>${escapeHtml(article.title)}</h3>
                        <p>${escapeHtml(article.summary)}</p>
                        <a class="link-more" href="#news-detail-${escapeHtml(article.slug)}">${escapeHtml(p.readDetail)}</a>
                      </div>
                    </article>
                  `).join("") || `<p class="notice">${escapeHtml(p.noResults)}</p>`}
                </div>
                <div class="pagination" aria-label="${escapeHtml(p.pageLabel)}">
                  ${Array.from({ length: pageCount }, (_, index) => {
                    const pageNumber = index + 1;
                    return `<button type="button" class="${state.newsPage === pageNumber ? "is-active" : ""}" data-news-page="${pageNumber}">${pageNumber}</button>`;
                  }).join("")}
                </div>
              </section>
              <section class="news-detail-section" aria-label="${escapeHtml(p.detailTitle)}">
                <div class="section-title-row"><h2>${escapeHtml(p.detailTitle)}</h2></div>
                ${pageItems.map(article => {
                  const index = p.articles.findIndex(item => item.slug === article.slug);
                  const previous = p.articles[index - 1];
                  const next = p.articles[index + 1];
                  const related = article.related.map(slug => bySlug(p.articles, slug)).filter(Boolean);
                  return `
                    <article class="news-detail-card panel" id="news-detail-${escapeHtml(article.slug)}">
                      <div class="news-thumb news-thumb-detail"><span>${escapeHtml(article.imageLabel)}</span></div>
                      <div class="news-detail-body">
                        <span class="tag">${escapeHtml(article.category)}</span>
                        <h3>${escapeHtml(article.title)}</h3>
                        <p class="news-meta">${escapeHtml(article.date)}</p>
                        ${article.body.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                        <div class="news-prev-next">
                          ${previous ? `<a href="#news-detail-${escapeHtml(previous.slug)}">${escapeHtml(p.previous)}：${escapeHtml(previous.title)}</a>` : `<span>${escapeHtml(p.previous)}：-</span>`}
                          ${next ? `<a href="#news-detail-${escapeHtml(next.slug)}">${escapeHtml(p.next)}：${escapeHtml(next.title)}</a>` : `<span>${escapeHtml(p.next)}：-</span>`}
                        </div>
                        <div class="related-news">
                          <strong>${escapeHtml(p.relatedTitle)}</strong>
                          ${related.map(item => `<a href="#news-detail-${escapeHtml(item.slug)}">${escapeHtml(item.title)}</a>`).join("")}
                        </div>
                      </div>
                    </article>
                  `;
                }).join("")}
              </section>
            </div>
          </div>
        </section>
      `;
    }

    function renderCareers(d) {
      const p = careerData();
      const jobs = p.jobs.filter(job => {
        const categoryMatch = state.careerCategory === "all" || job.category === state.careerCategory;
        const typeMatch = state.careerType === "all" || job.type === state.careerType;
        const locationMatch = state.careerLocation === "all" || job.location === state.careerLocation;
        return categoryMatch && typeMatch && locationMatch;
      });
      return `
        ${simpleHero(d, "careers", p)}
        <!-- 标注：careers.html 人才招聘页，覆盖招聘 banner、福利、岗位列表、筛选、投递流程、FAQ 与 HR 联系占位。 -->
        <section class="section section-soft">
          <div class="container">
            <article class="career-banner panel">
              <div>
                <span class="eyebrow eyebrow-dark">${escapeHtml(p.eyebrow)}</span>
                <h2>${escapeHtml(p.bannerTitle)}</h2>
                <p class="lead">${escapeHtml(p.bannerLead)}</p>
              </div>
              <div class="career-entry-grid">
                ${p.entries.map(item => `
                  <article>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.body)}</p>
                  </article>
                `).join("")}
              </div>
            </article>
          </div>
        </section>
        <section class="section">
          <div class="container">
            <div class="section-title-row">
              <div>
                <span class="eyebrow eyebrow-dark">${escapeHtml(p.benefitsTitle)}</span>
                <h2>${escapeHtml(p.benefitsTitle)}</h2>
              </div>
              <p class="notice">${escapeHtml(p.benefitNotice)}</p>
            </div>
            <div class="benefit-grid">
              ${p.benefits.map((group, index) => `
                <article class="card">
                  <div class="card-accent ${["accent-green","accent-cyan","accent-violet"][index % 3]}">${String(index + 1).padStart(2, "0")}</div>
                  <h3>${escapeHtml(group.title)}</h3>
                  <ul class="plain-list">${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section section-soft">
          <div class="container">
            <div class="career-filter panel">
              <h2>${escapeHtml(p.filterTitle)}</h2>
              <div class="career-filter-grid">
                <label>${escapeHtml(p.filterLabels.category)}
                  <select data-career-filter="careerCategory">${optionList(p.categories, state.careerCategory, p.allLabel)}</select>
                </label>
                <label>${escapeHtml(p.filterLabels.type)}
                  <select data-career-filter="careerType">${optionList(p.types, state.careerType, p.allLabel)}</select>
                </label>
                <label>${escapeHtml(p.filterLabels.location)}
                  <select data-career-filter="careerLocation">${optionList(p.locations, state.careerLocation, p.allLabel)}</select>
                </label>
              </div>
            </div>
            <div class="section-title-row jobs-title">
              <h2>${escapeHtml(p.jobsTitle)}</h2>
              <span>${escapeHtml(String(jobs.length))}</span>
            </div>
            <div class="job-list">
              ${jobs.length ? jobs.map(job => `
                <article class="job-card panel">
                  <div class="job-card-head">
                    <div>
                      <span class="tag">${escapeHtml(job.category)} · ${escapeHtml(job.type)}</span>
                      <h3>${escapeHtml(job.title)}</h3>
                    </div>
                    <a class="btn btn-primary" href="#career-apply-guide">${escapeHtml(p.applyNow)}</a>
                  </div>
                  <dl class="job-meta">
                    <div><dt>${escapeHtml(p.filterLabels.location)}</dt><dd>${escapeHtml(job.location)}</dd></div>
                    <div><dt>${escapeHtml(p.jobLabels.salary)}</dt><dd>${escapeHtml(job.salary)}</dd></div>
                    <div><dt>${escapeHtml(p.jobLabels.experience)}</dt><dd>${escapeHtml(job.experience)}</dd></div>
                    <div><dt>${escapeHtml(p.jobLabels.education)}</dt><dd>${escapeHtml(job.education)}</dd></div>
                  </dl>
                  <div class="job-detail-grid">
                    <div>
                      <h4>${escapeHtml(p.jobLabels.responsibilities)}</h4>
                      <ul class="plain-list">${job.responsibilities.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                    </div>
                    <div>
                      <h4>${escapeHtml(p.jobLabels.requirements)}</h4>
                      <ul class="plain-list">${job.requirements.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                    </div>
                  </div>
                  <div class="job-actions">
                    <a class="btn btn-outline" href="#career-apply-guide">${escapeHtml(p.applyNow)}</a>
                    <button class="btn btn-disabled" type="button" disabled>${escapeHtml(p.uploadResume)}</button>
                  </div>
                </article>
              `).join("") : `<p class="notice">${escapeHtml(p.noJobs)}</p>`}
            </div>
          </div>
        </section>
        <section class="section">
          <div class="container layout-2" id="career-apply-guide">
            <div>
              <span class="eyebrow eyebrow-dark">${escapeHtml(p.guideTitle)}</span>
              <h2>${escapeHtml(p.guideTitle)}</h2>
              <ul class="plain-list apply-methods">${p.applyMethods.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              <h3>${escapeHtml(p.faqTitle)}</h3>
              <div class="faq-list">
                ${p.faq.map(item => `
                  <details>
                    <summary>${escapeHtml(item.q)}</summary>
                    <p>${escapeHtml(item.a)}</p>
                  </details>
                `).join("")}
              </div>
            </div>
            <div class="panel contact-panel">
              <h3>${escapeHtml(p.processTitle)}</h3>
              <div class="apply-flow">
                ${p.process.map((item, index) => `
                  <div>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <strong>${escapeHtml(item)}</strong>
                  </div>
                `).join("")}
              </div>
              <h3>${escapeHtml(p.contactTitle)}</h3>
              <ul class="contact-list">
                ${p.contact.map(item => `<li><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></li>`).join("")}
              </ul>
            </div>
          </div>
        </section>
      `;
    }

    function renderAbout(d) {
      const p = d.about;
      return `
        ${simpleHero(d, "about", p)}
        <section class="section">
          <div class="container grid-3">
            ${p.sections.map((item, index) => `
              <article class="card">
                <div class="card-accent ${["accent-green","accent-cyan","accent-warning"][index]}">${String(index + 1).padStart(2, "0")}</div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.body)}</p>
              </article>
            `).join("")}
          </div>
        </section>
        <section class="section section-soft" id="contact-block">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">${escapeHtml(p.contactEyebrow)}</span>
              <h2>${escapeHtml(p.contactTitle)}</h2>
              <p class="lead">${escapeHtml(p.contactLead)}</p>
            </div>
            <div class="panel contact-panel">
              <ul class="contact-list">
                ${p.contact.map(item => `<li><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></li>`).join("")}
              </ul>
              ${p.contactNotice ? `<p class="notice">${escapeHtml(p.contactNotice)}</p>` : ""}
            </div>
          </div>
        </section>
      `;
    }

    function renderFooter(d) {
      footer.innerHTML = `
        <div class="container">
          <div class="footer-grid">
            <div>
              <h3>Honey Badger</h3>
              <p>${escapeHtml(d.footer.relation)}</p>
            </div>
            <div>
              <h4>${escapeHtml(d.footer.products)}</h4>
              <ul class="footer-links">
                ${d.productItems.map(item => `<li><a href="${escapeHtml(productItemHref(item))}" data-page-link="product-detail">${escapeHtml(item.name)}</a></li>`).join("")}
              </ul>
            </div>
            <div>
              <h4>${escapeHtml(d.footer.resources)}</h4>
              <ul class="footer-links">
                <li><a href="${pageHref("news")}" data-page-link="news">${escapeHtml(pageLabel(d, "news"))}</a></li>
                <li><a href="${pageHref("careers")}" data-page-link="careers">${escapeHtml(pageLabel(d, "careers"))}</a></li>
              </ul>
            </div>
            <div>
              <h4>${escapeHtml(d.footer.company)}</h4>
              <ul class="footer-links">
                <li><a href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.nav.about)}</a></li>
                <li><a href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.contact)}</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>${escapeHtml(d.footer.copyright)}</span>
            <span>${escapeHtml(d.footer.icp)}</span>
          </div>
        </div>
      `;
    }

    function renderServiceFloat(d) {
      serviceFloat.innerHTML = `
        <div class="service-options">
          <a href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.wechat)}</a>
          <a href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.qq)}</a>
          <a href="${pageHref("about")}" data-page-link="about">${escapeHtml(d.common.dingtalk)}</a>
        </div>
        <button class="service-toggle" type="button" aria-expanded="false" aria-label="${escapeHtml(d.common.service)}">CS</button>
      `;
    }

    function absoluteUrlFor(lang) {
      const file = state.page === "product-detail" ? productPageFiles[state.product] : pageFiles[state.page] || pageFiles.home;
      const path = lang === "zh" ? file : `${languageRoutes[lang].directory}/${file}`;
      return `${productionOrigin}/${path}`;
    }

    function setHeadLink(rel, href, hreflang) {
      const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
      let link = document.head.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    }

    function currentPageSeo(d, detail) {
      if (detail) return { title: `${detail.name} | Honey Badger`, description: detail.lead };
      if (state.page === "network-services") {
        const p = networkServicesCopy();
        return { title: `${p.title} | Honey Badger`, description: p.lead };
      }
      if (state.page === "news") {
        const p = newsData();
        return { title: `${p.title} | Honey Badger`, description: p.lead };
      }
      if (state.page === "careers") {
        const p = careerData();
        return { title: `${p.title} | Honey Badger`, description: p.lead };
      }
      const pageData = d[state.page] || d.home;
      return {
        title: state.page === "home" ? d.title : `${pageLabel(d, state.page)} | Honey Badger`,
        description: pageData.lead || d.description
      };
    }

    function updateDocumentSeo(d, detail) {
      const seo = currentPageSeo(d, detail);
      document.documentElement.lang = d.langAttr;
      document.title = seo.title;
      document.querySelector('meta[name="description"]').setAttribute("content", seo.description);
      setHeadLink("canonical", absoluteUrlFor(state.lang));
      supportedLanguages.forEach(lang => {
        setHeadLink("alternate", absoluteUrlFor(lang), languageRoutes[lang].hreflang);
      });
      setHeadLink("alternate", absoluteUrlFor("zh"), "x-default");
    }

    function render() {
      const d = SITE[state.lang];
      const detail = state.page === "product-detail" ? currentProductDetail() : null;
      updateDocumentSeo(d, detail);

      languageSelect.value = state.lang;
      menuButton.setAttribute("aria-label", d.common.menu);
      desktopNav.innerHTML = navLinks(d);
      mobileNav.innerHTML = navLinks(d);
      const renderers = {
        home: renderHome,
        products: renderProducts,
        "network-services": renderNetworkServices,
        "product-detail": renderProductDetail,
        news: renderNews,
        careers: renderCareers,
        about: renderAbout
      };
      app.innerHTML = (renderers[state.page] || renderers.home)(d);
      renderFooter(d);
      renderServiceFloat(d);
      window.scrollTo(0, 0);
    }

    document.addEventListener("click", event => {
      const serviceButton = event.target.closest(".service-toggle");
      if (serviceButton) {
        const open = serviceFloat.classList.toggle("is-open");
        serviceButton.setAttribute("aria-expanded", String(open));
      }

      const newsCategory = event.target.closest("[data-news-category]");
      if (newsCategory) {
        state.newsCategory = newsCategory.dataset.newsCategory || "all";
        state.newsPage = 1;
        render();
        return;
      }

      const newsPage = event.target.closest("[data-news-page]");
      if (newsPage) {
        state.newsPage = Number(newsPage.dataset.newsPage) || 1;
        render();
        return;
      }

      const newsSearch = event.target.closest("[data-news-search]");
      if (newsSearch) {
        const input = document.getElementById("news-search");
        state.newsQuery = input ? input.value : "";
        state.newsPage = 1;
        render();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target && event.target.id === "news-search") {
        state.newsQuery = event.target.value;
        state.newsPage = 1;
        render();
      }
    });

    document.addEventListener("change", event => {
      const filter = event.target.closest("[data-career-filter]");
      if (filter) {
        state[filter.dataset.careerFilter] = filter.value;
        render();
      }
    });

    menuButton.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    languageSelect.addEventListener("change", event => {
      const nextLang = normalizeLang(event.target.value) || "zh";
      storeLang(nextLang);
      window.location.href = currentPageHref(nextLang);
    });

    render();
