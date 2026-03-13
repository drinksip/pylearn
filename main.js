// ===== PYLEARN - Main JS =====

// ===== PROGRESS TRACKING (localStorage) =====
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
  },
  isComplete(lessonId) {
    return !!this.get()[lessonId];
  },
  count() {
    return Object.values(this.get()).filter(Boolean).length;
  }
};

// ===== COPY CODE BUTTON =====
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'copied!';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = 'copy'; btn.style.color = ''; }, 2000);
  });
}

// ===== QUIZ =====
function checkQuiz(btn, correct) {
  const block = btn.closest('.quiz-block');
  const opts = block.querySelectorAll('.quiz-opt');
  const fb = block.querySelector('.quiz-feedback');
  if (!fb) return;

  opts.forEach(o => o.disabled = true);

  if (correct) {
    btn.classList.add('correct');
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ Correct! Well done.';
  } else {
    btn.classList.add('wrong');
    fb.className = 'quiz-feedback wrong';
    fb.textContent = '❌ Not quite — try reviewing the lesson above.';
    // Highlight correct
    opts.forEach(o => {
      if (o !== btn && o.dataset.correct !== undefined) o.classList.add('correct');
    });
  }
  fb.style.display = 'block';
}

// ===== NAV ACTIVE LINK =====
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== PROGRESS BAR UPDATER =====
function updateProgressBars() {
  const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 11;
  const done = Progress.count();
  document.querySelectorAll('.progress-fill').forEach(el => {
    const pct = Math.round((done / total) * 100);
    el.style.width = pct + '%';
  });
  document.querySelectorAll('.progress-count').forEach(el => {
    el.textContent = `${done} / ${total} lessons`;
  });
}

// ===== SMOOTH FADE IN =====
function initFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s, transform 0.5s';
      obs.observe(el);
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  updateProgressBars();
  initFadeIns();
});
