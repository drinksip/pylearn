// ===== PYLEARN — Main Utilities =====

// ─── Copy code button ─────────────────────────────────────────────────────────
function copyCode(btn) {
  const pre  = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = 'copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'copy'; btn.style.color = ''; }, 2000);
  });
}

// ─── "Try it" button — loads code into the inline IDE editor ─────────────────
let _inlineEditor = null;  // set by lesson.html
function tryCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre code, pre');
  const code = pre.innerText.trim();
  if (_inlineEditor) {
    _inlineEditor.setValue(code);
    _inlineEditor.focus();
    document.getElementById('inline-ide-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    // Fallback: open standalone IDE with code pre-loaded
    sessionStorage.setItem('pylearn_pending_code', code);
    window.open('ide.html', '_blank');
  }
}

// ─── Highlight.js ─────────────────────────────────────────────────────────────
function highlightAll() {
  if (typeof hljs === 'undefined') return;
  document.querySelectorAll('pre code').forEach(b => {
    if (!b.dataset.highlighted) hljs.highlightElement(b);
  });
}

// ─── Nav active link ─────────────────────────────────────────────────────────
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === page);
  });
}

// ─── Scroll fade-ins ─────────────────────────────────────────────────────────
function initFadeUps() {
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'none';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

// ─── URL params helper ────────────────────────────────────────────────────────
function getParam(key) { return new URLSearchParams(location.search).get(key); }

// ─── Escape HTML ──────────────────────────────────────────────────────────────
function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initFadeUps();
});
