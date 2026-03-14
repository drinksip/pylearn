// ===== PYLEARN — AI Marking (Puter.js) =====
// Uses puter.ai.chat() — completely free, no API key required.
// Puter.js is loaded in the HTML: <script src="https://js.puter.com/v2/"></script>

// ─── Main mark function ───────────────────────────────────────────────────────
async function markCode(code, task = '', onResult) {
  if (!code || !code.trim()) {
    onResult({ error: true, message: 'No code to mark — write some Python first!' });
    return;
  }

  const taskSection = task
    ? `The task/exercise the student was attempting:\n"""\n${task}\n"""\n\n`
    : '';

  const prompt = `You are a friendly, encouraging Python tutor marking a student's code.

${taskSection}Student's code:
\`\`\`python
${code}
\`\`\`

Please provide:
1. **Overall mark**: X/10 with a one-line verdict
2. **What's good**: 2–3 specific things done well
3. **Improvements**: 2–3 clear, actionable suggestions (with corrected code snippets where helpful)
4. **Did you know?**: One Python tip or trick related to what they wrote

Keep your tone warm, clear, and encouraging. Format using markdown.`;

  try {
    const response = await puter.ai.chat(prompt);
    const text = typeof response === 'string' ? response
      : response?.message?.content?.[0]?.text
      || response?.content?.[0]?.text
      || response?.text
      || JSON.stringify(response);
    onResult({ error: false, text });
  } catch (e) {
    onResult({ error: true, message: `AI marking failed: ${e.message}` });
  }
}

// ─── Render AI feedback ────────────────────────────────────────────────────────
// Pass a container element and the result from markCode.
function renderAIFeedback(container, result) {
  if (result.error) {
    container.innerHTML = `<div class="ai-error">⚠️ ${result.message}</div>`;
    return;
  }

  // Convert markdown-ish text to HTML
  const html = result.text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```python([\s\S]*?)```/g, '<pre class="ai-code"><code>$1</code></pre>')
    .replace(/```([\s\S]*?)```/g, '<pre class="ai-code"><code>$1</code></pre>')
    .replace(/^#{1,3} (.+)$/gm, '<h4>$1</h4>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ol>$1</ol>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (m) => m.startsWith('<') ? m : `<p>${m}</p>`);

  container.innerHTML = `
    <div class="ai-result">
      <div class="ai-result-header">
        <span class="ai-badge">🤖 AI Feedback</span>
        <span style="font-size:0.78rem;color:var(--muted)">Powered by Puter.js · Free</span>
      </div>
      <div class="ai-result-body">${html}</div>
    </div>`;

  // Highlight any code blocks inside AI response
  if (typeof hljs !== 'undefined') {
    container.querySelectorAll('pre code').forEach(b => hljs.highlightElement(b));
  }
}

// ─── Lesson IDE quick-mark helper ─────────────────────────────────────────────
// Called from learn.html or ide.html "Mark My Code" button.
async function quickMark(code, task, buttonEl, outputEl) {
  if (!buttonEl || !outputEl) return;

  buttonEl.disabled = true;
  buttonEl.textContent = '🤖 Marking…';
  outputEl.innerHTML = '<div class="ai-loading"><span class="ai-spinner"></span> Analysing your code…</div>';
  outputEl.style.display = 'block';

  await markCode(code, task, result => {
    renderAIFeedback(outputEl, result);
    buttonEl.disabled = false;
    buttonEl.textContent = '🤖 Mark My Code';
  });
}
