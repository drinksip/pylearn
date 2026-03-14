// ===== PYLEARN — Lessons 1–15 (Foundations → Scope & Closures) =====

const LESSONS = [

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — THE BASICS
// ─────────────────────────────────────────────────────────────────────────────

{
  id: "01-welcome",
  section: "1. The Basics",
  title: "Welcome to Python",
  duration: "12 min",
  icon: "🐍",
  content: `
<h1>🐍 Welcome to Python</h1>
<div class="lesson-meta">
  <span>📚 Section 1 — The Basics</span>
  <span>⏱ 12 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Python is one of the world's most popular programming languages — and for good reason.
  It's readable, powerful, and runs everywhere. In this first lesson we'll cover what Python
  is, write our very first program, and understand how code actually runs.
</p>

<h2>What is Python?</h2>
<p>
  Python was created by <strong>Guido van Rossum</strong> and first released in 1991. 
  It's a <em>high-level</em>, <em>interpreted</em> language — meaning you write code that
  reads almost like plain English, and Python figures out how to run it on your machine.
</p>
<p>Python is used for:</p>
<ul>
  <li>🌐 <strong>Web development</strong> — Django, Flask, FastAPI</li>
  <li>🤖 <strong>Machine learning & AI</strong> — TensorFlow, PyTorch, scikit-learn</li>
  <li>📊 <strong>Data science</strong> — pandas, NumPy, Matplotlib</li>
  <li>🔧 <strong>Automation & scripting</strong> — saving hours of repetitive work</li>
  <li>🎮 <strong>Game development</strong> — Pygame</li>
  <li>🔬 <strong>Scientific computing</strong> — used in universities worldwide</li>
</ul>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Fun fact:</strong> Python is consistently ranked #1 or #2 in every major
    programming-language popularity survey. It's the most-taught first language at universities,
    and it powers everything from Instagram to NASA mission control scripts.
  </div>
</div>

<h2>Your Very First Program</h2>
<p>
  Every programmer's journey starts with the same two words. Here's yours:
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">hello.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">print("Hello, World!")</code></pre>
</div>
<p>
  That's it. One line. <code>print()</code> is a <strong>built-in function</strong> that
  displays text to the screen. The text inside the quotes is called a <strong>string</strong>.
  We'll explore both of those ideas in depth very soon.
</p>
<p>Let's make it a bit more interesting:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">hello2.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">print("Hello, World!")
print("My name is Python.")
print("I am", 33, "years old.")
print(2 + 2)          # Python can do maths too!</code></pre>
</div>

<h2>How to Run Python</h2>
<p>There are several ways to run Python code:</p>
<ul>
  <li>
    <strong>Right here on PyLearn</strong> — click the <a href="ide.html" style="color:var(--python-blue)">IDE tab</a>
    at the top to run Python directly in your browser. No installation needed!
  </li>
  <li>
    <strong>Install Python locally</strong> — download from <a href="https://python.org" target="_blank" style="color:var(--python-blue)">python.org</a>
    and run <code>python hello.py</code> in your terminal.
  </li>
  <li>
    <strong>Online environments</strong> — <a href="https://replit.com" target="_blank" style="color:var(--python-blue)">Replit</a>
    or <a href="https://colab.research.google.com" target="_blank" style="color:var(--python-blue)">Google Colab</a>
    let you code in the cloud for free.
  </li>
</ul>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>IDE tip:</strong> Head to the <a href="ide.html" style="color:var(--python-blue)">PyLearn IDE</a>
    and try typing <code>print("Hello, World!")</code> then pressing <kbd>Ctrl+Enter</kbd> to run it live.
    Real Python, running in your browser!
  </div>
</div>

<h2>Python Syntax Rules</h2>
<p>Unlike many languages, Python uses <strong>indentation</strong> (spaces/tabs) to structure code — no curly braces needed. Here are the three most important rules to know now:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">rules.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Rule 1: Case matters — print() works, Print() does NOT
print("hello")          # ✅ Works
# Print("hello")        # ❌ NameError

# Rule 2: Strings need quotes
# print(hello)          # ❌ NameError — Python looks for a variable called hello
print("hello")          # ✅ Works

# Rule 3: One statement per line (usually)
print("line 1")
print("line 2")</code></pre>
</div>

<h2>Comments</h2>
<p>
  A <strong>comment</strong> is a note for humans — Python ignores everything after a <code>#</code>.
  Use them to explain <em>why</em> you're doing something, not just <em>what</em>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">comments.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># This is a single-line comment

print("Hello!")  # This comment is at the end of a line

# Multi-line comments use multiple # signs
# Each line that should be ignored
# needs its own #

"""
This is a docstring — technically a string that
gets ignored when used outside a function.
Often used for multi-line notes at the top of a file.
"""

print("Comments don't affect output")</code></pre>
</div>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Common mistake:</strong> Python is <strong>case-sensitive</strong>.
    <code>print</code>, <code>Print</code>, and <code>PRINT</code> are three different things.
    Only lowercase <code>print</code> is the built-in function!
  </div>
</div>

<h2>The Python Interactive Shell</h2>
<p>
  If you install Python locally, you can type <code>python</code> (or <code>python3</code>)
  in your terminal to open the interactive shell — a live environment where every line you
  type runs immediately. It's brilliant for quick experiments.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">terminal</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">>>> print("Hello!")
Hello!
>>> 2 + 2
4
>>> "hello".upper()
'HELLO'
>>> exit()      # to quit</code></pre>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>print("Hello!")</code> do?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Stores "Hello!" in memory</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">Displays "Hello!" on the screen</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Creates a variable called Hello</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Asks the user to type Hello</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "02-variables",
  section: "1. The Basics",
  title: "Variables & Data Types",
  duration: "15 min",
  icon: "📦",
  content: `
<h1>📦 Variables &amp; Data Types</h1>
<div class="lesson-meta">
  <span>📚 Section 1 — The Basics</span>
  <span>⏱ 15 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Variables are the foundation of every program — they let us store, name, and reuse data.
  Python has several built-in data types and figures out which one to use automatically.
</p>

<h2>What is a Variable?</h2>
<p>
  Think of a variable as a <strong>labelled box</strong>. You can put a value inside the box,
  look at it later, change it, or use it in calculations. You create a variable with the
  assignment operator <code>=</code>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">variables.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">name    = "Alice"       # A string (text)
age     = 25            # An integer (whole number)
height  = 1.68          # A float (decimal number)
is_cool = True          # A boolean (True or False)

print(name)
print(age)
print(height)
print(is_cool)</code></pre>
</div>

<h2>Python's Core Data Types</h2>
<p>Python has several built-in types. The four you'll use every day are:</p>

<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">data_types.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># int — whole numbers (positive or negative, no decimal)
score    = 100
lives    = -3
big_num  = 1_000_000    # underscores are allowed for readability

# float — numbers with a decimal point
pi       = 3.14159
temp     = -12.5
price    = 9.99

# str — text, wrapped in single OR double quotes
greeting = "Hello, World!"
name     = 'Alice'
multiline = """This string
spans multiple lines."""

# bool — only two possible values
logged_in = True
game_over = False

# NoneType — represents "nothing" / absence of a value
result = None</code></pre>
</div>

<h2>The type() Function</h2>
<p>
  Not sure what type something is? Ask Python directly with <code>type()</code>:
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">type_check.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">print(type(42))          # &lt;class 'int'&gt;
print(type(3.14))        # &lt;class 'float'&gt;
print(type("hello"))     # &lt;class 'str'&gt;
print(type(True))        # &lt;class 'bool'&gt;
print(type(None))        # &lt;class 'NoneType'&gt;

x = 10
print(type(x))           # &lt;class 'int'&gt;</code></pre>
</div>

<h2>Dynamic Typing</h2>
<p>
  Python is <strong>dynamically typed</strong> — you don't declare a type; Python figures it
  out at runtime. You can even reassign a variable to a completely different type (though it's
  usually bad practice to do so!).
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dynamic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">x = 10
print(type(x))    # &lt;class 'int'&gt;

x = "hello"       # Reassigned to a string — Python is fine with this
print(type(x))    # &lt;class 'str'&gt;

x = 3.14
print(type(x))    # &lt;class 'float'&gt;</code></pre>
</div>

<h2>Variable Naming Rules</h2>
<p>You can name a variable almost anything, but there are a few rules and strong conventions:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">naming.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># ✅ Valid names
my_name    = "Alice"     # snake_case — the Python convention
age2       = 30
_private   = "hidden"    # leading underscore = "private" by convention
MAX_SIZE   = 100         # ALL_CAPS = constant by convention

# ❌ Invalid names
# 2fast = "nope"          # Can't start with a number
# my-name = "nope"        # Hyphens not allowed (that's subtraction!)
# class = "nope"          # 'class' is a reserved keyword

# ✅ Multiple assignment on one line
x, y, z = 1, 2, 3
a = b = c = 0           # All three set to 0

print(x, y, z)          # 1 2 3
print(a, b, c)          # 0 0 0</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">📖</span>
  <div class="callout-body">
    <strong>Python style (PEP 8):</strong> Variable names should be <code>snake_case</code>
    (all lowercase, words separated by underscores). Constants use
    <code>ALL_CAPS</code>. This is a convention, not enforced by Python — but everyone
    follows it, so you should too.
  </div>
</div>

<h2>Type Conversion</h2>
<p>
  You can convert between types using the type name as a function:
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">conversion.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">x = "42"
print(type(x))         # &lt;class 'str'&gt;

y = int(x)             # Convert string "42" to integer 42
print(type(y), y)      # &lt;class 'int'&gt; 42

z = float("3.14")      # String → float
print(z + 1)           # 4.140000000000001

s = str(100)           # int → string
print(s + "px")        # "100px"

# int() truncates — it does NOT round
print(int(9.9))        # 9 (not 10!)
print(int(-3.7))       # -3</code></pre>
</div>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Watch out:</strong> <code>int("hello")</code> will raise a
    <code>ValueError</code> because "hello" can't be converted to a number.
    Always make sure the conversion makes sense before calling it.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What will <code>type(3.14)</code> return?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">&lt;class 'int'&gt;</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">&lt;class 'float'&gt;</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">&lt;class 'str'&gt;</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">&lt;class 'number'&gt;</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "03-strings",
  section: "1. The Basics",
  title: "Strings in Depth",
  duration: "18 min",
  icon: "🔤",
  content: `
<h1>🔤 Strings in Depth</h1>
<div class="lesson-meta">
  <span>📚 Section 1 — The Basics</span>
  <span>⏱ 18 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Strings are everywhere in Python — they hold text, file paths, HTML, user messages, and more.
  In this lesson we go deep on everything strings can do.
</p>

<h2>Creating Strings</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">strings.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">single  = 'Hello'
double  = "World"
both    = "It's a great day"    # Single quote inside double quotes ✅
escaped = 'It\'s fine too'      # Escaped with backslash

# Triple quotes — for multi-line strings
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you."""

print(poem)

# Raw strings — backslashes are treated literally (useful for regex/paths)
path = r"C:\Users\Alice\Documents"
print(path)  # C:\Users\Alice\Documents (no escape interpretation)</code></pre>
</div>

<h2>String Indexing &amp; Slicing</h2>
<p>
  Strings are <strong>sequences</strong> — every character has an index starting at 0.
  Negative indexes count from the end.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">indexing.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">text = "Python"
#       P y t h o n
#       0 1 2 3 4 5   (positive indexes)
#      -6-5-4-3-2-1   (negative indexes)

print(text[0])     # 'P'
print(text[2])     # 't'
print(text[-1])    # 'n'  (last character)
print(text[-2])    # 'o'

# Slicing: text[start : stop : step]
print(text[0:3])   # 'Pyt'   (stop is exclusive!)
print(text[2:])    # 'thon'  (from index 2 to end)
print(text[:4])    # 'Pyth'  (from start to index 4)
print(text[::2])   # 'Pto'   (every 2nd character)
print(text[::-1])  # 'nohtyP' (reversed!)</code></pre>
</div>

<h2>Essential String Methods</h2>
<p>
  Python strings come with a rich set of methods. Methods are functions that
  "belong to" an object — you call them with dot notation: <code>string.method()</code>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">methods.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">s = "  Hello, World!  "

# Case
print(s.upper())          # '  HELLO, WORLD!  '
print(s.lower())          # '  hello, world!  '
print(s.title())          # '  Hello, World!  '
print(s.swapcase())       # '  hELLO, wORLD!  '

# Whitespace
print(s.strip())          # 'Hello, World!'
print(s.lstrip())         # 'Hello, World!  '
print(s.rstrip())         # '  Hello, World!'

# Search
print(s.find("World"))    # 9  (index of first match, -1 if not found)
print(s.count("l"))       # 3
print("World" in s)       # True

# Replace & split
print(s.replace("World", "Python"))   # '  Hello, Python!  '
words = "apple,banana,cherry".split(",")
print(words)              # ['apple', 'banana', 'cherry']
print(",".join(words))    # 'apple,banana,cherry'

# Checks
print("hello123".isalnum())    # True
print("hello".isalpha())       # True
print("123".isdigit())         # True
print("  ".isspace())          # True
print("hello".startswith("he")) # True
print("hello".endswith("lo"))   # True</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Strings are immutable.</strong> When you call <code>s.upper()</code>,
    it returns a <em>new</em> string — the original <code>s</code> is unchanged.
    Always capture the result: <code>s = s.upper()</code> if you want to update it.
  </div>
</div>

<h2>f-Strings (Formatted String Literals)</h2>
<p>
  Introduced in Python 3.6, f-strings are the modern, recommended way to embed
  variables and expressions into strings. Prefix with <code>f</code> and wrap
  expressions in curly braces <code>{}</code>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">fstrings.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">name = "Alice"
age  = 25
pi   = 3.14159

# Basic f-string
print(f"Hello, {name}!")                    # Hello, Alice!
print(f"In 10 years, you'll be {age + 10}") # In 10 years, you'll be 35

# Expressions inside {}
print(f"2 + 2 = {2 + 2}")
print(f"Name uppercase: {name.upper()}")

# Format specifiers (after a colon)
print(f"Pi to 2dp: {pi:.2f}")              # Pi to 2dp: 3.14
print(f"Pi to 4dp: {pi:.4f}")              # Pi to 4dp: 3.1416
print(f"Big number: {1_000_000:,}")        # Big number: 1,000,000
print(f"Percentage: {0.8756:.1%}")         # Percentage: 87.6%
print(f"{'centred':^20}")                  # centre align in 20 chars
print(f"{'right':>20}")                    # right align in 20 chars

# Debug format (Python 3.8+)
x = 42
print(f"{x=}")   # x=42  — great for debugging!</code></pre>
</div>

<h2>String Concatenation &amp; Repetition</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">concat.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">first = "Hello"
second = "World"

# Concatenation with +
full = first + ", " + second + "!"
print(full)    # Hello, World!

# Repetition with *
line = "-" * 30
print(line)    # ------------------------------

# len() — number of characters
print(len("Hello"))    # 5
print(len(""))         # 0</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>Performance tip:</strong> Avoid building large strings with <code>+</code>
    in a loop — use a list and <code>"".join(list)</code> instead. It's dramatically
    faster because strings are immutable (each <code>+</code> creates a new string object).
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>"Python"[::-1]</code> produce?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">"Python"</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">"Pytho"</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">"nohtyP"</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">"ython"</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "04-numbers",
  section: "1. The Basics",
  title: "Numbers & Operators",
  duration: "15 min",
  icon: "🔢",
  content: `
<h1>🔢 Numbers &amp; Operators</h1>
<div class="lesson-meta">
  <span>📚 Section 1 — The Basics</span>
  <span>⏱ 15 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Python is an excellent calculator. This lesson covers every arithmetic, comparison,
  and logical operator you'll use daily, plus the handy <code>math</code> module.
</p>

<h2>Arithmetic Operators</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">arithmetic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">a, b = 17, 5

print(a + b)    # 22    Addition
print(a - b)    # 12    Subtraction
print(a * b)    # 85    Multiplication
print(a / b)    # 3.4   True division (always returns float)
print(a // b)   # 3     Floor division (integer result, rounded DOWN)
print(a % b)    # 2     Modulo (remainder after floor division)
print(a ** b)   # 1419857  Exponentiation (a to the power of b)

# Important: // always rounds DOWN (towards -infinity)
print(7 // 2)   # 3
print(-7 // 2)  # -4   (NOT -3!)

# Useful modulo tricks
print(10 % 2)   # 0  → 10 is even
print(7 % 2)    # 1  → 7 is odd
print(15 % 12)  # 3  → great for clock/cycle arithmetic</code></pre>
</div>

<h2>Augmented Assignment Operators</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">augmented.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">score = 0

score += 10      # score = score + 10  → 10
score += 5       # → 15
score -= 3       # → 12
score *= 2       # → 24
score //= 5      # → 4
score **= 3      # → 64

print(score)     # 64</code></pre>
</div>

<h2>Comparison Operators</h2>
<p>Comparison operators return <code>True</code> or <code>False</code> (a boolean).</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">comparison.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">x, y = 10, 20

print(x == y)    # False  Equal to
print(x != y)    # True   Not equal to
print(x < y)     # True   Less than
print(x > y)     # False  Greater than
print(x <= 10)   # True   Less than or equal
print(x >= 20)   # False  Greater than or equal

# Chained comparisons — very Pythonic!
age = 25
print(18 <= age <= 65)   # True  (like 18 <= age AND age <= 65)</code></pre>
</div>

<h2>Logical Operators</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">logical.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">raining   = True
cold      = False

# and — True only if BOTH are True
print(raining and cold)      # False
print(raining and True)      # True

# or — True if AT LEAST ONE is True
print(raining or cold)       # True
print(False or cold)         # False

# not — flips the boolean
print(not raining)           # False
print(not cold)              # True

# Short-circuit evaluation
# 'and' stops at first False; 'or' stops at first True
x = 0
print(x and 1/x)    # 0  (safe — never divides by zero!)
print(x or "default")  # "default"</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Truthy &amp; Falsy values:</strong> In Python, many non-boolean values
    behave like booleans. The following are all <em>falsy</em>:
    <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>,
    <code>None</code>. Everything else is truthy. You can use this in
    conditions: <code>if my_list:</code> instead of <code>if len(my_list) > 0:</code>.
  </div>
</div>

<h2>Operator Precedence</h2>
<p>Python follows the standard mathematical order of operations (PEMDAS/BODMAS). Use parentheses when in doubt!</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">precedence.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">print(2 + 3 * 4)       # 14  (not 20 — * before +)
print((2 + 3) * 4)     # 20  (parentheses first)
print(2 ** 3 ** 2)     # 512 (exponentiation is right-associative: 2^(3^2) = 2^9)
print(10 - 3 - 2)      # 5   (subtraction is left-associative)</code></pre>
</div>

<h2>The math Module</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">math_module.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">import math

print(math.pi)          # 3.141592653589793
print(math.e)           # 2.718281828459045

print(math.sqrt(16))    # 4.0
print(math.ceil(4.2))   # 5  (round UP)
print(math.floor(4.9))  # 4  (round DOWN)
print(round(4.5))       # 4  (banker's rounding — built-in)
print(round(3.14159, 2))# 3.14

print(math.abs(-5))     # AttributeError! Use built-in abs() instead
print(abs(-5))          # 5  ✅

print(math.log(100, 10))  # 2.0  (log base 10)
print(math.log2(8))       # 3.0
print(math.sin(math.pi/2))  # 1.0</code></pre>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What is the result of <code>17 % 5</code>?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">3</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">3.4</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">2</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">85</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "05-input",
  section: "1. The Basics",
  title: "User Input",
  duration: "12 min",
  icon: "⌨️",
  content: `
<h1>⌨️ User Input</h1>
<div class="lesson-meta">
  <span>📚 Section 1 — The Basics</span>
  <span>⏱ 12 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Programs that can talk to users are far more useful than ones that just run silently.
  Python's <code>input()</code> function pauses the program and waits for the user to type something.
</p>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>PyLearn IDE note:</strong> The in-browser IDE (Pyodide) does not support
    live keyboard <code>input()</code> calls yet. To test programs that use <code>input()</code>,
    install Python locally or use <a href="https://replit.com" target="_blank" style="color:var(--python-blue)">Replit</a>.
    You can simulate input by replacing <code>input()</code> with hardcoded values while learning.
  </div>
</div>

<h2>The input() Function</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">input_basic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">name = input("What is your name? ")
print(f"Hello, {name}!")

# input() always returns a STRING — even if the user types a number
age_str = input("How old are you? ")
print(type(age_str))   # &lt;class 'str'&gt;
print(age_str)         # e.g. "25" — a string, not an int</code></pre>
</div>

<h2>Converting Input Types</h2>
<p>
  Since <code>input()</code> always returns a string, you must convert it when you need
  a number for calculations.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">input_convert.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Convert to int
age = int(input("Enter your age: "))
print(f"In 10 years you'll be {age + 10}")

# Convert to float
price = float(input("Enter a price: £"))
print(f"With 20% VAT: £{price * 1.2:.2f}")

# Combine input and conversion on one line (common pattern)
x = int(input("Enter a number: "))
y = int(input("Enter another:  "))
print(f"{x} + {y} = {x + y}")</code></pre>
</div>

<h2>A Simple Interactive Program</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">bmi_calculator.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">print("=== BMI Calculator ===")

name   = input("Your name: ")
weight = float(input("Weight (kg): "))
height = float(input("Height (m):  "))

bmi = weight / height ** 2

if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"

print(f"\nHello {name}!")
print(f"Your BMI is {bmi:.1f} — {category}")</code></pre>
</div>

<h2>Input Validation with try/except</h2>
<p>
  What if the user types "hello" when you ask for a number? Your program will crash
  with a <code>ValueError</code>. Always validate!
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">validate.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Safe integer input — keeps asking until valid
def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("  ❌ That's not a valid number. Try again.")

age = get_int("Enter your age: ")
print(f"You are {age} years old.")</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>Best practice:</strong> Never trust user input. Always validate or
    convert inside a <code>try/except</code> block. We'll cover exception handling
    in full detail in the Files &amp; Errors section.
  </div>
</div>

<h2>Multiple Inputs at Once</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">multi_input.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Ask for space-separated values on one line
# e.g. user types: 10 20 30
numbers = input("Enter three numbers separated by spaces: ").split()
a, b, c = int(numbers[0]), int(numbers[1]), int(numbers[2])
print(f"Sum: {a + b + c}")

# Shorter with map()
a, b, c = map(int, input("Three numbers: ").split())
print(f"Average: {(a + b + c) / 3:.2f}")</code></pre>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ The user types <code>42</code> when asked by <code>input()</code>. What type is the result?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">int</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">float</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">str</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">number</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — CONTROL FLOW
// ─────────────────────────────────────────────────────────────────────────────

{
  id: "06-if-else",
  section: "2. Control Flow",
  title: "If / Elif / Else",
  duration: "16 min",
  icon: "🔀",
  content: `
<h1>🔀 If / Elif / Else</h1>
<div class="lesson-meta">
  <span>📚 Section 2 — Control Flow</span>
  <span>⏱ 16 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Programs need to make decisions. The <code>if</code> statement lets you run different
  code depending on whether a condition is true or false — it's one of the most
  fundamental tools in programming.
</p>

<h2>The if Statement</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">if_basic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">temperature = 35

if temperature > 30:
    print("It's hot outside!")
    print("Remember to drink water.")

# The indented block runs ONLY if the condition is True
# If condition is False, the block is skipped entirely</code></pre>
</div>

<h2>if / else</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">if_else.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">age = 16

if age >= 18:
    print("You can vote!")
else:
    print(f"You need to wait {18 - age} more year(s).")</code></pre>
</div>

<h2>if / elif / else</h2>
<p>
  Use <code>elif</code> (short for "else if") to check multiple conditions in sequence.
  Python evaluates them top to bottom and stops at the first match.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">grade.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">score = 72

if score >= 90:
    grade = "A"
    message = "Excellent!"
elif score >= 80:
    grade = "B"
    message = "Great work!"
elif score >= 70:
    grade = "C"
    message = "Good job."
elif score >= 60:
    grade = "D"
    message = "You passed."
else:
    grade = "F"
    message = "Please review the material."

print(f"Score: {score} → Grade: {grade}. {message}")
# Score: 72 → Grade: C. Good job.</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Order matters.</strong> Python checks conditions top to bottom and runs the
    <em>first block whose condition is True</em>. Put the most specific/restrictive
    conditions first, and broad/catch-all conditions last.
  </div>
</div>

<h2>Nested Conditions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">nested.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">username = "alice"
password = "secret123"

if username == "alice":
    if password == "secret123":
        print("✅ Welcome, Alice!")
    else:
        print("❌ Wrong password.")
else:
    print("❌ Unknown user.")

# Same logic, flattened with 'and' (usually cleaner):
if username == "alice" and password == "secret123":
    print("✅ Welcome, Alice!")
else:
    print("❌ Login failed.")</code></pre>
</div>

<h2>Truthy &amp; Falsy Values in Conditions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">truthy.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">name = ""
if name:
    print(f"Hello, {name}!")
else:
    print("No name provided.")   # ← runs, because "" is falsy

items = [1, 2, 3]
if items:
    print(f"Found {len(items)} items")  # ← runs, non-empty list is truthy

count = 0
if count:                                # 0 is falsy
    print("Has items")
else:
    print("Empty")                       # ← runs</code></pre>
</div>

<h2>Ternary (Conditional) Expression</h2>
<p>A one-line shorthand for simple if/else:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">ternary.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">age = 20

# Long form
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Ternary: value_if_true if condition else value_if_false
status = "adult" if age >= 18 else "minor"
print(status)   # adult

# Works in f-strings too
print(f"You are {'old enough' if age >= 18 else 'too young'} to vote.")</code></pre>
</div>

<h2>match / case (Python 3.10+)</h2>
<p>Python 3.10 introduced structural pattern matching — a powerful alternative to long elif chains:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">match.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">command = "go north"

match command.split():
    case ["go", direction]:
        print(f"Going {direction}!")
    case ["pick", "up", item]:
        print(f"Picking up {item}!")
    case ["quit"] | ["exit"]:
        print("Bye!")
    case _:
        print(f"Unknown command: {command}")</code></pre>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ If <code>score = 85</code>, what grade does the grade example above print?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">A</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">B</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">C</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">D</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "07-for-loops",
  section: "2. Control Flow",
  title: "For Loops",
  duration: "18 min",
  icon: "🔁",
  content: `
<h1>🔁 For Loops</h1>
<div class="lesson-meta">
  <span>📚 Section 2 — Control Flow</span>
  <span>⏱ 18 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Loops let you repeat code without copy-pasting. The <code>for</code> loop iterates over
  any sequence — numbers, strings, lists, and more — running a block of code for each item.
</p>

<h2>for with range()</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">range_loops.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># range(stop) — 0 to stop-1
for i in range(5):
    print(i)       # 0 1 2 3 4

# range(start, stop)
for i in range(1, 6):
    print(i)       # 1 2 3 4 5

# range(start, stop, step)
for i in range(0, 21, 5):
    print(i)       # 0 5 10 15 20

# Counting down
for i in range(10, 0, -1):
    print(i)       # 10 9 8 7 6 5 4 3 2 1
print("Blast off! 🚀")</code></pre>
</div>

<h2>Iterating Over Sequences</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">iterating.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># String — character by character
for char in "Python":
    print(char, end=" ")   # P y t h o n

print()  # newline

# List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Tuple
coordinates = (10, 20, 30)
for coord in coordinates:
    print(coord)

# Dictionary (iterates over keys by default)
person = {"name": "Alice", "age": 25, "city": "London"}
for key in person:
    print(f"{key}: {person[key]}")</code></pre>
</div>

<h2>break and continue</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">break_continue.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># break — exit the loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)           # 0 1 2 3 4

# continue — skip rest of THIS iteration, go to next
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)           # 1 3 5 7 9

# for...else — else block runs if loop completed without break
for n in range(2, 10):
    for factor in range(2, n):
        if n % factor == 0:
            break
    else:
        print(f"{n} is prime")  # 2 3 5 7</code></pre>
</div>

<h2>enumerate() — Index and Value Together</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">enumerate.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]

# Without enumerate — clunky
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# With enumerate — Pythonic ✅
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Start counting from 1
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}. {fruit}")
# 1. apple
# 2. banana
# 3. cherry</code></pre>
</div>

<h2>zip() — Loop Over Multiple Sequences</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">zip_loop.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">names  = ["Alice", "Bob", "Charlie"]
scores = [92, 78, 85]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
# Alice: 92
# Bob: 78
# Charlie: 85

# zip stops at the shortest sequence
a = [1, 2, 3, 4, 5]
b = ["a", "b", "c"]
print(list(zip(a, b)))  # [(1, 'a'), (2, 'b'), (3, 'c')]</code></pre>
</div>

<h2>Nested Loops</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">nested_loops.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} × {j} = {i * j}")
    print("---")

# Loop over 2D list
grid = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]

for row in grid:
    for cell in row:
        print(cell, end=" ")
    print()</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>Pythonic tip:</strong> If you just need to run a loop a fixed number of
    times and don't need the index value, use <code>_</code> as the variable name.
    It signals "I'm intentionally ignoring this": <code>for _ in range(5): ...</code>
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>range(2, 10, 3)</code> produce?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">2, 4, 6, 8</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">2, 5, 8</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">3, 6, 9</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">2, 5, 8, 11</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "08-while-loops",
  section: "2. Control Flow",
  title: "While Loops",
  duration: "14 min",
  icon: "🔄",
  content: `
<h1>🔄 While Loops</h1>
<div class="lesson-meta">
  <span>📚 Section 2 — Control Flow</span>
  <span>⏱ 14 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  A <code>while</code> loop keeps running as long as a condition remains <code>True</code>.
  Use it when you don't know in advance how many times the loop will run.
</p>

<h2>Basic While Loop</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">while_basic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">count = 1

while count <= 5:
    print(f"Count: {count}")
    count += 1     # ← CRUCIAL: without this, infinite loop!

print("Done!")

# Output:
# Count: 1
# Count: 2
# Count: 3
# Count: 4
# Count: 5
# Done!</code></pre>
</div>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Infinite loops!</strong> If the condition never becomes False, the loop runs
    forever and freezes your program. Always make sure something in the loop body will
    eventually make the condition False, or use <code>break</code> to exit.
  </div>
</div>

<h2>while True with break</h2>
<p>
  A very common pattern: loop forever until a specific exit condition is met.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">while_true.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Number guessing game
import random
secret = random.randint(1, 10)
attempts = 0

while True:
    guess = int(input("Guess (1-10): "))
    attempts += 1

    if guess == secret:
        print(f"🎉 Correct! Took {attempts} attempt(s).")
        break
    elif guess < secret:
        print("Too low! Try again.")
    else:
        print("Too high! Try again.")</code></pre>
</div>

<h2>while with else</h2>
<p>Just like <code>for</code>, a <code>while</code> loop can have an <code>else</code> clause that runs when the condition becomes False (but <em>not</em> if exited via <code>break</code>):</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">while_else.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">attempts = 0
max_attempts = 3
password = "python123"

while attempts < max_attempts:
    pwd = input("Enter password: ")
    if pwd == password:
        print("✅ Access granted!")
        break
    attempts += 1
    print(f"❌ Wrong. {max_attempts - attempts} attempts left.")
else:
    print("🔒 Account locked — too many failed attempts.")</code></pre>
</div>

<h2>Practical While Loop Patterns</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">patterns.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Pattern 1: Input validation
while True:
    age = input("Enter your age: ")
    if age.isdigit() and int(age) > 0:
        age = int(age)
        break
    print("Please enter a positive number.")

# Pattern 2: Menu loop
while True:
    print("\\n1. Add  2. View  3. Quit")
    choice = input("Choice: ")
    if choice == "1":
        print("Adding...")
    elif choice == "2":
        print("Viewing...")
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid option.")

# Pattern 3: Countdown timer
import time
countdown = 5
while countdown > 0:
    print(countdown)
    # time.sleep(1)  # pause 1 second (won't work in browser IDE)
    countdown -= 1
print("Go! 🚀")</code></pre>
</div>

<h2>pass — The Do-Nothing Statement</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">pass_stmt.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># pass is a placeholder — it does nothing but satisfies Python's
# requirement for an indented block

while True:
    pass   # TODO: implement loop body later

# Useful in empty function/class definitions too:
def placeholder():
    pass   # Will implement later</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>for vs while:</strong> Use <code>for</code> when you know how many iterations
    you need (or when iterating over a collection). Use <code>while</code> when the number
    of iterations depends on runtime conditions.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What happens if you use <code>while True:</code> without a <code>break</code>?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Python raises a SyntaxError</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">The loop runs forever (infinite loop)</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">The loop runs exactly 10 times then stops</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Python automatically adds a break after 100 iterations</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — COLLECTIONS
// ─────────────────────────────────────────────────────────────────────────────

{
  id: "09-list-comprehensions",
  section: "3. Collections",
  title: "List Comprehensions",
  duration: "14 min",
  icon: "⚡",
  content: `
<h1>⚡ List Comprehensions</h1>
<div class="lesson-meta">
  <span>📚 Section 3 — Collections</span>
  <span>⏱ 14 min</span>
  <span>🟡 Intermediate</span>
</div>

<p class="lesson-intro">
  List comprehensions are one of Python's most elegant features. They let you create
  lists in a single expressive line — and are often faster than equivalent <code>for</code>
  loops too.
</p>

<h2>Basic Syntax</h2>
<p>The pattern is: <code>[expression for item in iterable]</code></p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">basic_comp.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Old way: for loop + append
squares_old = []
for n in range(1, 6):
    squares_old.append(n ** 2)

# New way: list comprehension ✅
squares = [n ** 2 for n in range(1, 6)]
print(squares)   # [1, 4, 9, 16, 25]

# More examples
doubles   = [n * 2   for n in range(1, 11)]
names     = ["Alice", "Bob", "Charlie"]
upper     = [name.upper() for name in names]
lengths   = [len(name)    for name in names]

print(doubles)   # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
print(upper)     # ['ALICE', 'BOB', 'CHARLIE']
print(lengths)   # [5, 3, 7]</code></pre>
</div>

<h2>Filtered Comprehensions</h2>
<p>Add an <code>if</code> clause to filter items: <code>[expression for item in iterable if condition]</code></p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">filtered.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">numbers = range(1, 21)

evens        = [n for n in numbers if n % 2 == 0]
odds         = [n for n in numbers if n % 2 != 0]
big_squares  = [n ** 2 for n in numbers if n ** 2 > 100]

print(evens)       # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
print(odds)        # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(big_squares) # [121, 144, 169, 196, 225, 256, 289, 324, 361, 400]

# Filtering strings
words = ["hello", "world", "python", "hi", "code"]
long_words = [w for w in words if len(w) > 4]
print(long_words)  # ['hello', 'world', 'python']

# Clean up a list of strings
raw = ["  alice ", "BOB", "  Charlie  "]
clean = [name.strip().title() for name in raw]
print(clean)  # ['Alice', 'Bob', 'Charlie']</code></pre>
</div>

<h2>if/else in Comprehensions</h2>
<p>
  You can use a ternary expression <em>before</em> the <code>for</code> to transform items:
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">ternary_comp.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">numbers = range(1, 11)

# Label each number as even or odd
labels = ["even" if n % 2 == 0 else "odd" for n in numbers]
print(labels)
# ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

# Replace negative numbers with 0 (clamp to zero)
data = [5, -3, 2, -1, 8, -7, 4]
clamped = [n if n >= 0 else 0 for n in data]
print(clamped)  # [5, 0, 2, 0, 8, 0, 4]</code></pre>
</div>

<h2>Nested Comprehensions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">nested_comp.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat   = [cell for row in matrix for cell in row]
print(flat)   # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create a multiplication table as a 2D list
table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for row in table:
    print(row)</code></pre>
</div>

<h2>Dictionary &amp; Set Comprehensions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dict_set_comp.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">names = ["Alice", "Bob", "Charlie"]

# Dict comprehension: {key: value for ...}
name_lengths = {name: len(name) for name in names}
print(name_lengths)   # {'Alice': 5, 'Bob': 3, 'Charlie': 7}

# Invert a dictionary
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(inverted)       # {1: 'a', 2: 'b', 3: 'c'}

# Set comprehension: {expression for ...}  → no duplicates
words = ["hello", "world", "hello", "python", "world"]
unique_lengths = {len(w) for w in words}
print(unique_lengths) # {5, 6} (order not guaranteed)</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>When NOT to use comprehensions:</strong> Keep them on one readable line.
    If your comprehension is getting complex (multiple nested loops + conditions),
    break it out into a regular <code>for</code> loop with clear variable names.
    Readability wins.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>[x for x in range(10) if x % 3 == 0]</code> produce?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">[1, 4, 7]</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">[0, 3, 6, 9]</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">[3, 6, 9]</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">[0, 3, 6]</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "10-lists",
  section: "3. Collections",
  title: "Lists in Depth",
  duration: "20 min",
  icon: "📋",
  content: `
<h1>📋 Lists in Depth</h1>
<div class="lesson-meta">
  <span>📚 Section 3 — Collections</span>
  <span>⏱ 20 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Lists are Python's most versatile data structure. They're ordered, changeable, and can
  hold any mix of data types. Master lists and you'll unlock the door to most Python programs.
</p>

<h2>Creating &amp; Accessing Lists</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">lists_create.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Creating lists
empty    = []
numbers  = [1, 2, 3, 4, 5]
mixed    = [42, "hello", 3.14, True, None]
nested   = [[1, 2], [3, 4], [5, 6]]

# Accessing by index (same rules as strings)
fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])    # 'apple'
print(fruits[-1])   # 'date'
print(fruits[1:3])  # ['banana', 'cherry']
print(fruits[::-1]) # ['date', 'cherry', 'banana', 'apple']

# Modifying — lists ARE mutable
fruits[0] = "avocado"
print(fruits)  # ['avocado', 'banana', 'cherry', 'date']

# Length
print(len(fruits))  # 4</code></pre>
</div>

<h2>Essential List Methods</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">list_methods.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">fruits = ["apple", "banana", "cherry"]

# Adding items
fruits.append("date")          # add to end
fruits.insert(1, "avocado")    # insert at index 1
fruits.extend(["elderberry", "fig"])  # add multiple

print(fruits)
# ['apple', 'avocado', 'banana', 'cherry', 'date', 'elderberry', 'fig']

# Removing items
fruits.remove("banana")    # remove first occurrence of value
popped = fruits.pop()      # remove & return last item
popped2 = fruits.pop(0)    # remove & return item at index 0
del fruits[0]              # delete by index

# Searching
nums = [3, 1, 4, 1, 5, 9, 2, 6, 5]
print(nums.index(5))       # 4 (first occurrence)
print(nums.count(1))       # 2
print(5 in nums)           # True
print(10 in nums)          # False

# Info
print(min(nums))           # 1
print(max(nums))           # 9
print(sum(nums))           # 36</code></pre>
</div>

<h2>Sorting Lists</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">sorting.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">nums = [3, 1, 4, 1, 5, 9, 2, 6]

# .sort() modifies IN PLACE
nums.sort()
print(nums)        # [1, 1, 2, 3, 4, 5, 6, 9]

nums.sort(reverse=True)
print(nums)        # [9, 6, 5, 4, 3, 2, 1, 1]

# sorted() returns a NEW sorted list, original unchanged
original = [3, 1, 4, 1, 5]
new_list = sorted(original)
print(original)   # [3, 1, 4, 1, 5] — unchanged
print(new_list)   # [1, 1, 3, 4, 5]

# Sort strings
words = ["banana", "Apple", "cherry", "date"]
words.sort()                          # Uppercase first!
print(words)   # ['Apple', 'banana', 'cherry', 'date']

words.sort(key=str.lower)             # Case-insensitive sort
print(words)   # ['Apple', 'banana', 'cherry', 'date']

# Sort by custom key
people = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
people.sort(key=lambda x: x[1])      # Sort by age
print(people)  # [('Bob', 25), ('Alice', 30), ('Charlie', 35)]</code></pre>
</div>

<h2>Copying Lists (Watch Out!)</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">copy_list.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">original = [1, 2, 3]

# ❌ This does NOT create a copy — just another reference
alias = original
alias.append(4)
print(original)   # [1, 2, 3, 4]  — original was changed!

# ✅ These create a REAL copy (shallow)
copy1 = original.copy()
copy2 = original[:]
copy3 = list(original)

copy1.append(99)
print(original)   # [1, 2, 3, 4]  — untouched
print(copy1)      # [1, 2, 3, 4, 99]

# Deep copy (for nested lists)
import copy
nested    = [[1, 2], [3, 4]]
deep_copy = copy.deepcopy(nested)
deep_copy[0].append(99)
print(nested)     # [[1, 2], [3, 4]]    — untouched
print(deep_copy)  # [[1, 2, 99], [3, 4]]</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Lists vs Tuples:</strong> Use a <strong>list</strong> when the data may change
    (adding, removing, reordering items). Use a <strong>tuple</strong> when the data is fixed
    and shouldn't change. Tuples are also slightly faster and can be used as dictionary keys.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>[1, 2, 3].pop()</code> return?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">1</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Nothing — it just removes the item</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">3</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">The entire list [1, 2, 3]</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "11-tuples-sets",
  section: "3. Collections",
  title: "Tuples & Sets",
  duration: "14 min",
  icon: "🔷",
  content: `
<h1>🔷 Tuples &amp; Sets</h1>
<div class="lesson-meta">
  <span>📚 Section 3 — Collections</span>
  <span>⏱ 14 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Python's collections toolkit includes tuples (ordered, immutable) and sets (unordered,
  unique items). Each has specific use cases where it outshines lists and dictionaries.
</p>

<h2>Tuples — Ordered and Immutable</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">tuples.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Creating tuples
empty   = ()
single  = (42,)           # Note the trailing comma! (42) is just an int
colors  = ("red", "green", "blue")
mixed   = (1, "hello", 3.14)

# Access just like lists
print(colors[0])    # 'red'
print(colors[-1])   # 'blue'
print(colors[1:])   # ('green', 'blue')

# Immutable — you CANNOT modify a tuple
# colors[0] = "purple"   # ❌ TypeError!

# But you can reassign the variable
colors = ("purple",) + colors[1:]
print(colors)  # ('purple', 'green', 'blue')

# Tuples support all read operations
print(len(colors))            # 3
print("green" in colors)      # True
print(colors.count("green"))  # 1
print(colors.index("blue"))   # 2</code></pre>
</div>

<h2>Tuple Packing &amp; Unpacking</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">unpacking.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Packing — wrapping values into a tuple
point = 10, 20, 30   # parentheses optional!
print(point)         # (10, 20, 30)

# Unpacking — assigning tuple elements to variables
x, y, z = point
print(x, y, z)       # 10 20 30

# Swap variables with tuple unpacking (no temp variable needed!)
a, b = 1, 2
a, b = b, a
print(a, b)          # 2 1

# Extended unpacking with *
first, *rest = [1, 2, 3, 4, 5]
print(first)   # 1
print(rest)    # [2, 3, 4, 5]

*head, last = [1, 2, 3, 4, 5]
print(head)    # [1, 2, 3, 4]
print(last)    # 5

# Functions returning multiple values use tuples
def min_max(numbers):
    return min(numbers), max(numbers)   # Returns a tuple

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {lo}, Max: {hi}")  # Min: 1, Max: 9</code></pre>
</div>

<h2>Sets — Unique Values, No Order</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">sets.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Creating sets
empty_set = set()          # Note: {} creates an empty DICT, not set!
nums      = {1, 2, 3, 4, 5}
mixed     = {1, "hello", 3.14}

# Sets automatically remove duplicates
words = {"apple", "banana", "apple", "cherry", "banana"}
print(words)   # {'apple', 'banana', 'cherry'} — order varies!

# Remove duplicates from a list
data = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(data))
print(unique)  # [1, 2, 3, 4] (order may vary)

# Modifying sets
nums.add(6)
nums.remove(3)       # Raises KeyError if not present
nums.discard(99)     # Safe: no error if missing
nums.pop()           # Remove and return an arbitrary element
print(nums)</code></pre>
</div>

<h2>Set Operations</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">set_ops.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">python_devs = {"Alice", "Bob", "Charlie", "Diana"}
js_devs     = {"Bob", "Eve", "Charlie", "Frank"}

# Union — all unique elements from both sets
both = python_devs | js_devs
print(both)   # {'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'}

# Intersection — only elements in BOTH sets
both_langs = python_devs & js_devs
print(both_langs)   # {'Bob', 'Charlie'}

# Difference — in first set but NOT in second
python_only = python_devs - js_devs
print(python_only)  # {'Alice', 'Diana'}

# Symmetric difference — in one or the other, but NOT both
either = python_devs ^ js_devs
print(either)       # {'Alice', 'Diana', 'Eve', 'Frank'}

# Subset / superset checks
small = {"Bob", "Charlie"}
print(small.issubset(python_devs))   # True
print(python_devs.issuperset(small)) # True</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>Performance:</strong> Checking <code>x in my_set</code> is <em>O(1)</em> — instant,
    regardless of set size. Checking <code>x in my_list</code> is <em>O(n)</em> — it scans
    every element. For large lookups, always use a set or dictionary instead of a list.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>{1, 2, 2, 3, 3, 3}</code> evaluate to?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">{1, 2, 2, 3, 3, 3} — sets keep duplicates</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">{1, 2, 3} — sets only keep unique values</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">[1, 2, 3] — it converts to a list</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">SyntaxError</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "12-dictionaries",
  section: "3. Collections",
  title: "Dictionaries in Depth",
  duration: "18 min",
  icon: "📖",
  content: `
<h1>📖 Dictionaries in Depth</h1>
<div class="lesson-meta">
  <span>📚 Section 3 — Collections</span>
  <span>⏱ 18 min</span>
  <span>🟡 Intermediate</span>
</div>

<p class="lesson-intro">
  Dictionaries store data as <strong>key-value pairs</strong> — like a real dictionary
  where you look up a word (key) to find its definition (value). They're
  incredibly fast and are at the heart of Python itself.
</p>

<h2>Creating &amp; Accessing Dictionaries</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dicts_basic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Creating
empty = {}
person = {
    "name":   "Alice",
    "age":    25,
    "city":   "London",
    "skills": ["Python", "SQL"]   # values can be any type
}

# Accessing values
print(person["name"])      # 'Alice'
print(person["skills"])    # ['Python', 'SQL']

# KeyError if key doesn't exist
# print(person["email"])   # ❌ KeyError

# .get() — safe access with optional default
print(person.get("email"))           # None
print(person.get("email", "N/A"))    # 'N/A'

# Check if key exists
print("name" in person)    # True
print("email" in person)   # False</code></pre>
</div>

<h2>Modifying Dictionaries</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dicts_modify.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">person = {"name": "Alice", "age": 25}

# Add or update
person["email"] = "alice@example.com"   # Add new key
person["age"]   = 26                    # Update existing key

# Update multiple keys at once
person.update({"city": "London", "age": 27})
print(person)

# Remove items
del person["email"]              # Removes key (KeyError if missing)
age = person.pop("age")          # Remove and return value
last = person.popitem()          # Remove and return last (key, value) pair

# Clear everything
person.clear()
print(person)   # {}</code></pre>
</div>

<h2>Key Dictionary Methods</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dict_methods.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">scores = {"Alice": 92, "Bob": 78, "Charlie": 85}

print(scores.keys())    # dict_keys(['Alice', 'Bob', 'Charlie'])
print(scores.values())  # dict_values([92, 78, 85])
print(scores.items())   # dict_items([('Alice', 92), ('Bob', 78), ('Charlie', 85)])

# Convert to lists
key_list = list(scores.keys())
val_list = list(scores.values())

# Iterating
for name, score in scores.items():
    print(f"{name}: {score}")

# setdefault — set key only if it doesn't exist
scores.setdefault("Dave", 0)    # Sets Dave:0 (non-destructive)
scores.setdefault("Alice", 0)   # Alice already exists — unchanged

print(scores)
# {'Alice': 92, 'Bob': 78, 'Charlie': 85, 'Dave': 0}</code></pre>
</div>

<h2>Nested Dictionaries</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">nested_dicts.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">users = {
    "alice": {
        "email":   "alice@example.com",
        "age":     25,
        "scores":  [92, 88, 95]
    },
    "bob": {
        "email":   "bob@example.com",
        "age":     30,
        "scores":  [78, 82, 79]
    }
}

# Access nested values
print(users["alice"]["email"])     # alice@example.com
print(users["bob"]["scores"][0])   # 78

# Iterate over all users
for username, data in users.items():
    avg = sum(data["scores"]) / len(data["scores"])
    print(f"{username}: avg score = {avg:.1f}")</code></pre>
</div>

<h2>Dictionary Comprehensions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">dict_comp.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Build from two lists
keys   = ["a", "b", "c"]
values = [1, 2, 3]
d = {k: v for k, v in zip(keys, values)}
print(d)   # {'a': 1, 'b': 2, 'c': 3}

# Filter a dictionary
scores = {"Alice": 92, "Bob": 55, "Charlie": 78, "Dave": 48}
passing = {k: v for k, v in scores.items() if v >= 60}
print(passing)   # {'Alice': 92, 'Charlie': 78}

# Transform values
doubled = {k: v * 2 for k, v in scores.items()}
print(doubled)   # {'Alice': 184, 'Bob': 110, 'Charlie': 156, 'Dave': 96}</code></pre>
</div>

<h2>collections.defaultdict</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">defaultdict.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">from collections import defaultdict

# Never raises KeyError — provides a default value automatically
word_count = defaultdict(int)   # default value is int() → 0

text = "the quick brown fox jumps over the lazy dog the"
for word in text.split():
    word_count[word] += 1

print(dict(sorted(word_count.items(), key=lambda x: -x[1])[:5]))
# {'the': 3, 'quick': 1, 'brown': 1, 'fox': 1, 'jumps': 1}

# defaultdict with list
from collections import defaultdict
groups = defaultdict(list)
data = [("fruit", "apple"), ("veg", "carrot"), ("fruit", "banana")]
for category, item in data:
    groups[category].append(item)

print(dict(groups))
# {'fruit': ['apple', 'banana'], 'veg': ['carrot']}</code></pre>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does <code>d.get("missing_key", "default")</code> return if "missing_key" isn't in <code>d</code>?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Raises a KeyError</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">None</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">"default"</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">An empty dict {}</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────

{
  id: "13-functions",
  section: "4. Functions",
  title: "Defining Functions",
  duration: "18 min",
  icon: "⚙️",
  content: `
<h1>⚙️ Defining Functions</h1>
<div class="lesson-meta">
  <span>📚 Section 4 — Functions</span>
  <span>⏱ 18 min</span>
  <span>🟢 Beginner</span>
</div>

<p class="lesson-intro">
  Functions are the fundamental building blocks of well-structured code. They let you give
  a name to a block of code, reuse it anywhere, and break complex problems into smaller,
  manageable pieces. The rule: <em>Don't Repeat Yourself (DRY)</em>.
</p>

<h2>Defining &amp; Calling Functions</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">functions_basic.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Define a function with 'def'
def greet():
    print("Hello!")
    print("Welcome to Python.")

# Call it
greet()   # Hello!  Welcome to Python.
greet()   # Can call as many times as you like

# With a parameter
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")    # Hello, Alice!
greet_person("Bob")      # Hello, Bob!</code></pre>
</div>

<h2>Parameters &amp; Arguments</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">params.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def add(a, b):
    return a + b

# Positional arguments — order matters
result = add(3, 5)
print(result)     # 8

# Keyword arguments — order doesn't matter
result = add(b=5, a=3)
print(result)     # 8

# Multiple parameters
def describe_pet(name, animal="dog"):   # default parameter
    print(f"{name} is a {animal}.")

describe_pet("Rex")             # Rex is a dog.    (uses default)
describe_pet("Whiskers", "cat") # Whiskers is a cat.
describe_pet("Tweety", animal="bird")   # Keyword arg</code></pre>
</div>

<h2>Return Values</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">return_values.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def square(n):
    return n ** 2

def is_even(n):
    return n % 2 == 0    # Returns a bool

def divide(a, b):
    if b == 0:
        return None      # Early return on bad input
    return a / b

# Use return values
x  = square(5)
print(x)                 # 25
print(is_even(10))       # True

result = divide(10, 0)
if result is None:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")

# Functions without return → implicitly return None
def greet(name):
    print(f"Hi {name}!")

val = greet("Alice")    # Hi Alice!
print(val)              # None</code></pre>
</div>

<h2>Returning Multiple Values</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">multi_return.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def stats(numbers):
    """Calculate basic statistics for a list of numbers."""
    n      = len(numbers)
    total  = sum(numbers)
    mean   = total / n
    low    = min(numbers)
    high   = max(numbers)
    return n, total, mean, low, high    # Returns a tuple

data = [4, 8, 2, 7, 1, 9, 3, 6, 5]
count, total, average, minimum, maximum = stats(data)

print(f"Count:   {count}")
print(f"Total:   {total}")
print(f"Average: {average:.2f}")
print(f"Range:   {minimum} – {maximum}")</code></pre>
</div>

<h2>Docstrings</h2>
<p>
  A docstring is a string literal as the first line of a function — it documents what the
  function does. Access it with <code>help(func)</code> or <code>func.__doc__</code>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">docstrings.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def celsius_to_fahrenheit(celsius):
    """
    Convert a temperature from Celsius to Fahrenheit.

    Args:
        celsius (float): Temperature in degrees Celsius.

    Returns:
        float: Temperature in degrees Fahrenheit.

    Example:
        >>> celsius_to_fahrenheit(0)
        32.0
        >>> celsius_to_fahrenheit(100)
        212.0
    """
    return celsius * 9/5 + 32

print(celsius_to_fahrenheit(0))     # 32.0
print(celsius_to_fahrenheit(100))   # 212.0
help(celsius_to_fahrenheit)         # Prints the docstring</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <strong>Single Responsibility Principle:</strong> Each function should do
    <em>one thing</em> and do it well. If you're using "and" to describe what a function
    does — "it validates the input <em>and</em> saves to the database" — split it into
    two functions.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ What does a function return if it has no <code>return</code> statement?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">0</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">An empty string ""</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">None</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Raises a ValueError</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "14-advanced-functions",
  section: "4. Functions",
  title: "Advanced Functions",
  duration: "20 min",
  icon: "🧠",
  content: `
<h1>🧠 Advanced Functions</h1>
<div class="lesson-meta">
  <span>📚 Section 4 — Functions</span>
  <span>⏱ 20 min</span>
  <span>🟡 Intermediate</span>
</div>

<p class="lesson-intro">
  Python functions are incredibly powerful. This lesson covers variable argument lists,
  lambda functions, higher-order functions, and a first look at decorators.
</p>

<h2>*args — Variable Positional Arguments</h2>
<p>
  Use <code>*args</code> when a function should accept any number of positional arguments.
  Inside the function, <code>args</code> is a <strong>tuple</strong>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">args.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def total(*args):
    """Sum any number of arguments."""
    print(f"Args received: {args}")   # It's a tuple
    return sum(args)

print(total(1, 2))              # 3
print(total(1, 2, 3, 4, 5))    # 15
print(total())                  # 0

# Mix with regular parameters
def greet(greeting, *names):
    for name in names:
        print(f"{greeting}, {name}!")

greet("Hello", "Alice", "Bob", "Charlie")
# Hello, Alice!
# Hello, Bob!
# Hello, Charlie!

# Unpack a list into positional args with *
nums = [1, 2, 3]
print(total(*nums))    # Same as total(1, 2, 3) → 6</code></pre>
</div>

<h2>**kwargs — Variable Keyword Arguments</h2>
<p>
  Use <code>**kwargs</code> for any number of keyword arguments.
  Inside the function, <code>kwargs</code> is a <strong>dictionary</strong>.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">kwargs.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def build_profile(**kwargs):
    """Build a user profile from keyword arguments."""
    print(f"Profile data: {kwargs}")
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

build_profile(name="Alice", age=25, city="London")
# Profile data: {'name': 'Alice', 'age': 25, 'city': 'London'}

# Full signature: positional, *args, keyword, **kwargs
def log(level, *messages, prefix="LOG", **meta):
    print(f"[{prefix}/{level}] {' '.join(messages)}")
    for k, v in meta.items():
        print(f"  {k}={v}")

log("INFO", "User logged in", "Session started",
    prefix="AUTH", user_id=42, ip="127.0.0.1")</code></pre>
</div>

<h2>Lambda Functions</h2>
<p>
  A <strong>lambda</strong> is an anonymous (nameless) function defined in a single line.
  Syntax: <code>lambda parameters: expression</code>
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">lambda.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python"># Regular function
def double(x):
    return x * 2

# Equivalent lambda
double_lambda = lambda x: x * 2
print(double_lambda(5))   # 10

# Common use: as a sorting key
people = [("Alice", 30), ("Charlie", 25), ("Bob", 35)]
people.sort(key=lambda p: p[1])  # Sort by age
print(people)
# [('Charlie', 25), ('Alice', 30), ('Bob', 35)]

# Lambda with multiple parameters
add   = lambda a, b: a + b
print(add(3, 5))    # 8

# Conditional lambda
clamp = lambda x, lo, hi: lo if x < lo else (hi if x > hi else x)
print(clamp(5, 1, 10))   # 5
print(clamp(-5, 1, 10))  # 1
print(clamp(15, 1, 10))  # 10</code></pre>
</div>

<h2>map() and filter()</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">map_filter.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map(function, iterable) — apply function to each element
squares = list(map(lambda n: n ** 2, numbers))
print(squares)   # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# filter(function, iterable) — keep elements where function returns True
evens = list(filter(lambda n: n % 2 == 0, numbers))
print(evens)     # [2, 4, 6, 8, 10]

# sorted() with key
words = ["banana", "apple", "cherry", "date"]
by_length  = sorted(words, key=len)
by_last    = sorted(words, key=lambda w: w[-1])
print(by_length)   # ['date', 'apple', 'banana', 'cherry']
print(by_last)     # ['banana', 'apple', 'date', 'cherry']

# Note: list comprehensions are often cleaner than map/filter
squares2 = [n ** 2 for n in numbers]
evens2   = [n for n in numbers if n % 2 == 0]</code></pre>
</div>

<h2>Decorators — A First Look</h2>
<p>
  A <strong>decorator</strong> is a function that wraps another function to add behaviour
  without modifying the original. The <code>@</code> syntax is just syntactic sugar.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">decorators.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">import time

# Define a decorator
def timer(func):
    def wrapper(*args, **kwargs):
        start  = time.time()
        result = func(*args, **kwargs)
        end    = time.time()
        print(f"⏱ {func.__name__} took {(end - start) * 1000:.2f}ms")
        return result
    return wrapper

# Apply the decorator
@timer
def slow_calculation(n):
    return sum(range(n))

result = slow_calculation(1_000_000)
print(f"Result: {result:,}")
# ⏱ slow_calculation took 45.23ms
# Result: 499,999,500,000

# Without @ syntax (equivalent):
# slow_calculation = timer(slow_calculation)</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Decorator use cases:</strong> timing, logging, caching (use
    <code>@functools.lru_cache</code>), authentication checks, retry logic, and much more.
    Flask and Django use decorators extensively: <code>@app.route("/home")</code>,
    <code>@login_required</code>.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ Inside a function, what type is <code>**kwargs</code>?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">A list</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">A tuple</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">A dictionary</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">A set</button>
  <div class="quiz-feedback"></div>
</div>
`
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "15-scope",
  section: "4. Functions",
  title: "Scope & Closures",
  duration: "18 min",
  icon: "🔭",
  content: `
<h1>🔭 Scope &amp; Closures</h1>
<div class="lesson-meta">
  <span>📚 Section 4 — Functions</span>
  <span>⏱ 18 min</span>
  <span>🟡 Intermediate</span>
</div>

<p class="lesson-intro">
  Understanding scope is essential to writing bug-free Python. Variables live in
  different "scopes" — and Python has clear, predictable rules for finding them.
  Closures take that a step further and are the foundation of decorators and functional patterns.
</p>

<h2>The LEGB Rule</h2>
<p>
  When Python looks up a variable name, it searches scopes in this order:
</p>
<ul>
  <li><strong>L</strong>ocal — inside the current function</li>
  <li><strong>E</strong>nclosing — in any enclosing (outer) function</li>
  <li><strong>G</strong>lobal — at the module (file) level</li>
  <li><strong>B</strong>uilt-in — Python's built-in names (<code>print</code>, <code>len</code>, etc.)</li>
</ul>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">legb.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">x = "global"       # G — Global scope

def outer():
    x = "enclosing"    # E — Enclosing scope

    def inner():
        x = "local"    # L — Local scope
        print(x)       # "local"  (L wins)

    inner()
    print(x)           # "enclosing"  (E, since L doesn't exist here)

outer()
print(x)               # "global"  (G, since L/E don't exist here)

# Built-in scope: print, len, range, etc. are in B
print(len("hello"))    # len is found in Built-in scope</code></pre>
</div>

<h2>Local vs Global Scope</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">scope.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">counter = 0   # Global variable

def increment():
    # This creates a LOCAL variable 'counter', does NOT change global
    counter = 10     # New local variable!
    print(f"Inside:  {counter}")

increment()
print(f"Outside: {counter}")   # Still 0 — global unchanged

# Reading a global is fine:
name = "Alice"
def print_name():
    print(name)     # Can read global without issues

print_name()   # Alice</code></pre>
</div>

<h2>The global Keyword</h2>
<p>Use <code>global</code> to explicitly modify a global variable from inside a function:</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">global_kw.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">count = 0

def increment():
    global count    # Tell Python: I mean the global 'count'
    count += 1

def reset():
    global count
    count = 0

increment()
increment()
increment()
print(count)    # 3

reset()
print(count)    # 0</code></pre>
</div>

<div class="callout callout-warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <strong>Use <code>global</code> sparingly.</strong> Functions that modify global state
    are harder to test and debug. Prefer passing values as arguments and returning results —
    it keeps functions self-contained and predictable.
  </div>
</div>

<h2>Closures</h2>
<p>
  A <strong>closure</strong> is an inner function that remembers the variables from its
  enclosing scope, even after the outer function has finished running.
</p>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">closure.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def make_counter(start=0):
    """Returns a counter function that remembers its own count."""
    count = start    # This variable lives in the closure

    def counter():
        nonlocal count   # Access the enclosing variable
        count += 1
        return count

    return counter   # Return the inner function itself

# Each call to make_counter creates a SEPARATE closure
counter_a = make_counter()
counter_b = make_counter(10)

print(counter_a())   # 1
print(counter_a())   # 2
print(counter_a())   # 3

print(counter_b())   # 11  — completely independent!
print(counter_a())   # 4   — a's counter is unaffected</code></pre>
</div>

<h2>The nonlocal Keyword</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">nonlocal.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def make_adder(n):
    """Factory: returns a function that adds n to its argument."""
    def adder(x):
        return x + n    # n is from enclosing scope (closure)
    return adder

add5  = make_adder(5)
add10 = make_adder(10)

print(add5(3))    # 8
print(add10(3))   # 13
print(add5(add10(1)))  # add10(1)=11, add5(11)=16</code></pre>
</div>

<h2>Practical Closure: Memoisation</h2>
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-label">memoize.py</span>
    <button class="copy-btn" onclick="copyCode(this)">copy</button>
  </div>
  <pre><code class="language-python">def memoize(func):
    """Cache results so repeated calls are instant."""
    cache = {}    # Stored in the closure

    def wrapper(*args):
        if args not in cache:
            print(f"  Computing {func.__name__}{args}...")
            cache[args] = func(*args)
        else:
            print(f"  Cache hit for {args}!")
        return cache[args]

    return wrapper

@memoize
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))   # Computes each value once, then uses cache
print(fibonacci(10))   # Instant — from cache!

# Python's built-in version:
from functools import lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

print(fib(50))   # Super fast due to caching!</code></pre>
</div>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <strong>Closures underpin decorators.</strong> When you write <code>@timer</code>,
    Python calls <code>timer(func)</code> and the returned <code>wrapper</code>
    function is a closure — it "closes over" the original <code>func</code> variable.
  </div>
</div>

<div class="quiz-block">
  <p class="quiz-q">❓ In the LEGB rule, what does "E" stand for?</p>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">External</button>
  <button class="quiz-opt" data-correct onclick="checkQuiz(this, true)">Enclosing</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Exported</button>
  <button class="quiz-opt" onclick="checkQuiz(this, false)">Exception</button>
  <div class="quiz-feedback"></div>
</div>
`
}

]; // end LESSONS array
