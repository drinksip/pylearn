# PyLearn v3 🐍

A free Duolingo-style Python learning site — lesson map, XP & streaks, a real in-browser Python IDE with working `input()`, AI code marking, and cloud progress sync.

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `pylearn`)
2. Upload all files maintaining the folder structure (`css/`, `js/`)
3. Go to **Settings → Pages → Source → main branch / root** → Save
4. Live at `https://yourusername.github.io/pylearn/`

---

## 🔥 Firebase Setup (Step by Step)

Firebase is optional — the site works fully without it (progress saves to localStorage). To enable accounts and cloud sync, follow these exact steps.

### Step 1 — Create a Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. Enter a name (e.g. `pylearn`)
4. Disable Google Analytics if you don't need it
5. Click **Create project**

### Step 2 — Register your web app

1. In your project, click the **`</>`** (Web) icon
2. App nickname: `PyLearn` (or anything)
3. **Do NOT** tick "Also set up Firebase Hosting" — you're using GitHub Pages
4. Click **Register app**
5. You'll see a `firebaseConfig` object — **copy it**, you'll need it in a moment

### Step 3 — Enable Authentication

1. In left sidebar: **Build → Authentication**
2. Click **Get started**
3. Click **Email/Password** → Enable the first toggle → **Save**
4. Click **Add new provider** → **Google** → Enable → enter a **support email** (this is the email shown on the Google sign-in screen — can be any email you own) → **Save**

### Step 4 — Enable Firestore Database

1. In left sidebar: **Build → Firestore Database**
2. Click **Create database**
3. Choose a region (e.g. `europe-west2` for UK)
4. Start in **production mode**
5. Click **Done**

### Step 5 — Set Firestore Security Rules

1. In Firestore, click the **Rules** tab
2. Replace everything with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. Click **Publish**

This means: only you can read/write your own data. Nobody else can see it.

### Step 6 — Add your GitHub Pages domain

1. In Firebase: **Authentication → Settings → Authorised domains**
2. Click **Add domain**
3. Enter: `yourusername.github.io`
4. Click **Add**

### Step 7 — Paste your config into js/config.js

Open `js/config.js` and replace the placeholder values with your actual config:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIza...",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123...:web:abc..."
};
```

> ⚠️ These values are visible in your public GitHub repo — that's normal for a static site. The Firestore rules from Step 5 ensure users can only access their own data, so this is safe.

### Done! 🎉

Firebase auth and progress sync are now active. Users can sign in with Google or email/password, and their progress syncs across all devices.

---

## 🤖 AI Marking

No setup required. Uses [Puter.js](https://puter.com) — completely free, no API key. Users need a free Puter account the first time (takes 30 seconds to create).

---

## ✏️ Adding Lessons (Topics 3–10)

Open `js/lesson-data.js`. Find the placeholder lesson with `content: \`Coming soon...\`` and replace it with real content. Copy the structure from the first two topics (basics and strings). The lesson appears automatically in the map — no other files need changing.

Lesson types:
- **`learn`** — needs a `content` property (HTML string)
- **`practice`** — needs a `questions` array (see existing examples)
- **`challenge`** — needs `task`, `description`, `example_output`, `starter`

---

## 📁 File Structure

```
pylearn/
├── index.html          — Landing page
├── map.html            — Duolingo-style lesson map
├── lesson.html         — Lesson player (learn/practice/challenge)
├── ide.html            — Standalone Python IDE
├── css/
│   └── style.css       — All styles
└── js/
    ├── config.js       — Firebase config (fill in your values)
    ├── firebase.js     — Auth + Firestore module
    ├── progress.js     — XP, streaks, levels, badges
    ├── main.js         — Shared utilities
    ├── ide.js          — Pyodide + CodeMirror + input() fix
    ├── ai-mark.js      — Puter.js AI marking
    └── lesson-data.js  — All topic and lesson content
```

---

## 🐍 How input() Works

When your Python code calls `input()` in the browser IDE, a native browser dialog box appears — identical to how it works in IDLE or the terminal. Execution pauses until you type and click OK. No configuration needed.

---

## 🎨 Theme Customisation

Change colours in `css/style.css` under `:root`:

```css
:root {
  --blue:   #4f9cf9;   /* primary accent */
  --yellow: #ffd43b;   /* secondary / XP colour */
  --green:  #3fb950;   /* success / completion */
}
```

---

## 📦 Tech Stack

| | |
|---|---|
| Python runtime | Pyodide v0.26 (CPython → WebAssembly) |
| Code editor | CodeMirror 5 |
| Syntax highlighting | highlight.js |
| AI feedback | Puter.js |
| Auth | Firebase Authentication |
| Database | Firebase Firestore |
| Fonts | JetBrains Mono + Nunito |
| Hosting | GitHub Pages |
| Framework | None — pure HTML + CSS + vanilla JS |
