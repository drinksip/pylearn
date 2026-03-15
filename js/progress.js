// ===== PYLEARN — Progress & Gamification =====
// Manages XP, streak, level, badges, lesson completion.
// Saves to Firestore (if signed in) AND localStorage (always, as fallback).

const LEVELS = [
  { min: 0,    max: 99,   name: "Beginner",    icon: "🐣" },
  { min: 100,  max: 249,  name: "Learner",     icon: "📚" },
  { min: 250,  max: 499,  name: "Coder",       icon: "💻" },
  { min: 500,  max: 999,  name: "Developer",   icon: "🔧" },
  { min: 1000, max: 1999, name: "Pythonista",  icon: "🐍" },
  { min: 2000, max: 9999, name: "Expert",      icon: "🏆" },
];

const ALL_BADGES = [
  { id: "first_lesson",   icon: "🌟", name: "First Steps",    desc: "Complete your first lesson" },
  { id: "first_challenge",icon: "💻", name: "Code Warrior",   desc: "Complete your first challenge" },
  { id: "streak_3",       icon: "🔥", name: "On Fire",        desc: "3-day streak" },
  { id: "streak_7",       icon: "🔥🔥", name: "Week Warrior",  desc: "7-day streak" },
  { id: "xp_100",         icon: "⚡", name: "Charged Up",     desc: "Earn 100 XP" },
  { id: "xp_500",         icon: "⚡⚡", name: "Power User",    desc: "Earn 500 XP" },
  { id: "topic_done",     icon: "🏅", name: "Topic Master",   desc: "Complete a full topic" },
  { id: "all_practice",   icon: "✅", name: "Perfect Score",  desc: "Get all quiz questions right in a lesson" },
  { id: "lessons_10",     icon: "📖", name: "Bookworm",       desc: "Complete 10 lessons" },
  { id: "lessons_25",     icon: "🎓", name: "Graduate",       desc: "Complete 25 lessons" },
];

const Progress = {
  // In-memory state (populated from cloud or localStorage on load)
  _state: {
    progress: {},   // { lessonId: true }
    xp:       0,
    streak:   { count: 0, lastDate: null },
    badges:   []    // array of badge IDs earned
  },

  // ─── Persistence ────────────────────────────────────────────────────────────
  _saveLocal() {
    try { localStorage.setItem('pylearn_v3', JSON.stringify(this._state)); } catch(e) {}
  },

  _loadLocal() {
    try {
      const raw = localStorage.getItem('pylearn_v3');
      if (raw) {
        const d = JSON.parse(raw);
        this._state = { progress: d.progress || {}, xp: d.xp || 0,
                        streak: d.streak || { count: 0, lastDate: null }, badges: d.badges || [] };
      }
    } catch(e) {}
  },

  loadFromCloud(data) {
    this._state = {
      progress: data.progress || {},
      xp:       data.xp       || 0,
      streak:   data.streak   || { count: 0, lastDate: null },
      badges:   data.badges   || []
    };
    this._saveLocal();  // keep local in sync too
    this._updateAllUI();
  },

  clear() {
    this._state = { progress: {}, xp: 0, streak: { count: 0, lastDate: null }, badges: [] };
    this._updateAllUI();
  },

  async _persist() {
    this._saveLocal();
    const user = typeof getCurrentUser === 'function' && getCurrentUser();
    if (user && typeof saveToCloud === 'function') {
      await saveToCloud(this._state);
    }
  },

  // ─── Lesson completion ───────────────────────────────────────────────────────
  isComplete(lessonId) { return !!this._state.progress[lessonId]; },

  async markComplete(lessonId, xpAmount = 10) {
    const alreadyDone = this.isComplete(lessonId);
    if (alreadyDone) return { xpGained: 0, newBadges: [] };

    this._state.progress[lessonId] = true;

    // XP
    const xpBefore = this._state.xp;
    this._state.xp += xpAmount;

    // Streak
    const newBadges = [];
    this._updateStreak();

    // Check badges
    const earned = this._checkBadges(lessonId);
    newBadges.push(...earned);

    await this._persist();
    this._updateAllUI();

    return { xpGained: xpAmount, newBadges, leveledUp: this._didLevelUp(xpBefore, this._state.xp) };
  },

  // ─── Streak ──────────────────────────────────────────────────────────────────
  _updateStreak() {
    const today    = new Date().toDateString();
    const lastDate = this._state.streak.lastDate;

    if (lastDate === today) return; // already counted today

    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDate === yesterday) {
      this._state.streak.count += 1;
    } else if (lastDate === null) {
      this._state.streak.count = 1;
    } else {
      this._state.streak.count = 1; // streak broken, reset to 1
    }
    this._state.streak.lastDate = today;
  },

  getStreak() { return this._state.streak.count; },

  // ─── XP & levels ─────────────────────────────────────────────────────────────
  getXP()   { return this._state.xp; },
  getLevel() {
    const xp = this._state.xp;
    return LEVELS.findLast(l => xp >= l.min) || LEVELS[0];
  },
  getNextLevel() {
    const current = this.getLevel();
    const idx = LEVELS.indexOf(current);
    return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
  },
  getLevelProgress() {
    const lv   = this.getLevel();
    const next = this.getNextLevel();
    if (!next) return 100;
    const range = next.min - lv.min;
    const done  = this._state.xp - lv.min;
    return Math.round((done / range) * 100);
  },

  _didLevelUp(xpBefore, xpAfter) {
    const lvBefore = LEVELS.findLast(l => xpBefore >= l.min) || LEVELS[0];
    const lvAfter  = LEVELS.findLast(l => xpAfter  >= l.min) || LEVELS[0];
    return lvBefore !== lvAfter;
  },

  // ─── Badges ──────────────────────────────────────────────────────────────────
  hasBadge(id)  { return this._state.badges.includes(id); },
  getBadges()   { return this._state.badges; },

  _checkBadges(lessonId) {
    const earned = [];
    const add = (id) => {
      if (!this.hasBadge(id)) { this._state.badges.push(id); earned.push(id); }
    };

    const total      = Object.keys(this._state.progress).length;
    const xp         = this._state.xp;
    const streak     = this._state.streak.count;
    const isChallenge = lessonId?.includes('-challenge');

    if (total === 1)       add('first_lesson');
    if (isChallenge)       add('first_challenge');
    if (streak >= 3)       add('streak_3');
    if (streak >= 7)       add('streak_7');
    if (xp >= 100)         add('xp_100');
    if (xp >= 500)         add('xp_500');
    if (total >= 10)       add('lessons_10');
    if (total >= 25)       add('lessons_25');

    // Check if a whole topic is done
    if (typeof TOPICS !== 'undefined') {
      for (const topic of TOPICS) {
        const allDone = topic.lessons.every(l => this.isComplete(l.id));
        if (allDone) { add('topic_done'); break; }
      }
    }

    return earned;
  },

  // ─── Counts ──────────────────────────────────────────────────────────────────
  countCompleted()     { return Object.keys(this._state.progress).length; },
  isTopicComplete(tid) {
    if (typeof TOPICS === 'undefined') return false;
    const topic = TOPICS.find(t => t.id === tid);
    if (!topic) return false;
    return topic.lessons.every(l => this.isComplete(l.id));
  },
  isTopicStarted(tid) {
    if (typeof TOPICS === 'undefined') return false;
    const topic = TOPICS.find(t => t.id === tid);
    if (!topic) return false;
    return topic.lessons.some(l => this.isComplete(l.id));
  },

  // ─── UI updates ──────────────────────────────────────────────────────────────
  _updateAllUI() {
    // Nav XP
    document.querySelectorAll('.nav-xp-val').forEach(el => el.textContent = this._state.xp + ' XP');
    // Nav streak
    document.querySelectorAll('.nav-streak-val').forEach(el => el.textContent = this._state.streak.count);
    // Nav level
    const lv = this.getLevel();
    document.querySelectorAll('.nav-level').forEach(el => el.textContent = `${lv.icon} ${lv.name}`);
    // XP bar
    const pct = this.getLevelProgress();
    document.querySelectorAll('.xp-fill').forEach(el => el.style.width = pct + '%');
    document.querySelectorAll('.map-xp-info').forEach(el =>
      el.textContent = `${this._state.xp} XP · ${lv.name}`);
    // Map
    if (typeof renderMap === 'function') renderMap();
  }
};

// Auto-load from localStorage on startup
Progress._loadLocal();
