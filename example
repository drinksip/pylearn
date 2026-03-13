# PyLearn 🐍

A free, self-hosted Python learning website — step-by-step lessons, hands-on projects, and quizzes. No frameworks, no accounts, no backend required.

## 🚀 Deploy to GitHub Pages (3 steps)

1. **Create a new GitHub repository** — call it `pylearn` or anything you like.

2. **Upload all these files** to the repo (maintain the folder structure):
   ```
   index.html
   learn.html
   projects.html
   css/style.css
   js/main.js
   js/lessons.js
   js/projects.js
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Source", select `main` branch, root folder `/`
   - Click Save
   - Your site will be live at `https://yourusername.github.io/pylearn/`

## 📁 File Structure

```
pylearn/
├── index.html       — Home page
├── learn.html       — Lesson viewer with sidebar
├── projects.html    — Project challenges
├── css/
│   └── style.css    — All styles (dark terminal theme)
└── js/
    ├── main.js      — Shared logic (progress, quiz, copy buttons)
    ├── lessons.js   — All lesson content as a JS data structure
    └── projects.js  — All project data
```

## ✏️ Adding New Lessons

Open `js/lessons.js` and add a new object to the `LESSONS` array:

```js
{
  id: "12-strings",          // Unique ID (used in URL hash too)
  section: "1. The Basics",  // Which section it belongs to
  title: "String Methods",   // Sidebar title
  duration: "10 min",        // Shown in lesson header
  icon: "🔤",                // Sidebar icon (not currently shown but good for reference)
  content: `                 // Full HTML content of the lesson
    <h1>String Methods</h1>
    ...
  `
}
```

The lesson will automatically appear in the sidebar. No other changes needed.

## ✏️ Adding New Projects

Open `js/projects.js` and add a new object to the `PROJECTS` array:

```js
{
  id: "p13",
  title: "My Project",
  difficulty: "beginner",    // beginner | intermediate | advanced
  icon: "🎮",
  skills: ["lists", "loops"],
  description: "Short description...",
  hints: ["Hint 1", "Hint 2", "Hint 3"],
  starter: `# starter code here`
}
```

## 🎨 Customising

All colours are CSS variables in `css/style.css` — change `--python-blue`, `--python-yellow`, `--bg`, etc. to retheme the whole site instantly.

## 📦 Tech Stack

- Pure HTML + CSS + vanilla JavaScript
- No build tools, no npm, no frameworks
- Fonts: JetBrains Mono + Syne (Google Fonts)
- Progress saved to browser `localStorage`
