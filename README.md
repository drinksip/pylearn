# PyLearn 🐍

A free, self-hosted Python learning platform — step-by-step lessons, a real in-browser IDE, AI code marking, cloud progress sync, and hands-on projects.

## ✨ Features

| Feature | Details |
|---|---|
| 🐍 **Real Python IDE** | Pyodide (CPython → WebAssembly) — actual Python 3.11 in the browser |
| ✏️ **CodeMirror Editor** | Python syntax highlighting, bracket matching, keyboard shortcuts |
| 🤖 **AI Code Marking** | Puter.js — free, no API key, scores + personalised feedback |
| 🔦 **Syntax Highlighting** | highlight.js on all lesson code blocks |
| ☁️ **Cloud Progress Sync** | Firebase Firestore — syncs across devices when signed in |
| 🔐 **Authentication** | Google OAuth + email/password via Firebase Auth |
| 💾 **Offline fallback** | All progress saved to `localStorage` — works without an account |
| 📱 **Responsive** | Works on desktop, tablet, and mobile |

---

## 🗂 File Structure

```
pylearn/
├── index.html          — Home page
├── learn.html          — Lesson viewer with sidebar
├── ide.html            — In-browser Python IDE
├── projects.html       — Project challenges
├── css/
│   └── style.css       — All styles (dark terminal theme)
└── js/
    ├── config.js       — Firebase config (fill in your values)
    ├── auth.js         — Google + email/password login
    ├── db.js           — Firestore progress sync
    ├── main.js         — Shared logic (progress, quiz, highlight.js, nav)
    ├── ide.js          — Pyodide + CodeMirror editor logic
    ├── ai-mark.js      — Puter.js AI marking
    ├── lessons-1-15.js — Lessons 1–15 (full content)
    ├── lessons-16-30.js— Lessons 16–30 (placeholders, fill next session)
    └── projects.js     — Project challenge data
```

---

## 🚀 Deploy to GitHub Pages (3 steps)

1. **Create a GitHub repository** — name it `pylearn` (or anything you like).

2. **Upload all files** — maintain the folder structure exactly as shown above.

3. **Enable GitHub Pages:**
   - Go to your repo → **Settings → Pages**
   - Under *Source*, select `main` branch, root `/`
   - Click **Save**
   - Your site is live at `https://yourusername.github.io/pylearn/`

> **No build step, no npm, no bundler.** Just upload and go.

---

## 🔥 Firebase Setup (for auth + cloud sync)

Firebase is **optional** — the site works fully without it (progress saves to `localStorage`).
To enable cloud sync and login, follow these steps:

### 1. Create a Firebase project
- Go to [console.firebase.google.com](https://console.firebase.google.com)
- Click **Add project** → give it a name → continue

### 2. Enable Authentication
- In your project, go to **Build → Authentication → Get started**
- Enable **Google** sign-in provider
- Enable **Email/Password** sign-in provider

### 3. Enable Firestore
- Go to **Build → Firestore Database → Create database**
- Start in **production mode** (or test mode while developing)
- Add this security rule so only authenticated users can read/write their own data:

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

### 4. Get your config values
- Go to **Project Settings (⚙️) → Your apps → Add app → Web**
- Register your app, then copy the `firebaseConfig` object

### 5. Paste config into `js/config.js`
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

> ⚠️ These values **will be visible** in your public GitHub repo — that's normal for a
> static site. The Firestore security rules above ensure users can only access their
> own data.

### 6. Add your GitHub Pages domain to Firebase
- **Authentication → Settings → Authorised domains**
- Add `yourusername.github.io`

---

## 🤖 AI Marking (Puter.js)

No setup required. The AI marking uses [Puter.js](https://puter.com) which is completely
free and requires no API key. It works out of the box — just click **"Mark My Code"**
in the IDE.

---

## ✏️ Adding New Lessons

Open `js/lessons-16-30.js` and replace a placeholder object with real content.
Copy the structure from any lesson in `js/lessons-1-15.js`:

```js
{
  id: "16-exceptions",         // unique ID — also used as URL hash
  section: "5. Files & Errors",
  title: "Exceptions & Error Handling",
  duration: "16 min",
  icon: "🛡️",
  content: `
    <h1>🛡️ Exceptions & Error Handling</h1>
    <div class="lesson-meta">...</div>
    <p>...</p>
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-label">example.py</span>
        <button class="copy-btn" onclick="copyCode(this)">copy</button>
      </div>
      <pre><code class="language-python">try:
    x = int(input("Enter a number: "))
except ValueError:
    print("That's not a number!")
</code></pre>
    </div>
    <div class="quiz-block">
      <p class="quiz-q">❓ Your question here</p>
      <button class="quiz-opt" onclick="checkQuiz(this, false)">Wrong answer</button>
      <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">Correct answer</button>
      <div class="quiz-feedback"></div>
    </div>
  `
}
```

The lesson appears automatically in the sidebar — no other changes needed.

---

## ✏️ Adding New Projects

Open `js/projects.js` and add a new object to the `PROJECTS` array:

```js
{
  id: "p13",
  title: "My Project",
  difficulty: "beginner",    // beginner | intermediate | advanced
  icon: "🎮",
  skills: ["lists", "loops"],
  description: "Short description shown on the card.",
  hints: ["Hint 1", "Hint 2", "Hint 3"],
  starter: `# starter code here\nprint("Hello!")`
}
```

---

## 🎨 Customising the Theme

All colours are CSS custom properties in `css/style.css`. Change any of these to retheme
the whole site instantly:

```css
:root {
  --bg:            #0d1117;   /* main background */
  --bg2:           #161b22;   /* card / sidebar background */
  --bg3:           #1c2128;   /* toolbar / input background */
  --border:        #30363d;   /* border colour */
  --text:          #e6edf3;   /* primary text */
  --muted:         #7d8590;   /* secondary / muted text */
  --python-blue:   #4f9cf9;   /* primary accent */
  --python-yellow: #ffd43b;   /* secondary accent */
  --green:         #3fb950;
  --red:           #f85149;
  --orange:        #f0883e;
  --purple:        #a5a0f5;
}
```

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Language | Python 3.11 (via Pyodide WebAssembly) |
| Editor | CodeMirror 5 |
| Syntax highlighting | highlight.js |
| AI feedback | Puter.js |
| Auth | Firebase Authentication |
| Database | Firebase Firestore |
| Fonts | JetBrains Mono + Syne (Google Fonts) |
| Hosting | GitHub Pages |
| Framework | None — pure HTML + CSS + vanilla JS |

---

## 🙌 Contributing

This is a public learning resource. PRs to add new lessons, fix typos, improve
styles, or add projects are very welcome!

1. Fork the repo
2. Make your changes
3. Open a pull request with a description of what you added/changed
