// ===== PYLEARN — Firestore DB =====
// Syncs lesson progress between localStorage and Firestore.
// Falls back gracefully when Firebase is unavailable.

let _db = null;

async function initDB() {
  if (!USE_FIREBASE) return;
  await loadScript("https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js");
  _db = firebase.firestore();
}

// ─── Core DB namespace ────────────────────────────────────────────────────────
const DB = {

  // Save all progress to Firestore (called on markComplete)
  async saveToCloud(uid, progressData) {
    if (!_db || !uid) return;
    try {
      await _db.collection('users').doc(uid).set(
        { progress: progressData, updatedAt: new Date().toISOString() },
        { merge: true }
      );
    } catch (e) {
      console.warn('PyLearn: Could not save progress to cloud.', e.message);
    }
  },

  // Pull progress from Firestore and merge with local (cloud wins on conflict)
  async syncFromCloud(uid) {
    if (!_db || !uid) return;
    try {
      const doc = await _db.collection('users').doc(uid).get();
      if (doc.exists) {
        const cloudData = doc.data().progress || {};
        const localData = Progress.get();
        // Merge: completed beats not-completed
        const merged = { ...localData, ...cloudData };
        Progress.set(merged);
        if (typeof updateProgressBars === 'function') updateProgressBars();
        if (typeof buildSidebar === 'function') buildSidebar();
      }
    } catch (e) {
      console.warn('PyLearn: Could not sync progress from cloud.', e.message);
    }
  },

  // Real-time listener (optional — attaches if on learn page)
  listenForChanges(uid) {
    if (!_db || !uid) return;
    return _db.collection('users').doc(uid)
      .onSnapshot(doc => {
        if (doc.exists) {
          const cloudData = doc.data().progress || {};
          const localData = Progress.get();
          const merged = { ...localData, ...cloudData };
          Progress.set(merged);
          if (typeof updateProgressBars === 'function') updateProgressBars();
        }
      }, err => console.warn('PyLearn: Listener error', err.message));
  }
};

// ─── Auto-init ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (typeof USE_FIREBASE !== 'undefined' && USE_FIREBASE) {
    initDB();
  }
});
