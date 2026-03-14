// ===== PYLEARN — IDE (Pyodide + CodeMirror) =====

let _editor   = null;  // CodeMirror instance
let _pyodide  = null;  // Pyodide instance
let _ready    = false; // Pyodide loaded?

// ─── CodeMirror setup ─────────────────────────────────────────────────────────
function initEditor() {
  const textArea = document.getElementById('ide-editor');
  if (!textArea) return;

  _editor = CodeMirror.fromTextArea(textArea, {
    mode:            'python',
    theme:           'dracula',
    lineNumbers:     true,
    indentUnit:      4,
    tabSize:         4,
    indentWithTabs:  false,
    matchBrackets:   true,
    autoCloseBrackets: true,
    lineWrapping:    true,
    extraKeys: {
      Tab: cm => {
        if (cm.somethingSelected()) {
          cm.indentSelection('add');
        } else {
          cm.replaceSelection('    ', 'end');
        }
      },
      'Ctrl-Enter': () => runCode(),
      'Cmd-Enter':  () => runCode()
    }
  });

  _editor.setSize('100%', '100%');
}

// ─── Pyodide loader ───────────────────────────────────────────────────────────
async function loadPyodide_() {
  const statusEl = document.getElementById('ide-status');
  const runBtn   = document.getElementById('ide-run-btn');

  setStatus('⏳ Loading Python runtime…', 'loading');

  try {
    _pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/'
    });

    // Redirect stdout/stderr to our output panel
    _pyodide.runPython(`
import sys, io
class _OutputCapture(io.StringIO):
    pass
sys.stdout = _OutputCapture()
sys.stderr = _OutputCapture()
`);

    _ready = true;
    setStatus('🐍 Python 3.11 ready  ·  Ctrl+Enter to run', 'ready');
    if (runBtn) { runBtn.disabled = false; runBtn.textContent = '▶ Run'; }
  } catch (e) {
    setStatus('❌ Failed to load Python: ' + e.message, 'error');
  }
}

// ─── Run code ─────────────────────────────────────────────────────────────────
async function runCode() {
  if (!_ready || !_editor) return;

  const code    = _editor.getValue();
  const outEl   = document.getElementById('ide-output');
  const runBtn  = document.getElementById('ide-run-btn');

  runBtn.disabled   = true;
  runBtn.textContent = '⏳ Running…';
  outEl.textContent  = '';
  outEl.className    = 'ide-output running';

  try {
    // Reset captured streams
    _pyodide.runPython(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

    const startTime = performance.now();
    await _pyodide.runPythonAsync(code);
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(3);

    const stdout = _pyodide.runPython('sys.stdout.getvalue()');
    const stderr = _pyodide.runPython('sys.stderr.getvalue()');

    let output = '';
    if (stdout) output += stdout;
    if (stderr) output += '\n⚠️  Stderr:\n' + stderr;
    if (!output.trim()) output = '(no output)';

    outEl.textContent = output;
    outEl.className   = stderr ? 'ide-output has-error' : 'ide-output success';

    document.getElementById('ide-runtime').textContent = `⏱ ${elapsed}s`;
  } catch (err) {
    outEl.textContent = '❌ ' + err.message;
    outEl.className   = 'ide-output has-error';
  } finally {
    runBtn.disabled   = false;
    runBtn.textContent = '▶ Run';
  }
}

// ─── Clear output ─────────────────────────────────────────────────────────────
function clearOutput() {
  const outEl = document.getElementById('ide-output');
  if (outEl) { outEl.textContent = ''; outEl.className = 'ide-output'; }
  const rt = document.getElementById('ide-runtime');
  if (rt) rt.textContent = '';
}

// ─── Status bar helper ────────────────────────────────────────────────────────
function setStatus(msg, state = '') {
  const el = document.getElementById('ide-status');
  if (!el) return;
  el.textContent = msg;
  el.className   = 'ide-status ' + state;
}

// ─── Snippet library ─────────────────────────────────────────────────────────
const SNIPPETS = {
  hello: `# 👋 Hello, World!\nprint("Hello, World!")\nprint("Welcome to PyLearn IDE!")`,

  fibonacci: `# 🔢 Fibonacci sequence\ndef fibonacci(n):\n    a, b = 0, 1\n    sequence = []\n    for _ in range(n):\n        sequence.append(a)\n        a, b = b, a + b\n    return sequence\n\nprint(fibonacci(15))`,

  fizzbuzz: `# 🎮 FizzBuzz\nfor i in range(1, 31):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)`,

  listcomp: `# 📋 List comprehensions\nnumbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nsquares  = [n ** 2 for n in numbers]\nevens    = [n for n in numbers if n % 2 == 0]\neven_sq  = [n ** 2 for n in numbers if n % 2 == 0]\n\nprint("Squares:", squares)\nprint("Evens:  ", evens)\nprint("Even²:  ", even_sq)`,

  classes: `# 🏗️ Classes example\nclass Animal:\n    def __init__(self, name, sound):\n        self.name  = name\n        self.sound = sound\n\n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n\n    def __repr__(self):\n        return f"Animal({self.name!r})"\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Woof")\n\n    def fetch(self, item):\n        return f"{self.name} fetches the {item}!"\n\ndog = Dog("Rex")\nprint(dog.speak())\nprint(dog.fetch("ball"))\nprint(repr(dog))`,

  decorators: `# ✨ Decorators\nimport time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start  = time.time()\n        result = func(*args, **kwargs)\n        end    = time.time()\n        print(f"{func.__name__} took {end - start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_sum(n):\n    return sum(range(n))\n\nresult = slow_sum(1_000_000)\nprint(f"Result: {result:,}")`,

  generators: `# ⚡ Generators\ndef count_up(start, stop, step=1):\n    """A simple generator."""\n    current = start\n    while current <= stop:\n        yield current\n        current += step\n\n# Only computes values one at a time!\nfor n in count_up(1, 10, 2):\n    print(n, end=' ')\nprint()\n\n# Generator expression\ngen = (x ** 2 for x in range(1, 6))\nprint(list(gen))`,
};

function loadSnippet(key) {
  if (!_editor || !SNIPPETS[key]) return;
  _editor.setValue(SNIPPETS[key]);
  _editor.focus();
}

// ─── Font size controls ───────────────────────────────────────────────────────
let _fontSize = 14;
function changeFontSize(delta) {
  _fontSize = Math.min(24, Math.max(10, _fontSize + delta));
  const wrapper = document.querySelector('.CodeMirror');
  if (wrapper) wrapper.style.fontSize = _fontSize + 'px';
}

// ─── Download code ────────────────────────────────────────────────────────────
function downloadCode() {
  if (!_editor) return;
  const code = _editor.getValue();
  const blob = new Blob([code], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'pylearn_code.py';
  a.click();
  URL.revokeObjectURL(url);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initEditor();
  loadPyodide_();

  // Disable run button until Pyodide is ready
  const runBtn = document.getElementById('ide-run-btn');
  if (runBtn) { runBtn.disabled = true; runBtn.textContent = '⏳ Loading…'; }
});
