(() => {
  const STORAGE_KEY = "personalweb_lang";
  const DIARY_STORAGE_KEY = "personalweb_diary_entries_v1";
  const LOCALES = ["zh-CN", "zh-TW", "en"];

  const I18N = {
    "zh-CN": {
      nav_life: "生活与我",
      nav_about: "个人信息",
      nav_projects: "项目",
      nav_album: "相册",
      nav_social: "社交主页",
      lang_label: "语言",
      cta_copy_email: "复制邮箱",
      cta_resume: "查看简历",
      copied: "已复制",
      copy_failed: "复制失败，请手动复制",
      kpi_projects: "项目",
      kpi_tags: "标签",
      about_title: "关于我",
      about_desc: "快速了解我的背景与当前关注方向。",
      about_mainInfo: "主要信息",
      about_now: "我正在做的事",
      projects_title: "项目",
      projects_desc: "一些我做过的代表项目（可按标签筛选）。",
      projects_all: "全部",
      projects_stack: "技术栈",
      projects_highlights: "亮点",
      life_title: "生活与我",
      life_desc: "你提到的 4 个模块：我喜欢的小东西、Know about me、日记本、我的 skill。",
      life_fav_title: "1.1 我喜欢的小东西",
      life_know_title: "1.2 我的个人信息（Know about me）",
      life_diary_title: "1.3 我的日记本",
      life_skill_title: "1.4 我的 skill",
      skill_level: "熟练度",
      diary_empty: "还没有日记，先写下今天的一个瞬间吧。",
      diary_filter_all: "全部",
      diary_filter_month: "本月",
      diary_expand_all: "展开全部",
      diary_collapse_all: "收起全部",
      diary_add: "写一篇日记",
      diary_save: "保存",
      diary_cancel: "取消",
      diary_search_ph: "搜索标题或内容...",
      diary_title_ph: "今天这篇日记的标题",
      diary_text_ph: "写下今天发生了什么（最多 400 字）",
      diary_saved: "已保存到本地",
      diary_required: "请先填写标题和内容",
      album_title: "相册",
      album_desc: "一些照片与瞬间（点击可预览）。",
      social_title: "社交主页",
      social_desc: "在这些地方找到我。",
      back_to_top: "返回顶部",
      close: "关闭",
      photo_of: "照片 {index}/{total}",
      footer: "© {year} {name}. Built as a lightweight static site.",
      label_role: "方向",
      label_location: "城市",
      label_email: "邮箱",
      label_focus: "关注点",
      label_note: "备注",
      link_github: "GitHub",
      link_demo: "Demo",
      link_article: "文章"
    },
    "zh-TW": {
      nav_life: "生活與我",
      nav_about: "個人資訊",
      nav_projects: "專案",
      nav_album: "相簿",
      nav_social: "社交主頁",
      lang_label: "語言",
      cta_copy_email: "複製信箱",
      cta_resume: "查看履歷",
      copied: "已複製",
      copy_failed: "複製失敗，請手動複製",
      kpi_projects: "專案",
      kpi_tags: "標籤",
      about_title: "關於我",
      about_desc: "快速了解我的背景與目前關注方向。",
      about_mainInfo: "主要資訊",
      about_now: "我正在做的事",
      projects_title: "專案",
      projects_desc: "一些我做過的代表專案（可依標籤篩選）。",
      projects_all: "全部",
      projects_stack: "技術棧",
      projects_highlights: "亮點",
      life_title: "生活與我",
      life_desc: "你提到的 4 個模組：我喜歡的小東西、Know about me、日記本、我的 skill。",
      life_fav_title: "1.1 我喜歡的小東西",
      life_know_title: "1.2 我的個人資訊（Know about me）",
      life_diary_title: "1.3 我的日記本",
      life_skill_title: "1.4 我的 skill",
      skill_level: "熟練度",
      diary_empty: "還沒有日記，先寫下今天的一個瞬間吧。",
      diary_filter_all: "全部",
      diary_filter_month: "本月",
      diary_expand_all: "展開全部",
      diary_collapse_all: "收起全部",
      diary_add: "寫一篇日記",
      diary_save: "儲存",
      diary_cancel: "取消",
      diary_search_ph: "搜尋標題或內容...",
      diary_title_ph: "今天這篇日記的標題",
      diary_text_ph: "寫下今天發生了什麼（最多 400 字）",
      diary_saved: "已儲存到本地",
      diary_required: "請先填寫標題和內容",
      album_title: "相簿",
      album_desc: "一些照片與瞬間（點擊可預覽）。",
      social_title: "社交主頁",
      social_desc: "在這些地方找到我。",
      back_to_top: "回到頂部",
      close: "關閉",
      photo_of: "照片 {index}/{total}",
      footer: "© {year} {name}. Built as a lightweight static site.",
      label_role: "方向",
      label_location: "城市",
      label_email: "信箱",
      label_focus: "關注點",
      label_note: "備註",
      link_github: "GitHub",
      link_demo: "Demo",
      link_article: "文章"
    },
    en: {
      nav_life: "Life",
      nav_about: "About",
      nav_projects: "Projects",
      nav_album: "Album",
      nav_social: "Social",
      lang_label: "Language",
      cta_copy_email: "Copy email",
      cta_resume: "Resume",
      copied: "Copied",
      copy_failed: "Copy failed. Please copy manually.",
      kpi_projects: "Projects",
      kpi_tags: "Tags",
      about_title: "About",
      about_desc: "A quick snapshot of who I am and what I’m focusing on.",
      about_mainInfo: "Main info",
      about_now: "What I’m doing now",
      projects_title: "Projects",
      projects_desc: "A few selected projects (filter by tags).",
      projects_all: "All",
      projects_stack: "Stack",
      projects_highlights: "Highlights",
      life_title: "Life & Me",
      life_desc: "Your 4 requested blocks: favorite little things, know about me, diary, and skills.",
      life_fav_title: "1.1 My Favorite Little Things",
      life_know_title: "1.2 My Info (Know about me)",
      life_diary_title: "1.3 My Diary",
      life_skill_title: "1.4 My Skills",
      skill_level: "Level",
      diary_empty: "No diary notes yet. Start with one moment from today.",
      diary_filter_all: "All",
      diary_filter_month: "This month",
      diary_expand_all: "Expand all",
      diary_collapse_all: "Collapse all",
      diary_add: "Write diary",
      diary_save: "Save",
      diary_cancel: "Cancel",
      diary_search_ph: "Search title or text...",
      diary_title_ph: "Diary title",
      diary_text_ph: "Write what happened today (max 400 chars)",
      diary_saved: "Saved locally",
      diary_required: "Please fill both title and text",
      album_title: "Album",
      album_desc: "Some moments (click to preview).",
      social_title: "Social",
      social_desc: "Find me here.",
      back_to_top: "Back to top",
      close: "Close",
      photo_of: "Photo {index}/{total}",
      footer: "© {year} {name}. Built as a lightweight static site.",
      label_role: "Role",
      label_location: "Location",
      label_email: "Email",
      label_focus: "Focus",
      label_note: "Note",
      link_github: "GitHub",
      link_demo: "Demo",
      link_article: "Article"
    }
  };

  const DATA = {
    profile: {
      name: { "zh-CN": "你的名字", "zh-TW": "你的名字", en: "Your Name" },
      headline: {
        "zh-CN": "前端 / 全栈 / AI 应用（示例）",
        "zh-TW": "前端 / 全棧 / AI 應用（示例）",
        en: "Frontend / Full-stack / AI Apps (Example)"
      },
      bio: {
        "zh-CN": "这里放一句你最想被记住的话：你擅长什么、在做什么、对什么感兴趣。",
        "zh-TW": "這裡放一句你最想被記住的話：你擅長什麼、在做什麼、對什麼感興趣。",
        en: "Write one sentence you want people to remember: what you build, what you’re good at, what you care about."
      },
      location: { "zh-CN": "北京 / 远程", "zh-TW": "北京 / 遠端", en: "Beijing / Remote" },
      email: "you@example.com",
      resumeUrl: "#",
      skills: ["TypeScript", "React", "Node.js", "Python", "LLM", "Design Systems"],
      focus: {
        "zh-CN": "性能与体验、工程化、AI 应用落地",
        "zh-TW": "效能與體驗、工程化、AI 應用落地",
        en: "Performance & UX, engineering, shipping AI apps"
      },
      note: {
        "zh-CN": "这些内容都在 app.js 里可改，后续也可以拆成 JSON。",
        "zh-TW": "這些內容都在 app.js 裡可改，後續也可以拆成 JSON。",
        en: "All content is editable in app.js; you can later move data to JSON."
      },
      now: [
        {
          "zh-CN": "做一个更“像你”的个人站：有趣交互 + 作品叙事",
          "zh-TW": "做一個更「像你」的個人站：有趣互動 + 作品敘事",
          en: "Making a more “you” portfolio: fun interactions + storytelling"
        },
        {
          "zh-CN": "持续打磨项目案例：问题、方案、结果、复盘",
          "zh-TW": "持續打磨專案案例：問題、方案、結果、復盤",
          en: "Polishing project cases: problem → solution → impact → learnings"
        },
        {
          "zh-CN": "整理相册：选 12–24 张代表照片",
          "zh-TW": "整理相簿：選 12–24 張代表照片",
          en: "Curating the album: pick 12–24 representative photos"
        }
      ],
      quickFacts: [
        { k: { "zh-CN": "偏好", "zh-TW": "偏好", en: "Preference" }, v: { "zh-CN": "简洁、克制但有细节", "zh-TW": "簡潔、克制但有細節", en: "Minimal, tasteful details" } },
        { k: { "zh-CN": "工作方式", "zh-TW": "工作方式", en: "Work style" }, v: { "zh-CN": "结果导向 + 工程化", "zh-TW": "結果導向 + 工程化", en: "Outcome-driven + engineering" } },
        { k: { "zh-CN": "可合作", "zh-TW": "可合作", en: "Open to" }, v: { "zh-CN": "远程/全职/项目", "zh-TW": "遠端/全職/專案", en: "Remote / full-time / projects" } }
      ],
      favorites: [
        { "zh-CN": "机械键盘与好听的打字声", "zh-TW": "機械鍵盤與好聽的打字聲", en: "Mechanical keyboards and satisfying typing sounds" },
        { "zh-CN": "深夜散步时的城市灯光", "zh-TW": "深夜散步時的城市燈光", en: "City lights during late-night walks" },
        { "zh-CN": "拍照片记录普通但有趣的一天", "zh-TW": "拍照片記錄普通但有趣的一天", en: "Capturing ordinary but interesting days" },
        { "zh-CN": "把复杂问题讲清楚的感觉", "zh-TW": "把複雜問題講清楚的感覺", en: "Turning complex ideas into clear stories" }
      ],
      knowAbout: [
        { k: { "zh-CN": "名字", "zh-TW": "名字", en: "Name" }, v: { "zh-CN": "你的名字", "zh-TW": "你的名字", en: "Your Name" } },
        { k: { "zh-CN": "身份", "zh-TW": "身份", en: "Role" }, v: { "zh-CN": "开发者 / 创作者", "zh-TW": "開發者 / 創作者", en: "Developer / Creator" } },
        { k: { "zh-CN": "关键词", "zh-TW": "關鍵詞", en: "Keywords" }, v: { "zh-CN": "好奇心、执行力、长期主义", "zh-TW": "好奇心、執行力、長期主義", en: "Curiosity, execution, long-term mindset" } },
        { k: { "zh-CN": "理想状态", "zh-TW": "理想狀態", en: "Ideal mode" }, v: { "zh-CN": "做有价值且好用的产品", "zh-TW": "做有價值且好用的產品", en: "Build useful products with real value" } }
      ],
      diary: [
        {
          date: "2026-04-14",
          title: { "zh-CN": "把个人网站上线了", "zh-TW": "把個人網站上線了", en: "Shipped my personal website" },
          text: {
            "zh-CN": "今天把网站结构和多语言跑通了，下一步想加一些有趣交互。",
            "zh-TW": "今天把網站結構和多語言跑通了，下一步想加一些有趣互動。",
            en: "Today I got the structure and i18n working. Next step: add fun interactions."
          }
        },
        {
          date: "2026-04-10",
          title: { "zh-CN": "记录一个小进步", "zh-TW": "記錄一個小進步", en: "A small win" },
          text: {
            "zh-CN": "把一个复杂需求拆成了可执行的小任务，效率明显提高。",
            "zh-TW": "把一個複雜需求拆成了可執行的小任務，效率明顯提高。",
            en: "Broke a complex request into tiny executable tasks and worked much faster."
          }
        }
      ],
      skillBlocks: [
        {
          name: "Frontend",
          level: "90%",
          items: ["HTML/CSS", "JavaScript/TypeScript", "React"]
        },
        {
          name: "Backend",
          level: "75%",
          items: ["Node.js", "API Design", "SQL"]
        },
        {
          name: "Tooling",
          level: "80%",
          items: ["GitHub", "CI/CD", "Prompt Engineering"]
        }
      ]
    },
    projects: [
      {
        id: "p1",
        name: { "zh-CN": "项目 A：个人效率工具", "zh-TW": "專案 A：個人效率工具", en: "Project A: Productivity Toolkit" },
        period: "2025",
        summary: {
          "zh-CN": "聚合任务、笔记与日程，强调离线优先与同步一致性。",
          "zh-TW": "聚合任務、筆記與行事曆，強調離線優先與同步一致性。",
          en: "A tasks/notes/calendar hub with offline-first design and consistent sync."
        },
        tags: ["Web", "Tooling"],
        stack: ["React", "TypeScript", "IndexedDB"],
        highlights: {
          "zh-CN": ["离线可用，首屏秒开", "同步冲突可视化处理", "组件库与主题系统"],
          "zh-TW": ["離線可用，首屏秒開", "同步衝突可視化處理", "元件庫與主題系統"],
          en: ["Offline-first, fast first paint", "Visual conflict resolution", "Design system & theming"]
        },
        links: [
          { kind: "github", url: "https://github.com/" },
          { kind: "demo", url: "https://example.com/" }
        ]
      },
      {
        id: "p2",
        name: { "zh-CN": "项目 B：AI 助手工作流", "zh-TW": "專案 B：AI 助手工作流", en: "Project B: AI Assistant Workflow" },
        period: "2024",
        summary: {
          "zh-CN": "围绕“检索 + 工具调用”的多步骤流程，提升问答与自动化效率。",
          "zh-TW": "圍繞「檢索 + 工具呼叫」的多步驟流程，提升問答與自動化效率。",
          en: "A multi-step workflow around retrieval + tool use for better Q&A and automation."
        },
        tags: ["AI", "Web"],
        stack: ["TypeScript", "RAG", "Observability"],
        highlights: {
          "zh-CN": ["提示词与工具协议标准化", "监控与追踪：可复现问题", "成本与延迟优化"],
          "zh-TW": ["提示詞與工具協議標準化", "監控與追蹤：可重現問題", "成本與延遲最佳化"],
          en: ["Standardized prompts & tool protocol", "Tracing for reproducibility", "Latency & cost tuning"]
        },
        links: [{ kind: "article", url: "https://example.com/" }]
      },
      {
        id: "p3",
        name: { "zh-CN": "项目 C：摄影作品页", "zh-TW": "專案 C：攝影作品頁", en: "Project C: Photo Showcase" },
        period: "2023",
        summary: {
          "zh-CN": "以作品叙事为核心的静态站：故事、选图、节奏与排版。",
          "zh-TW": "以作品敘事為核心的靜態站：故事、選圖、節奏與排版。",
          en: "A story-driven static site focused on curation, pacing, and typography."
        },
        tags: ["Design", "Web"],
        stack: ["HTML", "CSS", "Accessibility"],
        highlights: {
          "zh-CN": ["响应式图集布局", "键盘可用的预览交互", "基础 SEO 与可访问性"],
          "zh-TW": ["響應式圖集版面", "鍵盤可用的預覽互動", "基礎 SEO 與可近用性"],
          en: ["Responsive gallery layout", "Keyboard-friendly viewer", "SEO & accessibility basics"]
        },
        links: [{ kind: "demo", url: "https://example.com/" }]
      }
    ],
    album: (() => {
      const mk = (title, c1, c2) => {
        const svg =
          `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900">` +
          `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
          `<stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>` +
          `</linearGradient></defs>` +
          `<rect width="1200" height="900" fill="url(#g)"/>` +
          `<circle cx="320" cy="300" r="160" fill="rgba(255,255,255,.22)"/>` +
          `<circle cx="820" cy="520" r="220" fill="rgba(0,0,0,.10)"/>` +
          `<text x="70" y="820" font-family="ui-sans-serif,system-ui" font-size="64" fill="rgba(255,255,255,.82)">${title}</text>` +
          `</svg>`;
        const src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
        return src;
      };
      return [
        {
          id: "a1",
          src: mk("Album 01", "#1d3557", "#457b9d"),
          alt: { "zh-CN": "示例照片 01", "zh-TW": "示例照片 01", en: "Sample photo 01" },
          meta: { "zh-CN": "城市夜色", "zh-TW": "城市夜色", en: "City night" }
        },
        {
          id: "a2",
          src: mk("Album 02", "#3a0ca3", "#4cc9f0"),
          alt: { "zh-CN": "示例照片 02", "zh-TW": "示例照片 02", en: "Sample photo 02" },
          meta: { "zh-CN": "天空与云", "zh-TW": "天空與雲", en: "Sky & clouds" }
        },
        {
          id: "a3",
          src: mk("Album 03", "#2a9d8f", "#e9c46a"),
          alt: { "zh-CN": "示例照片 03", "zh-TW": "示例照片 03", en: "Sample photo 03" },
          meta: { "zh-CN": "旅行片段", "zh-TW": "旅行片段", en: "Travel snippet" }
        },
        {
          id: "a4",
          src: mk("Album 04", "#264653", "#e76f51"),
          alt: { "zh-CN": "示例照片 04", "zh-TW": "示例照片 04", en: "Sample photo 04" },
          meta: { "zh-CN": "海边日落", "zh-TW": "海邊日落", en: "Sunset by the sea" }
        },
        {
          id: "a5",
          src: mk("Album 05", "#0b132b", "#5bc0be"),
          alt: { "zh-CN": "示例照片 05", "zh-TW": "示例照片 05", en: "Sample photo 05" },
          meta: { "zh-CN": "抽象色块", "zh-TW": "抽象色塊", en: "Abstract colors" }
        },
        {
          id: "a6",
          src: mk("Album 06", "#ff006e", "#8338ec"),
          alt: { "zh-CN": "示例照片 06", "zh-TW": "示例照片 06", en: "Sample photo 06" },
          meta: { "zh-CN": "霓虹街景", "zh-TW": "霓虹街景", en: "Neon street" }
        },
        {
          id: "a7",
          src: mk("Album 07", "#06d6a0", "#118ab2"),
          alt: { "zh-CN": "示例照片 07", "zh-TW": "示例照片 07", en: "Sample photo 07" },
          meta: { "zh-CN": "清爽夏日", "zh-TW": "清爽夏日", en: "Fresh summer" }
        },
        {
          id: "a8",
          src: mk("Album 08", "#f72585", "#b5179e"),
          alt: { "zh-CN": "示例照片 08", "zh-TW": "示例照片 08", en: "Sample photo 08" },
          meta: { "zh-CN": "舞台灯光", "zh-TW": "舞台燈光", en: "Stage lights" }
        }
      ];
    })(),
    socials: [
      { platform: "GitHub", url: "https://github.com/" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/" },
      { platform: "X", url: "https://x.com/" },
      { platform: "Blog", url: "https://example.com/" },
      { platform: "Email", url: "mailto:you@example.com" }
    ]
  };

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (s) =>
    String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const interpolate = (template, vars) =>
    String(template).replace(/\{(\w+)\}/g, (_, k) => (vars && k in vars ? String(vars[k]) : `{${k}}`));

  const normalizeLang = (raw) => {
    if (!raw) return null;
    const v = String(raw).trim();
    if (LOCALES.includes(v)) return v;
    const lower = v.toLowerCase();
    if (lower.startsWith("zh-tw") || lower.startsWith("zh-hk") || lower.startsWith("zh-mo")) return "zh-TW";
    if (lower.startsWith("zh")) return "zh-CN";
    if (lower.startsWith("en")) return "en";
    return null;
  };

  const getInitialLang = () => {
    const url = new URL(location.href);
    const qp = normalizeLang(url.searchParams.get("lang"));
    if (qp) return qp;
    const saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
    const nav = normalizeLang(navigator.language || navigator.userLanguage);
    return nav || "zh-CN";
  };

  let lang = getInitialLang();
  let projectFilter = "all";
  let modalIndex = -1;
  let diaryFilter = "all";
  let diarySearch = "";
  let diaryMonth = "";
  let diaryExpanded = new Set();
  let userDiary = [];

  const t = (key, vars) => {
    const dict = I18N[lang] || I18N["zh-CN"];
    const base = dict[key] ?? I18N["zh-CN"][key] ?? key;
    return interpolate(base, vars);
  };

  const pick = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] ?? obj["zh-CN"] ?? obj.en ?? "";
  };

  const todayISO = () => {
    const now = new Date();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${now.getFullYear()}-${m}-${d}`;
  };

  const thisMonthISO = () => todayISO().slice(0, 7);

  const loadUserDiary = () => {
    try {
      const raw = localStorage.getItem(DIARY_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((x) => x && typeof x === "object" && typeof x.id === "string");
    } catch (_) {
      return [];
    }
  };

  const saveUserDiary = () => {
    try {
      localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(userDiary));
    } catch (_) {}
  };

  const renderI18nStatic = () => {
    document.documentElement.lang = lang;
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach((n) => {
      const k = n.getAttribute("data-i18n");
      if (!k) return;
      n.textContent = t(k);
    });
  };

  const renderHero = () => {
    const p = DATA.profile;
    $("name").textContent = pick(p.name);
    $("headline").textContent = pick(p.headline);
    $("bio").textContent = pick(p.bio);
    $("resumeBtn").href = p.resumeUrl || "#";

    const skills = $("skills");
    skills.innerHTML = p.skills
      .map((s) => `<span class="chip">${escapeHtml(s)}</span>`)
      .join("");

    const tags = new Set(DATA.projects.flatMap((x) => x.tags));
    $("kpiProjects").textContent = String(DATA.projects.length);
    $("kpiTags").textContent = String(tags.size);

    const qf = $("quickFacts");
    qf.innerHTML = p.quickFacts
      .map(
        (x) =>
          `<div class="qf"><div class="qf__k">${escapeHtml(pick(x.k))}</div><div class="qf__v">${escapeHtml(
            pick(x.v)
          )}</div></div>`
      )
      .join("");
  };

  const renderAbout = () => {
    const p = DATA.profile;
    const mainInfo = [
      [t("label_role"), pick(p.headline)],
      [t("label_location"), pick(p.location)],
      [t("label_email"), p.email],
      [t("label_focus"), pick(p.focus)],
      [t("label_note"), pick(p.note)]
    ];
    $("mainInfo").innerHTML = mainInfo
      .map(([k, v]) => `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`)
      .join("");

    $("nowList").innerHTML = p.now.map((x) => `<li>${escapeHtml(pick(x))}</li>`).join("");
  };

  const renderLife = () => {
    const p = DATA.profile;
    $("favList").innerHTML = p.favorites.map((x) => `<li>${escapeHtml(pick(x))}</li>`).join("");

    $("knowMeInfo").innerHTML = p.knowAbout
      .map((x) => `<dt>${escapeHtml(pick(x.k))}</dt><dd>${escapeHtml(pick(x.v))}</dd>`)
      .join("");
    $("diarySearch").placeholder = t("diary_search_ph");
    $("diaryTitleInput").placeholder = t("diary_title_ph");
    $("diaryTextInput").placeholder = t("diary_text_ph");
    renderDiary();

    $("skillBlocks").innerHTML = p.skillBlocks
      .map(
        (x) =>
          `<article class="skillBlock"><div class="skillBlock__top"><h4 class="skillBlock__name">${escapeHtml(
            x.name
          )}</h4><span class="skillBlock__level">${escapeHtml(t("skill_level"))}: ${escapeHtml(
            x.level
          )}</span></div><div class="skillBlock__items">${x.items
            .map((it) => `<span class="chip">${escapeHtml(it)}</span>`)
            .join("")}</div></article>`
      )
      .join("");
  };

  const mergedDiary = () => {
    const base = DATA.profile.diary.map((x, i) => ({ ...x, id: `seed-${i}` }));
    return [...userDiary, ...base].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  };

  const filterDiary = (entries) => {
    let list = entries;
    if (diaryFilter === "month") {
      const target = diaryMonth || thisMonthISO();
      list = list.filter((x) => String(x.date || "").startsWith(target));
    }
    const q = diarySearch.trim().toLowerCase();
    if (q) {
      list = list.filter((x) => {
        const tt = pick(x.title).toLowerCase();
        const tx = pick(x.text).toLowerCase();
        return tt.includes(q) || tx.includes(q);
      });
    }
    return list;
  };

  const renderDiary = () => {
    const entries = filterDiary(mergedDiary());
    $("diaryAllBtn").setAttribute("aria-pressed", diaryFilter === "all" ? "true" : "false");
    $("diaryThisMonthBtn").setAttribute("aria-pressed", diaryFilter === "month" ? "true" : "false");
    $("diaryMonth").value = diaryMonth || thisMonthISO();
    $("diarySearch").value = diarySearch;

    if (!entries.length) {
      $("diaryList").innerHTML = `<li class="diary__empty">${escapeHtml(t("diary_empty"))}</li>`;
      return;
    }

    $("diaryList").innerHTML = entries
      .map((x) => {
        const text = pick(x.text);
        const expanded = diaryExpanded.has(x.id);
        const shortText = text.length > 110 ? `${text.slice(0, 110)}...` : text;
        return (
          `<li class="diary__item">` +
          `<div class="diary__date">${escapeHtml(x.date)}</div>` +
          `<div class="diary__title">${escapeHtml(pick(x.title))}</div>` +
          `<p class="diary__text">${escapeHtml(expanded ? text : shortText)}</p>` +
          `<button class="diary__toggle" type="button" data-id="${escapeHtml(x.id)}">${expanded ? "-" : "+"}</button>` +
          `</li>`
        );
      })
      .join("");

    $("diaryList").querySelectorAll("button[data-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        if (!id) return;
        if (diaryExpanded.has(id)) diaryExpanded.delete(id);
        else diaryExpanded.add(id);
        renderDiary();
      });
    });
  };

  const allProjectTags = () => Array.from(new Set(DATA.projects.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b));

  const renderProjectFilters = () => {
    const tags = allProjectTags();
    const root = $("projectFilters");
    const btn = (id, label, pressed) =>
      `<button class="fbtn" type="button" data-tag="${escapeHtml(id)}" aria-pressed="${pressed ? "true" : "false"}">${escapeHtml(
        label
      )}</button>`;
    root.innerHTML = [btn("all", t("projects_all"), projectFilter === "all"), ...tags.map((x) => btn(x, x, projectFilter === x))].join(
      ""
    );
    root.querySelectorAll("button[data-tag]").forEach((b) => {
      b.addEventListener("click", () => {
        projectFilter = b.getAttribute("data-tag") || "all";
        renderProjects();
        renderProjectFilters();
      });
    });
  };

  const linkLabel = (kind) => {
    if (kind === "github") return t("link_github");
    if (kind === "demo") return t("link_demo");
    if (kind === "article") return t("link_article");
    return kind;
  };

  const renderProjects = () => {
    const root = $("projectCards");
    const list = DATA.projects.filter((p) => (projectFilter === "all" ? true : p.tags.includes(projectFilter)));
    root.innerHTML = list
      .map((p) => {
        const tags = p.tags.map((x) => `<span class="chip">${escapeHtml(x)}</span>`).join("");
        const stack = p.stack.map((x) => `<span class="chip">${escapeHtml(x)}</span>`).join("");
        const highlights = pick(p.highlights);
        const hl =
          Array.isArray(highlights) && highlights.length
            ? `<div class="metaLine"><span class="metaLine__k">${escapeHtml(t("projects_highlights"))}</span></div><ul class="bullets">${highlights
                .map((x) => `<li>${escapeHtml(x)}</li>`)
                .join("")}</ul>`
            : "";
        const links =
          p.links && p.links.length
            ? p.links
                .map(
                  (x) =>
                    `<a class="plink" href="${escapeHtml(x.url)}" target="_blank" rel="noreferrer">${escapeHtml(linkLabel(x.kind))}</a>`
                )
                .join("")
            : "";
        return (
          `<article class="card pCard">` +
          `<div class="pCard__top"><h3 class="pCard__name">${escapeHtml(pick(p.name))}</h3><div class="pCard__period">${escapeHtml(
            p.period
          )}</div></div>` +
          `<p class="pCard__summary">${escapeHtml(pick(p.summary))}</p>` +
          `<div class="pCard__tags">${tags}</div>` +
          `<div class="metaLine"><span class="metaLine__k">${escapeHtml(t("projects_stack"))}</span>${stack}</div>` +
          `${hl}` +
          `<div class="pCard__links">${links}</div>` +
          `</article>`
        );
      })
      .join("");
  };

  const renderAlbum = () => {
    const root = $("albumGrid");
    root.innerHTML = DATA.album
      .map((p, i) => {
        return (
          `<button class="photo" type="button" data-index="${i}" aria-label="${escapeHtml(pick(p.alt))}">` +
          `<img src="${escapeHtml(p.src)}" alt="${escapeHtml(pick(p.alt))}" loading="lazy" />` +
          `<div class="photo__cap">${escapeHtml(pick(p.meta))}</div>` +
          `</button>`
        );
      })
      .join("");
    root.querySelectorAll("button.photo").forEach((b) => {
      b.addEventListener("click", () => openModal(Number(b.getAttribute("data-index"))));
    });
  };

  const renderSocial = () => {
    const root = $("socialLinks");
    root.innerHTML = DATA.socials
      .map(
        (s) =>
          `<a class="sbtn" href="${escapeHtml(s.url)}" target="_blank" rel="noreferrer">` +
          `<span class="sbtn__dot" aria-hidden="true"></span>` +
          `<span class="sbtn__label">${escapeHtml(s.platform)}</span>` +
          `</a>`
      )
      .join("");
  };

  const renderFooter = () => {
    const year = new Date().getFullYear();
    $("footerText").textContent = t("footer", { year, name: pick(DATA.profile.name) });
  };

  const setHint = (text, kind) => {
    const el = $("copyHint");
    el.textContent = text || "";
    el.style.color = kind === "error" ? "var(--danger)" : "var(--muted)";
  };

  const copyText = async (text) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_) {}
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "true");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch (_) {
      return false;
    }
  };

  const openModal = (idx) => {
    if (!Number.isFinite(idx)) return;
    modalIndex = Math.max(0, Math.min(DATA.album.length - 1, idx));
    $("modal").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateModal();
  };

  const closeModal = () => {
    modalIndex = -1;
    $("modal").setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const updateModal = () => {
    if (modalIndex < 0) return;
    const item = DATA.album[modalIndex];
    $("modalImg").src = item.src;
    $("modalImg").alt = pick(item.alt);
    $("modalTitle").textContent = pick(item.meta);
    $("modalMeta").textContent = t("photo_of", { index: modalIndex + 1, total: DATA.album.length });
  };

  const moveModal = (delta) => {
    if (modalIndex < 0) return;
    const n = DATA.album.length;
    modalIndex = (modalIndex + delta + n) % n;
    updateModal();
  };

  const setupNav = () => {
    const menuBtn = $("menuBtn");
    const nav = $("nav");
    const toggle = () => {
      const open = nav.classList.toggle("isOpen");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    menuBtn.addEventListener("click", toggle);
    nav.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("isOpen");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  };

  const setupLang = () => {
    const select = $("langSelect");
    select.value = lang;
    select.addEventListener("change", () => {
      const next = normalizeLang(select.value) || "zh-CN";
      lang = next;
      localStorage.setItem(STORAGE_KEY, lang);
      renderAll();
    });
  };

  const setupCopyEmail = () => {
    $("copyEmailBtn").addEventListener("click", async () => {
      setHint("");
      const ok = await copyText(DATA.profile.email);
      if (ok) setHint(`${t("copied")}: ${DATA.profile.email}`);
      else setHint(`${t("copy_failed")}: ${DATA.profile.email}`, "error");
    });
  };

  const setupModal = () => {
    $("modalClose").addEventListener("click", closeModal);
    $("modalBackdrop").addEventListener("click", closeModal);
    $("modalPrev").addEventListener("click", () => moveModal(-1));
    $("modalNext").addEventListener("click", () => moveModal(1));
    document.addEventListener("keydown", (e) => {
      if ($("modal").getAttribute("aria-hidden") === "false") {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") moveModal(-1);
        if (e.key === "ArrowRight") moveModal(1);
      }
    });
  };

  const setupDiary = () => {
    $("diaryAllBtn").addEventListener("click", () => {
      diaryFilter = "all";
      renderDiary();
    });
    $("diaryThisMonthBtn").addEventListener("click", () => {
      diaryFilter = "month";
      if (!diaryMonth) diaryMonth = thisMonthISO();
      renderDiary();
    });
    $("diaryMonth").addEventListener("change", (e) => {
      diaryMonth = String(e.target.value || "");
      diaryFilter = "month";
      renderDiary();
    });
    $("diarySearch").addEventListener("input", (e) => {
      diarySearch = String(e.target.value || "");
      renderDiary();
    });

    $("diaryExpandAllBtn").addEventListener("click", () => {
      const ids = filterDiary(mergedDiary()).map((x) => x.id);
      diaryExpanded = new Set(ids);
      renderDiary();
    });
    $("diaryCollapseAllBtn").addEventListener("click", () => {
      diaryExpanded = new Set();
      renderDiary();
    });

    $("diaryAddBtn").addEventListener("click", () => {
      $("diaryForm").hidden = false;
      $("diaryStatus").textContent = "";
      $("diaryTitleInput").focus();
    });
    $("diaryCancelBtn").addEventListener("click", () => {
      $("diaryForm").hidden = true;
      $("diaryTitleInput").value = "";
      $("diaryTextInput").value = "";
      $("diaryStatus").textContent = "";
    });
    $("diaryForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const titleRaw = String($("diaryTitleInput").value || "").trim();
      const textRaw = String($("diaryTextInput").value || "").trim();
      if (!titleRaw || !textRaw) {
        $("diaryStatus").textContent = t("diary_required");
        return;
      }
      const entry = {
        id: `user-${Date.now()}`,
        date: todayISO(),
        title: { "zh-CN": titleRaw, "zh-TW": titleRaw, en: titleRaw },
        text: { "zh-CN": textRaw, "zh-TW": textRaw, en: textRaw }
      };
      userDiary.unshift(entry);
      saveUserDiary();
      diaryExpanded.add(entry.id);
      $("diaryStatus").textContent = t("diary_saved");
      $("diaryTitleInput").value = "";
      $("diaryTextInput").value = "";
      $("diaryForm").hidden = true;
      renderDiary();
    });
  };

  const renderAll = () => {
    renderI18nStatic();
    renderHero();
    renderLife();
    renderAbout();
    renderProjectFilters();
    renderProjects();
    renderAlbum();
    renderSocial();
    renderFooter();
  };

  const init = () => {
    userDiary = loadUserDiary();
    diaryMonth = thisMonthISO();
    setupNav();
    setupLang();
    setupCopyEmail();
    setupModal();
    setupDiary();
    renderAll();
  };

  init();
})();
