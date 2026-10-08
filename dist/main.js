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
