// ===== PYLEARN — IDE (Pyodide + CodeMirror) =====
// input() works like a real terminal — browser prompt() dialog appears.

var _editor  = null;   // var so it's on window
var _pyodide = null;
var _ready   = false;

// ─── CodeMirror init ──────────────────────────────────────────────────────────
function initEditor(textareaId, opts) {
  textareaId = textareaId || 'ide-editor';
  opts       = opts       || {};

  const ta = document.getElementById(textareaId);
  if (!ta) { console.warn('initEditor: no element #' + textareaId); return null; }
  if (typeof CodeMirror === 'undefined') { console.warn('CodeMirror not loaded'); return null; }

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
      Tab: function(cm) {
        if (cm.somethingSelected()) cm.indentSelection('add');
        else cm.replaceSelection('    ', 'end');
      },
      // Ctrl/Cmd+Enter: run whatever editor is active on this page
      'Ctrl-Enter': function() { _triggerRun(); },
      'Cmd-Enter':  function() { _triggerRun(); }
    }
  });

  editor.setSize('100%', '100%');
  return editor;
}

// Trigger the run function appropriate for the current page
function _triggerRun() {
  if (typeof runLesson === 'function') {
    runLesson();              // lesson.html
  } else if (typeof runCode === 'function') {
    runCode(_editor);         // ide.html
  }
}

// ─── Pyodide loader ───────────────────────────────────────────────────────────
async function loadPyodideRuntime(statusId, runBtnId) {
  statusId  = statusId  || 'ide-status';
  runBtnId  = runBtnId  || 'ide-run-btn';

  const statusEl = document.getElementById(statusId);
  const runBtn   = document.getElementById(runBtnId);

  _setStatus(statusEl, '⏳ Loading Python 3.11…', 'loading');
  if (runBtn) { runBtn.disabled = true; runBtn.textContent = '⏳ Loading…'; }

  try {
    _pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/'
    });

    // Override input() to use browser prompt() — blocks like a real terminal
    _pyodide.runPython(`
import builtins, sys, io, js

def _pylearn_input(prompt=''):
    result = js.window.prompt(str(prompt) if prompt else '')
    if result is None:
        return ''
    return str(result)

builtins.input = _pylearn_input
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`);

    _ready = true;
    _setStatus(statusEl, '🐍 Python 3.11 ready — Ctrl+Enter to run', 'ready');
    if (runBtn) { runBtn.disabled = false; runBtn.textContent = '▶ Run'; }

  } catch(e) {
    _setStatus(statusEl, '❌ Failed to load Python: ' + e.message, 'error');
    console.error('Pyodide load error:', e);
  }
}

// ─── Run code ─────────────────────────────────────────────────────────────────
// Parameters all have sensible defaults for ide.html.
// lesson.html passes its own IDs explicitly.
async function runCode(editorRef, outputId, runBtnId, runtimeId, statusId) {
  outputId  = outputId  || 'ide-output';
  runBtnId  = runBtnId  || 'ide-run-btn';
  runtimeId = runtimeId || 'ide-runtime';
  // statusId: if not passed, try to find any status element on the page
  if (!statusId) {
    statusId = document.getElementById('lesson-ide-status') ? 'lesson-ide-status' : 'ide-status';
  }

  const cm      = editorRef || _editor;
  const outEl   = document.getElementById(outputId);
  const runBtn  = document.getElementById(runBtnId);
  const rtEl    = document.getElementById(runtimeId);
  const statEl  = document.getElementById(statusId);

  if (!_ready) {
    if (outEl) outEl.textContent = '⏳ Python is still loading — please wait a moment.';
    return;
  }
  if (!cm) {
    if (outEl) outEl.textContent = '❌ Editor not initialised.';
    return;
  }
  if (!outEl) { console.warn('runCode: no output element #' + outputId); return; }

  const code = cm.getValue().trim();
  if (!code) return;

  // Disable run button
  if (runBtn) { runBtn.disabled = true; runBtn.textContent = '⏳ Running…'; }
  outEl.textContent = '';
  outEl.className   = outEl.className.replace(/\bhas-error\b|\bsuccess\b/g, '').trim();

  // Reset stdout/stderr
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
    if (stderr) out += (out ? '\n' : '') + '── stderr ──\n' + stderr;
    if (!out.trim()) out = '(no output)';

    outEl.textContent = out;
    outEl.className   += stderr ? ' has-error' : ' success';
    if (rtEl) rtEl.textContent = '⏱ ' + elapsed + 's';
    _setStatus(statEl, '🐍 Ran in ' + elapsed + 's', 'ready');

  } catch(err) {
    const msg = _cleanError(err.message);
    outEl.textContent = msg;
    outEl.className  += ' has-error';
    _setStatus(statEl, '❌ Error — see output below', 'error');
    if (rtEl) rtEl.textContent = '';

  } finally {
    if (runBtn) { runBtn.disabled = false; runBtn.textContent = '▶ Run'; }
  }
}

// ─── Error cleanup ────────────────────────────────────────────────────────────
// Keep Python tracebacks, strip JS engine noise
function _cleanError(msg) {
  if (!msg) return 'An unknown error occurred.';
  const keep = [];
  for (const line of msg.split('\n')) {
    const t = line.trim();
    if (!t)                          continue; // blank
    if (t.startsWith('at '))         continue; // JS stack frame
    if (t.includes('pyodide.asm'))   continue; // Pyodide internals
    if (t.includes('webpack://'))    continue; // bundler noise
    if (t.includes('_pylearn_input'))continue; // our input shim
    keep.push(line);
  }
  return keep.join('\n') || msg;
}

// ─── Status bar helper ────────────────────────────────────────────────────────
// Works regardless of the element's existing classes — only adds/removes
// the state modifier class.
function _setStatus(el, msg, state) {
  if (!el) return;
  state = state || '';
  el.textContent = msg;
  // Remove any previous state classes
  el.classList.remove('ready', 'loading', 'error');
  if (state) el.classList.add(state);
}

// ─── Snippets ────────────────────────────────────────────────────────────────
var SNIPPETS = {
  hello:      '# 👋 Hello, World!\nprint("Hello, World!")\nname = input("What\'s your name? ")\nprint(f"Nice to meet you, {name}!")',
  input_demo: '# 💬 input() demo\nname = input("Enter your name: ")\nage  = int(input("Enter your age: "))\nprint(f"Hello, {name}! You are {age} years old.")\nprint(f"In 10 years you\'ll be {age + 10}.")',
  fizzbuzz:   '# 🎮 FizzBuzz\nfor i in range(1, 31):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
  fibonacci:  '# 🔢 Fibonacci\ndef fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        print(a, end=" ")\n        a, b = b, a + b\n    print()\nfib(15)',
  listcomp:   '# 📋 List comprehensions\nnumbers = list(range(1, 11))\nsquares = [n**2 for n in numbers]\nevens   = [n for n in numbers if n % 2 == 0]\nprint("Numbers:", numbers)\nprint("Squares:", squares)\nprint("Evens:  ", evens)',
  classes:    '# 🏗️ Classes\nclass Animal:\n    def __init__(self, name, sound):\n        self.name  = name\n        self.sound = sound\n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Woof")\n    def fetch(self, item):\n        return f"{self.name} fetches the {item}!"\n\ndog = Dog("Rex")\nprint(dog.speak())\nprint(dog.fetch("ball"))',
  decorators: '# ✨ Decorators\nimport time\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start  = time.time()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__}: {time.time()-start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef count_sum(n):\n    return sum(range(n))\n\nprint(f"Result: {count_sum(1_000_000):,}")',
  generators: '# ⚡ Generators\ndef fib_gen():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\ngen     = fib_gen()\nfirst10 = [next(gen) for _ in range(10)]\nprint("Fibonacci:", first10)\ntotal   = sum(x**2 for x in range(1000))\nprint("Sum of squares 0-999:", total)',
};

function loadSnippet(key, cm) {
  var editor = cm || _editor;
  if (!editor || !SNIPPETS[key]) return;
  editor.setValue(SNIPPETS[key]);
  editor.focus();
}

// ─── Font size ────────────────────────────────────────────────────────────────
var _fontSize = 14;
function changeFontSize(delta) {
  _fontSize = Math.min(22, Math.max(11, _fontSize + (delta || 0)));
  document.querySelectorAll('.CodeMirror').forEach(function(el) {
    el.style.fontSize = _fontSize + 'px';
  });
}

// ─── Download ────────────────────────────────────────────────────────────────
function downloadCode(cm, filename) {
  var editor = cm || _editor;
  filename   = filename || 'pylearn_code.py';
  if (!editor) return;
  var blob = new Blob([editor.getValue()], { type: 'text/plain' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

// ─── Clear output ─────────────────────────────────────────────────────────────
function clearOutput(outputId, runtimeId) {
  outputId  = outputId  || 'ide-output';
  runtimeId = runtimeId || 'ide-runtime';
  var outEl = document.getElementById(outputId);
  var rtEl  = document.getElementById(runtimeId);
  if (outEl) { outEl.textContent = ''; outEl.className = outEl.className.replace(/\bhas-error\b|\bsuccess\b/g,'').trim(); }
  if (rtEl)  rtEl.textContent = '';
}
