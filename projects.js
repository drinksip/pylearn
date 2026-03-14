// ===== PYLEARN - Project Challenges =====

const PROJECTS = [
  // BEGINNER
  {
    id: "p1",
    title: "Number Guessing Game",
    difficulty: "beginner",
    icon: "🎲",
    skills: ["variables", "input/output", "while loops", "if/else", "random"],
    description: "Build a game where the computer picks a random number and the player guesses it. Give hints like 'Too high!' or 'Too low!' after each guess.",
    hints: [
      "Use <code>import random</code> and <code>random.randint(1, 100)</code> to generate a number",
      "Use a <code>while</code> loop that runs until the guess is correct",
      "Count how many guesses it took and display it at the end"
    ],
    starter: `import random

# TODO: Generate a random number between 1 and 100
secret = ???

guesses = 0

# TODO: Loop until the player guesses correctly
while True:
    guess = int(input("Guess a number (1-100): "))
    guesses += 1
    
    # TODO: Compare guess to secret and give hints
    ???

print(f"You got it in {guesses} guesses!")`
  },
  {
    id: "p2",
    title: "Simple Calculator",
    difficulty: "beginner",
    icon: "🧮",
    skills: ["functions", "input/output", "if/else", "error handling"],
    description: "Create a calculator that asks the user for two numbers and an operation (+, -, *, /). Handle division by zero gracefully.",
    hints: [
      "Write separate functions for each operation: <code>add(a, b)</code>, <code>subtract(a, b)</code>, etc.",
      "Use a dictionary to map operation symbols to functions",
      "Wrap the division function in a try/except to catch ZeroDivisionError"
    ],
    starter: `def add(a, b):
    return a + b

# TODO: Add subtract, multiply, divide functions

def calculate():
    num1 = float(input("First number: "))
    op = input("Operation (+, -, *, /): ")
    num2 = float(input("Second number: "))
    
    # TODO: Check which operation and call the right function
    ???

calculate()`
  },
  {
    id: "p3",
    title: "To-Do List App",
    difficulty: "beginner",
    icon: "✅",
    skills: ["lists", "loops", "input/output", "functions"],
    description: "Build a command-line to-do list manager. Users can add tasks, view all tasks, mark them as done, and delete them.",
    hints: [
      "Store tasks as a list of dictionaries: <code>{\"task\": \"Do homework\", \"done\": False}</code>",
      "Use a main <code>while True</code> loop with a menu of options",
      "Show task numbers when listing so users can reference them to complete/delete"
    ],
    starter: `tasks = []

def show_menu():
    print("\\n=== TO-DO LIST ===")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark done")
    print("4. Delete task")
    print("5. Quit")

# TODO: Write add_task(), view_tasks(), mark_done(), delete_task() functions

while True:
    show_menu()
    choice = input("Choose: ")
    # TODO: Handle each menu option`
  },
  {
    id: "p4",
    title: "Word Counter",
    difficulty: "beginner",
    icon: "📝",
    skills: ["strings", "dictionaries", "loops", "sorting"],
    description: "Write a program that reads a paragraph of text and counts how many times each word appears. Display the top 10 most common words.",
    hints: [
      "Use <code>.lower().split()</code> to split text into lowercase words",
      "Use a dictionary to count word frequencies",
      "Use <code>sorted(word_count.items(), key=lambda x: x[1], reverse=True)</code> to sort"
    ],
    starter: `text = input("Enter some text: ").lower()

# TODO: Remove punctuation using str.replace() or str.translate()
# TODO: Split into words
# TODO: Count each word in a dictionary
# TODO: Sort and display top 10`
  },

  // INTERMEDIATE
  {
    id: "p5",
    title: "Password Generator",
    difficulty: "intermediate",
    icon: "🔐",
    skills: ["strings", "random", "functions", "loops"],
    description: "Build a password generator that creates strong random passwords. Let the user choose length and whether to include uppercase, numbers, and symbols.",
    hints: [
      "Use <code>import string</code> for character sets: <code>string.ascii_lowercase</code>, <code>string.digits</code>, etc.",
      "Use <code>random.choices()</code> to pick random characters from your character pool",
      "Ensure at least one of each required type is included, then shuffle the rest"
    ],
    starter: `import random
import string

def generate_password(length=12, use_upper=True, use_digits=True, use_symbols=True):
    chars = string.ascii_lowercase
    # TODO: Add more character sets based on options
    # TODO: Ensure at least one of each type
    # TODO: Return the generated password
    pass

# Get user preferences and generate password`
  },
  {
    id: "p6",
    title: "Hangman Game",
    difficulty: "intermediate",
    icon: "🪢",
    skills: ["strings", "lists", "loops", "functions", "file I/O"],
    description: "Build the classic Hangman game. Pick a random word, display blanks, let the player guess letters one at a time. Show the hangman ASCII art as wrong guesses accumulate.",
    hints: [
      "Store words in a text file and load them with <code>open()</code>",
      "Use a list of underscores the same length as the word to track revealed letters",
      "Store hangman ASCII art stages in a list — display <code>stages[wrong_guesses]</code>"
    ],
    starter: `import random

HANGMAN_STAGES = [
    "O\\n |\\n/ \\\\",   # 3 wrong
    "O\\n |\\n/",       # 2 wrong
    "O\\n |",          # 1 wrong
    "O",              # 0 wrong
    ""
]

words = ["python", "programming", "variable", "function", "dictionary"]

def play_hangman():
    word = random.choice(words)
    # TODO: Set up the game state
    # TODO: Main game loop
    pass

play_hangman()`
  },
  {
    id: "p7",
    title: "Quiz Game with Score Tracker",
    difficulty: "intermediate",
    icon: "🧠",
    skills: ["dictionaries", "lists", "functions", "file I/O", "JSON"],
    description: "Build a trivia quiz game that loads questions from a JSON file, quizzes the player, tracks their high score, and saves it between sessions.",
    hints: [
      "Store questions as a list of dicts: <code>{\"q\": \"...\", \"options\": [...], \"answer\": 0}</code>",
      "Use <code>import json</code> and <code>json.load()</code> to read the questions file",
      "Save the high score to a <code>highscore.json</code> file using <code>json.dump()</code>"
    ],
    starter: `import json
import random

# TODO: Load questions from questions.json
# TODO: Main quiz loop - show question, options, get answer
# TODO: Score tracking
# TODO: Save and compare high score`
  },
  {
    id: "p8",
    title: "Bank Account System",
    difficulty: "intermediate",
    icon: "🏦",
    skills: ["classes", "OOP", "error handling", "file I/O"],
    description: "Model a bank account using OOP. Support deposits, withdrawals, and balance checks. Save account data to a file so it persists between runs. Prevent overdrafts with error handling.",
    hints: [
      "Create a <code>BankAccount</code> class with <code>balance</code>, <code>owner</code>, and <code>transactions</code> attributes",
      "The <code>withdraw()</code> method should raise a custom exception if balance would go below 0",
      "Use JSON to save and load account state"
    ],
    starter: `import json

class InsufficientFundsError(Exception):
    pass

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.transactions = []
    
    def deposit(self, amount):
        # TODO
        pass
    
    def withdraw(self, amount):
        # TODO: Raise InsufficientFundsError if needed
        pass
    
    def show_statement(self):
        # TODO
        pass`
  },

  // ADVANCED
  {
    id: "p9",
    title: "Text Adventure Game",
    difficulty: "advanced",
    icon: "🗺️",
    skills: ["classes", "OOP", "dictionaries", "file I/O", "game logic"],
    description: "Build a text-based adventure game with multiple rooms, items to pick up, enemies to fight, and a win condition. Use classes to model Player, Room, Item, and Enemy.",
    hints: [
      "Store the game world as a dictionary of room objects, each with exits pointing to other room IDs",
      "Create a <code>Player</code> class with inventory, HP, and current room",
      "Parse commands like 'go north', 'take sword', 'attack goblin' by splitting input"
    ],
    starter: `class Room:
    def __init__(self, name, description, exits):
        self.name = name
        self.description = description
        self.exits = exits  # {"north": "room_id", ...}
        self.items = []
        self.enemies = []

class Player:
    def __init__(self):
        self.hp = 100
        self.inventory = []
        self.current_room = "start"

# TODO: Build game world, parse commands, game loop`
  },
  {
    id: "p10",
    title: "Web Scraper",
    difficulty: "advanced",
    icon: "🕸️",
    skills: ["requests", "BeautifulSoup", "lists", "file I/O", "error handling"],
    description: "Build a web scraper that fetches data from a public website (like a Wikipedia article or a public API), parses the content, and saves it to a CSV file.",
    hints: [
      "Install <code>requests</code> and <code>beautifulsoup4</code> with pip",
      "Use <code>response = requests.get(url)</code> then <code>soup = BeautifulSoup(response.text, 'html.parser')</code>",
      "Use <code>import csv</code> to write data cleanly to a file"
    ],
    starter: `import requests
from bs4 import BeautifulSoup
import csv

url = "https://en.wikipedia.org/wiki/Python_(programming_language)"

# TODO: Fetch the page
# TODO: Parse with BeautifulSoup - find all headings (h2, h3)
# TODO: Save headings to a CSV file
# TODO: Handle network errors with try/except`
  },
  {
    id: "p11",
    title: "Pygame Snake Game",
    difficulty: "advanced",
    icon: "🐍",
    skills: ["pygame", "classes", "OOP", "game loop", "collision detection"],
    description: "Build the classic Snake game using Pygame! Snake grows when it eats food, and the game ends when it hits a wall or itself. Track and display the high score.",
    hints: [
      "Use <code>pip install pygame</code> then <code>import pygame</code>",
      "Represent the snake as a list of (x, y) grid positions — new head added, tail removed each frame",
      "Check for collision by seeing if the head position is in the rest of the body list"
    ],
    starter: `import pygame
import random

pygame.init()

WINDOW = 600
GRID = 20
FPS = 10

WHITE = (255, 255, 255)
GREEN = (0, 200, 100)
RED = (220, 50, 50)
BLACK = (0, 0, 0)

# TODO: Snake class with head, body, direction
# TODO: Food class
# TODO: Game loop with event handling, update, draw`
  },
  {
    id: "p12",
    title: "Data Analyser with Matplotlib",
    difficulty: "advanced",
    icon: "📊",
    skills: ["matplotlib", "csv", "lists", "statistics", "data analysis"],
    description: "Load a CSV file of data (weather, stock prices, grades, etc.), calculate statistics, and create visualisations (bar chart, line graph, histogram) using Matplotlib.",
    hints: [
      "Use <code>import csv</code> to load data, or <code>pandas</code> if you want to go further",
      "Use <code>import statistics</code> for mean, median, stdev",
      "<code>import matplotlib.pyplot as plt</code> — use <code>plt.plot()</code>, <code>plt.bar()</code>, <code>plt.show()</code>"
    ],
    starter: `import csv
import statistics
import matplotlib.pyplot as plt

# TODO: Load data from a CSV file
# TODO: Extract a numeric column
# TODO: Calculate and print mean, median, min, max
# TODO: Create at least one chart with a title and axis labels`
  }
];
