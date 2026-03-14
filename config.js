// ===== PYLEARN — Firebase Config =====
// ⚠️  Fill in YOUR project values from the Firebase Console.
//     Console → Project Settings → Your Apps → SDK snippet → Config
//
// NEVER commit real values to a public repo — use environment variables
// or GitHub Actions secrets if you need CI/CD.  For a purely static
// GitHub Pages site the values are visible in source, which is normal;
// just make sure your Firestore rules require authentication.

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ─── Feature flags ────────────────────────────────────────────────────────────
// Set USE_FIREBASE = false to run the site with localStorage only (no account).
const USE_FIREBASE = true;
