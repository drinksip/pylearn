// ===== PYLEARN — AI Marking (Puter.js) =====

async function quickMark(code, task, btnEl, outputEl) {
  if (!btnEl || !outputEl) return;
  if (!code?.trim()) { outputEl.innerHTML = '<div class="ai-error">Write some code first!</div>'; return; }

  btnEl.disabled = true;
  outputEl.innerHTML = `<div class="ai-loading"><span class="ai-spinner"></span> Analysing your code…</div>`;

  const taskLine = task ? `\nTask the student was attempting:\n"${task}"\n` : '';

  const prompt = `You are a friendly Python tutor reviewing a student's code. Be encouraging but honest.
${taskLine}
Student's code:
\`\`\`python
${code}
\`\`\`

Respond with EXACTLY this structure:

**Score:** X/10

**What's working well:**
- (2-3 specific positives)

**Issues to fix:**
- (bugs, errors, or "No issues found!")

**Improvements:**
- (1-2 Pythonic suggestions with short code snippets)

**Did you know?**
(One Python tip related to what they wrote)

Keep it warm, clear, and beginner-friendly.`;

  try {
    if (typeof puter === 'undefined') throw new Error('Puter.js not loaded — check your internet connection.');
    const response = await puter.ai.chat(prompt, { model: 'meta-llama/llama-3.3-70b-instruct' });
    const text = response?.message?.content?.[0]?.text || response?.toString() || 'No response.';
    _renderAI(outputEl, text);
  } catch(e) {
    if (e.message?.match(/sign.?in|auth|login|cancel/i)) {
      outputEl.innerHTML = `
        <div style="text-align:center;padding:1rem;">
          <div style="font-size:2rem;margin-bottom:.5rem">🤖</div>
          <p style="font-weight:700;margin-bottom:.4rem">Sign in to Puter for free AI marking</p>
          <p style="color:var(--muted);font-size:.83rem;margin-bottom:1rem">Free account · No credit card · One-time setup</p>
          <button class="btn btn-primary btn-sm" onclick="puter.auth.signIn().then(()=>quickMark('${code.replace(/'/g,"\\'")}','${(task||'').replace(/'/g,"\\'")}',document.querySelector('.ai-mark-btn'),this.closest('.ai-output')))">
            Sign in with Puter
          </button>
        </div>`;
    } else {
      outputEl.innerHTML = `<div class="ai-error">⚠️ ${e.message}</div>`;
    }
  } finally {
    btnEl.disabled = false;
    btnEl.textContent = '🤖 Mark My Code';
  }
}

function _renderAI(container, text) {
  // Extract score
  const scoreMatch = text.match(/\*\*Score:\*\*\s*(\d+)\/10/);
  let html = '<div class="ai-result">';

  if (scoreMatch) {
    const n = parseInt(scoreMatch[1]);
    const cls = n >= 8 ? '' : n >= 5 ? 'mid' : 'low';
    const msg = n >= 8 ? '🎉 Excellent work!' : n >= 5 ? '👍 Good effort!' : '💪 Keep practising!';
    html += `<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;padding:.85rem;background:var(--bg3);border-radius:var(--r)">
      <span class="ai-score ${cls}">${n}/10</span>
      <span style="color:var(--muted);font-size:.875rem">${msg}</span>
    </div>`;
  }

  // Render rest as markdown-ish
  const body = text
    .replace(/\*\*Score:\*\*[^\n]*/g, '')
    .replace(/\*\*(.+?):\*\*/g, '<h4>$1:</h4>')
    .replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)+/g, m => `<ul>${m}</ul>`)
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\n\n+/g, '\n')
    .split('\n').filter(l => l.trim())
    .map(l => l.startsWith('<') ? l : `<p>${l}</p>`)
    .join('');

  html += body + '</div>';
  container.innerHTML = html;
}
