// ===== PYLEARN - All Lesson Content =====

const LESSONS = [
  // ===== SECTION 1: BASICS =====
  {
    id: "01-intro",
    section: "1. The Basics",
    title: "Welcome to Python",
    duration: "5 min",
    icon: "🐍",
    content: `
      <h1>Welcome to Python</h1>
      <div class="lesson-meta">
        <span>⏱ 5 min</span>
        <span>📗 Beginner</span>
        <span>🐍 Lesson 1</span>
      </div>

      <p>Python is one of the world's most popular programming languages — used in web development, data science, artificial intelligence, automation, and much more. It's known for being readable and beginner-friendly.</p>

      <h2>Your First Python Program</h2>
      <p>The classic starting point for any programming language is printing "Hello, World!" to the screen. In Python, it couldn't be simpler:</p>

      <div class="code-block">
        <div class="code-block-header">
          <span class="code-block-label">hello.py</span>
          <button class="copy-btn" onclick="copyCode(this)">copy</button>
        </div>
        <pre><span class="c-fn">print</span>(<span class="c-str">"Hello, World!"</span>)</pre>
      </div>
      <div class="output-block">Hello, World!</div>

      <p>That's it — one line! In many other languages this would take 5–10 lines. This is why Python is so loved for beginners.</p>

      <h2>How Python Works</h2>
      <p>Python is an <strong>interpreted</strong> language. This means Python reads and runs your code line by line, from top to bottom. You don't need to compile it first like you would with C++ or Java.</p>

      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div class="callout-body">Python files end with <code>.py</code>. For example: <code>hello.py</code>, <code>calculator.py</code>, <code>game.py</code>.</div>
      </div>

      <h2>Comments</h2>
      <p>Comments are notes in your code that Python ignores when running. They're for humans to read. Use a <code>#</code> to write a comment:</p>

      <div class="code-block">
        <div class="code-block-header">
          <span class="code-block-label">comments.py</span>
          <button class="copy-btn" onclick="copyCode(this)">copy</button>
        </div>
        <pre><span class="c-cm"># This is a comment - Python ignores this line</span>
<span class="c-fn">print</span>(<span class="c-str">"This line runs!"</span>)   <span class="c-cm"># Inline comment</span>

<span class="c-cm"># You can also comment out code to stop it running:</span>
<span class="c-cm"># print("This won't run")</span></pre>
      </div>
      <div class="output-block">This line runs!</div>

      <div class="callout callout-tip">
        <span class="callout-icon">✅</span>
        <div class="callout-body"><strong>Good habit:</strong> Write comments to explain <em>why</em> you're doing something, not just what. Your future self will thank you!</div>
      </div>

      <div class="quiz-block">
        <h3>🧠 Quick Check</h3>
        <p style="color:var(--muted);font-size:0.9rem;margin-bottom:1rem;">What symbol is used to write a comment in Python?</p>
        <div class="quiz-options">
          <button class="quiz-opt" onclick="checkQuiz(this, false)">//</button>
          <button class="quiz-opt" onclick="checkQuiz(this, true)">#</button>
          <button class="quiz-opt" onclick="checkQuiz(this, false)">--</button>
          <button class="quiz-opt" onclick="checkQuiz(this, false)">/*</button>
        </div>
        <div class="quiz-feedback" id="quiz-feedback" style="display:none;"></div>
      </div>

      <div class="checkpoint">
        <h3>✅ Lesson Complete — You now know:</h3>
        <ul>
          <li>How to use <code>print()</code> to display output</li>
          <li>That Python runs line by line, top to bottom</li>
          <li>How to write comments with <code>#</code></li>
        </ul>
      </div>
    `
  },
  {
    id: "02-variables",
    section: "1. The Basics",
    title: "Variables & Data Types",
    duration: "10 min",
    icon: "📦",
    content: `
      <h1>Variables & Data Types</h1>
      <div class="lesson-meta"><span>⏱ 10 min</span><span>📗 Beginner</span></div>

      <p>A <strong>variable</strong> is like a labelled box that stores a value. You can put something in it, look at what's in it, and change what's in it.</p>

      <h2>Creating Variables</h2>
      <p>In Python you create a variable by simply assigning a value to a name with <code>=</code>:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">variables.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">name</span> = <span class="c-str">"Alice"</span>
<span class="c-var">age</span> = <span class="c-num">16</span>
<span class="c-var">height</span> = <span class="c-num">1.75</span>
<span class="c-var">is_student</span> = <span class="c-kw">True</span>

<span class="c-fn">print</span>(<span class="c-var">name</span>)
<span class="c-fn">print</span>(<span class="c-var">age</span>)
<span class="c-fn">print</span>(<span class="c-var">height</span>)
<span class="c-fn">print</span>(<span class="c-var">is_student</span>)</pre>
      </div>
      <div class="output-block">Alice
16
1.75
True</div>

      <h2>The Four Basic Data Types</h2>
      <p>Python has four main data types you'll use all the time:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">data_types.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-cm"># String (str) - text, wrapped in quotes</span>
<span class="c-var">my_name</span> = <span class="c-str">"Python Learner"</span>

<span class="c-cm"># Integer (int) - whole numbers</span>
<span class="c-var">score</span> = <span class="c-num">100</span>

<span class="c-cm"># Float - decimal numbers</span>
<span class="c-var">price</span> = <span class="c-num">9.99</span>

<span class="c-cm"># Boolean (bool) - True or False</span>
<span class="c-var">logged_in</span> = <span class="c-kw">True</span>

<span class="c-cm"># Check the type of a variable</span>
<span class="c-fn">print</span>(<span class="c-fn">type</span>(<span class="c-var">my_name</span>))   <span class="c-cm"># &lt;class 'str'&gt;</span>
<span class="c-fn">print</span>(<span class="c-fn">type</span>(<span class="c-var">score</span>))     <span class="c-cm"># &lt;class 'int'&gt;</span>
<span class="c-fn">print</span>(<span class="c-fn">type</span>(<span class="c-var">price</span>))     <span class="c-cm"># &lt;class 'float'&gt;</span>
<span class="c-fn">print</span>(<span class="c-fn">type</span>(<span class="c-var">logged_in</span>)) <span class="c-cm"># &lt;class 'bool'&gt;</span></pre>
      </div>

      <h2>Naming Rules</h2>
      <ul>
        <li>Use lowercase letters and underscores: <code>my_variable</code> ✅</li>
        <li>Can't start with a number: <code>2variable</code> ❌</li>
        <li>No spaces — use underscores instead: <code>my variable</code> ❌</li>
        <li>Case sensitive: <code>name</code> and <code>Name</code> are different variables</li>
      </ul>

      <h2>Changing Variables</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">change_var.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">score</span> = <span class="c-num">0</span>
<span class="c-fn">print</span>(<span class="c-var">score</span>)   <span class="c-cm"># 0</span>

<span class="c-var">score</span> = <span class="c-num">50</span>
<span class="c-fn">print</span>(<span class="c-var">score</span>)   <span class="c-cm"># 50</span>

<span class="c-var">score</span> = <span class="c-var">score</span> + <span class="c-num">10</span>  <span class="c-cm"># Add 10 to current value</span>
<span class="c-fn">print</span>(<span class="c-var">score</span>)   <span class="c-cm"># 60</span></pre>
      </div>

      <div class="quiz-block">
        <h3>🧠 Quick Check</h3>
        <p style="color:var(--muted);font-size:0.9rem;margin-bottom:1rem;">Which of these is a valid Python variable name?</p>
        <div class="quiz-options">
          <button class="quiz-opt" onclick="checkQuiz(this, false)">2fast</button>
          <button class="quiz-opt" onclick="checkQuiz(this, false)">my variable</button>
          <button class="quiz-opt" onclick="checkQuiz(this, true)">player_score</button>
          <button class="quiz-opt" onclick="checkQuiz(this, false)">class</button>
        </div>
        <div class="quiz-feedback" id="quiz-feedback" style="display:none;"></div>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to create and assign variables</li>
          <li>The four basic types: <code>str</code>, <code>int</code>, <code>float</code>, <code>bool</code></li>
          <li>Naming rules for variables</li>
          <li>How to use <code>type()</code> to check a value's type</li>
        </ul>
      </div>
    `
  },
  {
    id: "03-input-output",
    section: "1. The Basics",
    title: "Input & Output",
    duration: "8 min",
    icon: "💬",
    content: `
      <h1>Input & Output</h1>
      <div class="lesson-meta"><span>⏱ 8 min</span><span>📗 Beginner</span></div>

      <p>So far our programs just print things. Real programs <em>interact</em> with users — they ask for input and give back output. In Python this is done with <code>print()</code> and <code>input()</code>.</p>

      <h2>Getting Input</h2>
      <p><code>input()</code> pauses the program and waits for the user to type something. Whatever they type is returned as a string:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">input_basic.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">name</span> = <span class="c-fn">input</span>(<span class="c-str">"What is your name? "</span>)
<span class="c-fn">print</span>(<span class="c-str">"Hello, "</span> + <span class="c-var">name</span> + <span class="c-str">"!"</span>)</pre>
      </div>
      <div class="output-block">What is your name? Alice
Hello, Alice!</div>

      <h2>f-Strings (The Modern Way to Format Output)</h2>
      <p>Instead of joining strings with <code>+</code>, use f-strings — they're cleaner and easier to read:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">fstrings.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">name</span> = <span class="c-fn">input</span>(<span class="c-str">"Enter your name: "</span>)
<span class="c-var">age</span> = <span class="c-fn">input</span>(<span class="c-str">"Enter your age: "</span>)

<span class="c-fn">print</span>(<span class="c-str">f"Hello, <span class="c-var">{name}</span>! You are <span class="c-var">{age}</span> years old."</span>)</pre>
      </div>
      <div class="output-block">Enter your name: Sid
Enter your age: 15
Hello, Sid! You are 15 years old.</div>

      <h2>Converting Input to Numbers</h2>
      <p><strong>Important:</strong> <code>input()</code> <em>always</em> returns a string, even if the user types a number. To do maths with it, you must convert it first:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">number_input.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">age_str</span> = <span class="c-fn">input</span>(<span class="c-str">"How old are you? "</span>)
<span class="c-var">age</span> = <span class="c-fn">int</span>(<span class="c-var">age_str</span>)       <span class="c-cm"># Convert string to integer</span>

<span class="c-var">next_year</span> = <span class="c-var">age</span> + <span class="c-num">1</span>
<span class="c-fn">print</span>(<span class="c-str">f"Next year you'll be <span class="c-var">{next_year}</span>."</span>)

<span class="c-cm"># Or do it all in one line:</span>
<span class="c-var">height</span> = <span class="c-fn">float</span>(<span class="c-fn">input</span>(<span class="c-str">"Your height in metres: "</span>))</pre>
      </div>

      <div class="callout callout-warn">
        <span class="callout-icon">⚠️</span>
        <div class="callout-body"><strong>Common mistake:</strong> Forgetting to convert <code>input()</code> to a number. If you try <code>"5" + 3</code> you'll get an error — it's a string plus an integer!</div>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to get user input with <code>input()</code></li>
          <li>How to format output with f-strings</li>
          <li>How to convert strings to numbers with <code>int()</code> and <code>float()</code></li>
        </ul>
      </div>
    `
  },
  {
    id: "04-operators",
    section: "1. The Basics",
    title: "Operators & Maths",
    duration: "10 min",
    icon: "🔢",
    content: `
      <h1>Operators & Maths</h1>
      <div class="lesson-meta"><span>⏱ 10 min</span><span>📗 Beginner</span></div>

      <p>Python is great for maths. Let's explore all the arithmetic operators and some useful tricks.</p>

      <h2>Arithmetic Operators</h2>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">maths.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-fn">print</span>(<span class="c-num">10</span> + <span class="c-num">3</span>)   <span class="c-cm"># 13  - Addition</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> - <span class="c-num">3</span>)   <span class="c-cm"># 7   - Subtraction</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> * <span class="c-num">3</span>)   <span class="c-cm"># 30  - Multiplication</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> / <span class="c-num">3</span>)   <span class="c-cm"># 3.333... - Division (always gives float)</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> // <span class="c-num">3</span>)  <span class="c-cm"># 3   - Floor division (whole number)</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> % <span class="c-num">3</span>)   <span class="c-cm"># 1   - Modulo (remainder)</span>
<span class="c-fn">print</span>(<span class="c-num">10</span> ** <span class="c-num">3</span>)  <span class="c-cm"># 1000 - Exponent (power)</span></pre>
      </div>

      <h2>Shorthand Assignment Operators</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">shorthand.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">score</span> = <span class="c-num">10</span>
<span class="c-var">score</span> += <span class="c-num">5</span>   <span class="c-cm"># same as score = score + 5  → 15</span>
<span class="c-var">score</span> -= <span class="c-num">3</span>   <span class="c-cm"># same as score = score - 3  → 12</span>
<span class="c-var">score</span> *= <span class="c-num">2</span>   <span class="c-cm"># same as score = score * 2  → 24</span>
<span class="c-var">score</span> //= <span class="c-num">5</span>  <span class="c-cm"># same as score = score // 5 → 4</span>
<span class="c-fn">print</span>(<span class="c-var">score</span>)   <span class="c-cm"># 4</span></pre>
      </div>

      <h2>Useful Built-in Functions</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">builtins.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-fn">print</span>(<span class="c-fn">abs</span>(-<span class="c-num">7</span>))          <span class="c-cm"># 7      - Absolute value</span>
<span class="c-fn">print</span>(<span class="c-fn">round</span>(<span class="c-num">3.14159</span>, <span class="c-num">2</span>)) <span class="c-cm"># 3.14   - Round to 2 decimal places</span>
<span class="c-fn">print</span>(<span class="c-fn">max</span>(<span class="c-num">5</span>, <span class="c-num">12</span>, <span class="c-num">3</span>))      <span class="c-cm"># 12     - Largest value</span>
<span class="c-fn">print</span>(<span class="c-fn">min</span>(<span class="c-num">5</span>, <span class="c-num">12</span>, <span class="c-num">3</span>))      <span class="c-cm"># 3      - Smallest value</span>

<span class="c-kw">import</span> math
<span class="c-fn">print</span>(math.<span class="c-fn">sqrt</span>(<span class="c-num">16</span>))    <span class="c-cm"># 4.0    - Square root</span>
<span class="c-fn">print</span>(math.<span class="c-fn">floor</span>(<span class="c-num">3.9</span>))  <span class="c-cm"># 3      - Round down</span>
<span class="c-fn">print</span>(math.<span class="c-fn">ceil</span>(<span class="c-num">3.1</span>))   <span class="c-cm"># 4      - Round up</span></pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>All 7 arithmetic operators including <code>%</code> and <code>//</code></li>
          <li>Shorthand operators like <code>+=</code></li>
          <li>Useful built-in maths functions</li>
        </ul>
      </div>
    `
  },

  // ===== SECTION 2: CONTROL FLOW =====
  {
    id: "05-if-else",
    section: "2. Control Flow",
    title: "If / Elif / Else",
    duration: "12 min",
    icon: "🔀",
    content: `
      <h1>If / Elif / Else</h1>
      <div class="lesson-meta"><span>⏱ 12 min</span><span>📙 Beginner</span></div>

      <p>Programs need to make decisions. <strong>If statements</strong> let your code run different blocks depending on conditions.</p>

      <h2>Basic If Statement</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">if_basic.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">age</span> = <span class="c-num">18</span>

<span class="c-kw">if</span> <span class="c-var">age</span> >= <span class="c-num">18</span>:
    <span class="c-fn">print</span>(<span class="c-str">"You can vote!"</span>)
<span class="c-kw">else</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Too young to vote."</span>)</pre>
      </div>
      <div class="output-block">You can vote!</div>

      <div class="callout callout-info">
        <span class="callout-icon">💡</span>
        <div class="callout-body"><strong>Indentation matters!</strong> Python uses 4 spaces (or 1 tab) to show what's inside the if block. Unlike other languages, there are no curly braces <code>{}</code>.</div>
      </div>

      <h2>Elif — Multiple Conditions</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">grade.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">score</span> = <span class="c-fn">int</span>(<span class="c-fn">input</span>(<span class="c-str">"Enter your score: "</span>))

<span class="c-kw">if</span> <span class="c-var">score</span> >= <span class="c-num">90</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Grade: A"</span>)
<span class="c-kw">elif</span> <span class="c-var">score</span> >= <span class="c-num">80</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Grade: B"</span>)
<span class="c-kw">elif</span> <span class="c-var">score</span> >= <span class="c-num">70</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Grade: C"</span>)
<span class="c-kw">elif</span> <span class="c-var">score</span> >= <span class="c-num">60</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Grade: D"</span>)
<span class="c-kw">else</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Grade: F"</span>)</pre>
      </div>

      <h2>Comparison Operators</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">comparisons.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-fn">print</span>(<span class="c-num">5</span> == <span class="c-num">5</span>)   <span class="c-cm"># True  - Equal to</span>
<span class="c-fn">print</span>(<span class="c-num">5</span> != <span class="c-num">3</span>)   <span class="c-cm"># True  - Not equal to</span>
<span class="c-fn">print</span>(<span class="c-num">5</span> > <span class="c-num">3</span>)    <span class="c-cm"># True  - Greater than</span>
<span class="c-fn">print</span>(<span class="c-num">5</span> < <span class="c-num">3</span>)    <span class="c-cm"># False - Less than</span>
<span class="c-fn">print</span>(<span class="c-num">5</span> >= <span class="c-num">5</span>)   <span class="c-cm"># True  - Greater than or equal</span>
<span class="c-fn">print</span>(<span class="c-num">5</span> <= <span class="c-num">4</span>)   <span class="c-cm"># False - Less than or equal</span></pre>
      </div>

      <h2>Logical Operators</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">logical.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">age</span> = <span class="c-num">20</span>
<span class="c-var">has_id</span> = <span class="c-kw">True</span>

<span class="c-kw">if</span> <span class="c-var">age</span> >= <span class="c-num">18</span> <span class="c-kw">and</span> <span class="c-var">has_id</span>:    <span class="c-cm"># Both must be True</span>
    <span class="c-fn">print</span>(<span class="c-str">"Entry allowed"</span>)

<span class="c-kw">if</span> <span class="c-var">age</span> < <span class="c-num">18</span> <span class="c-kw">or</span> <span class="c-kw">not</span> <span class="c-var">has_id</span>:  <span class="c-cm"># At least one True</span>
    <span class="c-fn">print</span>(<span class="c-str">"Entry denied"</span>)</pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to write <code>if</code>, <code>elif</code>, <code>else</code> blocks</li>
          <li>All 6 comparison operators</li>
          <li>Logical operators: <code>and</code>, <code>or</code>, <code>not</code></li>
          <li>That indentation defines code blocks in Python</li>
        </ul>
      </div>
    `
  },
  {
    id: "06-loops",
    section: "2. Control Flow",
    title: "Loops: For & While",
    duration: "15 min",
    icon: "🔄",
    content: `
      <h1>Loops: For & While</h1>
      <div class="lesson-meta"><span>⏱ 15 min</span><span>📙 Beginner</span></div>

      <p>Loops let you repeat code without writing it out multiple times. Python has two types of loops: <code>for</code> and <code>while</code>.</p>

      <h2>For Loops</h2>
      <p>A <code>for</code> loop repeats code a set number of times, or for each item in a collection:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">for_loop.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-cm"># Loop 5 times using range()</span>
<span class="c-kw">for</span> <span class="c-var">i</span> <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">5</span>):
    <span class="c-fn">print</span>(<span class="c-str">f"Count: <span class="c-var">{i}</span>"</span>)

<span class="c-cm"># range(start, stop, step)</span>
<span class="c-kw">for</span> <span class="c-var">n</span> <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">1</span>, <span class="c-num">11</span>, <span class="c-num">2</span>):  <span class="c-cm"># 1,3,5,7,9</span>
    <span class="c-fn">print</span>(<span class="c-var">n</span>)</pre>
      </div>
      <div class="output-block">Count: 0
Count: 1
Count: 2
Count: 3
Count: 4</div>

      <h2>While Loops</h2>
      <p>A <code>while</code> loop keeps running as long as a condition is <code>True</code>:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">while_loop.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">lives</span> = <span class="c-num">3</span>

<span class="c-kw">while</span> <span class="c-var">lives</span> > <span class="c-num">0</span>:
    <span class="c-fn">print</span>(<span class="c-str">f"Lives remaining: <span class="c-var">{lives}</span>"</span>)
    <span class="c-var">lives</span> -= <span class="c-num">1</span>

<span class="c-fn">print</span>(<span class="c-str">"Game Over!"</span>)</pre>
      </div>
      <div class="output-block">Lives remaining: 3
Lives remaining: 2
Lives remaining: 1
Game Over!</div>

      <div class="callout callout-warn">
        <span class="callout-icon">⚠️</span>
        <div class="callout-body"><strong>Infinite loops!</strong> Always make sure your while loop condition will eventually become False. Otherwise your program will run forever. Press Ctrl+C to stop an infinite loop.</div>
      </div>

      <h2>Break & Continue</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">break_continue.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-cm"># break - exit the loop early</span>
<span class="c-kw">for</span> <span class="c-var">i</span> <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">10</span>):
    <span class="c-kw">if</span> <span class="c-var">i</span> == <span class="c-num">5</span>:
        <span class="c-kw">break</span>
    <span class="c-fn">print</span>(<span class="c-var">i</span>)   <span class="c-cm"># Prints 0, 1, 2, 3, 4</span>

<span class="c-cm"># continue - skip this iteration</span>
<span class="c-kw">for</span> <span class="c-var">i</span> <span class="c-kw">in</span> <span class="c-fn">range</span>(<span class="c-num">5</span>):
    <span class="c-kw">if</span> <span class="c-var">i</span> == <span class="c-num">2</span>:
        <span class="c-kw">continue</span>
    <span class="c-fn">print</span>(<span class="c-var">i</span>)   <span class="c-cm"># Prints 0, 1, 3, 4  (skips 2)</span></pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to use <code>for</code> loops with <code>range()</code></li>
          <li>How to write <code>while</code> loops</li>
          <li>How to use <code>break</code> and <code>continue</code></li>
        </ul>
      </div>
    `
  },

  // ===== SECTION 3: COLLECTIONS =====
  {
    id: "07-lists",
    section: "3. Collections",
    title: "Lists",
    duration: "15 min",
    icon: "📋",
    content: `
      <h1>Lists</h1>
      <div class="lesson-meta"><span>⏱ 15 min</span><span>📙 Beginner</span></div>

      <p>A <strong>list</strong> stores multiple values in a single variable — in order, with duplicates allowed. Lists are one of Python's most useful data structures.</p>

      <h2>Creating & Accessing Lists</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">lists.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">fruits</span> = [<span class="c-str">"apple"</span>, <span class="c-str">"banana"</span>, <span class="c-str">"cherry"</span>]

<span class="c-cm"># Access by index (starts at 0!)</span>
<span class="c-fn">print</span>(<span class="c-var">fruits</span>[<span class="c-num">0</span>])    <span class="c-cm"># apple</span>
<span class="c-fn">print</span>(<span class="c-var">fruits</span>[<span class="c-num">1</span>])    <span class="c-cm"># banana</span>
<span class="c-fn">print</span>(<span class="c-var">fruits</span>[-<span class="c-num">1</span>])   <span class="c-cm"># cherry (last item)</span>

<span class="c-fn">print</span>(<span class="c-fn">len</span>(<span class="c-var">fruits</span>))  <span class="c-cm"># 3 - number of items</span></pre>
      </div>

      <h2>Modifying Lists</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">modify_list.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">scores</span> = [<span class="c-num">85</span>, <span class="c-num">92</span>, <span class="c-num">78</span>]

<span class="c-var">scores</span>.<span class="c-fn">append</span>(<span class="c-num">95</span>)     <span class="c-cm"># Add to end: [85, 92, 78, 95]</span>
<span class="c-var">scores</span>.<span class="c-fn">insert</span>(<span class="c-num">0</span>, <span class="c-num">100</span>)  <span class="c-cm"># Insert at index 0</span>
<span class="c-var">scores</span>.<span class="c-fn">remove</span>(<span class="c-num">78</span>)    <span class="c-cm"># Remove first occurrence of 78</span>
<span class="c-var">scores</span>.<span class="c-fn">pop</span>()          <span class="c-cm"># Remove and return last item</span>
<span class="c-var">scores</span>.<span class="c-fn">sort</span>()         <span class="c-cm"># Sort in place</span>
<span class="c-var">scores</span>.<span class="c-fn">reverse</span>()      <span class="c-cm"># Reverse in place</span>

<span class="c-fn">print</span>(<span class="c-fn">sorted</span>(<span class="c-var">scores</span>)) <span class="c-cm"># Returns new sorted list</span></pre>
      </div>

      <h2>Looping Through Lists</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">loop_list.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">games</span> = [<span class="c-str">"Minecraft"</span>, <span class="c-str">"Fortnite"</span>, <span class="c-str">"Roblox"</span>]

<span class="c-kw">for</span> <span class="c-var">game</span> <span class="c-kw">in</span> <span class="c-var">games</span>:
    <span class="c-fn">print</span>(<span class="c-str">f"Playing: <span class="c-var">{game}</span>"</span>)

<span class="c-cm"># With index:</span>
<span class="c-kw">for</span> <span class="c-var">i</span>, <span class="c-var">game</span> <span class="c-kw">in</span> <span class="c-fn">enumerate</span>(<span class="c-var">games</span>):
    <span class="c-fn">print</span>(<span class="c-str">f"<span class="c-var">{i+1}</span>. <span class="c-var">{game}</span>"</span>)</pre>
      </div>
      <div class="output-block">1. Minecraft
2. Fortnite
3. Roblox</div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to create, access, and modify lists</li>
          <li>Key methods: <code>append</code>, <code>insert</code>, <code>remove</code>, <code>pop</code>, <code>sort</code></li>
          <li>How to loop through lists with <code>for</code> and <code>enumerate()</code></li>
        </ul>
      </div>
    `
  },
  {
    id: "08-dicts",
    section: "3. Collections",
    title: "Dictionaries",
    duration: "12 min",
    icon: "📖",
    content: `
      <h1>Dictionaries</h1>
      <div class="lesson-meta"><span>⏱ 12 min</span><span>📙 Intermediate</span></div>

      <p>A <strong>dictionary</strong> stores data in <strong>key-value pairs</strong>. Think of it like a real dictionary: you look up a word (key) to get its definition (value).</p>

      <h2>Creating & Accessing Dictionaries</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">dicts.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">player</span> = {
    <span class="c-str">"name"</span>: <span class="c-str">"Alice"</span>,
    <span class="c-str">"level"</span>: <span class="c-num">42</span>,
    <span class="c-str">"hp"</span>: <span class="c-num">100</span>,
    <span class="c-str">"alive"</span>: <span class="c-kw">True</span>
}

<span class="c-fn">print</span>(<span class="c-var">player</span>[<span class="c-str">"name"</span>])    <span class="c-cm"># Alice</span>
<span class="c-fn">print</span>(<span class="c-var">player</span>[<span class="c-str">"level"</span>])   <span class="c-cm"># 42</span>

<span class="c-cm"># Safe access with .get() (returns None if key missing)</span>
<span class="c-fn">print</span>(<span class="c-var">player</span>.<span class="c-fn">get</span>(<span class="c-str">"mana"</span>, <span class="c-num">0</span>))  <span class="c-cm"># 0 (default value)</span></pre>
      </div>

      <h2>Modifying Dictionaries</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">modify_dict.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">player</span>[<span class="c-str">"level"</span>] = <span class="c-num">43</span>         <span class="c-cm"># Update existing</span>
<span class="c-var">player</span>[<span class="c-str">"gold"</span>] = <span class="c-num">500</span>          <span class="c-cm"># Add new key</span>
<span class="c-kw">del</span> <span class="c-var">player</span>[<span class="c-str">"alive"</span>]            <span class="c-cm"># Delete a key</span>

<span class="c-cm"># Check if key exists</span>
<span class="c-kw">if</span> <span class="c-str">"name"</span> <span class="c-kw">in</span> <span class="c-var">player</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Name found!"</span>)</pre>
      </div>

      <h2>Looping Through Dictionaries</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">loop_dict.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-var">scores</span> = {<span class="c-str">"Alice"</span>: <span class="c-num">95</span>, <span class="c-str">"Bob"</span>: <span class="c-num">87</span>, <span class="c-str">"Charlie"</span>: <span class="c-num">92</span>}

<span class="c-cm"># Loop over key-value pairs</span>
<span class="c-kw">for</span> <span class="c-var">name</span>, <span class="c-var">score</span> <span class="c-kw">in</span> <span class="c-var">scores</span>.<span class="c-fn">items</span>():
    <span class="c-fn">print</span>(<span class="c-str">f"<span class="c-var">{name}</span>: <span class="c-var">{score}</span>"</span>)

<span class="c-fn">print</span>(<span class="c-fn">list</span>(<span class="c-var">scores</span>.<span class="c-fn">keys</span>()))    <span class="c-cm"># ['Alice', 'Bob', 'Charlie']</span>
<span class="c-fn">print</span>(<span class="c-fn">list</span>(<span class="c-var">scores</span>.<span class="c-fn">values</span>()))  <span class="c-cm"># [95, 87, 92]</span></pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to create and access dictionaries with key-value pairs</li>
          <li>How to add, update, and delete entries</li>
          <li>How to loop through <code>.items()</code>, <code>.keys()</code>, <code>.values()</code></li>
        </ul>
      </div>
    `
  },

  // ===== SECTION 4: FUNCTIONS =====
  {
    id: "09-functions",
    section: "4. Functions",
    title: "Defining Functions",
    duration: "15 min",
    icon: "⚙️",
    content: `
      <h1>Defining Functions</h1>
      <div class="lesson-meta"><span>⏱ 15 min</span><span>📙 Intermediate</span></div>

      <p>Functions let you write a block of code once and run it many times. They're the building blocks of well-structured programs.</p>

      <h2>Basic Functions</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">functions.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">def</span> <span class="c-fn">greet</span>():
    <span class="c-fn">print</span>(<span class="c-str">"Hello, welcome to Python!"</span>)

<span class="c-fn">greet</span>()  <span class="c-cm"># Call the function</span>
<span class="c-fn">greet</span>()  <span class="c-cm"># Can call it as many times as you want</span></pre>
      </div>

      <h2>Parameters & Arguments</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">params.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">def</span> <span class="c-fn">greet</span>(<span class="c-var">name</span>):
    <span class="c-fn">print</span>(<span class="c-str">f"Hello, <span class="c-var">{name}</span>!"</span>)

<span class="c-fn">greet</span>(<span class="c-str">"Alice"</span>)   <span class="c-cm"># Hello, Alice!</span>
<span class="c-fn">greet</span>(<span class="c-str">"Bob"</span>)     <span class="c-cm"># Hello, Bob!</span>

<span class="c-cm"># Default parameter value</span>
<span class="c-kw">def</span> <span class="c-fn">power</span>(<span class="c-var">base</span>, <span class="c-var">exp</span>=<span class="c-num">2</span>):
    <span class="c-kw">return</span> <span class="c-var">base</span> ** <span class="c-var">exp</span>

<span class="c-fn">print</span>(<span class="c-fn">power</span>(<span class="c-num">3</span>))      <span class="c-cm"># 9  (uses default exp=2)</span>
<span class="c-fn">print</span>(<span class="c-fn">power</span>(<span class="c-num">3</span>, <span class="c-num">3</span>))   <span class="c-cm"># 27</span></pre>
      </div>

      <h2>Return Values</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">return.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">def</span> <span class="c-fn">add</span>(<span class="c-var">a</span>, <span class="c-var">b</span>):
    <span class="c-kw">return</span> <span class="c-var">a</span> + <span class="c-var">b</span>

<span class="c-kw">def</span> <span class="c-fn">get_grade</span>(<span class="c-var">score</span>):
    <span class="c-kw">if</span> <span class="c-var">score</span> >= <span class="c-num">90</span>: <span class="c-kw">return</span> <span class="c-str">"A"</span>
    <span class="c-kw">elif</span> <span class="c-var">score</span> >= <span class="c-num">80</span>: <span class="c-kw">return</span> <span class="c-str">"B"</span>
    <span class="c-kw">elif</span> <span class="c-var">score</span> >= <span class="c-num">70</span>: <span class="c-kw">return</span> <span class="c-str">"C"</span>
    <span class="c-kw">else</span>: <span class="c-kw">return</span> <span class="c-str">"F"</span>

<span class="c-var">result</span> = <span class="c-fn">add</span>(<span class="c-num">5</span>, <span class="c-num">3</span>)
<span class="c-fn">print</span>(<span class="c-var">result</span>)                     <span class="c-cm"># 8</span>
<span class="c-fn">print</span>(<span class="c-fn">get_grade</span>(<span class="c-num">85</span>))              <span class="c-cm"># B</span></pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to define functions with <code>def</code></li>
          <li>How to use parameters, default values, and return values</li>
          <li>Why functions are essential for reusable code</li>
        </ul>
      </div>
    `
  },

  // ===== SECTION 5: FILES & ERRORS =====
  {
    id: "10-errors",
    section: "5. Files & Errors",
    title: "Error Handling",
    duration: "12 min",
    icon: "🛡️",
    content: `
      <h1>Error Handling</h1>
      <div class="lesson-meta"><span>⏱ 12 min</span><span>🔴 Intermediate</span></div>

      <p>Programs crash when unexpected things happen. Error handling lets you catch problems and deal with them gracefully, instead of the program just dying.</p>

      <h2>Try / Except</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">try_except.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">try</span>:
    <span class="c-var">number</span> = <span class="c-fn">int</span>(<span class="c-fn">input</span>(<span class="c-str">"Enter a number: "</span>))
    <span class="c-fn">print</span>(<span class="c-str">f"Double: <span class="c-var">{number * 2}</span>"</span>)
<span class="c-kw">except</span> ValueError:
    <span class="c-fn">print</span>(<span class="c-str">"That's not a valid number!"</span>)</pre>
      </div>
      <div class="output-block">Enter a number: hello
That's not a valid number!</div>

      <h2>Multiple Except Clauses</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">multi_except.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">try</span>:
    <span class="c-var">x</span> = <span class="c-fn">int</span>(<span class="c-fn">input</span>(<span class="c-str">"Number: "</span>))
    <span class="c-var">result</span> = <span class="c-num">100</span> / <span class="c-var">x</span>
    <span class="c-fn">print</span>(<span class="c-var">result</span>)
<span class="c-kw">except</span> ValueError:
    <span class="c-fn">print</span>(<span class="c-str">"Please enter an integer."</span>)
<span class="c-kw">except</span> ZeroDivisionError:
    <span class="c-fn">print</span>(<span class="c-str">"Cannot divide by zero!"</span>)
<span class="c-kw">except</span> Exception <span class="c-kw">as</span> <span class="c-var">e</span>:
    <span class="c-fn">print</span>(<span class="c-str">f"Unexpected error: <span class="c-var">{e}</span>"</span>)
<span class="c-kw">finally</span>:
    <span class="c-fn">print</span>(<span class="c-str">"Program finished."</span>)  <span class="c-cm"># Runs no matter what</span></pre>
      </div>

      <h2>File Operations</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">files.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-cm"># Writing to a file</span>
<span class="c-kw">with</span> <span class="c-fn">open</span>(<span class="c-str">"scores.txt"</span>, <span class="c-str">"w"</span>) <span class="c-kw">as</span> <span class="c-var">f</span>:
    <span class="c-var">f</span>.<span class="c-fn">write</span>(<span class="c-str">"Alice: 95\n"</span>)
    <span class="c-var">f</span>.<span class="c-fn">write</span>(<span class="c-str">"Bob: 87\n"</span>)

<span class="c-cm"># Reading from a file</span>
<span class="c-kw">with</span> <span class="c-fn">open</span>(<span class="c-str">"scores.txt"</span>, <span class="c-str">"r"</span>) <span class="c-kw">as</span> <span class="c-var">f</span>:
    <span class="c-var">content</span> = <span class="c-var">f</span>.<span class="c-fn">read</span>()
    <span class="c-fn">print</span>(<span class="c-var">content</span>)</pre>
      </div>

      <div class="callout callout-tip">
        <span class="callout-icon">✅</span>
        <div class="callout-body">Always use <code>with open()</code> — it automatically closes the file, even if an error occurs.</div>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to handle errors with <code>try</code> / <code>except</code></li>
          <li>Common error types: <code>ValueError</code>, <code>ZeroDivisionError</code></li>
          <li>How to read and write files with <code>open()</code></li>
        </ul>
      </div>
    `
  },

  // ===== SECTION 6: OOP =====
  {
    id: "11-oop",
    section: "6. Object-Oriented Python",
    title: "Classes & Objects",
    duration: "20 min",
    icon: "🏗️",
    content: `
      <h1>Classes & Objects</h1>
      <div class="lesson-meta"><span>⏱ 20 min</span><span>🔴 Advanced</span></div>

      <p>Object-Oriented Programming (OOP) lets you model real-world things as <strong>objects</strong> — like a Player in a game, or a BankAccount in a finance app. Each object has its own data (attributes) and behaviour (methods).</p>

      <h2>Defining a Class</h2>
      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">player.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">class</span> <span class="c-fn">Player</span>:
    <span class="c-kw">def</span> <span class="c-fn">__init__</span>(<span class="c-var">self</span>, <span class="c-var">name</span>, <span class="c-var">level</span>=<span class="c-num">1</span>):
        <span class="c-var">self</span>.name = <span class="c-var">name</span>
        <span class="c-var">self</span>.level = <span class="c-var">level</span>
        <span class="c-var">self</span>.hp = <span class="c-num">100</span>
        <span class="c-var">self</span>.gold = <span class="c-num">0</span>

    <span class="c-kw">def</span> <span class="c-fn">greet</span>(<span class="c-var">self</span>):
        <span class="c-fn">print</span>(<span class="c-str">f"Hi! I'm <span class="c-var">{self.name}</span>, Level <span class="c-var">{self.level}</span>."</span>)

    <span class="c-kw">def</span> <span class="c-fn">level_up</span>(<span class="c-var">self</span>):
        <span class="c-var">self</span>.level += <span class="c-num">1</span>
        <span class="c-var">self</span>.hp += <span class="c-num">20</span>
        <span class="c-fn">print</span>(<span class="c-str">f"<span class="c-var">{self.name}</span> levelled up to Level <span class="c-var">{self.level}</span>!"</span>)

<span class="c-cm"># Create instances (objects)</span>
<span class="c-var">p1</span> = <span class="c-fn">Player</span>(<span class="c-str">"Alice"</span>)
<span class="c-var">p2</span> = <span class="c-fn">Player</span>(<span class="c-str">"Bob"</span>, <span class="c-num">5</span>)

<span class="c-var">p1</span>.<span class="c-fn">greet</span>()       <span class="c-cm"># Hi! I'm Alice, Level 1.</span>
<span class="c-var">p1</span>.<span class="c-fn">level_up</span>()   <span class="c-cm"># Alice levelled up to Level 2!</span>
<span class="c-fn">print</span>(<span class="c-var">p2</span>.level)  <span class="c-cm"># 5</span></pre>
      </div>

      <h2>Inheritance</h2>
      <p>One class can <strong>inherit</strong> from another, gaining all its attributes and methods:</p>

      <div class="code-block">
        <div class="code-block-header"><span class="code-block-label">inheritance.py</span><button class="copy-btn" onclick="copyCode(this)">copy</button></div>
        <pre><span class="c-kw">class</span> <span class="c-fn">Mage</span>(<span class="c-fn">Player</span>):  <span class="c-cm"># Mage inherits from Player</span>
    <span class="c-kw">def</span> <span class="c-fn">__init__</span>(<span class="c-var">self</span>, <span class="c-var">name</span>):
        <span class="c-fn">super</span>().<span class="c-fn">__init__</span>(<span class="c-var">name</span>)  <span class="c-cm"># Call parent __init__</span>
        <span class="c-var">self</span>.mana = <span class="c-num">200</span>

    <span class="c-kw">def</span> <span class="c-fn">cast_spell</span>(<span class="c-var">self</span>, <span class="c-var">spell</span>):
        <span class="c-fn">print</span>(<span class="c-str">f"<span class="c-var">{self.name}</span> casts <span class="c-var">{spell}</span>!"</span>)
        <span class="c-var">self</span>.mana -= <span class="c-num">30</span>

<span class="c-var">mage</span> = <span class="c-fn">Mage</span>(<span class="c-str">"Merlin"</span>)
<span class="c-var">mage</span>.<span class="c-fn">greet</span>()             <span class="c-cm"># Inherited from Player</span>
<span class="c-var">mage</span>.<span class="c-fn">cast_spell</span>(<span class="c-str">"Fireball"</span>)  <span class="c-cm"># Mage's own method</span></pre>
      </div>

      <div class="checkpoint">
        <h3>✅ You now know:</h3>
        <ul>
          <li>How to define classes with <code>class</code> and <code>__init__</code></li>
          <li>The difference between attributes (data) and methods (behaviour)</li>
          <li>How to use <code>self</code> to refer to the current object</li>
          <li>How inheritance works with <code>super()</code></li>
        </ul>
      </div>
    `
  }
];

// Build index for quick lookup
const LESSON_MAP = {};
LESSONS.forEach((l, i) => { LESSON_MAP[l.id] = i; });
