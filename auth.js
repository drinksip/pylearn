// ===== PYLEARN — Auth (Firebase) =====
// Handles: Google sign-in, email/password, sign-out, auth state listener.
// All UI is in the shared auth modal injected by this module.

let _firebaseApp  = null;
let _auth         = null;
let _currentUser  = null;

// ─── Bootstrap ────────────────────────────────────────────────────────────────
async function initAuth() {
  if (!USE_FIREBASE) return;

  // Dynamically load Firebase SDK (v9 compat build — no bundler needed)
  await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
  await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js");

  _firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
  _auth        = firebase.auth();

  _auth.onAuthStateChanged(user => {
    _currentUser = user;
    renderAuthNav(user);
    if (user) {
      DB.syncFromCloud(user.uid);
    }
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ─── Current user accessor ────────────────────────────────────────────────────
function getCurrentUser() { return _currentUser; }

// ─── Sign-in methods ──────────────────────────────────────────────────────────
async function signInWithGoogle() {
  if (!_auth) return;
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await _auth.signInWithPopup(provider);
    closeAuthModal();
    showToast('✅ Signed in with Google!');
  } catch (e) {
    showAuthError(e.message);
  }
}

async function signInWithEmail(email, password) {
  if (!_auth) return;
  try {
    await _auth.signInWithEmailAndPassword(email, password);
    closeAuthModal();
    showToast('✅ Signed in!');
  } catch (e) {
    showAuthError(e.message);
  }
}

async function registerWithEmail(email, password) {
  if (!_auth) return;
  try {
    await _auth.createUserWithEmailAndPassword(email, password);
    closeAuthModal();
    showToast('✅ Account created!');
  } catch (e) {
    showAuthError(e.message);
  }
}

async function signOut() {
  if (!_auth) return;
  await _auth.signOut();
  showToast('👋 Signed out.');
  renderAuthNav(null);
}

async function resetPassword(email) {
  if (!_auth || !email) return;
  try {
    await _auth.sendPasswordResetEmail(email);
    showToast('📧 Password reset email sent!');
  } catch(e) {
    showAuthError(e.message);
  }
}

// ─── Auth modal HTML ──────────────────────────────────────────────────────────
function injectAuthModal() {
  if (document.getElementById('auth-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'auth-modal';
  modal.innerHTML = `
    <div class="auth-overlay" onclick="closeAuthModal()"></div>
    <div class="auth-box">
      <button class="auth-close" onclick="closeAuthModal()">✕</button>
      <div class="auth-logo">[<span style="color:var(--python-blue)">py</span>learn]</div>

      <div class="auth-tabs">
        <button class="auth-tab active" onclick="switchAuthTab('login')">Sign In</button>
        <button class="auth-tab" onclick="switchAuthTab('register')">Register</button>
      </div>

      <!-- Google -->
      <button class="btn-google" onclick="signInWithGoogle()">
        <svg width="18" height="18" viewBox="0 0 48 48" style="margin-right:8px">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Continue with Google
      </button>

      <div class="auth-divider"><span>or</span></div>

      <!-- Email form -->
      <div id="auth-form-login">
        <input id="auth-email" type="email" placeholder="Email address" class="auth-input" />
        <input id="auth-password" type="password" placeholder="Password" class="auth-input" />
        <div id="auth-error" class="auth-error" style="display:none"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:0.5rem" onclick="signInWithEmail(document.getElementById('auth-email').value, document.getElementById('auth-password').value)">Sign In</button>
        <p style="text-align:center;margin-top:0.75rem;font-size:0.8rem;color:var(--muted)">
          <a href="#" style="color:var(--python-blue)" onclick="resetPassword(document.getElementById('auth-email').value); return false;">Forgot password?</a>
        </p>
      </div>

      <div id="auth-form-register" style="display:none">
        <input id="auth-reg-email" type="email" placeholder="Email address" class="auth-input" />
        <input id="auth-reg-password" type="password" placeholder="Password (min 6 chars)" class="auth-input" />
        <div id="auth-error-reg" class="auth-error" style="display:none"></div>
        <button class="btn btn-primary" style="width:100%;margin-top:0.5rem" onclick="registerWithEmail(document.getElementById('auth-reg-email').value, document.getElementById('auth-reg-password').value)">Create Account</button>
      </div>

      <p style="text-align:center;margin-top:1.25rem;font-size:0.78rem;color:var(--muted)">
        Your lesson progress syncs across devices when signed in.
      </p>
    </div>
  `;
  document.body.appendChild(modal);
}

function openAuthModal() {
  injectAuthModal();
  document.getElementById('auth-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  const m = document.getElementById('auth-modal');
  if (m) m.style.display = 'none';
  document.body.style.overflow = '';
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('[id^="auth-form-"]').forEach(f => f.style.display = 'none');
  event.target.classList.add('active');
  document.getElementById('auth-form-' + tab).style.display = 'block';
}

function showAuthError(msg) {
  // Show in whichever form panel is visible
  ['auth-error','auth-error-reg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  });
}

// ─── Nav rendering ─────────────────────────────────────────────────────────────
function renderAuthNav(user) {
  const container = document.getElementById('auth-nav');
  if (!container) return;
  if (user) {
    const name = user.displayName || user.email?.split('@')[0] || 'User';
    container.innerHTML = `
      <div class="auth-user-chip">
        ${user.photoURL ? `<img src="${user.photoURL}" width="24" height="24" style="border-radius:50%;margin-right:6px">` : '<span style="margin-right:6px">👤</span>'}
        <span style="font-size:0.85rem;color:var(--text-muted,#aaa)">${name}</span>
        <button class="btn btn-secondary" style="padding:0.3rem 0.7rem;font-size:0.78rem;margin-left:0.75rem" onclick="signOut()">Sign Out</button>
      </div>`;
  } else {
    container.innerHTML = `<button class="btn btn-secondary" style="font-size:0.85rem;padding:0.4rem 1rem" onclick="openAuthModal()">Sign In</button>`;
  }
}

// ─── Toast notification ───────────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('py-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'py-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'py-toast show';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── Auto-init when DOM is ready ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USE_FIREBASE !== 'undefined' && USE_FIREBASE) {
    initAuth();
  } else {
    renderAuthNav(null);
  }
});
