/* ============ Lab/note — V7 bilingual content ============ */
window.LN7 = {
  zh: {
    nav: { back: "回到封面", dark: "深色模式" },
    cover: { meta: "RESEARCH NOTES · NO.01", sub: "真实记录研究者如何在科研中使用 AI", hint: "双击打开·OPEN" },
    about: {
      eyebrow: "About",
      h: ["这些便签", "来自用 AI 做科研的人。"],
      p: [
        "Lab/note 定期组织线上访谈，邀请不同地区、不同学科的研究者，聊聊他们在科研过程中使用 AI 的经验。",
        "我们记录 AI 进入研究现场后的细节：它如何改变人的判断与工作方式，又如何在一次次有效和失灵中，显露出自己的边界。",
        "只要你在研究中用过 AI，有过思考和尝试，就值得被记录。",
      ],
      pHtml: `访谈通过腾讯会议或 Zoom 进行，不录像，也不会公开完整对话。访谈结束后，我们会把其中的经验整理成一张便签，<mark>贴回这里</mark>。`,
      ctas: [
        { lead: "我要分享", note: "可获得贡献者证书及参与证明", primary: true, url: "https://docs.google.com/forms/d/e/1FAIpQLSddudRlpz2jP266fgnNvlC8UUQVwyaOQeIV2xISzoSkv25lzA/viewform" },
        { lead: "我要旁听", note: "可获得参与证明", primary: false, url: "https://docs.google.com/forms/d/e/1FAIpQLSd_DAxAMqB1TvfGJGvNFh5sgY8CZ4BQIU-T0JoJ1cL4VYQPaQ/viewform" },
      ],
    },
    notes: { shuffle: "换一批", count: () => "" },
    wall: { eyebrow: "", title: "他们贴回来的便签" },
    callout: {
      h: "先说清楚一件事",
      p: [
        "我们鼓励在科研中合理使用 AI，也欢迎那些没跑通、甚至翻车的经验。",
        `但研究的判断、结论，以及最终为它负责的人，<mark>始终应该是你</mark>。`,
        "我们想记录的是：AI 如何帮你澄清问题、整理过程、发现漏洞，而不是如何替你把研究做掉。",
      ],
    },
    faq: [
      { q: "这里说的 AI，具体指什么？", a: "不只指 ChatGPT、Claude、DeepSeek 这类生成式工具，也包括你在研究中用到的模型、算法和智能系统。我们关心的不只是「用了什么工具」，也包括你如何判断、调整和取舍。" },
      { q: "这里说的科研，具体指什么？", a: "科研不只指发表论文。只要你带着问题进行系统探索，查文献、做实验、跑数据、设计访谈、复现结果、写论文、准备汇报，都算。不限制学科，也不要求已经有成果。" },
      { q: "不是「正式研究者」也能来吗？", a: "能。读研、读博、做学术、做项目研究、独立研究，或者任何正在认真探索一个问题的人，都可以来。你不需要是 AI 专家，也不需要有漂亮结果。" },
      { q: "我需要有一套完整经验才能分享吗？", a: "不需要。你可以分享一个具体环节、一个还没想清楚的问题、一次没跑通的尝试，或者一次翻车之后的调整。我们聊的不是成果展示，而是 AI 真实进入研究过程后的细节。" },
      { q: "要提前准备材料吗？", a: "不用。不需要 PPT，不需要讲稿，也不需要提前整理成完整分享。带着你的经历来就好，我们会在访谈里一起把内容聊出来。" },
      { q: "可以只旁听吗？", a: "可以。你可以选择分享，也可以先来旁听。旁听不需要发言，到时进入会议即可。" },
      { q: "活动用什么语言？", a: "活动以中文和英文为主，具体语言会根据分享者来定。如果现场有不同语言背景的参与者，我们会尽量提供必要的翻译和转述，保证大家能听懂主要内容。" },
      { q: "一次大概多久？", a: "每次活动大约 1 小时，通过腾讯会议或 Zoom 进行。为了照顾不同时区，活动时间会在不同时段轮换。" },
      { q: "会录像吗？内容会公开吗？", a: "不会录像，也不会公开完整对话。最后公开的只有一张整理后的便签。便签会经过概括和编辑，不会原样放出你的表达；发布前也会先给分享者确认。" },
      { q: "说得不完整，或者后来觉得不想公开，可以吗？", a: "可以。这个活动鼓励真实经验，也允许不确定、没跑通和后来改变想法。整理后的便签发布前会给你确认，不合适的内容可以删改。" },
      { q: "报名之后会发生什么？", a: "如果你选择「我要分享」，我们会先联系你，简单确认你想聊的方向，再约一个合适的时间。如果你选择「我要旁听」，我们会在有新场次时，把活动时间和会议链接发给你。" },
      { q: "有什么回报吗？", a: "分享者会收到贡献者证书和相应时长的参与证明；旁听者会收到相应时长的参与证明。" },
    ],
    hostsTitle: "主办与支持",
    hosts: [
      { brand: "labnote", r: "活动项目组" },
      { brand: "aican", r: "宣发支持社区" },
    ],
    foot: ["© 2026 Lab/note", "labnote.xxuanz.com"],
  },

  en: {
    nav: { back: "Back to cover", dark: "Dark mode" },
    cover: { meta: "RESEARCH NOTES · NO.01", sub: "Real accounts · how researchers put AI to work in their research", hint: "Double-click to open" },
    about: {
      eyebrow: "About",
      h: ["These notes come from", "people doing research with AI."],
      p: [
        "Lab/note runs online interviews on a regular basis, inviting researchers across regions and disciplines to talk about how they use AI in their research.",
        "We record what happens once AI enters the research scene: how it reshapes judgment and ways of working, and how — across hits and misses — it reveals its own edges.",
        "If you've used AI in your research, with some thought and experimentation, it's worth recording.",
      ],
      pHtml: `Interviews run on Tencent Meeting or Zoom — not recorded, and the full conversation is never made public. Afterwards we distill the experience into a single note, and <mark>pin it back here</mark>.`,
      ctas: [
        { lead: "I'll share", note: "Contributor certificate + proof of participation", primary: true, url: "https://docs.google.com/forms/d/e/1FAIpQLSddudRlpz2jP266fgnNvlC8UUQVwyaOQeIV2xISzoSkv25lzA/viewform" },
        { lead: "I'll listen in", note: "Proof of participation", primary: false, url: "https://docs.google.com/forms/d/e/1FAIpQLSd_DAxAMqB1TvfGJGvNFh5sgY8CZ4BQIU-T0JoJ1cL4VYQPaQ/viewform" },
      ],
    },
    notes: { shuffle: "Shuffle", count: () => "" },
    wall: { eyebrow: "", title: "The notes they pinned back" },
    callout: {
      h: "One thing first",
      p: [
        "We encourage sensible use of AI in research, and we welcome the attempts that didn't work — even the ones that crashed.",
        `But the judgment, the conclusions, and the person ultimately answerable for them should <mark>always be you</mark>.`,
        "What we want to record is how AI helps you clarify questions, organize the process and spot gaps — not how it does the research for you.",
      ],
    },
    faq: [
      { q: "What exactly do you mean by \u201cAI\u201d here?", a: "Not just generative tools like ChatGPT, Claude or DeepSeek, but also the models, algorithms and intelligent systems you use in research. We care less about \u201cwhich tool\u201d and more about how you judge, adjust and make trade-offs." },
      { q: "What exactly counts as \u201cresearch\u201d here?", a: "Research isn't only about publishing papers. As long as you're systematically exploring a question — reviewing literature, running experiments, crunching data, designing interviews, reproducing results, writing papers, preparing talks — it counts. No discipline limits, and no need for finished results." },
      { q: "Can I join if I'm not a \u201cformal researcher\u201d?", a: "Yes. Master's and PhD students, academics, project researchers, independent researchers, or anyone seriously exploring a question is welcome. You don't need to be an AI expert, and you don't need polished results." },
      { q: "Do I need a complete, polished experience to share?", a: "No. You can share a single step, a question you haven't figured out yet, an attempt that didn't work, or an adjustment you made after things went wrong. This isn't a showcase of results — it's about the details of AI actually entering the research process." },
      { q: "Do I need to prepare materials in advance?", a: "No. No slides, no script, no need to organize a full talk beforehand. Just come with your experience, and we'll draw it out together during the interview." },
      { q: "Can I just listen in?", a: "Yes. You can choose to share, or simply come and listen first. Listening in requires no speaking — just join the meeting when the time comes." },
      { q: "What language is the event in?", a: "Mainly Chinese and English, with the specific language depending on the speaker. If participants come from different language backgrounds, we'll do our best to provide the necessary translation and paraphrasing so everyone can follow the main content." },
      { q: "How long is each session?", a: "About 1 hour, over Tencent Meeting or Zoom. To accommodate different time zones, sessions rotate across different times of day." },
      { q: "Is it recorded? Will the content be made public?", a: "No recording, and the full conversation is never published. The only thing made public is one edited note. Notes are summarized and edited — your words are never published verbatim — and we confirm with the speaker before release." },
      { q: "What if I don't say it fully, or later decide I don't want it public?", a: "That's fine. This event encourages honest experience, and allows for uncertainty, things that didn't work, and changing your mind later. The edited note is confirmed with you before release, and anything unsuitable can be revised or removed." },
      { q: "What happens after I sign up?", a: "If you choose \u201cI'll share,\u201d we'll reach out first to briefly confirm the direction you'd like to talk about, then arrange a suitable time. If you choose \u201cI'll listen in,\u201d we'll send you the time and meeting link when a new session comes up." },
      { q: "Is there anything in return?", a: "Sharers receive a contributor certificate and proof of participation for the time involved; listeners receive proof of participation for the time involved." },
    ],
    hostsTitle: "Hosts & Support",
    hosts: [
      { brand: "labnote", r: "Project team" },
      { brand: "aican", r: "Outreach & support community" },
    ],
    foot: ["© 2026 Lab/note", "labnote.xxuanz.com"],
  },

  /* ---- 9 full notes (mark = highlighter) ---- */
  noteList: [
    {
      zh: { b: `开始写论文前，我会让 AI 帮我把待读文献排成金字塔——1~2 篇综述、5~10 篇分支代表作、最后 20 篇左右具体应用。该先读哪些一目了然，清单还能直接进 Zotero，<mark>省下大把整理时间</mark>。`,
            by: "Tao · 计算机科学 · 北京 · 用 AI 做科研 2 年" },
      en: { b: `Before I start writing a paper, I have AI sort my reading list into a pyramid — 1–2 reviews, 5–10 key works per branch, and finally around 20 specific applications. What to read first becomes obvious, and the list drops straight into Zotero, <mark>saving heaps of organizing time</mark>.`,
            by: "Tao · Computer Science · Beijing · 2 yrs with AI" },
    },
    {
      zh: { b: `我让 AI 轮流扮演三个会挑我毛病的人：导师帮我看方向跑没跑偏，审稿人专挑论证的漏洞，答辩评委负责问那些我最怕被问的问题。等真人来挑刺时，<mark>大半都被我提前堵上了</mark>。`,
            by: "Gong · 图像科学 · 北京 · 用 AI 做科研 4 年" },
      en: { b: `I have AI take turns playing three people who pick at me: an advisor checking whether the direction has drifted, a reviewer hunting for holes in the argument, and a defense panelist asking the questions I dread most. By the time real people poke at it, <mark>most of the holes are already plugged</mark>.`,
            by: "Gong · Imaging Science · Beijing · 4 yrs with AI" },
    },
    {
      zh: { b: `摸一个新方向的底，我用 Consensus——它提供的都是真论文。诀窍是带个具体问题去问，它会给你证据倾向 + 论文出处。一个坑：<mark>撤稿的论文它照引</mark>，关键文献得自己再核一遍。`,
            by: "Wen · 服装设计 · 博洛尼亚 · 用 AI 做科研 1 年" },
      en: { b: `To get the lay of a new field I use Consensus — everything it gives you is a real paper. The trick is to come with a concrete question; it returns the leaning of the evidence plus the sources. One pitfall: <mark>it'll happily cite retracted papers</mark>, so you re-check the key references yourself.`,
            by: "Wen · Fashion Design · Bologna · 1 yr with AI" },
    },
    {
      zh: { b: `我用 AI，图的是任务启动的成本几乎为零——有想法，十秒打完字扔过去，马上换回一个 50 分的半成品。草稿也好、初步查证也好，先有个能改的东西。<mark>从 0 到 50 它最快，50 到 100 还是我自己的事</mark>。`,
            by: "Tong · 文化遗产管理 · 罗马 · 用 AI 做科研 1 年" },
      en: { b: `What I'm after with AI is that the cost of starting a task is almost zero — I type an idea out in ten seconds, toss it over, and get back a half-finished, 50-out-of-100 draft right away. Draft or first fact-check, I want something I can edit. <mark>From 0 to 50 it's fastest; 50 to 100 is still on me</mark>.`,
            by: "Tong · Cultural Heritage Management · Rome · 1 yr with AI" },
    },
    {
      zh: { b: `我不只要 AI 的结果，还要它的过程。每次它做完，我都让它讲一遍是怎么一步步推到这儿的。<mark>活是它干的，但那套方法我学走了</mark>。`,
            by: "Matilde · 计算机科学 · 博洛尼亚 · 用 AI 做科研 2 年" },
      en: { b: `I don't just want AI's answer, I want its process. Every time it finishes, I have it walk me through how it reasoned its way there, step by step. <mark>It did the work, but I walked away with the method</mark>.`,
            by: "Matilde · Computer Science · Bologna · 2 yrs with AI" },
    },
    {
      zh: { b: `我的科研创意，几乎都来自我自己观察到的 gap——一个反常的数据、一个实验里说不通的细节。AI 在这儿帮不上忙；它只负责在我有了想法之后，帮我把它理顺。<mark>原料得自己采，它只管帮你把菜炒熟</mark>。`,
            by: "Xuan · 工业设计 · 北京 · 用 AI 做科研 2 年" },
      en: { b: `Almost all my research ideas come from gaps I notice myself — an anomalous data point, a detail in an experiment that doesn't add up. AI can't help here; its job is to tidy the idea up after I already have it. <mark>You gather the raw ingredients yourself; it just cooks the dish</mark>.`,
            by: "Xuan · Industrial Design · Beijing · 2 yrs with AI" },
    },
    {
      zh: { b: `别只把 AI 当帮手，它本身可以是一种新方法。我让 AI 通过聊天引导受访者吐露想法，做成了一种比问卷更自然的调研方式——这个角度没人走过，论文还拿了最佳论文奖。AI 真正帮我的，是<mark>想出一条新路，而不是把老路走快</mark>。`,
            by: "Xiao · 工业设计 · 南京 · 用 AI 做科研 3 年" },
      en: { b: `Don't treat AI only as an assistant — it can be a method in itself. I had AI guide interviewees through chat to draw out their thoughts, turning it into a survey approach more natural than a questionnaire — an angle no one had taken, and the paper won a best-paper award. What AI really helped with was <mark>finding a new path, not walking the old one faster</mark>.`,
            by: "Xiao · Industrial Design · Nanjing · 3 yrs with AI" },
    },
    {
      zh: { b: `AI 用久了，我惊觉自己习惯了"挑答案"，而不是"想答案"。构建答案的能力，好像在<mark>用进废退</mark>——这值得每个 AI 重度用户警惕。`,
            by: "Aletta · 设计学 · 博洛尼亚 · 用 AI 做科研 3 年" },
      en: { b: `After using AI for a while, I was startled to find I'd gotten used to \u201cpicking answers\u201d rather than \u201cthinking them up.\u201d The ability to construct an answer seems to follow <mark>use-it-or-lose-it</mark> — something every heavy AI user should watch for.`,
            by: "Aletta · Design · Bologna · 3 yrs with AI" },
    },
    {
      zh: { b: `我最推荐让 AI 干的一件科研杂活，就是整理论文格式。把目标期刊或会议的 LaTeX 模板下载下来，再把写好的论文一起给 AI，让它帮你迁移到模板里。最后当然还要自己检查，但它<mark>帮我省下了差不多 3 天</mark>纯调格式的时间。`,
            by: "Alyssia · 信息设计 · 兰卡斯特 · 用 AI 做科研 1 年" },
      en: { b: `The research chore I most recommend handing to AI is formatting papers. Download the LaTeX template for your target journal or conference, give it to AI along with your finished paper, and have it migrate everything into the template. You still check it yourself at the end, but it <mark>saved me about 3 days</mark> of pure formatting fiddling.`,
            by: "Alyssia · Information Design · Lancaster · 1 yr with AI" },
    },
  ],
};
