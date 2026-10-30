(function () {
  const B = window.BOT || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- icons (24x24 line icons) ---------- */
  const ICONS = {
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
    gamepad: '<path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 0 1 9.83 16h4.34a2 2 0 0 1 1.41.59L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0 0 17.32 5z"/>',
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    sliders: '<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    discord: '<path d="M20.3 4.4A19 19 0 0 0 15.6 3l-.2.4c1.6.4 2.3 1 3.3 1.8a13 13 0 0 0-11.4 0c1-.8 1.9-1.4 3.4-1.8L10.5 3a19 19 0 0 0-4.8 1.4C2.6 9 1.8 13.4 2.2 17.7a19 19 0 0 0 5.8 2.9l1.2-1.9c-.7-.2-1.3-.6-1.9-1l.5-.4a13.6 13.6 0 0 0 12.4 0l.5.4c-.6.4-1.2.8-1.9 1l1.2 1.9a19 19 0 0 0 5.8-2.9c.5-5-.8-9.3-3.5-13.3zM9.1 15c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2zm5.8 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2z" fill="currentColor" stroke="none"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
  };
  const icon = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.star}</svg>`;

  const invite = B.inviteUrl || (/^\d{15,25}$/.test(B.clientId || '')
    ? `https://discord.com/oauth2/authorize?client_id=${B.clientId}&scope=bot%20applications.commands&permissions=1394676722935` : '#');

  /* ---------- shared header / footer ---------- */
  const page = location.pathname.split('/').pop() || 'index.html';
  const nav = [['index.html#features', 'Features'], ['commands.html', 'Commands'], ['index.html#showcase', 'Showcase'], ['guide.html', 'Guide'], ['index.html#setup', 'Setup'], ['index.html#faq', 'FAQ']];
  const hdr = $('#site-header');
  if (hdr) hdr.outerHTML = `<header class="site-header"><div class="wrap">
    <a class="brand" href="index.html"><img src="assets/favicon.png" alt="" width="38" height="38"><span>${B.name}</span></a>
    <nav class="main" id="nav">${nav.map(([h, t]) => `<a href="${h}" class="${h === page ? 'active' : ''}">${t}</a>`).join('')}</nav>
    <a class="btn btn-primary" href="${invite}" ${invite === '#' ? '' : 'target="_blank" rel="noopener"'}>${icon('plus')} Add to Discord</a>
    <button class="menu-btn" id="menu" aria-label="Menu">☰</button></div></header>`;
  const ftr = $('#site-footer');
  if (ftr) ftr.outerHTML = `<footer class="site-footer"><div class="wrap"><div class="links">
    <a href="index.html">Home</a><a href="commands.html">Commands</a><a href="guide.html">Guide</a><a href="ai-key.html">AI key</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a>
    ${B.supportServer ? `<a href="${B.supportServer}" target="_blank" rel="noopener">Support server</a>` : ''}</div>
    <p class="legal">&copy; ${new Date().getFullYear()} ${B.name}. Not affiliated with or endorsed by Discord Inc.</p></div></footer>`;
  document.addEventListener('click', (e) => { if (e.target.id === 'menu') $('#nav').classList.toggle('open'); else if (e.target.closest('#nav a')) $('#nav')?.classList.remove('open'); });

  $$('[data-bot-name]').forEach((e) => (e.textContent = B.name));
  $$('[data-updated]').forEach((e) => (e.textContent = B.lastUpdated));
  $$('[data-invite]').forEach((a) => { a.href = invite; if (invite !== '#') { a.target = '_blank'; a.rel = 'noopener'; } });
  $$('[data-email]').forEach((a) => { a.href = `mailto:${B.contactEmail}`; a.textContent = B.contactEmail; });
  $$('[data-support]').forEach((a) => { if (B.supportServer) { a.href = B.supportServer; a.target = '_blank'; a.rel = 'noopener'; } else a.style.display = 'none'; });

  /* ---------- background: particle network ---------- */
  const cv = $('#net');
  if (cv && !reduce) {
    const ctx = cv.getContext('2d'); let w, h, pts = [], mouse = { x: -999, y: -999 };
    const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; pts = Array.from({ length: Math.min(90, Math.floor(w * h / 17000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .5 })); };
    size(); addEventListener('resize', size);
    addEventListener('mousemove', (e) => { mouse = { x: e.clientX, y: e.clientY }; });
    (function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.3); ctx.fillStyle = 'rgba(90,180,255,.75)'; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) { ctx.strokeStyle = `rgba(40,140,255,${(1 - d / 130) * .35})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      for (const p of pts) { const d = Math.hypot(p.x - mouse.x, p.y - mouse.y); if (d < 160) { ctx.strokeStyle = `rgba(56,201,255,${(1 - d / 160) * .6})`; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); } }
      requestAnimationFrame(draw);
    })();
  }
  const cg = $('.cursor-glow');
  if (cg && !reduce) addEventListener('mousemove', (e) => { cg.style.left = e.clientX + 'px'; cg.style.top = e.clientY + 'px'; });

  /* ---------- feature cards ---------- */
  const F = window.FEATURES || [];
  const grid = $('#feature-grid');
  if (grid) {
    grid.innerHTML = F.map((f) => `<article class="card rv"><span class="count">${f.commands.length} cmds</span><div class="ico">${icon(f.icon)}</div><h3>${f.name}</h3><p>${f.blurb}</p><a class="more" href="commands.html#${f.id}">See commands →</a></article>`).join('');
  }
  const marq = $('#marq');
  if (marq) { const items = F.map((f) => `<span>${f.name}</span>`).join(''); marq.innerHTML = items + items; }

  /* spotlight on cards */
  document.addEventListener('mousemove', (e) => { const c = e.target.closest?.('.card'); if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); } });

  /* ---------- hero orbit icons ---------- */
  const orb = $('#orbiter');
  if (orb) { const set = ['shield', 'music', 'ticket', 'users', 'chart', 'gift', 'gamepad', 'bot']; orb.innerHTML = set.map((n, i) => `<span style="--a:${i * 45}deg">${icon(n)}</span>`).join(''); }

  /* ---------- showcase tabs ---------- */
  const SHOW = {
    music: { t: 'Music', d: 'Play anything, with controls.', ch: '#music', body: `
      <div class="msg"><div class="av">A</div><div><div class="nm">Aarav</div><code>/play</code> arijit singh tum hi ho</div></div>
      <div class="msg" style="animation-delay:.5s"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div>
        <div class="embed"><h4>🎶 Now playing</h4><p><b>Tum Hi Ho</b> — Arijit Singh</p><div class="bar"><i></i></div><p style="font-size:13px">1:12 / 4:22 • Volume 80% • Loop: Off</p>
        <div class="btns"><span>⏮️</span><span>⏸️</span><span>⏭️</span><span class="red">⏹️</span><span>🔁</span><span>🔀</span></div></div></div></div>
      <div class="msg" style="animation-delay:1s"><div class="av">A</div><div><div class="nm">Aarav</div><code>/filter</code> bassboost  •  <code>/247 enable</code></div></div>` },
    tickets: { t: 'Tickets', d: 'Support that stays organized.', ch: '#support', body: `
      <div class="msg"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div><div class="embed"><h4>🎫 Ticket #0042 • Report</h4><p>Hi @Riya! Staff will be with you shortly.<br><b>Subject:</b> Someone is spamming in #general</p>
        <div class="btns"><span class="green">🙋 Claim</span><span class="red">🔒 Close</span><span>📄 Transcript</span></div></div></div></div>
      <div class="msg" style="animation-delay:.6s"><div class="av">M</div><div><div class="nm">Mod Karan</div><code>/ticket priority</code> urgent  •  <code>/ticket add</code> @Riya's friend</div></div>
      <div class="msg" style="animation-delay:1.1s"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div>Ticket closed. A full HTML transcript was saved to the log channel and sent to Riya. ✅</div></div>` },
    antinuke: { t: 'Antinuke', d: 'Stops a nuke in seconds.', ch: '#logs', body: `
      <div class="msg"><div class="av">X</div><div><div class="nm">hacked_admin</div><span style="color:#8ea6d8">deleted 4 channels in 9 seconds…</span></div></div>
      <div class="msg" style="animation-delay:.7s"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div><div class="embed" style="border-color:#ed4245"><h4>🚨 Antinuke triggered</h4><p><b>hacked_admin</b> deleted channels more than 3 times in a minute.<br><b>Action taken:</b> banned</p></div></div></div>
      <div class="msg" style="animation-delay:1.2s"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div>The server owner was alerted by DM. 🛡️ Bots added by untrusted people are kicked, and raids are auto-blocked.</div></div>` },
    ai: { t: 'AI chat', d: 'Talk to the bot like a person.', ch: '#chat', body: `
      <div class="msg"><div class="av">S</div><div><div class="nm">Sam</div>@JARVIS bhai python me list reverse kaise karte hain?</div></div>
      <div class="msg" style="animation-delay:.7s"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div>Easy hai! <code>my_list.reverse()</code> list ko wahin reverse kar deta hai, ya <code>my_list[::-1]</code> naya reversed copy deta hai. 😎</div></div>
      <div class="msg" style="animation-delay:1.3s"><div class="av">S</div><div><div class="nm">Sam</div><code>!ask</code> give me a fun fact</div></div>` },
  };
  const tabs = $('#tabs');
  if (tabs) {
    const keys = Object.keys(SHOW);
    tabs.innerHTML = keys.map((k, i) => `<button class="tab ${i ? '' : 'on'}" data-k="${k}"><b>${SHOW[k].t}</b><span>${SHOW[k].d}</span></button>`).join('');
    const body = $('#chat-body'), chn = $('#chat-ch');
    const show = (k) => { body.innerHTML = SHOW[k].body; chn.textContent = SHOW[k].ch; $$('.tab', tabs).forEach((t) => t.classList.toggle('on', t.dataset.k === k)); };
    tabs.addEventListener('click', (e) => { const t = e.target.closest('.tab'); if (t) { show(t.dataset.k); clearInterval(auto); } });
    show('music');
    let n = 0; var auto = setInterval(() => { n = (n + 1) % keys.length; show(keys[n]); }, 9000);
  }


  /* ---------- detailed feature rows with previews ---------- */
  const U = (n, t) => `<div class="msg"><div class="av">${n[0]}</div><div><div class="nm">${n}</div>${t}</div></div>`;
  const BOT = (inner) => `<div class="msg"><div class="av bot"></div><div><div class="nm">JARVIS<em>BOT</em></div>${inner}</div></div>`;
  const DETAILS = [
    { ic: 'shield', t: 'Moderation & Automod', p: 'Everything a moderator needs, with safety checks so nobody can punish someone above them.',
      li: ['/kick, /ban, /tempban, /timeout, /warn with automatic timeout after 3 warnings', '/purge, /slowmode, /lock and /unlock to calm a channel', 'Automod: banned words, invite links, spam and mass mentions. Staff are never touched', 'Every action is written to your log channel'],
      ch: '#mod-log', m: U('Karan', '<code>/ban</code> @spammer reason: advertising') + BOT('<div class="embed" style="border-color:#ed4245"><h4>🔨 User banned</h4><p><b>User:</b> spammer<br><b>Moderator:</b> Karan<br><b>Reason:</b> advertising</p></div>') },
    { ic: 'lock', t: 'Antinuke & Anti-raid', p: 'If an admin account gets hacked, JARVIS stops the damage in seconds.',
      li: ['Catches mass channel/role deletes, bans, kicks and webhook spam', 'Punishes with a ban, kick or by removing all roles', 'Kicks bots added by people you do not trust, and has a whitelist', 'Anti-raid blocks join floods and brand-new accounts', 'The server owner gets a DM alert'],
      ch: '#mod-log', m: BOT('<div class="embed" style="border-color:#ed4245"><h4>🚨 Antinuke triggered</h4><p><b>hacked_admin</b> banned members more than 3 times in a minute.<br><b>Action taken:</b> banned</p></div>') + BOT('<div class="embed" style="border-color:#fee75c"><h4>🛡️ Anti-raid</h4><p>10 people joined within 10 seconds. New joiners are blocked for 5 minutes.</p></div>') },
    { ic: 'ticket', t: 'Tickets', p: 'A real support desk inside Discord.',
      li: ['Ticket types (Support, Report, Apply...) in a dropdown', 'A pop-up form asks for the subject first', 'Claim, priority, add/remove people, rename', 'Full HTML transcript sent to your log channel and to the user when closed'],
      ch: '#open-a-ticket', m: BOT('<div class="embed"><h4>🎫 Support</h4><p>Need help? Pick a ticket type below.</p><div class="btns"><span>🛠️ Support</span><span>🚩 Report</span><span>🤝 Partnership</span></div></div>') + BOT('<div class="embed" style="border-color:#3ddc97"><h4>🎫 Ticket #0042</h4><p>Staff will be with you shortly.</p><div class="btns"><span class="green">🙋 Claim</span><span class="red">🔒 Close</span><span>📄 Transcript</span></div></div>') },
    { ic: 'music', t: 'Music that works', p: 'YouTube, SoundCloud, Spotify track links and mp3 links, with a control panel.',
      li: ['/play, /search with a pick menu, queue, loop, shuffle, seek, skipto, move', '12 audio effects: bassboost, nightcore, vaporwave, 8D and more', 'Player buttons for pause, skip, volume and loop', '/247 keeps the bot in your voice channel all day and rejoins after restarts'],
      ch: '#music', m: U('Aarav', '<code>/play</code> tum hi ho') + BOT('<div class="embed" style="border-color:#1db954"><h4>🎶 Now playing</h4><p><b>Tum Hi Ho</b></p><div class="bar"><i></i></div><div class="btns"><span>⏮️</span><span>⏸️</span><span>⏭️</span><span class="red">⏹️</span><span>🔁</span><span>🔀</span></div></div>') },
    { ic: 'bot', t: 'AI chat & auto replies', p: 'Make your server feel alive.',
      li: ['Pick an AI channel and JARVIS chats with everyone there', 'Or mention it anywhere, or use /ask', 'Change its personality with /ai persona', 'Auto replies: when someone says a word, the bot answers automatically'],
      ch: '#ai-chat', m: U('Sam', 'bhai python me list reverse kaise karte hain?') + BOT('<code>my_list.reverse()</code> ya <code>my_list[::-1]</code>. Easy hai! 😎') + U('Riya', 'where is the rules channel?') + BOT('Check <b>#rules</b>, it is pinned at the top! 📌') },
    { ic: 'chart', t: 'Levels & economy', p: 'Give members a reason to stay active.',
      li: ['XP for chatting, /rank, /leaderboard', 'Level rewards: give a role at a level with /levelrole', 'Coins: /daily, /work, /pay, /gamble, /slots, /rob', 'A role shop where admins set the prices'],
      ch: '#bot-commands', m: BOT('<div class="embed"><h4>⭐ Riya</h4><p>Level <b>12</b> • Rank <b>#3</b><br>XP 14,420 / 16,900</p><div class="bar"><i style="animation:none;width:72%"></i></div></div>') + BOT('<div class="embed" style="border-color:#fee75c"><h4>🎰 Slots</h4><p><b>💎 | 💎 | 💎</b><br>You won 🪙 600!</p></div>') },
    { ic: 'users', t: 'Welcome, roles & verification', p: 'Make a great first impression and keep servers organised.',
      li: ['Welcome and goodbye messages with your own text', 'Autorole, role panels with buttons, and a verification button', 'Vanity role: members get a role while your server link is in their status', 'Temp voice: join a channel to get your own room'],
      ch: '#welcome', m: BOT('<div class="embed" style="border-color:#3ddc97"><h4>👋 Welcome</h4><p>Welcome to <b>Cool Server</b>, @Riya! You are member #1,204. 🎉</p></div>') + BOT('<div class="embed"><h4>✅ Verification</h4><p>Click the button to get access.</p><div class="btns"><span class="green">✅ Verify</span></div></div>') },
    { ic: 'gift', t: 'Giveaways & extras', p: 'The small tools servers always end up wanting.',
      li: ['Giveaways with a click-to-enter button and /giveaway reroll', 'AFK status, reminders, suggestions with approve/deny', 'Starboard for your best messages, snipe for deleted messages', 'Custom embeds, polls, games and fun commands'],
      ch: '#giveaways', m: BOT('<div class="embed" style="border-color:#fee75c"><h4>🎉 GIVEAWAY: Discord Nitro</h4><p>Ends in <b>2 hours</b> • 1 winner<br>Hosted by Karan</p><div class="btns"><span class="green">🎉 Enter</span></div></div>') + BOT('<div class="embed"><h4>⏰ Reminder</h4><p>Submit the assignment</p></div>') },
  ];
  const det = $('#details');
  if (det) det.innerHTML = DETAILS.map((d, i) => `<div class="drow rv ${i % 2 ? 'flip' : ''}"><div class="dtext"><div class="ico">${icon(d.ic)}</div><h3>${d.t}</h3><p>${d.p}</p><ul>${d.li.map((x) => `<li>${x}</li>`).join('')}</ul></div><div class="chat"><div class="chat-bar"><i></i><i></i><i></i>&nbsp;&nbsp;${d.ch}</div><div class="chat-body">${d.m}</div></div></div>`).join('');

  /* ---------- counters ---------- */
  const total = F.reduce((n, f) => n + f.commands.length, 0);
  const tgt = { cmds: window.COMMAND_COUNT || total, cats: F.length };
  $$('[data-count]').forEach((el) => { const k = el.dataset.count; if (tgt[k] != null) el.dataset.to = tgt[k]; });
  const run = (el) => { const to = +el.dataset.to; if (!to) return; if (reduce) { el.textContent = to + (el.dataset.suffix || ''); return; } const t0 = performance.now(); (function s(t) { const p = Math.min(1, (t - t0) / 1600); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || ''); if (p < 1) requestAnimationFrame(s); })(t0); };
  $$('.mini-stats b[data-to], .num b[data-to]').forEach((el) => { el.textContent = '0'; });
  if (!B.servers) $$('[data-hide-if-no-servers]').forEach((e) => (e.style.display = 'none')); else $$('[data-servers]').forEach((e) => (e.dataset.to = B.servers));

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); if (e.target.matches('[data-to]')) run(e.target); $$('[data-to]', e.target).forEach(run); io.unobserve(e.target); } }), { threshold: .15 });
  const watch = () => $$('.rv:not(.in), [data-to]').forEach((e) => io.observe(e));
  watch();

  /* ---------- commands page ---------- */
  const list = $('#cmd-list');
  if (list) {
    const chips = $('#chips'), q = $('#q'), empty = $('#empty');
    chips.innerHTML = `<button class="chip on" data-id="all">All (${total})</button>` + F.map((f) => `<button class="chip" data-id="${f.id}">${f.name}</button>`).join('');
    list.innerHTML = F.map((f) => `<div class="cat" id="${f.id}" data-cat="${f.id}"><h2>${icon(f.icon)}${f.name}</h2><p>${f.blurb}</p><div class="cmds">${f.commands.map((c) => `<div class="cmd" data-t="${(c.c + ' ' + c.a + ' ' + c.d).toLowerCase()}" data-copy="${c.c}"><b>${c.c}</b>${c.a ? `<small>${c.a}</small>` : ''}<p>${c.d}</p></div>`).join('')}</div></div>`).join('');
    let cat = 'all';
    const apply = () => { const t = q.value.trim().toLowerCase(); let any = false;
      $$('.cat', list).forEach((c) => { let vis = 0; $$('.cmd', c).forEach((m) => { const ok = (!t || m.dataset.t.includes(t)) && (cat === 'all' || c.dataset.cat === cat); m.style.display = ok ? '' : 'none'; if (ok) vis++; }); c.style.display = vis ? '' : 'none'; if (vis) any = true; });
      empty.style.display = any ? 'none' : 'block'; };
    q.addEventListener('input', apply);
    chips.addEventListener('click', (e) => { const c = e.target.closest('.chip'); if (!c) return; cat = c.dataset.id; $$('.chip', chips).forEach((x) => x.classList.toggle('on', x === c)); apply(); });
    const toast = $('#toast');
    list.addEventListener('click', (e) => { const m = e.target.closest('.cmd'); if (!m) return; navigator.clipboard?.writeText(m.dataset.copy).catch(() => {}); toast.textContent = `Copied ${m.dataset.copy}`; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1400); });
    if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView(), 50);
  }
})();
