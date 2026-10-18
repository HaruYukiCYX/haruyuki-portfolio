const profile = window.PORTFOLIO || {};
for (const e of document.querySelectorAll('[data-profile="name"]')) if (profile.name) e.textContent = profile.name;
const links = [];
if (profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) links.push(['Email', `mailto:${profile.email}`]);
for (const [key,label] of [['linkedin','LinkedIn'],['github','GitHub']]) {
  try { const u = new URL(profile[key]); if (u.protocol === 'https:') links.push([label,u.href]); } catch {}
}
const contacts = document.getElementById('contact-links');
if (contacts) for (const [label,href] of links) {
  const a = document.createElement('a'); a.textContent = label; a.href = href;
  if (href.startsWith('https:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
  contacts.append(a);
}
const fields = {...profile.education,...profile.projects};
for (const e of document.querySelectorAll('[data-field]')) {
  const value = fields[e.dataset.field]; if (typeof value === 'string' && value.trim()) e.textContent = value;
}
for (const e of document.querySelectorAll('[data-image]')) {
  const key = e.dataset.image, source = profile.images?.[key];
  if (!source || !/^assets\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp|avif)$/i.test(source)) continue;
  const img = document.createElement('img'); img.src = source;
  img.alt = profile.imageAlts?.[key] || (key.startsWith('yeeme') ? 'YeeMe interface' : 'Myzooids project');
  img.loading = e.closest('.project-gallery') ? 'lazy' : 'eager';
  const figure = e.closest('figure'), gallery = e.closest('.robot-gallery');
  e.replaceWith(img);
  if (figure) figure.hidden = false;
  if (gallery) { gallery.hidden = false; const diagram = document.querySelector('[data-robotics-diagram]'); if (diagram) diagram.hidden = true; }
}
try {
  const u = new URL(profile.projects?.roboticsUrl), a = document.getElementById('robotics-link');
  if (u.protocol === 'https:' && a) { a.href=u.href; a.textContent='View source'; a.target='_blank'; a.rel='noopener noreferrer'; a.hidden=false; }
} catch {}

for (const flow of document.querySelectorAll('.hardware-flow')) {
  const track = flow.querySelector('.flow-track');
  const group = flow.querySelector('.flow-group');
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute('aria-hidden', 'true');
  for (const img of duplicate.querySelectorAll('img')) img.alt = '';
  track.append(duplicate);
  const button = flow.querySelector('.flow-toggle');
  button.addEventListener('click', () => {
    const paused = flow.classList.toggle('is-paused');
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = document.documentElement.lang === 'zh-CN' ? (paused ? '继续播放' : '暂停图片') : (paused ? 'Play photos' : 'Pause photos');
  });
}

const robotViews = {
  assembled: {src:'assets/myzooids-in-hand.jpg', en:'The finished robot, small enough to hold.', zh:'组装完成的机器人，刚好握在手里。', alt:'Completed orange Myzooids robot held in a hand'},
  electronics: {src:'assets/myzooids-electronics.jpg', en:'Under the shell: the assembled PCB and electronics.', zh:'打开外壳，看看组装后的 PCB 和电子元件。', alt:'Myzooids assembled PCB and internal electronics'},
  structure: {src:'assets/myzooids-structure.png', en:'How the chassis, motors, battery and PCB fit together.', zh:'底盘、电机、电池和 PCB 如何装在一起。', alt:'Exploded mechanical assembly of Myzooids'}
};
let activeRobotView = 'assembled';
window.updateRobotCaption = () => {
  const target = document.getElementById('robot-view-caption');
  if (target) target.textContent = robotViews[activeRobotView][document.documentElement.lang === 'zh-CN' ? 'zh' : 'en'];
};
for (const button of document.querySelectorAll('[data-view]')) {
  button.addEventListener('click', () => {
    activeRobotView = button.dataset.view;
    const view = robotViews[activeRobotView], image = document.getElementById('robot-feature');
    image.src = view.src; image.alt = view.alt;
    image.closest('figure').classList.toggle('is-diagram', activeRobotView === 'structure');
    for (const control of document.querySelectorAll('[data-view]')) control.setAttribute('aria-pressed', String(control === button));
    window.updateRobotCaption();
  });
}

// Content is visible without JS. Only elements actually entering view receive animation.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.matches('.project-image,.robot-viewer') ? 'entrance-image' : 'entrance');
      entrances.unobserve(entry.target);
    }
  }, {threshold:.08});
  const selectors = '.education>h2,.education-entry,.section-heading h2,.work-intro,.project-title h3,.project-title>p,.project-stage>.project-image,.robot-viewer,.project-copy,.design-notes>h2,.notes-grid details,.flow-heading,.about>h2,.about .intro,.research-interests,.toolkit,.footer-top';
  document.querySelectorAll(selectors).forEach((el,i) => { el.style.animationDelay = `${(i % 3) * 70}ms`; entrances.observe(el); });
  const loops = new IntersectionObserver(entries => {for (const entry of entries) entry.target.classList.toggle('is-offscreen', !entry.isIntersecting || document.hidden);});
  document.querySelectorAll('.hardware-flow,.signature').forEach(el=>loops.observe(el));
  document.addEventListener('visibilitychange',()=>document.querySelectorAll('.hardware-flow,.signature').forEach(el=>el.classList.toggle('is-offscreen',document.hidden || el.getBoundingClientRect().bottom<0 || el.getBoundingClientRect().top>innerHeight)));
}
