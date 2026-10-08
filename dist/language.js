// English is kept in the page; Chinese is applied without rebuilding the layout.
const translations = [
  ['.skip', '跳到正文'],
  ['nav a[href="#education"]', '教育'], ['nav a[href="#work"]', '作品'], ['nav a[href="#about"]', '关于我'],
  ['.identity', '机器人学硕士<br>曼彻斯特大学', true],
  ['.welcome-line', '你好，欢迎来逛逛我的作品集。'],
  ['.welcome-copy p:last-child', '我是一个喜欢动手做东西的机器人专业学生：在屏幕上设计，在代码里实现，也把想法变成能摸到的实物。这里放着一些我的项目，以及我在其中做的工作、反复尝试和取舍。随意看看，希望你也能感受到制作过程中的乐趣。'],
  ['.hero-intro > a', '开始参观'],
  ['#education > h2', '教育经历'],
  ['.education-entry:first-child h3', '曼彻斯特大学'],
  ['[data-field="mastersDates"]', '2026 年 9 月 — 2027 年 9 月（预计）'],
  ['.education-entry:first-child .degree', 'MSc Robotics · 机器人学硕士'],
  ['[data-field="bachelorInstitution"]', '南京信息工程大学'],
  ['[data-field="bachelorDates"]', '2022 年 9 月 — 2026 年 6 月'],
  ['.partner-university', '爱尔兰东南理工大学 · South East Technological University（SETU）'],
  ['.institute', '南京信息工程大学沃特福德学院'],
  ['[data-field="bachelorDegree"]', 'BSc · 物联网工程 · 双学位项目'],
  ['.academic-results', '国内本科均分：85.9/100 · 国外本科：一等荣誉学位'],
  ['.section-heading h2', '我做过的一些作品'],
  ['#yeeme .project-kind', '网页产品'],
  ['#yeeme .role', '产品方向、视觉设计与开发'],
  ['#yeeme .project-copy > p:not(.role)', 'YeeMe 是我把视觉设计兴趣带进实际产品的一次尝试。我确定了双语界面与整体风格，再借助 Codex 推进实现，逐步打通 AI 行为、账户、数据库和部署。我在意第一眼的气质，也花了不少精力处理那些不显眼的连接：页面的细节、点击之后的流程，以及整个体验能不能顺畅地衔接起来。'],
  ['#yeeme .project-copy > a', '访问 YeeMe / 易秘'],
  ['#myzooids .project-kind', '群体机器人'],
  ['#myzooids .role', '团队负责人 · 硬件与软件开发'],
  ['#myzooids .project-copy > p:not(.role):not(.project-period)', 'Myzooids 把这份好奇心带到了物理世界。作为团队负责人，我一边协调项目推进，一边参与电路、固件、Android 控制端和机械结构的开发。把这些部分真正连起来，占据了我工作中很大的一部分：当硬件与软件开始配合，机器人这个想法才逐渐变成一个完整的系统。'],
  ['[data-field="roboticsDates"]', '2024 年 7 月 — 2026 年 6 月'],
  ['.flow-heading > p', '从工作台到实际运行'],
  ['.design-notes > h2', '我在其中做的工作'],
  ['#about > h2', '关于我'],
  ['#about .intro', '我喜欢参与制作的整个过程：从最初的草图，到能运行的版本，再到那些还值得多改一遍的细节。'],
  ['#about .intro + p', '我在意作品的样子，也很好奇它为什么能运转。所以我的项目常常跨过几个边界：设计、代码、电子硬件，以及把它们接到一起的实际工作。我还在学习，也喜欢因为一个具体的想法去学新东西。这个个人站既用来展示做好的作品，也记录它们慢慢成形的过程。'],
  ['.toolkit span:first-child', '响应式与双语设计'],
  ['.toolkit span:nth-child(2)', 'AI 辅助开发'],
  ['.footer-greeting', '谢谢你来参观。'],
  ['footer > a[href="#main"]', '回到顶部']
];
const yeeNotes = [
  ['视觉方向与响应式设计', '我确定了以水墨为灵感的视觉语言：山水意象、纸张质感、衬线字体和克制的红色点缀。我反复调整首页、功能页和账户邮件的色彩、留白与组件细节，也让中英文内容在电脑和手机上都保持协调。'],
  ['数据库与产品数据', '我参与设计了 PostgreSQL 数据模型，涵盖账户、会话、命盘、生成结果、积分与反馈。通过 Drizzle 的结构定义和迁移，梳理记录之间的关系与持久化方式，让独立页面能够作为一个产品运转。'],
  ['验证与账户流程', '我处理了注册、邮箱验证、验证码重发和密码重置。带签名及有效期的工作量证明挑战、服务端校验、数据库防重放记录和限流共同支持防滥用；我也把这些后台检查接入了用户实际看到的流程。'],
  ['反馈与自动邮件', '我把反馈流程接到数据库存储与 SMTP 自动邮件转发，并在发送失败时保留投递状态。我还调整了验证与密码重置邮件的内容结构、发件与回复逻辑，让邮件延续网站的视觉风格。'],
  ['域名、部署与路由', '我配置了 www.yeemeapp.com 的域名和路由，让 API 请求到达服务端处理程序，前端地址直接访问时也能正确进入应用。重定向与密码重置链接同样需要与账户流程衔接。'],
  ['AI 模型与系统提示词', '我参与实现了服务端模型适配层，让模型与接口地址能够配置。不同功能的中英文系统提示词定义了结果结构、语气、上下文与回答边界；模型报错处理和输出规则也是这部分工作的一环。']
];
const robotNotes = [
  ['团队规划与协调', '作为团队负责人，我把项目拆分为硬件、机械、软件和算法任务，协调进度并处理模块之间的接口。我既参与具体开发，也负责把不同成员的工作整合成能够运行的原型。'],
  ['控制电路与 PCB', '我设计了机器人控制原理图，完成 PCB 制作与元件组装。在集成过程中，我还处理了电路板与固件、机械结构之间的连接，让电子部分真正装进机器人并参与运行。'],
  ['机械结构与原型', '我通过 3D 建模和打印，结合电子部分不断调整机器人结构。这项工作需要同时考虑实体装配、电路板位置、控制硬件和整体原型之间的关系。'],
  ['固件与 Android 控制端', '我使用 C 开发 MCU 固件，并完成 Android 控制应用。它们分别承担嵌入式与移动端的控制工作，把底层硬件接口接到用户可以操作的界面上。'],
  ['视觉与系统集成', '我把硬件接口与计算机视觉、路径规划模块集成，并进行整机功能检查。我的工作重点是让各模块连接起来，再确认它们在同一个系统里能够配合运行。'],
  ['源码与项目文档', '我整理了源码、设计说明和完整项目文档，用于在 GitHub 发布。记录制作与集成过程，也是项目交付的一部分。']
];
for (const [id, notes] of [['yeeme', yeeNotes], ['myzooids', robotNotes]]) {
  notes.forEach(([title, text], i) => {
    translations.push([`#${id} details:nth-child(${i + 1}) summary`, title]);
    translations.push([`#${id} details:nth-child(${i + 1}) p`, text]);
  });
}
const captions = ['OpenCV / ArUco · 实时识别与距离显示', '组装完成的机器人，握在手里。', '打印外壳与视觉识别标记。', '内部结构：PCB 与已组装的电子元件。', '电路设计 · 电源、电机、MCU 与接口', '机械设计 · 3D 爆炸结构图', 'PCB 布局 · 紧凑集成', 'Android 控制端 · 连接与移动', '固件调试 · SWD 烧录'];
captions.forEach((text, i) => translations.push([`.flow-group figure:nth-child(${i + 1}) figcaption`, text]));
const records = translations.flatMap(([selector, zh, html]) => [...document.querySelectorAll(selector)].map(el => ({el, en:el.innerHTML, zh, html})));
const languageButton = document.querySelector('.language-toggle');
function setLanguage(lang) {
  const chinese = lang === 'zh-CN';
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  for (const {el,en,zh,html} of records) {
    if (!chinese || html) el.innerHTML = chinese ? zh : en;
    else el.textContent = zh;
  }
  languageButton.textContent = chinese ? 'English' : '中文';
  languageButton.setAttribute('aria-label', chinese ? 'Switch to English' : '切换到中文');
  languageButton.setAttribute('lang', chinese ? 'en' : 'zh-CN');
  const paused = document.querySelector('.hardware-flow').classList.contains('is-paused');
  document.querySelector('.flow-toggle').textContent = chinese ? (paused ? '继续播放' : '暂停图片') : (paused ? 'Play photos' : 'Pause photos');
  document.querySelector('nav').setAttribute('aria-label', chinese ? '主导航' : 'Main navigation');
  document.querySelector('.flow-window').setAttribute('aria-label', chinese ? '机器人图片展示；聚焦可暂停流动' : 'Robot photo gallery; focus to pause movement');
  try { localStorage.setItem('portfolio-language', chinese ? 'zh-CN' : 'en'); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'zh-CN' ? 'en' : 'zh-CN'));
try { if (localStorage.getItem('portfolio-language') === 'zh-CN') setLanguage('zh-CN'); } catch {}
