/* Mana product page: language switch, the live menu in the phone frame, and the "talk to us" form.
   No dependencies. Everything on the page reads without this file; it only adds the three behaviours above. */
(function () {
  'use strict';
  var doc = document, root = doc.documentElement, qs = new URLSearchParams(location.search);
  var $ = function (s, el) { return (el || doc).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); };
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };

  /* ---------------------------------------------------------------- language (Hebrew first) */
  function lang() { return root.lang === 'en' ? 'en' : 'he'; }
  function setLang(l, remember) {
    l = l === 'en' ? 'en' : 'he';
    root.lang = l; root.dir = l === 'he' ? 'rtl' : 'ltr';
    if (remember) store.set('mana-lang', l);
    var t = root.getAttribute('data-title-' + l); if (t) doc.title = t;
    var d = $('meta[name="description"]'), dd = root.getAttribute('data-desc-' + l); if (d && dd) d.setAttribute('content', dd);
    $$('[data-href-' + l + ']').forEach(function (a) { a.setAttribute('href', a.getAttribute('data-href-' + l)); });
    $$('[data-src-' + l + ']').forEach(function (img) { var s = img.getAttribute('data-src-' + l); if (img.getAttribute('src') !== s) img.setAttribute('src', s); });
    $$('[data-ph-' + l + ']').forEach(function (i) { i.setAttribute('placeholder', i.getAttribute('data-ph-' + l)); });
    $$('[data-label-' + l + ']').forEach(function (i) { i.setAttribute('aria-label', i.getAttribute('data-label-' + l)); });
    doc.dispatchEvent(new CustomEvent('mana:lang', { detail: l }));
  }
  setLang(qs.get('lang') || store.get('mana-lang') || root.lang, false);
  $$('[data-lang-toggle]').forEach(function (b) { b.addEventListener('click', function () { setLang(lang() === 'he' ? 'en' : 'he', true); }); });

  /* ---------------------------------------------------------------- the live menu in the phone frame
     The page never waits for it: a still picture stands in. On a wide screen with a mouse it starts when the section
     comes near; on a phone it starts on a tap (an embedded scroller should not catch a thumb by surprise). */
  var phone = $('#phone');
  if (phone) (function () {
    var screen = $('.phone-screen', phone), frame = null, timer = 0;
    function fit() { if (frame) frame.style.transform = 'scale(' + (screen.clientWidth / 390) + ')'; }
    function src() {
      var u = './view/?demo=olea&lang=' + lang();
      if (qs.get('vtest') === '1') u += '&test=1&pr=0.5';          // software-GL test runs
      return u;
    }
    function start() {
      if (frame) return;
      phone.setAttribute('data-state', 'loading');
      frame = doc.createElement('iframe');
      frame.setAttribute('title', lang() === 'he' ? 'תפריט ההדגמה של אוליאה' : 'The Olea demo menu');
      frame.setAttribute('loading', 'lazy'); frame.setAttribute('allow', 'fullscreen');
      frame.addEventListener('load', function () { clearTimeout(timer); phone.setAttribute('data-state', 'live'); });
      timer = setTimeout(function () { if (phone.getAttribute('data-state') === 'loading') { screen.removeChild(frame); frame = null; phone.setAttribute('data-state', 'failed'); } }, 25000);
      frame.src = src(); screen.appendChild(frame); fit();
    }
    $$('[data-demo-start]').forEach(function (b) { b.addEventListener('click', start); });
    window.addEventListener('resize', fit);
    doc.addEventListener('mana:lang', function () { if (frame) { frame.src = src(); } });
    var auto = qs.get('demo') !== 'off' && window.matchMedia && matchMedia('(min-width: 900px) and (hover: hover)').matches && !(navigator.connection && navigator.connection.saveData);
    if (qs.get('demo') === 'auto') auto = true;
    if (auto && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: '200px' });
      io.observe(phone);
    }
  })();

  /* ---------------------------------------------------------------- talk to us → the leads function */
  var form = $('#talk');
  if (form) (function () {
    var opened = Date.now(), busy = false;
    var KEY = 'mana-lead-token';
    var T = {
      he: { sending: 'שולחים…', send: 'לשלוח', rate: 'נשלחו מכאן הרבה פניות בזמן קצר. נסו שוב בעוד שעה, או כתבו לנו בוואטסאפ.', fail: 'הפנייה לא נשלחה. מה שכתבתם נשאר כאן: אפשר לנסות שוב, או לשלוח אותו בוואטסאפ.',
        offline: 'אין חיבור לרשת כרגע. מה שכתבתם נשאר כאן.', invalid: 'משהו בפרטים לא עבר. בדקו את הטלפון או האימייל ונסו שוב.', waText: 'היי, כותבים מהעמוד של מנה.' },
      en: { sending: 'Sending…', send: 'Send', rate: 'Too many messages came from here in a short time. Try again in an hour, or write to us on WhatsApp.', fail: 'Your message was not sent. What you wrote is still here: try again, or send it on WhatsApp.',
        offline: 'You are offline right now. What you wrote is still here.', invalid: 'Something in the details did not pass. Check the phone or e-mail and try again.', waText: 'Hi, writing from the Mana page.' }
    };
    function uuid() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      var b = new Uint8Array(16); (window.crypto || window.msCrypto).getRandomValues(b); b[6] = (b[6] & 15) | 64; b[8] = (b[8] & 63) | 128;
      var h = Array.prototype.map.call(b, function (x) { return (x + 256).toString(16).slice(1); }).join('');
      return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
    }
    /* one token per message, kept across retries and reloads so a second click can never make a second lead */
    function token() { var t = null; try { t = sessionStorage.getItem(KEY); } catch (e) { /* ignore */ } if (!t) { t = uuid(); try { sessionStorage.setItem(KEY, t); } catch (e) { /* ignore */ } } return t; }
    function clearToken() { try { sessionStorage.removeItem(KEY); } catch (e) { /* ignore */ } }
    var f = { place: $('#f-place'), name: $('#f-name'), contact: $('#f-contact'), msg: $('#f-msg'), hp: $('#f-site'), news: $('#f-news') };
    var btn = $('#f-send'), bad = $('#talk-bad'), badText = $('#talk-bad-text'), ok = $('#talk-ok'), ref = $('#talk-ref'), wa = $('#talk-wa');
    function contactOk(v) { v = v.trim(); return v.length >= 5 && v.length <= 200 && (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || /^\d{7,15}$/.test(v.replace(/\D/g, ''))); }
    function mark(el, isBad) { var w = el.closest('.field'); if (isBad) w.setAttribute('data-bad', ''); else w.removeAttribute('data-bad'); el.setAttribute('aria-invalid', isBad ? 'true' : 'false'); }
    function dream() {
      var s = (lang() === 'he' ? 'מסעדה: ' : 'Restaurant: ') + f.place.value.trim();
      if (f.msg.value.trim()) s += '\n' + f.msg.value.trim();
      s += '\n' + (f.news.checked ? '[updates: yes]' : '[updates: no]');     // marketing consent travels with the message until the table has a column for it
      return s.slice(0, 4000);
    }
    function waLink() { return 'https://wa.me/972542022269?text=' + encodeURIComponent(T[lang()].waText + '\n' + dream().replace(/\n\[updates:.*$/, '') + (f.name.value.trim() ? '\n' + f.name.value.trim() : '')); }
    function showBad(key) { badText.textContent = T[lang()][key]; wa.href = waLink(); bad.hidden = false; bad.focus(); }
    function setBusy(b) { busy = b; btn.disabled = b; form.setAttribute('aria-busy', b ? 'true' : 'false'); $$('.lbl', btn).forEach(function (s) { s.hidden = b; }); $('.busy', btn).hidden = !b; $('.busy', btn).textContent = T[lang()].sending; }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault(); if (busy) return;
      bad.hidden = true;
      var p = f.place.value.trim().length < 2, c = !contactOk(f.contact.value);
      mark(f.place, p); mark(f.contact, c);
      if (p || c) { (p ? f.place : f.contact).focus(); return; }
      var cfg = window.HALOM_MENUS_CONFIG;
      if (!cfg || !cfg.supabaseUrl || !cfg.supabaseKey) { showBad('fail'); return; }
      if (navigator.onLine === false) { showBad('offline'); return; }
      setBusy(true);
      var body = { p_token: token(), p_dream: dream(), p_contact: f.contact.value.trim(), p_name: f.name.value.trim() || null, p_package: 'menus', p_source: 'menus-landing',
        p_locale: lang(), p_page: (location.pathname + location.search).slice(0, 500), p_hp: f.hp.value || '', p_elapsed_ms: Date.now() - opened };
      var ctl = 'AbortController' in window ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 20000);
      fetch(cfg.supabaseUrl.replace(/\/$/, '') + '/rest/v1/rpc/submit_lead', { method: 'POST', headers: { apikey: cfg.supabaseKey, 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body), signal: ctl ? ctl.signal : undefined })
        .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
        .then(function (j) {
          clearTimeout(to); setBusy(false);
          if (j && j.ok) { clearToken(); ref.textContent = j.ref || ''; $$('.has-ref', ok).forEach(function (e) { e.hidden = !j.ref; }); form.hidden = true; ok.hidden = false; ok.focus(); return; }
          var code = j && j.code;
          if (code === 'rate_limited') showBad('rate'); else if (code === 'invalid') { mark(f.contact, true); showBad('invalid'); } else showBad('fail');
        })
        .catch(function () { clearTimeout(to); setBusy(false); showBad(navigator.onLine === false ? 'offline' : 'fail'); });
    });
    [f.place, f.contact].forEach(function (el) { el.addEventListener('input', function () { mark(el, false); }); });
    var again = $('#talk-again'); if (again) again.addEventListener('click', function () { form.reset(); opened = Date.now(); ok.hidden = true; form.hidden = false; f.place.focus(); });
  })();
})();
