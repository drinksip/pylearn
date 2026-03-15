// ===== PYLEARN — IDE (Pyodide + CodeMirror) =====
// input() works exactly like a real Python terminal:
// execution pauses and a browser prompt() dialog appears.

let _editor  = null;
let _pyodide = null;
let _ready   = false;

// ─── CodeMirror init ──────────────────────────────────────────────────────────
function initEditor(textareaId = 'ide-editor', opts = {}) {
  const ta = document.getElementById(textareaId);
  if (!ta || typeof CodeMirror === 'undefined') return null;

  const editor = CodeMirror.fromTextArea(ta, {
    mode:              'python',
    theme:             'dracula',
    lineNumbers:       true,
    indentUnit:        4,
    tabSize:           4,
    indentWithTabs:    false,
    matchBrackets:     true,
    autoCloseBrackets: true,
    lineWrapping:      true,
    autofocus:         opts.autofocus !== false,
    extraKeys: {
      Tab: cm => {
        if (cm.somethingSelected()) cm.indentSelection('add');
        else cm.replaceSelection('    ', 'end');
      },
      'Ctrl-Enter': () => runCode(),
      'Cmd-Enter':  () => runCode(),
    }
  });

  editor.setSize('100%', '100%');
  return editor;
}

// ─── Pyodide loader ───────────────────────────────────────────────────────────
async function loadPyodideRuntime(statusId = 'ide-status', runBtnId = 'ide-run-btn') {
  const statusEl = document.getElementById(statusId);
  const runBtn   = document.getElementById(runBtnId);
  _setStatus(statusEl, '⏳ Loading Python 3.11…', 'loading');

  try {
    _pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/'
    });

    // ── THE KEY FIX: Override input() to use browser's prompt() ────────────
    // prompt() is synchronous — it blocks execution and waits for the user
    // to type, EXACTLY like input() in IDLE or the terminal.
    _pyodide.runPython(`
import builtins, sys, io, js

def _pylearn_input(prompt=''):
    """
    Intercept Python's input() — uses browser prompt() dialog.
    Execution pauses until the user types and clicks OK,
    identical to how input() works in IDLE or the terminal.
    """
    result = js.window.prompt(str(prompt) if prompt else '')
    if result is None:
        return ''
    return str(result)

builtins.input = _pylearn_input

# Capture stdout/stderr
class _Capture(io.StringIO):
    pass

sys.stdout = _Capture()
sys.stderr = _Capture()
`);

    _ready = true;
    _setStatus(statusEl, '🐍 Python 3.11 ready  ·  Ctrl+Enter to run', 'ready');
    if (runBtn) { runBtn.disabled = false; runBtn.textContent = '▶ Run'; }
  } catch (e) {
    _setStatus(statusEl, `❌ Failed to load Python: ${e.message}`, 'error');
  }
}

// ─── Run code ─────────────────────────────────────────────────────────────────
async function runCode(editorRef, outputId = 'ide-output', runBtnId = 'ide-run-btn', runtimeId = 'ide-runtime') {
  // Allow calling with no args (uses module-level _editor)
  const cm     = editorRef || _editor;
  const outEl  = document.getElementById(outputId);
  const runBtn = document.getElementById(runBtnId);
  const rtEl   = document.getElementById(runtimeId);
  const statusEl = document.getElementById('ide-status');

  if (!_ready || !cm || !outEl) return;

  const code = cm.getValue().trim();
  if (!code) return;

  if (runBtn) { runBtn.disabled = true; runBtn.textContent = '⏳ Running…'; }
  if (outEl)  { outEl.textContent = ''; outEl.className = 'ide-output'; }

  // Reset captured streams
  _pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

  const t0 = performance.now();
  try {
    await _pyodide.runPythonAsync(code);
    const elapsed = ((performance.now() - t0) / 1000).toFixed(3);

    const stdout = _pyodide.runPython('sys.stdout.getvalue()');
    const stderr = _pyodide.runPython('sys.stderr.getvalue()');

    let out = '';
    if (stdout) out += stdout;
    if (stderr) out += (out ? '\n' : '') + '⚠️  Stderr:\n' + stderr;
    if (!out.trim()) out = '(no output)';

    outEl.textContent = out;
    outEl.className   = stderr ? 'ide-output has-error' : 'ide-output success';
    if (rtEl) rtEl.textContent = `⏱ ${elapsed}s`;
    if (statusEl) _setStatus(statusEl, `🐍 Ran in ${elapsed}s`, 'ready');
  } catch (err) {
    outEl.textContent = '❌ ' + _cleanError(err.message);
    outEl.className   = 'ide-output has-error';
    if (statusEl) _setStatus(statusEl, '❌ Error — check output', 'error');
  } finally {
    if (runBtn) { runBtn.disabled = false; runBtn.textContent = '▶ Run'; }
  }
}

// Clean up verbose Pyodide error messages
function _cleanError(msg) {
  const lines = msg.split('\n').filter(l =>
    l.trim() &&
    !l.includes('pyodide') &&
    !l.includes('_pylearn') &&
    !l.trim().startsWith('at ')
  );
  return lines.join('\n') || msg;
}

// ─── Helper ───────────────────────────────────────────────────────────────────
function _setStatus(el, msg, state = '') {
  if (!el) return;
  el.textContent = msg;
  el.className   = 'ide-status ' + state;
}

// ─── Snippets ─────────────────────────────────────────────────────────────────
const SNIPPETS = {
  hello: `# 👋 Hello, World!\nprint("Hello, World!")\nname = input("What's your name? ")\nprint(f"Nice to meet you, {name}!")`,

  fizzbuzz: `# 🎮 FizzBuzz\nfor i in range(1, 31):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`,

  fibonacci: `# 🔢 Fibonacci sequence\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=' ')\n        a, b = b, a + b\n    print()\n\nfibonacci(15)`,

  listcomp: `# 📋 List comprehensions\nnumbers = list(range(1, 11))\nsquares = [n**2 for n in numbers]\nevens   = [n for n in numbers if n % 2 == 0]\n\nprint("Numbers:", numbers)\nprint("Squares:", squares)\nprint("Evens:  ", evens)`,

  classes: `# 🏗️ Classes\nclass Animal:\n    def __init__(self, name, sound):\n        self.name  = name\n        self.sound = sound\n\n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Woof")\n\n    def fetch(self, item):\n        return f"{self.name} fetches the {item}!"\n\ndog = Dog("Rex")\nprint(dog.speak())\nprint(dog.fetch("ball"))`,

  input_demo: `# 💬 input() demo — a real dialog box will appear!\nname  = input("Enter your name: ")\nage   = int(input("Enter your age: "))\nprint(f"Hello, {name}! You are {age} years old.")\nprint(f"In 10 years you'll be {age + 10}.")`,

  decorators: `# ✨ Decorators\nimport time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__}: {time.time()-start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef count_sum(n):\n    return sum(range(n))\n\nprint(f"Result: {count_sum(1_000_000):,}")`,

  generators: `# ⚡ Generators\ndef fibonacci_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ngen = fibonacci_gen()\nfirst_10 = [next(gen) for _ in range(10)]\nprint("Fibonacci:", first_10)\n\n# Memory efficient sum\ntotal = sum(x**2 for x in range(1000))\nprint("Sum of squares:", total)`,
};

function loadSnippet(key, cm) {
  const editor = cm || _editor;
  if (!editor || !SNIPPETS[key]) return;
  editor.setValue(SNIPPETS[key]);
  editor.focus();
}

// ─── Font size ────────────────────────────────────────────────────────────────
let _fontSize = 14;
function changeFontSize(delta) {
  _fontSize = Math.min(22, Math.max(11, _fontSize + delta));
  document.querySelectorAll('.CodeMirror').forEach(el => { el.style.fontSize = _fontSize + 'px'; });
}

// ─── Download ─────────────────────────────────────────────────────────────────
function downloadCode(cm, filename = 'pylearn_code.py') {
  const editor = cm || _editor;
  if (!editor) return;
  const blob = new Blob([editor.getValue()], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ─── Clear output ─────────────────────────────────────────────────────────────
function clearOutput(outputId = 'ide-output', runtimeId = 'ide-runtime') {
  const outEl = document.getElementById(outputId);
  const rtEl  = document.getElementById(runtimeId);
  if (outEl) { outEl.textContent = ''; outEl.className = 'ide-output'; }
  if (rtEl)  rtEl.textContent = '';
}
