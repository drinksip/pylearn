// ===== PYLEARN — Firebase Module =====
// Handles auth (Google + Email/Password) and Firestore progress sync.
// Works gracefully without Firebase if config is not filled in.

let _app  = null;
let _auth = null;
let _db   = null;
let _user = null;

// ─── Show sign-in button immediately (before Firebase loads) ─────────────────
// This prevents the gap where the nav area looks empty.
document.addEventListener('DOMContentLoaded', () => {
  _renderAuthNav(null);
});

// ─── Login gate — call this on any page that requires auth ───────────────────
// Shows a full-screen overlay if the user isn't signed in.
// Automatically removes itself once the user signs in.
function requireLogin() {
  // Don't gate index.html
  const page = location.pathname.split('/').pop();
  if (!page || page === 'index.html') return;

  // Inject the gate overlay
  const gate = document.createElement('div');
  gate.id = 'login-gate';
  gate.style.cssText = `
    position:fixed;inset:0;z-index:9999;
    background:var(--bg);
    display:flex;align-items:center;justify-content:center;
    flex-direction:column;text-align:center;padding:2rem;
  `;
  gate.innerHTML = `
    <div style="max-width:400px;width:100%;">
      <div style="font-family:var(--mono);font-size:1.3rem;font-weight:700;margin-bottom:.5rem;">
        <span style="color:var(--yellow)">[</span><span style="color:var(--blue)">py</span>learn<span style="color:var(--yellow)">]</span>
      </div>
      <p style="color:var(--muted);font-size:.9rem;margin-bottom:2rem;">Sign in to track your progress, earn XP, and sync across devices.</p>
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--rl);padding:2rem;">
        <div style="font-size:2.5rem;margin-bottom:1rem">🔒</div>
        <h2 style="font-size:1.2rem;font-weight:900;margin-bottom:.4rem">Sign in to continue</h2>
        <p style="color:var(--muted);font-size:.85rem;margin-bottom:1.5rem">Create a free account or sign in with Google.</p>
        <button class="btn btn-primary" style="width:100%;margin-bottom:.75rem;justify-content:center;" onclick="openAuthModal()">Sign In / Register</button>
        <button class="google-btn" onclick="handleGoogleSignIn()" style="width:100%">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.68 28.18A13.5 13.5 0 0 1 10.82 24c0-1.45.25-2.86.86-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.34-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"/></svg>
          Continue with Google
        </button>
        <p style="margin-top:1rem;font-size:.75rem;color:var(--muted)">
          Free forever · No credit card · <a href="index.html" style="color:var(--blue)">Back to home</a>
        </p>
      </div>
    </div>`;
  document.body.appendChild(gate);
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────
async function initFirebase() {
  if (!USE_FIREBASE) { _renderAuthNav(null); return; }

  // Load Firebase SDKs dynamically
  await _loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
  await _loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js");
  await _loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js");

  if (!firebase.apps.length) {
    _app = firebase.initializeApp(FIREBASE_CONFIG);
  } else {
    _app = firebase.apps[0];
  }

  _auth = firebase.auth();
  _db   = firebase.firestore();

  // Listen for auth state changes
  _auth.onAuthStateChanged(async user => {
    _user = user;
    _renderAuthNav(user);

    if (user) {
      // Remove the login gate if present
      document.getElementById('login-gate')?.remove();
      closeAuthModal();
      await _ensureUserDoc(user);
      await _syncFromCloud(user.uid);
    } else {
      // Signed out — clear in-memory progress so data doesn't leak
      Progress.clear();
      if (typeof updateMapUI === 'function') updateMapUI();
      // Show gate on protected pages
      const page = location.pathname.split('/').pop();
      if (page && page !== 'index.html' && !document.getElementById('login-gate')) {
        requireLogin();
      }
    }
  });
}

function getCurrentUser() { return _user; }

// ─── Ensure Firestore doc exists on first login ────────────────────────────────
async function _ensureUserDoc(user) {
  if (!_db) return;
  try {
    const ref = _db.collection('users').doc(user.uid);
    const doc = await ref.get();
    if (!doc.exists) {
      await ref.set({
        displayName: user.displayName || user.email?.split('@')[0] || 'Learner',
        email:       user.email || '',
        createdAt:   new Date().toISOString(),
        progress:    {},
        xp:          0,
        streak:      { count: 0, lastDate: null },
        badges:      []
      });
    }
  } catch (e) {
    console.warn('PyLearn: could not ensure user doc.', e.message);
  }
}

// ─── Pull all data from Firestore into local Progress cache ───────────────────
async function _syncFromCloud(uid) {
  if (!_db || !uid) return;
  try {
    const doc = await _db.collection('users').doc(uid).get();
    if (doc.exists) {
      const data = doc.data();
      Progress.loadFromCloud({
        progress: data.progress || {},
        xp:       data.xp       || 0,
        streak:   data.streak   || { count: 0, lastDate: null },
        badges:   data.badges   || []
      });
    }
  } catch (e) {
    console.warn('PyLearn: cloud sync failed.', e.message);
  }
}

// ─── Save progress data to Firestore ─────────────────────────────────────────
async function saveToCloud(data) {
  if (!_db || !_user) return;
  try {
    await _db.collection('users').doc(_user.uid).update({
      progress:  data.progress,
      xp:        data.xp,
      streak:    data.streak,
      badges:    data.badges,
      updatedAt: new Date().toISOString()
    });
  } catch (e) {
    console.warn('PyLearn: could not save to cloud.', e.message);
  }
}

// ─── Register (email + password) ──────────────────────────────────────────────
async function handleRegister() {
  const name  = document.getElementById('auth-name')?.value?.trim();
  const email = document.getElementById('auth-email')?.value?.trim();
  const pass  = document.getElementById('auth-pass')?.value;
  _clearAuthError();

  if (!name || name.length < 2) return _showAuthError('Please enter a display name (min 2 characters).');
  if (!email?.includes('@'))     return _showAuthError('Please enter a valid email address.');
  if (!pass || pass.length < 6)  return _showAuthError('Password must be at least 6 characters.');

  _setAuthLoading(true, 'register-btn');
  try {
    const cred = await _auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: name });
    await _ensureUserDoc(cred.user);
    closeAuthModal();
    showToast(`👋 Welcome to PyLearn, ${name}!`, 4000);
  } catch (e) {
    _showAuthError(_friendlyError(e.code));
  } finally {
    _setAuthLoading(false, 'register-btn');
  }
}

// ─── Sign in (email + password) ───────────────────────────────────────────────
async function handleSignIn() {
  const email = document.getElementById('auth-email')?.value?.trim();
  const pass  = document.getElementById('auth-pass')?.value;
  _clearAuthError();
  _setAuthLoading(true, 'signin-btn');
  try {
    const cred = await _auth.signInWithEmailAndPassword(email, pass);
    closeAuthModal();
    const name = cred.user.displayName || cred.user.email.split('@')[0];
    showToast(`✅ Welcome back, ${name}!`);
  } catch (e) {
    _showAuthError(_friendlyError(e.code));
  } finally {
    _setAuthLoading(false, 'signin-btn');
  }
}

// ─── Google sign in ───────────────────────────────────────────────────────────
async function handleGoogleSignIn() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await _auth.signInWithPopup(provider);
    closeAuthModal();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user') _showAuthError(_friendlyError(e.code));
  }
}

// ─── Sign out ─────────────────────────────────────────────────────────────────
async function signOut() {
  if (!_auth) return;
  const name = _user?.displayName || 'Learner';
  await _auth.signOut();
  showToast(`👋 See you later, ${name}!`);
}

// ─── Password reset ───────────────────────────────────────────────────────────
async function sendPasswordReset() {
  const email = document.getElementById('auth-email')?.value?.trim();
  if (!email) return _showAuthError('Enter your email address first.');
  try {
    await _auth.sendPasswordResetEmail(email);
    showToast('📧 Password reset email sent — check your inbox!');
  } catch (e) {
    _showAuthError(_friendlyError(e.code));
  }
}

// ─── Auth modal ───────────────────────────────────────────────────────────────
let _activeTab = 'signin';

function openAuthModal(tab = 'signin') {
  let modal = document.getElementById('auth-modal');
  if (!modal) { _injectAuthModal(); modal = document.getElementById('auth-modal'); }
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  _switchAuthTab(tab);
}
function closeAuthModal() {
  const m = document.getElementById('auth-modal');
  if (m) m.classList.remove('open');
  document.body.style.overflow = '';
}
function _switchAuthTab(tab) {
  _activeTab = tab;
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('auth-form-signin')?.style.setProperty('display', tab === 'signin' ? 'flex' : 'none');
  document.getElementById('auth-form-register')?.style.setProperty('display', tab === 'register' ? 'flex' : 'none');
}
function switchAuthTab(tab) { _switchAuthTab(tab); }

function _injectAuthModal() {
  const div = document.createElement('div');
  div.id = 'auth-modal';
  div.innerHTML = `
    <div class="auth-box">
      <div class="auth-logo"><span style="color:var(--yellow)">[</span><span style="color:var(--blue)">py</span>learn<span style="color:var(--yellow)">]</span></div>
      <div class="auth-tagline">Sign in to sync your progress across devices</div>
      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="signin"   onclick="switchAuthTab('signin')">Sign In</button>
        <button class="auth-tab"        data-tab="register" onclick="switchAuthTab('register')">Register</button>
      </div>

      <!-- Sign In form -->
      <div id="auth-form-signin" class="auth-form">
        <input class="auth-input" id="auth-email" type="email"    placeholder="Email address" onkeydown="if(event.key==='Enter')handleSignIn()">
        <input class="auth-input" id="auth-pass"  type="password" placeholder="Password"      onkeydown="if(event.key==='Enter')handleSignIn()">
        <div id="auth-error" class="auth-error"></div>
        <button class="btn btn-primary" id="signin-btn" onclick="handleSignIn()" style="width:100%">Sign In</button>
        <div class="auth-or">or</div>
        <button class="google-btn" onclick="handleGoogleSignIn()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.68 28.18A13.5 13.5 0 0 1 10.82 24c0-1.45.25-2.86.86-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.34-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"/></svg>
          Continue with Google
        </button>
        <p style="text-align:center;font-size:.78rem;color:var(--muted)">
          <a href="#" style="color:var(--blue)" onclick="sendPasswordReset();return false">Forgot password?</a>
          &nbsp;·&nbsp;
          <a href="#" style="color:var(--blue)" onclick="switchAuthTab('register');return false">Create account</a>
        </p>
      </div>

      <!-- Register form -->
      <div id="auth-form-register" class="auth-form" style="display:none">
        <input class="auth-input" id="auth-name" type="text"     placeholder="Display name"       onkeydown="if(event.key==='Enter')handleRegister()">
        <input class="auth-input" id="auth-email-reg" type="email"    placeholder="Email address"      onkeydown="if(event.key==='Enter')handleRegister()">
        <input class="auth-input" id="auth-pass-reg"  type="password" placeholder="Password (min 6)"   onkeydown="if(event.key==='Enter')handleRegister()">
        <div id="auth-error-reg" class="auth-error"></div>
        <button class="btn btn-primary" id="register-btn" onclick="handleRegister()" style="width:100%">Create Account</button>
        <div class="auth-or">or</div>
        <button class="google-btn" onclick="handleGoogleSignIn()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.68 28.18A13.5 13.5 0 0 1 10.82 24c0-1.45.25-2.86.86-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.34-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-9.07 12.32-9.07z"/></svg>
          Continue with Google
        </button>
      </div>
    </div>`;
  div.addEventListener('click', e => { if (e.target === div) closeAuthModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAuthModal(); });
  document.body.appendChild(div);
}

// ─── Override input fields to read from the right element per tab ─────────────
// Register tab uses different element IDs to avoid conflicts
const _origHandleRegister = handleRegister;
async function handleRegister() {
  // Point to the correct inputs based on active tab
  const nameEl  = document.getElementById('auth-name');
  const emailEl = document.getElementById(_activeTab === 'register' ? 'auth-email-reg' : 'auth-email');
  const passEl  = document.getElementById(_activeTab === 'register' ? 'auth-pass-reg'  : 'auth-pass');
  const errEl   = document.getElementById('auth-error-reg') || document.getElementById('auth-error');

  const name  = nameEl?.value?.trim();
  const email = emailEl?.value?.trim();
  const pass  = passEl?.value;

  function showErr(msg) { if (errEl) { errEl.textContent = msg; errEl.style.display = 'block'; } }
  function clearErr()  { document.querySelectorAll('.auth-error').forEach(e => { e.style.display='none'; e.textContent=''; }); }

  clearErr();
  if (!name || name.length < 2) return showErr('Please enter a display name (min 2 chars).');
  if (!email?.includes('@'))     return showErr('Please enter a valid email address.');
  if (!pass  || pass.length < 6) return showErr('Password must be at least 6 characters.');

  _setAuthLoading(true, 'register-btn');
  try {
    const cred = await _auth.createUserWithEmailAndPassword(email, pass);
    await cred.user.updateProfile({ displayName: name });
    await _ensureUserDoc(cred.user);
    closeAuthModal();
    showToast(`👋 Welcome to PyLearn, ${name}!`, 4000);
  } catch (e) {
    showErr(_friendlyError(e.code));
  } finally {
    _setAuthLoading(false, 'register-btn');
  }
}

// ─── Nav rendering ────────────────────────────────────────────────────────────
function _renderAuthNav(user) {
  const el = document.getElementById('nav-auth-area');
  if (!el) return;
  if (user) {
    const name = user.displayName || user.email?.split('@')[0] || 'Learner';
    const initials = name[0].toUpperCase();
    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:.6rem">
        <div class="nav-avatar" title="${name}">
          ${user.photoURL ? `<img src="${user.photoURL}" alt="">` : initials}
        </div>
        <button id="nav-auth-btn" onclick="signOut()">Sign Out</button>
      </div>`;
  } else {
    el.innerHTML = `<button id="nav-auth-btn" onclick="openAuthModal()">Sign In</button>`;
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function _showAuthError(msg) {
  const el = document.getElementById('auth-error') || document.getElementById('auth-error-reg');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}
function _clearAuthError() {
  document.querySelectorAll('.auth-error').forEach(e => { e.style.display = 'none'; e.textContent = ''; });
}
function _setAuthLoading(on, btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.disabled = on;
  btn.textContent = on ? '⏳ Please wait…' : (btnId === 'register-btn' ? 'Create Account' : 'Sign In');
}
function _friendlyError(code) {
  return ({
    'auth/email-already-in-use':   'That email is already registered. Try signing in.',
    'auth/invalid-email':          'That doesn\'t look like a valid email.',
    'auth/weak-password':          'Password too weak — use at least 6 characters.',
    'auth/user-not-found':         'No account found with that email.',
    'auth/wrong-password':         'Incorrect password.',
    'auth/invalid-credential':     'Incorrect email or password.',
    'auth/too-many-requests':      'Too many attempts — wait a moment and try again.',
    'auth/network-request-failed': 'Network error — check your connection.',
    'auth/popup-blocked':          'Popup was blocked — please allow popups for this site.',
  })[code] || `Something went wrong (${code}). Please try again.`;
}
function _loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

// Toast (shared)
function showToast(msg, ms = 3500) {
  let t = document.getElementById('py-toast');
  if (!t) { t = document.createElement('div'); t.id = 'py-toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = 'show';
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), ms);
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => initFirebase());
