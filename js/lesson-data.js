// ===== PYLEARN — Lesson Data =====
// Structure: TOPICS array, each topic has a `lessons` array.
// Lesson types: 'learn' | 'practice' | 'challenge'

const TOPICS = [

// ══════════════════════════════════════════════════════
// TOPIC 1: PYTHON BASICS
// ══════════════════════════════════════════════════════
{
  id: "basics", title: "Python Basics", icon: "🐍",
  color: "#4f9cf9", bg: "rgba(79,156,249,.15)",
  description: "Print, variables, and your first programs",
  lessons: [
    // ── LEARN 1 ──────────────────────────────────────
    {
      id: "basics-learn1", title: "Hello, World!", type: "learn", xp: 10,
      content: `
<h1>Hello, World!</h1>
<div class="learn-meta"><span>⏱ 10 min</span><span>📗 Beginner</span><span>🐍 Lesson 1</span></div>

<p>Welcome to Python! Python is one of the world's most popular programming languages — it runs Instagram, Spotify, and YouTube, powers AI at Google, and is used by beginners writing their very first programs. Its superpower is being easy to read: Python code looks almost like plain English.</p>

<h2>Your First Program</h2>
<p>In almost every programming language, the very first thing you write is printing "Hello, World!" on screen. In Python, this takes exactly <strong>one line</strong>:</p>

<div class="code-block">
  <div class="cb-head"><span class="cb-label">hello.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">print("Hello, World!")</code></pre>
</div>
<div class="output-block">Hello, World!</div>

<p><code>print()</code> is a <strong>built-in function</strong> — it's built into Python and ready to use any time. It takes whatever you give it and displays it on screen.</p>

<h2>Printing Multiple Things</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">printing.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">print("Hello, World!")
print("Python is awesome!")
print("2 + 2 =", 2 + 2)     # Python calculates this!
print("My name is", "Alice")  # multiple values, separated by comma
print()                        # blank line</code></pre>
</div>
<div class="output-block">Hello, World!
Python is awesome!
2 + 2 = 4
My name is Alice
</div>

<h2>Comments</h2>
<p>Comments are notes in your code that Python ignores. Use <code>#</code> to write one. They're for humans — your future self, teammates, or anyone reading your code:</p>

<div class="code-block">
  <div class="cb-head"><span class="cb-label">comments.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python"># This is a comment — Python ignores it
print("This runs!")     # inline comment

# Comment out code to disable it temporarily:
# print("This won't run")</code></pre>
</div>

<div class="callout callout-tip">
  <span class="callout-icon">✅</span>
  <div class="callout-body"><strong>Tip:</strong> Write comments that explain <em>why</em>, not just <em>what</em>. Bad: <code># print name</code>. Good: <code># show the username so they know they're logged in</code>.</div>
</div>

<h2>Indentation — Python's Golden Rule</h2>
<p>Python uses <strong>4 spaces of indentation</strong> to group code. Unlike other languages that use <code>{}</code>, Python's structure comes from whitespace. Getting this wrong is one of the most common beginner errors:</p>

<div class="code-block">
  <div class="cb-head"><span class="cb-label">indentation.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button></div></div>
  <pre><code class="language-python">if True:
    print("This is indented — it's inside the if block")
    print("So is this")
print("This is NOT indented — it's outside")</code></pre>
</div>
`
    },

    // ── LEARN 2 ──────────────────────────────────────
    {
      id: "basics-learn2", title: "Variables & Data Types", type: "learn", xp: 10,
      content: `
<h1>Variables & Data Types</h1>
<div class="learn-meta"><span>⏱ 12 min</span><span>📗 Beginner</span><span>🐍 Lesson 2</span></div>

<p>A <strong>variable</strong> is like a labelled box that stores a value. You can put something in it, look at what's in it, and swap it out later. Variables are how programs remember things — a player's score, a user's name, a product's price.</p>

<h2>Creating Variables</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">variables.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">name    = "Alice"    # str — text
age     = 16         # int — whole number
height  = 1.75       # float — decimal number
is_cool = True       # bool — True or False

print(name)     # Alice
print(age)      # 16
print(height)   # 1.75
print(is_cool)  # True</code></pre>
</div>

<h2>The Four Core Types</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">types.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">username  = "pythonista99"   # str  — text (in quotes)
score     = 100              # int  — whole number
price     = 9.99             # float — decimal
logged_in = True             # bool — only True or False

# Check any variable's type:
print(type(username))    # &lt;class 'str'&gt;
print(type(score))       # &lt;class 'int'&gt;
print(type(price))       # &lt;class 'float'&gt;
print(type(logged_in))   # &lt;class 'bool'&gt;</code></pre>
</div>

<h2>Naming Rules</h2>
<ul>
  <li>Use lowercase with underscores: <code>player_score</code> ✅</li>
  <li>Can't start with a number: <code>2fast</code> ❌</li>
  <li>No spaces: <code>my variable</code> ❌ — use <code>my_variable</code> ✅</li>
  <li>Case-sensitive: <code>name</code> and <code>Name</code> are different variables</li>
</ul>

<h2>Changing & Swapping Variables</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">reassign.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">score = 0
score = score + 10   # read score (0), add 10, store back
score += 5           # shorthand: same as score = score + 5
print(score)         # 15

# Swap two variables — Python does this elegantly:
a, b = 10, 20
a, b = b, a
print(a, b)   # 20 10

# Type conversion
age_str = "17"
age_int = int(age_str)      # string → integer
print(age_int + 1)          # 18</code></pre>
</div>

<div class="callout callout-warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Common mistake:</strong> You can't do maths on a string even if it looks like a number. <code>"5" + 3</code> causes a TypeError. Always use <code>int("5")</code> first to convert it.</div>
</div>
`
    },

    // ── PRACTICE ─────────────────────────────────────
    {
      id: "basics-practice", title: "Quick Quiz", type: "practice", xp: 15,
      questions: [
        {
          q: "What does print(\"Hello\") do?",
          options: ["Stores 'Hello' in a variable", "Displays 'Hello' on screen", "Creates a function called Hello", "Adds 'Hello' to a list"],
          answer: 1,
          explanation: "print() is a built-in function that displays its argument on the screen."
        },
        {
          q: "Which of these is a valid Python variable name?",
          options: ["2fast", "my variable", "player_score", "class"],
          answer: 2,
          explanation: "Variable names must start with a letter or underscore, use no spaces, and can't be reserved keywords like 'class'."
        },
        {
          q: "What type is the value 3.14?",
          options: ["int", "str", "bool", "float"],
          answer: 3,
          explanation: "3.14 has a decimal point, so its type is float. Without the decimal (e.g. 3) it would be an int."
        },
        {
          q: "What is score after: score = 10; score += 5?",
          options: ["5", "10", "15", "105"],
          answer: 2,
          explanation: "score += 5 is shorthand for score = score + 5. So 10 + 5 = 15."
        },
        {
          q: "What symbol starts a comment in Python?",
          options: ["//", "/*", "#", "--"],
          answer: 2,
          explanation: "Python uses # for comments. Everything after # on that line is ignored by Python."
        }
      ]
    },

    // ── CHALLENGE ────────────────────────────────────
    {
      id: "basics-challenge", title: "About Me Program", type: "challenge", xp: 25,
      task: "Create a program that introduces yourself.",
      description: `Write a Python program that:
1. Stores your name, age, and favourite programming language in variables
2. Prints a sentence introducing yourself using those variables
3. Prints how old you'll be in 10 years
4. Includes at least one comment explaining what the program does`,
      example_output: `Hi! My name is Alice.
I am 16 years old and my favourite language is Python.
In 10 years I'll be 26!`,
      starter: `# About Me Program
# TODO: Create variables for your name, age, and favourite language

# TODO: Print an introduction using those variables

# TODO: Calculate and print your age in 10 years
`
    }
  ]
},

// ══════════════════════════════════════════════════════
// TOPIC 2: TEXT & INPUT
// ══════════════════════════════════════════════════════
{
  id: "strings", title: "Text & Input", icon: "📝",
  color: "#ffd43b", bg: "rgba(255,212,59,.15)",
  description: "Strings, f-strings, and talking to users",
  lessons: [
    {
      id: "strings-learn1", title: "Strings in Depth", type: "learn", xp: 10,
      content: `
<h1>Strings in Depth</h1>
<div class="learn-meta"><span>⏱ 15 min</span><span>📗 Beginner</span></div>

<p>A string is a sequence of characters — any text, wrapped in quotes. Python has powerful built-in tools for working with strings.</p>

<h2>Creating Strings</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">strings.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">single    = 'Hello'
double    = "World"
multiline = """This spans
multiple lines!"""

# len() counts characters
print(len("Python"))    # 6

# Indexing — starts at 0!
word = "Python"
print(word[0])    # P
print(word[-1])   # n  (last character)

# Slicing [start:stop:step]
print(word[0:3])   # Pyt
print(word[::-1])  # nohtyP  (reversed!)</code></pre>
</div>

<h2>f-Strings — The Modern Way</h2>
<p>f-strings let you embed variables and expressions directly inside a string. Add <code>f</code> before the opening quote, then use <code>{}</code> for variables:</p>

<div class="code-block">
  <div class="cb-head"><span class="cb-label">fstrings.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">name  = "Alice"
age   = 17
score = 94.567

print(f"Hello, {name}!")
print(f"You are {age} years old.")
print(f"Score: {score:.1f}%")        # .1f = 1 decimal place
print(f"Next year: {age + 1}")        # expressions work!
print(f"Uppercase: {name.upper()}")   # method calls work too!</code></pre>
</div>
<div class="output-block">Hello, Alice!
You are 17 years old.
Score: 94.6%
Next year: 18
Uppercase: ALICE</div>

<h2>Essential String Methods</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">methods.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">text = "  Hello, World!  "

print(text.upper())              # "  HELLO, WORLD!  "
print(text.lower())              # "  hello, world!  "
print(text.strip())              # "Hello, World!"  (removes spaces)
print(text.strip().replace("World", "Python"))  # "Hello, Python!"

words = "apple,banana,cherry"
print(words.split(","))          # ['apple', 'banana', 'cherry']
print(", ".join(["a", "b", "c"])) # "a, b, c"

print("World" in text)           # True
print(text.strip().count("l"))   # 3</code></pre>
</div>
`
    },

    {
      id: "strings-learn2", title: "User Input", type: "learn", xp: 10,
      content: `
<h1>User Input</h1>
<div class="learn-meta"><span>⏱ 12 min</span><span>📗 Beginner</span></div>

<p>Real programs are interactive — they ask the user for information. Python's <code>input()</code> function pauses the program and waits for the user to type something.</p>

<div class="callout callout-info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">In this IDE, when your code calls <code>input()</code>, a <strong>dialog box will appear</strong> asking you to type — just like IDLE or the terminal. Click OK when done and your code continues.</div>
</div>

<h2>Getting Input</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">input_demo.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">name = input("What is your name? ")
print(f"Hello, {name}! Nice to meet you.")</code></pre>
</div>

<div class="callout callout-warn">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body"><strong>Critical:</strong> <code>input()</code> <em>always</em> returns a string, even if the user types a number. You must convert it before doing maths.</div>
</div>

<h2>Converting Input to Numbers</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">number_input.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">age    = int(input("Enter your age: "))       # string → int
height = float(input("Enter height (m): "))   # string → float

print(f"In 10 years you'll be {age + 10}.")
print(f"Your height in cm: {height * 100:.0f}cm")</code></pre>
</div>

<h2>A Complete Interactive Program</h2>
<div class="code-block">
  <div class="cb-head"><span class="cb-label">bmi.py</span><div class="cb-actions"><button class="copy-btn" onclick="copyCode(this)">copy</button><button class="try-btn" onclick="tryCode(this)">▶ Try it</button></div></div>
  <pre><code class="language-python">print("=== BMI Calculator ===")
name   = input("Your name: ")
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))

bmi = weight / (height ** 2)
print(f"\n{name}'s BMI: {bmi:.1f}")

if bmi < 18.5:
    print("Category: Underweight")
elif bmi < 25:
    print("Category: Normal weight")
elif bmi < 30:
    print("Category: Overweight")
else:
    print("Category: Obese")</code></pre>
</div>
`
    },

    {
      id: "strings-practice", title: "Quick Quiz", type: "practice", xp: 15,
      questions: [
        {
          q: "What does this print?\n\nname = \"Alice\"\nprint(f\"Hello, {name}!\")",
          options: ["Hello, {name}!", "Hello, Alice!", "f\"Hello, Alice!\"", "Error"],
          answer: 1,
          explanation: "f-strings replace {variable} with the variable's value. So {name} becomes Alice."
        },
        {
          q: "What type does input() always return?",
          options: ["int", "float", "str", "Depends on what the user types"],
          answer: 2,
          explanation: "input() always returns a str (string), even if the user typed a number. You must convert it with int() or float()."
        },
        {
          q: "What does \"Python\"[-1] return?",
          options: ["P", "y", "n", "-1"],
          answer: 2,
          explanation: "Index -1 always refers to the last character. \"Python\"[-1] = 'n'."
        },
        {
          q: "What does \"hello world\".upper() return?",
          options: ["hello world", "Hello World", "HELLO WORLD", "HelloWorld"],
          answer: 2,
          explanation: ".upper() converts every character to uppercase."
        },
        {
          q: "What does len(\"Python\") return?",
          options: ["5", "6", "7", "Error"],
          answer: 1,
          explanation: "len() counts the characters. P-y-t-h-o-n = 6 characters."
        }
      ]
    },

    {
      id: "strings-challenge", title: "String Toolkit", type: "challenge", xp: 25,
      task: "Build a string analyser tool.",
      description: `Write a program that:
1. Asks the user to enter a sentence
2. Prints the sentence in UPPERCASE
3. Prints how many characters it has (including spaces)
4. Prints how many words it has (hint: split by space)
5. Prints the sentence reversed
6. Prints whether it contains the word "python" (case-insensitive)`,
      example_output: `Enter a sentence: I love Python programming
UPPERCASE: I LOVE PYTHON PROGRAMMING
Characters: 24
Words: 4
Reversed: gnimmargorp nohtyP evol I
Contains 'python': True`,
      starter: `# String Analyser
sentence = input("Enter a sentence: ")

# TODO: Print UPPERCASE version
# TODO: Print character count
# TODO: Print word count  
# TODO: Print reversed sentence
# TODO: Check if it contains 'python' (case-insensitive)
`
    }
  ]
},

// ══════════════════════════════════════════════════════
// TOPICS 3-10: Structured, content coming next session
// ══════════════════════════════════════════════════════
{
  id: "numbers", title: "Numbers & Maths", icon: "🔢",
  color: "#f0883e", bg: "rgba(240,136,62,.15)",
  description: "Arithmetic, operators, and the math module",
  lessons: [
    { id:"numbers-learn1",   title:"Arithmetic & Operators", type:"learn",    xp:10, content:`<h1>Arithmetic & Operators</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming in the next update!</strong> This lesson will cover: arithmetic operators (+,-,*,/,//,%,**), augmented assignment (+=,-=), operator precedence, and the math module.</div></div>` },
    { id:"numbers-learn2",   title:"Comparisons & Logic",    type:"learn",    xp:10, content:`<h1>Comparisons & Logic</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong> Covers: ==, !=, >, <, >=, <=, and, or, not, chained comparisons.</div></div>` },
    { id:"numbers-practice", title:"Quick Quiz",             type:"practice", xp:15, questions:[{q:"What does 10 % 3 return?",options:["0","1","2","3"],answer:2,explanation:"% is modulo — it returns the remainder. 10 ÷ 3 = 3 remainder 1. Wait — 10 % 3 = 1. Try it!"},{q:"What does 10 // 3 return?",options:["3","3.33","4","1"],answer:0,explanation:"// is floor division — it divides and rounds DOWN. 10 ÷ 3 = 3.33, floor = 3."},{q:"What does 2 ** 8 return?",options:["16","64","256","512"],answer:2,explanation:"** is exponentiation. 2^8 = 256."}] },
    { id:"numbers-challenge", title:"Calculator", type:"challenge", xp:25, task:"Build a simple calculator", description:"Write a program that asks for two numbers and an operation (+,-,*,/), then prints the result. Handle division by zero gracefully.", example_output:"First number: 10\nOperation: /\nSecond number: 3\nResult: 3.33", starter:"# Calculator\n# TODO: Get two numbers and an operation from the user\n# TODO: Calculate and print the result\n# TODO: Handle division by zero with if/else" }
  ]
},
{
  id: "decisions", title: "Making Decisions", icon: "🔀",
  color: "#a78bfa", bg: "rgba(167,139,250,.15)",
  description: "if, elif, else — make your code think",
  lessons: [
    { id:"decisions-learn1",   title:"If / Elif / Else",     type:"learn",    xp:10, content:`<h1>If / Elif / Else</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong> Covers: if, elif, else, nested conditions, ternary operator, truthy/falsy values.</div></div>` },
    { id:"decisions-learn2",   title:"Logical Operators",    type:"learn",    xp:10, content:`<h1>Logical Operators</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"decisions-practice", title:"Quick Quiz",           type:"practice", xp:15, questions:[{q:"What keyword checks multiple conditions?",options:["else","elseif","elif","or"],answer:2,explanation:"elif (else if) checks another condition if the previous if was False."},{q:"What is the result of: not True?",options:["True","False","None","Error"],answer:1,explanation:"not reverses a boolean. not True = False."},{q:"Which value is falsy in Python?",options:["1","-1","\"hello\"","0"],answer:3,explanation:"0 is falsy. All non-zero numbers and non-empty strings are truthy."}] },
    { id:"decisions-challenge", title:"Grade Calculator", type:"challenge", xp:25, task:"Build a grade calculator", description:"Ask the user for a test score (0-100) and print the letter grade: A (90+), B (80+), C (70+), D (60+), F (below 60). Also print 'Pass' or 'Fail'.", example_output:"Enter your score: 85\nGrade: B\nResult: Pass", starter:"# Grade Calculator\nscore = int(input('Enter your score (0-100): '))\n# TODO: Print the letter grade and Pass/Fail" }
  ]
},
{
  id: "loops", title: "Loops", icon: "🔄",
  color: "#2dd4bf", bg: "rgba(45,212,191,.15)",
  description: "for loops, while loops, break & continue",
  lessons: [
    { id:"loops-learn1",   title:"For Loops",    type:"learn",    xp:10, content:`<h1>For Loops</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong> range(), enumerate(), zip(), break, continue, nested loops.</div></div>` },
    { id:"loops-learn2",   title:"While Loops",  type:"learn",    xp:10, content:`<h1>While Loops</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"loops-practice", title:"Quick Quiz",   type:"practice", xp:15, questions:[{q:"How many times does range(5) iterate?",options:["4","5","6","Depends"],answer:1,explanation:"range(5) generates 0,1,2,3,4 — five values."},{q:"What does 'break' do inside a loop?",options:["Skips the current iteration","Exits the loop completely","Pauses the loop","Reverses the loop direction"],answer:1,explanation:"break exits the loop immediately, regardless of the condition."},{q:"What does 'continue' do?",options:["Exits the loop","Pauses execution","Skips the rest of this iteration and goes to the next","Repeats the current iteration"],answer:2,explanation:"continue skips the remaining code in the current iteration and moves to the next one."}] },
    { id:"loops-challenge", title:"Times Table", type:"challenge", xp:25, task:"Print a times table", description:"Ask the user for a number and print its times table from 1 to 12. Format each line as '3 × 4 = 12'.", example_output:"Which times table? 3\n3 × 1 = 3\n3 × 2 = 6\n...\n3 × 12 = 36", starter:"n = int(input('Which times table? '))\n# TODO: Print the times table for n" }
  ]
},
{
  id: "lists", title: "Lists & Collections", icon: "📋",
  color: "#3fb950", bg: "rgba(63,185,80,.15)",
  description: "Lists, tuples, sets, and list comprehensions",
  lessons: [
    { id:"lists-learn1",   title:"Lists in Depth",          type:"learn",    xp:10, content:`<h1>Lists in Depth</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong> Creating lists, indexing, slicing, append, insert, remove, pop, sort, list comprehensions.</div></div>` },
    { id:"lists-learn2",   title:"Tuples & Sets",           type:"learn",    xp:10, content:`<h1>Tuples & Sets</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"lists-practice", title:"Quick Quiz",              type:"practice", xp:15, questions:[{q:"What does [1,2,3][-1] return?",options:["1","2","3","Error"],answer:2,explanation:"Index -1 always returns the last element. The last element of [1,2,3] is 3."},{q:"What does append() do?",options:["Removes the last item","Adds an item to the end","Inserts at index 0","Sorts the list"],answer:1,explanation:"append() adds an item to the end of the list."},{q:"What does [x**2 for x in range(3)] produce?",options:["[1,4,9]","[0,1,4]","[0,1,2]","[1,2,3]"],answer:1,explanation:"range(3) gives 0,1,2. Squaring each: 0²=0, 1²=1, 2²=4. Result: [0, 1, 4]."}] },
    { id:"lists-challenge", title:"List Analyser", type:"challenge", xp:25, task:"Analyse a list of scores", description:"Create a list of 5 test scores, then print: the highest, lowest, average, and a sorted version of the list. Use a list comprehension to create a new list where all scores below 50 are replaced with 50.", example_output:"Scores: [72, 85, 43, 91, 67]\nHighest: 91\nLowest: 43\nAverage: 71.6\nSorted: [43, 67, 72, 85, 91]\nWith minimum 50: [72, 85, 50, 91, 67]", starter:"scores = [72, 85, 43, 91, 67]\n# TODO: Print highest, lowest, average, sorted\n# TODO: Use list comprehension to replace scores below 50 with 50" }
  ]
},
{
  id: "dicts", title: "Dictionaries", icon: "📖",
  color: "#f0883e", bg: "rgba(240,136,62,.12)",
  description: "Key-value pairs, the Swiss Army knife of Python",
  lessons: [
    { id:"dicts-learn1",   title:"Dictionaries Basics",  type:"learn",    xp:10, content:`<h1>Dictionaries</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"dicts-learn2",   title:"Dict Methods & Loops", type:"learn",    xp:10, content:`<h1>Dict Methods & Loops</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"dicts-practice", title:"Quick Quiz",           type:"practice", xp:15, questions:[{q:"How do you safely get a value from a dict without risking a KeyError?",options:["dict[key]","dict.get(key)","dict.find(key)","dict.fetch(key)"],answer:1,explanation:".get(key) returns None (or a default value) if the key doesn't exist, instead of raising a KeyError."},{q:"What does dict.items() return?",options:["All keys","All values","Key-value pairs","The length"],answer:2,explanation:".items() returns key-value pairs you can loop over with: for key, value in dict.items():"},{q:"How do you delete a key from a dict?",options:["dict.remove(key)","dict.delete(key)","del dict[key]","dict.pop_key(key)"],answer:2,explanation:"del dict[key] removes the key. Alternatively, dict.pop(key) removes it and returns the value."}] },
    { id:"dicts-challenge", title:"Contact Book", type:"challenge", xp:25, task:"Build a simple contact book", description:"Create a dictionary of 3 contacts (name → phone number). Print all contacts. Ask the user for a name and print their number (or 'Not found'). Add a new contact from user input.", example_output:"Contacts:\n  Alice: 07700 900123\n  Bob: 07700 900456\nSearch: Alice\nAlice: 07700 900123", starter:"contacts = {'Alice': '07700 900123', 'Bob': '07700 900456', 'Charlie': '07700 900789'}\n# TODO: Print all contacts\n# TODO: Search for a contact\n# TODO: Add a new contact" }
  ]
},
{
  id: "functions", title: "Functions", icon: "⚙️",
  color: "#a78bfa", bg: "rgba(167,139,250,.12)",
  description: "def, parameters, return, scope, and more",
  lessons: [
    { id:"functions-learn1",   title:"Defining Functions",        type:"learn",    xp:10, content:`<h1>Defining Functions</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"functions-learn2",   title:"*args, **kwargs & Lambda",  type:"learn",    xp:10, content:`<h1>*args, **kwargs & Lambda</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"functions-practice", title:"Quick Quiz",                type:"practice", xp:15, questions:[{q:"What does a function without a return statement return?",options:["0","False","None","Error"],answer:2,explanation:"Functions that don't explicitly return a value implicitly return None."},{q:"What does *args collect inside a function?",options:["A list of keyword arguments","A tuple of positional arguments","A dict","A set"],answer:1,explanation:"*args collects extra positional arguments into a tuple inside the function."},{q:"Which is the correct syntax for a lambda?",options:["lambda x => x*2","function(x): x*2","lambda x: x*2","def lambda(x): x*2"],answer:2,explanation:"lambda x: x*2 creates an anonymous function that doubles x."}] },
    { id:"functions-challenge", title:"Function Library", type:"challenge", xp:25, task:"Write a maths function library", description:"Write three functions: is_even(n) returns True/False, factorial(n) returns n!, celsius_to_fahrenheit(c) converts temperature. Test each one.", example_output:"is_even(4): True\nfactorial(5): 120\ncelsius_to_fahrenheit(100): 212.0", starter:"def is_even(n):\n    pass  # TODO\n\ndef factorial(n):\n    pass  # TODO\n\ndef celsius_to_fahrenheit(c):\n    pass  # TODO (formula: c * 9/5 + 32)\n\nprint(is_even(4))\nprint(factorial(5))\nprint(celsius_to_fahrenheit(100))" }
  ]
},
{
  id: "errors", title: "Errors & Files", icon: "🛡️",
  color: "#f85149", bg: "rgba(248,81,73,.12)",
  description: "try/except, reading and writing files",
  lessons: [
    { id:"errors-learn1",   title:"Error Handling",   type:"learn",    xp:10, content:`<h1>Error Handling</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"errors-learn2",   title:"Reading & Writing Files", type:"learn", xp:10, content:`<h1>Files</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"errors-practice", title:"Quick Quiz", type:"practice", xp:15, questions:[{q:"What does try/except do?",options:["Speeds up code","Catches and handles errors","Skips errors silently","Retries failed operations"],answer:1,explanation:"try/except lets you catch errors and handle them gracefully instead of crashing."},{q:"What error is raised by int('hello')?",options:["TypeError","ValueError","NameError","IndexError"],answer:1,explanation:"int('hello') raises a ValueError because 'hello' can't be converted to an integer."},{q:"Why use 'with open()' instead of just open()?",options:["It's faster","It auto-closes the file even if an error occurs","It only works for reading","It's the old way"],answer:1,explanation:"with open() is a context manager — it automatically closes the file when the block ends, even if an error occurs."}] },
    { id:"errors-challenge", title:"Safe Input", type:"challenge", xp:25, task:"Input validator", description:"Write a program that keeps asking the user for a positive integer until they enter one. Handle non-number input (ValueError) and negative numbers separately. Print a success message when valid input is received.", example_output:"Enter a positive integer: hello\nNot a number — try again.\nEnter a positive integer: -5\nMust be positive — try again.\nEnter a positive integer: 7\nGreat! You entered: 7", starter:"while True:\n    try:\n        # TODO: get input, convert to int, check positive\n        break\n    except ValueError:\n        print('Not a number — try again.')" }
  ]
},
{
  id: "oop", title: "Classes & OOP", icon: "🏗️",
  color: "#f85149", bg: "rgba(248,81,73,.1)",
  description: "Classes, objects, inheritance, and dunder methods",
  lessons: [
    { id:"oop-learn1",   title:"Classes & Objects",       type:"learn",    xp:15, content:`<h1>Classes & Objects</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"oop-learn2",   title:"Inheritance & Dunders",   type:"learn",    xp:15, content:`<h1>Inheritance</h1><div class="learn-meta"><span>Coming soon</span></div><div class="callout callout-info"><span class="callout-icon">🚧</span><div class="callout-body"><strong>Coming soon!</strong></div></div>` },
    { id:"oop-practice", title:"Quick Quiz",              type:"practice", xp:15, questions:[{q:"What is __init__ used for?",options:["To delete an object","To initialise an object's attributes when created","To print an object","To compare two objects"],answer:1,explanation:"__init__ is the constructor — it runs automatically when you create a new instance of a class, setting up its initial attributes."},{q:"What does 'self' refer to inside a method?",options:["The class itself","The parent class","The current instance","A global variable"],answer:2,explanation:"self refers to the specific instance of the class that the method is being called on."},{q:"Which keyword enables a class to inherit from another?",options:["extends","inherits","class Child(Parent):","super"],answer:2,explanation:"To inherit, you put the parent class in parentheses: class Child(Parent):"}] },
    { id:"oop-challenge", title:"Animal Kingdom", type:"challenge", xp:35, task:"Build an animal hierarchy using OOP", description:"Create an Animal base class with name, sound, and a speak() method. Create Dog and Cat subclasses. Dog should have a fetch(item) method. Create at least one of each and test all methods.", example_output:"Rex says Woof!\nWhiskers says Meow!\nRex fetches the ball!", starter:"class Animal:\n    def __init__(self, name, sound):\n        pass  # TODO\n\n    def speak(self):\n        pass  # TODO\n\nclass Dog(Animal):\n    pass  # TODO: add fetch()\n\nclass Cat(Animal):\n    pass\n\n# TODO: Create instances and test them" }
  ]
}
]; // end TOPICS

// ─── Build lookup maps ────────────────────────────────────────────────────────
const LESSON_MAP  = {};  // lessonId → { topic, lesson, topicIdx, lessonIdx }
const TOPIC_MAP   = {};  // topicId → topic

TOPICS.forEach((topic, ti) => {
  TOPIC_MAP[topic.id] = topic;
  topic.lessons.forEach((lesson, li) => {
    LESSON_MAP[lesson.id] = { topic, lesson, topicIdx: ti, lessonIdx: li };
  });
});

function getLessonById(id)  { return LESSON_MAP[id]?.lesson || null; }
function getTopicById(id)   { return TOPIC_MAP[id] || null; }
function getNextLesson(id) {
  const info = LESSON_MAP[id];
  if (!info) return null;
  const { topic, lessonIdx, topicIdx } = info;
  if (lessonIdx < topic.lessons.length - 1) return topic.lessons[lessonIdx + 1];
  if (topicIdx < TOPICS.length - 1) return TOPICS[topicIdx + 1].lessons[0];
  return null;
}
