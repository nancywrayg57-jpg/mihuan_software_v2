// Extracted and adapted from D:\workspace\mihuan\honey_badger_standalone_site.html.
// Shared behavior and multilingual content for the five split Honey Badger UI pages.
const SITE = {
      zh: {
        langAttr: "zh-CN",
        title: "Honey Badger 蜜獾官网 | ZennoLab 中国运营实体",
        description: "蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体，提供浏览器自动化、验证码识别、反检测浏览器、本地化服务与企业技术支持。",
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
          { code: "ZP", name: "ZennoPoster", accent: "accent-green", summary: "可视化流程编排与多线程浏览器自动化，用于数据采集、运营流程和重复任务自动化。", tags: ["可视化流程", "多线程", "代理规则"] },
          { code: "CC", name: "CapMonster Cloud", accent: "accent-cyan", summary: "云端验证码识别能力，适合需要稳定识别、弹性调用和 API 集成的业务链路。", tags: ["云识别", "API", "弹性调用"] },
          { code: "ZB", name: "ZennoBrowser", accent: "accent-violet", summary: "面向多账号、浏览器指纹和配置文件隔离的反检测浏览器能力。", tags: ["指纹隔离", "配置文件", "团队管理"] },
          { code: "ZD", name: "ZennoDroid", accent: "accent-purple", summary: "Android 应用自动化解决方案，适合移动端流程验证、任务执行和测试场景。", tags: ["Android", "移动自动化", "脚本执行"] },
          { code: "CM", name: "CapMonster", accent: "accent-warning", summary: "本地化验证码识别工具，适合本地部署、私有化任务和批量识别工作流。", tags: ["本地部署", "验证码", "批量任务"] },
          { code: "PC", name: "ZennoProxyChecker", accent: "accent-green", summary: "代理采集、检测和可用性管理工具，支撑大规模自动化任务的网络质量。", tags: ["代理检测", "质量管理", "任务保障"] }
        ],
        home: {
          eyebrow: "Honey Badger 蜜獾",
          title: "俄罗斯 ZennoLab 在中国的运营实体",
          lead: "蜜獾面向中国市场承接 ZennoLab 产品能力、本地化技术支持、企业咨询与服务交付，帮助团队以更稳定的方式建设浏览器自动化能力。",
          ctaPrimary: "了解产品矩阵",
          ctaSecondary: "联系服务团队",
          stats: [
            ["6", "核心产品线"],
            ["3", "语言内容结构"],
            ["24h", "服务入口常驻"]
          ],
          productTitle: "产品矩阵",
          productLead: "沿用 ZennoLab 官网的产品中心逻辑，将浏览器自动化、验证码识别、反检测浏览器和代理管理按能力分组呈现。",
          relationTitle: "品牌关系与本地服务边界",
          relationLead: "蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体。官网文案保持克制，不使用独家、唯一代理等未经确认的授权表述。",
          relationItems: [
            { title: "产品承接", body: "围绕 ZennoPoster、CapMonster、ZennoBrowser 等产品建立中文化说明和咨询入口。" },
            { title: "本地支持", body: "为中国企业、开发者和合作方提供本地语言、交付流程和问题定位支持。" },
            { title: "合规上线", body: "备案、客服账号、企业邮箱和版权信息均保留配置位置，待管理员提供真实值后上线。" }
          ],
          newsTitle: "新闻资讯预览",
          newsLead: "浏览公司动态、行业资讯与产品更新，了解蜜獾本地服务和 ZennoLab 产品能力的上线进展。",
          careerTitle: "人才招聘预览",
          careerLead: "查看岗位机会、福利待遇、招聘流程和简历投递指引，了解蜜獾团队的人才需求。"
        },
        products: {
          eyebrow: "Products",
          title: "ZennoLab 产品能力在中国市场的本地化呈现",
          lead: "产品页采用 ZennoLab 官网产品矩阵逻辑：先展示产品总览，再解释核心能力、适用场景和咨询转化路径。",
          capabilityTitle: "核心能力",
          capabilityLead: "每项能力都对应明确问题、适用场景和客户价值。",
          capabilities: [
            { title: "可视化自动化编排", body: "解决重复浏览器操作、批量任务和流程维护问题，适合运营、测试和数据团队。" },
            { title: "验证码识别与 API 集成", body: "将验证码识别作为可调用能力接入业务系统，降低人工处理成本。" },
            { title: "多账号环境隔离", body: "通过浏览器指纹与配置文件管理，提高账号任务隔离和风险控制能力。" },
            { title: "网络质量保障", body: "代理检测、轮换和健康度管理支撑高频自动化任务稳定运行。" }
          ],
          flowTitle: "产品落地路径",
          flow: [
            ["01", "确认业务场景与自动化边界"],
            ["02", "选择 ZennoLab 产品组合"],
            ["03", "搭建测试流程与识别链路"],
            ["04", "接入本地服务、培训与支持"]
          ]
        },
        about: {
          eyebrow: "About Honey Badger",
          title: "以工业级可靠性承接全球自动化产品能力",
          lead: "蜜獾官网必须清晰说明企业主体和品牌关系：蜜獾公司是俄罗斯 ZennoLab 公司在中国的运营实体。",
          sections: [
            { title: "品牌定位", body: "蜜獾定位为面向中国市场的自动化产品运营与服务实体，强调可靠、透明和本地响应。" },
            { title: "企业背景", body: "围绕 ZennoLab 产品能力建立中文信息架构、服务流程和对外咨询入口。" },
            { title: "主体说明", body: "在未获得进一步确认前，不扩写为独家、唯一代理或官方总代理等更强法律含义。" }
          ],
          timelineTitle: "建设路径",
          timeline: [
            ["需求基线", "确认五个 Stitch 页面样本、设计系统与多语言要求。"],
            ["信息架构", "规划产品、新闻资讯、人才招聘、关于我们和联系模块。"],
            ["上线准备", "等待真实客服账号、企业邮箱、ICP 与版权信息确认。"]
          ]
        },
        contactBlock: {
          eyebrow: "Contact",
          title: "联系蜜獾服务团队",
          lead: "联系页面提供微信、QQ、钉钉和企业邮箱的配置位置。真实账号未确认前，不伪造号码、二维码或跳转链接。",
          channels: [
            { title: "微信咨询", body: "待管理员提供官方二维码或企业微信入口。" },
            { title: "QQ 支持", body: "待管理员提供官方群号或客服账号。" },
            { title: "钉钉协作", body: "待管理员提供组织链接或客服入口。" },
            { title: "企业邮箱", body: "阿里云企业邮箱账号待确认。" }
          ],
          configTitle: "上线前待配置",
          config: [
            ["正式域名", "https://www.honeybadgersoft.com/"],
            ["企业邮箱", "阿里云企业邮箱账号待确认"],
            ["ICP 备案", "备案号待管理员确认"],
            ["客服渠道", "微信、QQ、钉钉真实账号待确认"]
          ]
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
        title: "Honey Badger Official Site | ZennoLab China Operations Entity",
        description: "Honey Badger is ZennoLab's operations entity in China, providing browser automation, CAPTCHA recognition, anti-detect browser support and localized enterprise services.",
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
          { code: "ZP", name: "ZennoPoster", accent: "accent-green", summary: "Visual workflow building and multi-thread browser automation for data work, operations and repetitive tasks.", tags: ["Visual flows", "Multi-thread", "Proxy rules"] },
          { code: "CC", name: "CapMonster Cloud", accent: "accent-cyan", summary: "Cloud CAPTCHA recognition for stable API-based recognition and elastic business integration.", tags: ["Cloud solve", "API", "Elastic"] },
          { code: "ZB", name: "ZennoBrowser", accent: "accent-violet", summary: "Anti-detect browser capabilities for account isolation, browser fingerprints and profile management.", tags: ["Fingerprint", "Profiles", "Teams"] },
          { code: "ZD", name: "ZennoDroid", accent: "accent-purple", summary: "Android automation for mobile workflow verification, task execution and testing scenarios.", tags: ["Android", "Mobile", "Scripts"] },
          { code: "CM", name: "CapMonster", accent: "accent-warning", summary: "Local CAPTCHA recognition for private deployment, local tasks and bulk recognition workflows.", tags: ["Local", "CAPTCHA", "Bulk"] },
          { code: "PC", name: "ZennoProxyChecker", accent: "accent-green", summary: "Proxy collection, validation and health management for reliable large-scale automation.", tags: ["Proxy check", "Quality", "Stability"] }
        ],
        home: {
          eyebrow: "Honey Badger",
          title: "ZennoLab operations entity in China",
          lead: "Honey Badger brings ZennoLab product capabilities, localized technical support, enterprise consulting and delivery services to the Chinese market.",
          ctaPrimary: "Explore products",
          ctaSecondary: "Contact service team",
          stats: [["6", "Product lines"], ["3", "Language layers"], ["24h", "Persistent support entry"]],
          productTitle: "Product Matrix",
          productLead: "The product center follows ZennoLab's logic and groups browser automation, CAPTCHA recognition, anti-detect browsers and proxy management by capability.",
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
          timelineTitle: "Build Path",
          timeline: [["Baseline", "Confirm five Stitch samples, design system and multilingual requirements."], ["Information architecture", "Plan products, news, careers, about and the contact section."], ["Launch readiness", "Wait for real support accounts, enterprise email, ICP and copyright information."]]
        },
        contactBlock: {
          eyebrow: "Contact",
          title: "Contact the Honey Badger service team",
          lead: "This page reserves configuration positions for WeChat, QQ, DingTalk and enterprise email. No fake numbers, QR codes or links are used before confirmation.",
          channels: [
            { title: "WeChat inquiry", body: "Pending official QR code or enterprise WeChat entrance." },
            { title: "QQ support", body: "Pending official group number or support account." },
            { title: "DingTalk collaboration", body: "Pending organization link or support entrance." },
            { title: "Enterprise email", body: "Alibaba Cloud enterprise mailbox account pending confirmation." }
          ],
          configTitle: "Before Launch",
          config: [["Domain", "https://www.honeybadgersoft.com/"], ["Enterprise email", "Alibaba Cloud mailbox account pending"], ["ICP", "ICP record pending"], ["Support channels", "Real WeChat, QQ and DingTalk accounts pending"]]
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
        title: "Honey Badger | Операционная структура ZennoLab в Китае",
        description: "Honey Badger представляет операционную структуру ZennoLab в Китае: автоматизация браузера, распознавание CAPTCHA, антидетект-браузер и локальная поддержка.",
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
          { code: "ZP", name: "ZennoPoster", accent: "accent-green", summary: "Визуальные сценарии и многопоточная автоматизация браузера для данных, операций и повторяемых задач.", tags: ["Визуальные сценарии", "Потоки", "Прокси"] },
          { code: "CC", name: "CapMonster Cloud", accent: "accent-cyan", summary: "Облачное распознавание CAPTCHA для стабильной API-интеграции и масштабируемых процессов.", tags: ["Облако", "API", "Масштаб"] },
          { code: "ZB", name: "ZennoBrowser", accent: "accent-violet", summary: "Антидетект-браузер для изоляции аккаунтов, отпечатков браузера и профилей.", tags: ["Отпечатки", "Профили", "Команды"] },
          { code: "ZD", name: "ZennoDroid", accent: "accent-purple", summary: "Автоматизация Android для проверки мобильных сценариев, задач и тестирования.", tags: ["Android", "Мобильные задачи", "Скрипты"] },
          { code: "CM", name: "CapMonster", accent: "accent-warning", summary: "Локальное распознавание CAPTCHA для частного развертывания и массовых процессов.", tags: ["Локально", "CAPTCHA", "Пакеты"] },
          { code: "PC", name: "ZennoProxyChecker", accent: "accent-green", summary: "Сбор, проверка и контроль качества прокси для крупномасштабной автоматизации.", tags: ["Проверка прокси", "Качество", "Стабильность"] }
        ],
        home: {
          eyebrow: "Honey Badger",
          title: "Операционная структура ZennoLab в Китае",
          lead: "Honey Badger переносит продукты ZennoLab, локальную техническую поддержку, консультации и сервисную поставку на китайский рынок.",
          ctaPrimary: "Матрица продуктов",
          ctaSecondary: "Связаться с командой",
          stats: [["6", "Линеек продуктов"], ["3", "Языковые версии"], ["24h", "Постоянный вход поддержки"]],
          productTitle: "Матрица продуктов",
          productLead: "Логика продуктового центра следует ZennoLab: автоматизация браузера, CAPTCHA, антидетект-браузеры и прокси сгруппированы по возможностям.",
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
          timelineTitle: "Путь разработки",
          timeline: [["База", "Подтверждены пять Stitch-страниц, дизайн-система и требования к языкам."], ["Архитектура", "Спланированы продукты, новости, карьера, раздел о нас и контактный блок."], ["Запуск", "Ожидаются реальные аккаунты поддержки, почта, ICP и авторские данные."]]
        },
        contactBlock: {
          eyebrow: "Contact",
          title: "Связаться с командой Honey Badger",
          lead: "Страница резервирует места для WeChat, QQ, DingTalk и корпоративной почты. Фейковые номера, QR-коды или ссылки не используются.",
          channels: [
            { title: "WeChat", body: "Ожидается официальный QR-код или вход Enterprise WeChat." },
            { title: "QQ", body: "Ожидается официальный номер группы или аккаунт поддержки." },
            { title: "DingTalk", body: "Ожидается ссылка организации или вход поддержки." },
            { title: "Корпоративная почта", body: "Аккаунт Alibaba Cloud Enterprise Mail ожидает подтверждения." }
          ],
          configTitle: "Перед запуском",
          config: [["Домен", "https://www.honeybadgersoft.com/"], ["Почта", "Аккаунт Alibaba Cloud ожидает подтверждения"], ["ICP", "Номер ICP ожидает подтверждения"], ["Поддержка", "Реальные WeChat, QQ и DingTalk ожидают подтверждения"]]
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
          code: "ZP",
          name: "ZennoPoster",
          accent: "accent-green",
          eyebrow: "ZennoPoster",
          title: "可视化浏览器自动化与 RPA 任务编排",
          lead: "面向数据采集、运营流程、重复表单和跨站任务，将 ZennoLab 官网中的可视化流程、零门槛操作和持续支持逻辑本地化呈现。",
          specs: [["定位", "桌面端浏览器自动化工具"], ["能力", "流程编排、多线程、代理与验证码链路"], ["适用团队", "运营、测试、数据与内部工具团队"]],
          featureTitle: "核心能力",
          featureLead: "参考 ZennoPoster 页面中的卡片结构，突出轻松上手、无代码开发和灵活定制。",
          features: [
            { title: "轻松上手", body: "界面操作以流程节点组织，适合把重复浏览器动作拆成可维护的步骤。" },
            { title: "无代码自动化开发", body: "通过可视化设计器创建任务机器人，降低脚本编写和交接成本。" },
            { title: "灵活定制工作区", body: "按团队习惯组织模板、菜单与执行环境，支持长期维护与复用。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "公开网页数据采集、清洗和归档。",
            "账号运营流程、表单填写和周期性巡检。",
            "需要与代理、验证码识别、结果导出协同的批量任务。"
          ],
          workflowTitle: "落地流程",
          workflow: [["01", "梳理人工流程并拆分节点"], ["02", "建立可视化任务模板"], ["03", "接入代理、验证码与结果存储"], ["04", "通过本地服务完成培训、排障和验收"]],
          supportTitle: "支持方式",
          support: [
            { title: "持续迭代", body: "页面保留产品更新说明入口，正式内容以上线资料为准。" },
            { title: "技术支持", body: "由蜜獾承接中文咨询、排障记录和交付培训。" },
            { title: "开发者社区", body: "引导用户了解社区资源，但不伪造论坛账号或支持数据。" }
          ],
          related: ["capmonster-cloud", "zennobrowser", "zennodroid"]
        },
        "capmonster-cloud": {
          code: "CC",
          name: "CapMonster Cloud",
          accent: "accent-cyan",
          eyebrow: "CapMonster Cloud",
          title: "云端验证码识别与 API 接入能力",
          lead: "面向需要弹性调用、快速接入和稳定识别的业务链路，将验证码识别能力作为可调用服务嵌入自动化流程。",
          specs: [["定位", "云端验证码识别服务"], ["能力", "API 调用、弹性吞吐、识别结果回传"], ["适用团队", "自动化平台、数据团队、内部系统团队"]],
          featureTitle: "核心能力",
          featureLead: "沿用 ZennoLab 产品中心的云服务表达：轻量接入、稳定调用、按链路协同。",
          features: [
            { title: "API 快速集成", body: "通过标准接口把识别能力接入现有任务系统，减少人工处理环节。" },
            { title: "弹性识别链路", body: "适合波峰波谷明显的任务，把识别服务从本地执行环境中解耦。" },
            { title: "流程协同", body: "可与 ZennoPoster、代理质量管理和结果存储组合为完整自动化链路。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "自动化任务中需要稳定调用云端识别能力。",
            "内部系统通过 API 统一管理验证码识别请求。",
            "本地部署资源有限，但任务规模需要弹性扩展。"
          ],
          workflowTitle: "接入流程",
          workflow: [["01", "确认识别类型与调用频率"], ["02", "设计 API 调用与失败重试策略"], ["03", "接入自动化任务或内部系统"], ["04", "记录识别稳定性和交付边界"]],
          supportTitle: "支持方式",
          support: [
            { title: "接入评估", body: "确认场景是否适合云端识别，不承诺未验证的识别率。" },
            { title: "接口说明", body: "协助团队理解调用参数、错误处理和日志留存。" },
            { title: "本地咨询", body: "客服账号、邮箱与正式工单入口待管理员确认后启用。" }
          ],
          related: ["zennoposter", "capmonster", "zennodroid"]
        },
        zennobrowser: {
          code: "ZB",
          name: "ZennoBrowser",
          accent: "accent-violet",
          eyebrow: "ZennoBrowser",
          title: "来自 ZennoLab 的反指纹浏览器能力",
          lead: "参考 ZennoBrowser 页面中的现代产品结构，围绕匿名性、配置文件限制、效率提升和团队协同呈现。",
          specs: [["定位", "反检测浏览器与配置文件管理"], ["能力", "真实浏览器指纹、API、云端数据和团队工作流"], ["适用团队", "多账号运营、自动化执行和环境隔离团队"]],
          featureTitle: "核心能力",
          featureLead: "突出页面样本中的四类能力：真实指纹、API 集成、云端存储、支持与社区。",
          features: [
            { title: "独特的真实浏览器指纹", body: "帮助不同任务环境保持隔离，降低配置混用带来的风险。" },
            { title: "API 集成与自动化脚本", body: "为批量创建、启动和维护浏览器环境提供自动化接口思路。" },
            { title: "云端存储所需数据", body: "围绕配置文件、团队协作和数据同步建立清晰管理边界。" },
            { title: "强大的支持与社区", body: "保留支持入口说明，真实支持渠道上线前不填充虚假账号。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "多账号任务需要独立浏览器配置文件。",
            "团队需要在统一规则下管理指纹、代理和资料。",
            "自动化脚本需要与浏览器环境生命周期联动。"
          ],
          workflowTitle: "使用路径",
          workflow: [["01", "确认账号、环境和权限边界"], ["02", "创建配置文件与代理规则"], ["03", "接入脚本或手动工作流"], ["04", "记录异常、同步策略和团队规范"]],
          supportTitle: "支持方式",
          support: [
            { title: "匿名性说明", body: "解释环境隔离的使用边界，不承诺规避平台规则。" },
            { title: "配置治理", body: "协助建立配置文件命名、分组和交接规范。" },
            { title: "本地服务", body: "围绕导入、培训和排障提供中文服务说明。" }
          ],
          related: ["zennoposter", "zennodroid", "capmonster-cloud"]
        },
        zennodroid: {
          code: "ZD",
          name: "ZennoDroid",
          accent: "accent-purple",
          eyebrow: "ZennoDroid",
          title: "Android 应用自动化与移动任务执行",
          lead: "将桌面端自动化经验延伸到 Android 场景，用于移动流程验证、应用任务执行和可重复测试链路。",
          specs: [["定位", "Android 应用自动化工具"], ["能力", "移动流程、模拟执行、脚本化任务"], ["适用团队", "移动测试、运营验证和内部自动化团队"]],
          featureTitle: "核心能力",
          featureLead: "围绕移动端任务，把操作流程、执行环境和结果回收拆成可管理模块。",
          features: [
            { title: "移动流程自动化", body: "把 Android 应用中的重复点击、输入和校验动作组织为任务流程。" },
            { title: "高性能执行环境", body: "适合需要稳定运行、批量验证和持续测试的移动任务。" },
            { title: "与 Web 自动化协同", body: "可与浏览器自动化、验证码识别和代理管理组合使用。" }
          ],
          scenarioTitle: "适用场景",
          scenarios: [
            "Android 应用流程测试和回归验证。",
            "移动端运营任务、数据整理和状态检查。",
            "需要同时覆盖 Web 与 App 的自动化项目。"
          ],
          workflowTitle: "落地流程",
          workflow: [["01", "确认应用流程与测试边界"], ["02", "准备执行环境和任务脚本"], ["03", "配置识别、代理或结果采集链路"], ["04", "形成可复跑的验收记录"]],
          supportTitle: "支持方式",
          support: [
            { title: "场景评估", body: "先确认应用环境、权限和可执行边界。" },
            { title: "任务建模", body: "协助将移动端流程拆分为可复用步骤。" },
            { title: "交付培训", body: "提供本地化操作、排错和维护规范说明。" }
          ],
          related: ["zennoposter", "capmonster-cloud", "capmonster"]
        },
        capmonster: {
          code: "CM",
          name: "CapMonster",
          accent: "accent-warning",
          eyebrow: "CapMonster",
          title: "本地验证码识别与高吞吐处理",
          lead: "参考 CapMonster 页面中的核心功能、验证码类型和工作流程，强调本地部署、模块扩展和自动化链路协同。",
          specs: [["定位", "本地验证码识别工具"], ["能力", "reCAPTCHA、通用验证码、自定义模块和高吞吐"], ["适用团队", "需要本地化识别能力的自动化团队"]],
          featureTitle: "CapMonster 核心功能",
          featureLead: "页面样本强调轻松对接、自动更新数据库、无限制吞吐、高效性能和扩展能力。",
          features: [
            { title: "轻松对接各类应用程序", body: "把识别能力接入已有工具链，减少人工处理验证码的环节。" },
            { title: "自动更新验证码数据库", body: "围绕常见验证码类型保持识别模块更新，正式范围以上线资料为准。" },
            { title: "扩展自定义验证码类型", body: "适合需要补充识别模块或处理特定图像类型的场景。" },
            { title: "双重识别技术 reCAPTCHA v2", body: "可用于理解 reCAPTCHA v2、Invisible 与其他类型的处理链路。" }
          ],
          scenarioTitle: "验证码类型",
          scenarios: [
            "任意难度 ReCAPTCHA v2。",
            "基于 SiteKey 的 ReCAPTCHA v2 解决方案。",
            "SolveMedia 验证码与通用验证码识别模块。"
          ],
          workflowTitle: "工作流程",
          workflow: [["01", "触发请求"], ["02", "CapMonster 处理"], ["03", "验证码识别"], ["04", "效益分析与日志复盘"]],
          supportTitle: "支持方式",
          support: [
            { title: "产品概览", body: "说明本地部署与云端识别的选择边界。" },
            { title: "技术咨询", body: "围绕识别类型、吞吐需求和集成方式进行评估。" },
            { title: "上线记录", body: "保留测试结果、异常类型和验收结论，避免口头承诺。" }
          ],
          related: ["capmonster-cloud", "zennoposter", "zennodroid"]
        },
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
          related: ["zennoposter", "capmonster", "zennodroid"]
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
          title: "Android app automation and mobile task execution",
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
          related: ["zennoposter", "capmonster-cloud", "capmonster"]
        },
        capmonster: {
          code: "CM",
          name: "CapMonster",
          accent: "accent-warning",
          eyebrow: "CapMonster",
          title: "Local CAPTCHA recognition and high-throughput processing",
          lead: "A local recognition page based on CapMonster's feature, CAPTCHA type and workflow sections.",
          specs: [["Positioning", "Local CAPTCHA recognition tool"], ["Capabilities", "reCAPTCHA, generic CAPTCHA, custom modules and throughput"], ["Teams", "Automation teams that need local recognition capacity"]],
          featureTitle: "CapMonster core features",
          featureLead: "The sample page emphasizes easy integration, database updates, throughput, performance and custom extension.",
          features: [
            { title: "Connect to applications", body: "Integrate recognition into existing tools and reduce manual CAPTCHA handling." },
            { title: "Updated CAPTCHA database", body: "Keep recognition modules aligned with common types; formal scope depends on confirmed materials." },
            { title: "Custom CAPTCHA modules", body: "Supports scenarios that need additional modules or image-specific handling." },
            { title: "Dual recognition for reCAPTCHA v2", body: "A clear way to explain reCAPTCHA v2, Invisible and related processing links." }
          ],
          scenarioTitle: "CAPTCHA types",
          scenarios: ["Any-difficulty ReCAPTCHA v2.", "SiteKey-based ReCAPTCHA v2 solutions.", "SolveMedia and generic CAPTCHA modules."],
          workflowTitle: "Workflow",
          workflow: [["01", "Request triggered"], ["02", "CapMonster processes"], ["03", "CAPTCHA recognized"], ["04", "Review benefit and logs"]],
          supportTitle: "Support model",
          support: [
            { title: "Product overview", body: "Explain the boundary between local deployment and cloud recognition." },
            { title: "Technical inquiry", body: "Assess type coverage, throughput and integration method." },
            { title: "Launch records", body: "Keep test results, exception types and acceptance conclusions." }
          ],
          related: ["capmonster-cloud", "zennoposter", "zennodroid"]
        },
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
          related: ["zennoposter", "capmonster", "zennodroid"]
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
          title: "Автоматизация Android-приложений и мобильных задач",
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
          related: ["zennoposter", "capmonster-cloud", "capmonster"]
        },
        capmonster: {
          code: "CM",
          name: "CapMonster",
          accent: "accent-warning",
          eyebrow: "CapMonster",
          title: "Локальное распознавание CAPTCHA и высокая пропускная способность",
          lead: "Страница основана на разделах CapMonster: функции, типы CAPTCHA и рабочий процесс.",
          specs: [["Позиция", "Локальный инструмент распознавания CAPTCHA"], ["Возможности", "reCAPTCHA, универсальная CAPTCHA, модули, поток"], ["Команды", "Автоматизация с локальной емкостью распознавания"]],
          featureTitle: "Ключевые функции CapMonster",
          featureLead: "Акцент на интеграции, обновлениях базы, пропускной способности и расширении модулей.",
          features: [
            { title: "Интеграция с приложениями", body: "Распознавание подключается к существующим инструментам." },
            { title: "Обновление базы CAPTCHA", body: "Модули обновляются для популярных типов; формальный объем требует подтверждения." },
            { title: "Пользовательские модули", body: "Подходит для дополнительных типов и специфических изображений." },
            { title: "reCAPTCHA v2", body: "Помогает объяснить цепочку reCAPTCHA v2, Invisible и связанных типов." }
          ],
          scenarioTitle: "Типы CAPTCHA",
          scenarios: ["ReCAPTCHA v2 любой сложности.", "Решения ReCAPTCHA v2 на базе SiteKey.", "SolveMedia и универсальные модули CAPTCHA."],
          workflowTitle: "Рабочий процесс",
          workflow: [["01", "Запрос создан"], ["02", "CapMonster обрабатывает"], ["03", "CAPTCHA распознана"], ["04", "Анализ результата и логов"]],
          supportTitle: "Поддержка",
          support: [
            { title: "Обзор продукта", body: "Объясняем границу между локальным и облачным распознаванием." },
            { title: "Техническая консультация", body: "Оцениваем типы, нагрузку и интеграцию." },
            { title: "Записи запуска", body: "Сохраняем тесты, исключения и вывод приемки." }
          ],
          related: ["capmonster-cloud", "zennoposter", "zennodroid"]
        },
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
        locations: ["上海", "北京", "远程"],
        jobsTitle: "招聘岗位列表",
        applyNow: "立即投递",
        uploadResume: "简历上传入口待接入",
        noJobs: "当前筛选条件下暂无岗位，请调整筛选条件。",
        jobs: [
          { title: "前端开发工程师", category: "技术", type: "社招", location: "上海", salary: "待确认", experience: "3 年及以上", education: "本科及以上", responsibilities: ["负责官网与产品展示页面的前端开发和响应式体验优化。", "与设计、内容和服务团队协作，维护多语言内容结构。"], requirements: ["熟悉 HTML、CSS、原生 JavaScript 和浏览器兼容性。", "重视可维护性、可访问性和交付验证。"] },
          { title: "自动化产品运营专员", category: "运营", type: "社招", location: "北京", salary: "待确认", experience: "2 年及以上", education: "本科及以上", responsibilities: ["梳理 ZennoLab 产品本地化内容、用户问题和服务流程。", "协助建设产品资料、FAQ 和交付记录。"], requirements: ["具备 SaaS 或工具类产品运营经验。", "能够把复杂技术能力转化为清晰业务说明。"] },
          { title: "市场内容实习生", category: "市场", type: "实习", location: "远程", salary: "待确认", experience: "不限", education: "本科在读及以上", responsibilities: ["协助整理行业资讯、产品更新和官网内容素材。", "维护新闻资讯列表和基础数据校对。"], requirements: ["文字表达清晰，关注技术产品和 B2B 官网内容。", "每周可稳定投入实习时间。"] },
          { title: "产品助理", category: "产品", type: "校招", location: "上海", salary: "待确认", experience: "应届", education: "本科及以上", responsibilities: ["协助整理用户场景、竞品信息和产品文档。", "参与产品页面信息架构和需求验收。"], requirements: ["具备结构化思考能力，愿意学习自动化工具链。", "能够进行基础原型、文档和数据整理。"] }
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
          ["办公地址", "待正式公开地址确认"],
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
        locations: ["Shanghai", "Beijing", "Remote"],
        jobsTitle: "Open roles",
        applyNow: "Apply now",
        uploadResume: "Resume upload pending",
        noJobs: "No roles match the current filters.",
        jobs: [
          { title: "Frontend Engineer", category: "Tech", type: "Experienced", location: "Shanghai", salary: "Pending", experience: "3+ years", education: "Bachelor or above", responsibilities: ["Build responsive official-site and product pages.", "Maintain multilingual content structures with design and content teams."], requirements: ["HTML, CSS and native JavaScript experience.", "Care for maintainability, accessibility and validation."] },
          { title: "Automation Product Operations Specialist", category: "Operations", type: "Experienced", location: "Beijing", salary: "Pending", experience: "2+ years", education: "Bachelor or above", responsibilities: ["Organize local product content, user issues and service workflows.", "Maintain product materials, FAQ and delivery records."], requirements: ["SaaS or tool-product operations experience.", "Ability to translate technical capability into clear business language."] },
          { title: "Marketing Content Intern", category: "Marketing", type: "Intern", location: "Remote", salary: "Pending", experience: "Open", education: "Undergraduate or above", responsibilities: ["Prepare industry news and product update materials.", "Maintain news lists and content checks."], requirements: ["Clear writing and interest in B2B technical products.", "Stable weekly availability."] },
          { title: "Product Assistant", category: "Product", type: "Campus", location: "Shanghai", salary: "Pending", experience: "Graduate", education: "Bachelor or above", responsibilities: ["Organize user scenarios, product documents and competitor notes.", "Support page information architecture and acceptance checks."], requirements: ["Structured thinking and willingness to learn automation tools.", "Basic prototype, document and data organization skills."] }
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
        contact: [["HR phone", "Pending"], ["Recruiting email", "Enterprise mailbox pending"], ["Address", "Pending"], ["Privacy", "Resumes are used only for recruiting evaluation."]]
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
        locations: ["Shanghai", "Beijing", "Remote"],
        jobsTitle: "Вакансии",
        applyNow: "Откликнуться",
        uploadResume: "Загрузка резюме ожидает подключения",
        noJobs: "Нет вакансий по выбранным фильтрам.",
        jobs: [
          { title: "Frontend Engineer", category: "Tech", type: "Experienced", location: "Shanghai", salary: "Pending", experience: "3+ years", education: "Bachelor+", responsibilities: ["Разработка адаптивных страниц сайта и продуктов.", "Поддержка многоязычной структуры контента."], requirements: ["HTML, CSS и JavaScript.", "Внимание к поддерживаемости и проверке."] },
          { title: "Automation Product Operations Specialist", category: "Operations", type: "Experienced", location: "Beijing", salary: "Pending", experience: "2+ years", education: "Bachelor+", responsibilities: ["Локальный контент продуктов и сервисные процессы.", "Материалы, FAQ и записи поставки."], requirements: ["Опыт SaaS или tool-product operations.", "Умение объяснять технические продукты."] },
          { title: "Marketing Content Intern", category: "Marketing", type: "Intern", location: "Remote", salary: "Pending", experience: "Open", education: "Undergraduate+", responsibilities: ["Отраслевые новости и обновления продуктов.", "Проверка списков новостей."], requirements: ["Ясное письмо и интерес к B2B tech.", "Стабильная доступность."] },
          { title: "Product Assistant", category: "Product", type: "Campus", location: "Shanghai", salary: "Pending", experience: "Graduate", education: "Bachelor+", responsibilities: ["Сценарии пользователей и документы.", "Информационная архитектура и приемка."], requirements: ["Структурное мышление.", "Базовые навыки прототипов и документов."] }
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
        contact: [["HR телефон", "Pending"], ["Email", "Pending"], ["Адрес", "Pending"], ["Privacy", "Резюме используется только для оценки найма."]]
      }
    };

    const productPageFiles = {
      zennoposter: "product-zennoposter.html",
      "capmonster-cloud": "product-capmonster-cloud.html",
      zennobrowser: "product-zennobrowser.html",
      zennodroid: "product-zennodroid.html",
      capmonster: "product-capmonster.html"
    };

    const productCodeSlugs = {
      ZP: "zennoposter",
      CC: "capmonster-cloud",
      ZB: "zennobrowser",
      ZD: "zennodroid",
      CM: "capmonster"
    };

    const pageOrder = ["home", "products", "news", "careers", "about"];
    const pageFiles = {
      home: "index.html",
      products: "products.html",
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

    function navLinks(d) {
      const activePage = state.page === "product-detail" ? "products" : state.page;
      return pageOrder.map(page => {
        const active = activePage === page ? ' aria-current="page"' : "";
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
      return `
        <div class="visual-card" aria-label="CSS product interface mockup">
          <div class="browser-frame">
            <div class="browser-top"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
            <div class="screen-grid">
              <div class="flow-list">
                <div class="flow-item"><span class="flow-index">01</span><span>Profile</span></div>
                <div class="flow-item"><span class="flow-index">02</span><span>Proxy</span></div>
                <div class="flow-item"><span class="flow-index">03</span><span>Captcha</span></div>
                <div class="flow-item"><span class="flow-index">04</span><span>Result</span></div>
              </div>
              <div class="metric-board">
                <div class="metric-line"><span>Automation flow</span><div class="bar"><i style="width: 82%"></i></div></div>
                <div class="metric-line"><span>Recognition stability</span><div class="bar"><i style="width: 74%"></i></div></div>
                <div class="metric-line"><span>Network quality</span><div class="bar"><i style="width: 68%"></i></div></div>
                <div class="metric-line"><span>Local support</span><div class="bar"><i style="width: 90%"></i></div></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function productCards(d, limit) {
      const items = typeof limit === "number" ? d.productItems.slice(0, limit) : d.productItems;
      return items.map(item => `
        <article class="card">
          <div class="card-accent ${escapeHtml(item.accent)}">${escapeHtml(item.code)}</div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <div class="tag-list">${item.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="link-more" href="${productHref(productSlugFromItem(item))}" data-page-link="product-detail">${escapeHtml(d.common.learnMore)}</a>
        </article>
      `).join("");
    }

    function hero(d, pageData, primaryPage, secondaryPage) {
      return `
        <section class="hero">
          <div class="container">
            <div>
              <span class="eyebrow">${escapeHtml(pageData.eyebrow)}</span>
              <h1>${escapeHtml(pageData.title)}</h1>
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
              <span class="eyebrow eyebrow-dark">${escapeHtml(pageData.eyebrow)}</span>
              <h1>${escapeHtml(pageData.title)}</h1>
              <p class="lead">${escapeHtml(pageData.lead)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.contact)}</a>
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
            <div class="grid-3" style="margin-top: 36px">${productCards(d, 6)}</div>
          </div>
        </section>
        <section class="section section-soft">
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
            <div class="grid-3" style="margin-top: 36px">${productCards(d)}</div>
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
                <a class="btn btn-primary" href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.consult)}</a>
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
              <span class="eyebrow eyebrow-dark">${escapeHtml(detail.eyebrow)}</span>
              <h1>${escapeHtml(detail.title)}</h1>
              <p class="lead">${escapeHtml(detail.lead)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.consult)}</a>
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
            <div class="product-feature-grid">
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
        <section class="section">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Workflow</span>
              <h2>${escapeHtml(detail.workflowTitle)}</h2>
              <p class="lead">${escapeHtml(d.common.pending)}</p>
              <div class="actions">
                <a class="btn btn-primary" href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.contact)}</a>
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
        <section class="section section-blue">
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
            <div class="related-products panel">
              <strong>${escapeHtml(pageLabel(d, "products"))}</strong>
              <div class="related-product-links">
                ${detail.related.map(slug => {
                  const item = productDetailForSlug(slug);
                  return item ? `
                  <a class="related-pill" href="${productHref(slug)}" data-page-link="product-detail">${escapeHtml(item.name)}</a>
                ` : "";
                }).join("")}
              </div>
            </div>
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
        <section class="section section-blue">
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
        <section class="section section-soft">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Milestone</span>
              <h2>${escapeHtml(p.timelineTitle)}</h2>
              <p class="lead">${escapeHtml(d.footer.relation)}</p>
            </div>
            <div class="panel contact-panel">
              ${p.timeline.map(item => `
                <div class="feature-row">
                  <strong>${escapeHtml(item[0])}</strong>
                  <p>${escapeHtml(item[1])}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
        <section class="section section-blue" id="contact-block">
          <div class="container layout-2">
            <div>
              <span class="eyebrow eyebrow-dark">Contact</span>
              <h2>${escapeHtml(d.contactBlock.title)}</h2>
              <p class="lead">${escapeHtml(d.contactBlock.lead)}</p>
              <p class="notice">${escapeHtml(d.common.pending)}</p>
            </div>
            <div class="panel contact-panel">
              <ul class="contact-list">
                ${d.contactBlock.config.map(item => `<li><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></li>`).join("")}
              </ul>
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
              <p>${escapeHtml(d.contactBlock.config[0][1])}</p>
            </div>
            <div>
              <h4>${escapeHtml(d.footer.products)}</h4>
              <ul class="footer-links">
                ${d.productItems.map(item => `<li><a href="${productHref(productSlugFromItem(item))}" data-page-link="product-detail">${escapeHtml(item.name)}</a></li>`).join("")}
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
                <li><a href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.contact)}</a></li>
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
          <a href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.wechat)}</a>
          <a href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.qq)}</a>
          <a href="${pageHref("about")}#contact-block" data-page-link="about">${escapeHtml(d.common.dingtalk)}</a>
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
