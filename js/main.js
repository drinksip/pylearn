// ===== PYLEARN — Main Utilities =====

// ─── Copy code button ────────────────────────────────────────────────────────
function copyCode(btn) {
  const pre  = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
  }).catch(() => {});
}

// ─── "Try it" button ─────────────────────────────────────────────────────────
// Uses var so it IS on window — lesson.html can update window._inlineEditor
// and this function will pick it up.
var _inlineEditor = null;

function tryCode(btn) {
  const pre  = btn.closest('.code-block').querySelector('pre code, pre');
  if (!pre) return;
  const code = pre.innerText.trim();

  // Check window._lessonEditor first (set by lesson.html),
  // then fall back to _inlineEditor (the var above)
  const editor = window._lessonEditor || _inlineEditor;

  if (editor) {
    editor.setValue(code);
    editor.focus();
  } else {
    // No editor on this page — open standalone IDE
    sessionStorage.setItem('pylearn_pending_code', code);
    window.open('ide.html', '_blank');
  }
}

// ─── Highlight.js ────────────────────────────────────────────────────────────
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

// ─── Fade-ins on scroll ───────────────────────────────────────────────────────
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
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    obs.observe(el);
  });
}

// ─── URL params ───────────────────────────────────────────────────────────────
function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}

// ─── Escape HTML ──────────────────────────────────────────────────────────────
function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initFadeUps();
});
