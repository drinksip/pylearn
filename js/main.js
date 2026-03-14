// ===== PYLEARN — Main JS =====

// ─── Progress tracking (localStorage + optional cloud) ────────────────────────
const Progress = {
  get() {
    try { return JSON.parse(localStorage.getItem('pylearn_progress') || '{}'); }
    catch { return {}; }
  },
  set(data) {
    localStorage.setItem('pylearn_progress', JSON.stringify(data));
  },
  markComplete(lessonId) {
    const d = this.get();
    d[lessonId] = true;
    this.set(d);
    // Push to cloud if signed in
    const user = typeof getCurrentUser === 'function' && getCurrentUser();
    if (user && typeof DB !== 'undefined') DB.saveToCloud(user.uid, d);
  },
  isComplete(lessonId) {
    return !!this.get()[lessonId];
  },
  count() {
    return Object.values(this.get()).filter(Boolean).length;
  }
};

// ─── Copy code button ─────────────────────────────────────────────────────────
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'copy'; btn.style.color = ''; }, 2000);
  });
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function checkQuiz(btn, correct) {
  const block = btn.closest('.quiz-block');
  const opts  = block.querySelectorAll('.quiz-opt');
  const fb    = block.querySelector('.quiz-feedback');
  if (!fb) return;

  opts.forEach(o => o.disabled = true);

  if (correct) {
    btn.classList.add('correct');
    fb.className   = 'quiz-feedback correct';
    fb.textContent = '✅ Correct! Well done.';
  } else {
    btn.classList.add('wrong');
    fb.className   = 'quiz-feedback wrong';
    fb.textContent = '❌ Not quite — try reviewing the lesson above.';
    opts.forEach(o => {
      if (o !== btn && o.dataset.correct !== undefined) o.classList.add('correct');
    });
  }
  fb.style.display = 'block';
}

// ─── Nav active link ─────────────────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ─── Progress bar updater ────────────────────────────────────────────────────
function updateProgressBars() {
  const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 30;
  const done  = Progress.count();
  document.querySelectorAll('.progress-fill').forEach(el => {
    const pct = Math.round((done / total) * 100);
    el.style.width = pct + '%';
  });
  document.querySelectorAll('.progress-count').forEach(el => {
    el.textContent = `${done} / ${total} lessons`;
  });
}

// ─── Highlight.js initialiser ────────────────────────────────────────────────
// Called after lesson HTML is injected into the DOM.
function highlightLesson() {
  if (typeof hljs === 'undefined') return;
  document.querySelectorAll('pre code').forEach(block => {
    if (!block.dataset.highlighted) {
      hljs.highlightElement(block);
    }
  });
}

// ─── Smooth fade-ins ─────────────────────────────────────────────────────────
function initFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity    = 1;
        e.target.style.transform  = 'none';
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity    = 0;
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    obs.observe(el);
  });
}

// ─── Utility: escape HTML ────────────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ─── Utility: load script once ───────────────────────────────────────────────
function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s    = document.createElement('script');
    s.src      = src;
    s.onload   = resolve;
    s.onerror  = reject;
    document.head.appendChild(s);
  });
}

// ─── Lesson map builder ───────────────────────────────────────────────────────
// Called once lessons-1.js and lessons-2.js are both loaded.
function buildLessonMap() {
  if (typeof LESSONS === 'undefined') return;
  window.LESSON_MAP = {};
  LESSONS.forEach((l, i) => { LESSON_MAP[l.id] = i; });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  buildLessonMap();
  updateProgressBars();
  initFadeIns();
});
