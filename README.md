# 🎯 NumPlay

A simple JavaScript-based number guessing game that runs in the browser.  
The user chooses a maximum number, and the program generates a random number between **1** and the chosen max.  
The player then tries to guess the number using hints provided after each guess.

---

## 🧠 How It Works

1. The game asks the user to **enter a maximum number**.
2. The program secretly generates a **random number** between `1` and the entered maximum.
3. The user guesses the number using prompt.
4. The game provides hints:
   - `"your number is small"` → Guess higher
   - `"your number is large"` → Guess lower
5. The player can type **"quit"** anytime to exit the game.
6. If guessed correctly → 🎉 **You Win!**

---

## 📂 Files Included

| File | Description |
|------|-------------|
| `index.html` | Basic HTML file linking the JavaScript |
| `app.js` | Contains the game logic (JavaScript) |


## 💡 Learning Purpose

This project helps you understand:

- `prompt()` input handling
- `while` loops
- `if/else` decision making
- Random number generation
- String comparison
- Basic game logic flow


## 🚀 How to Play

1. Download or Clone the repository:
   ```bash
   git clone https://github.com/shanusingh01/guessing-game.git
2. Open index.html in any web browser.
3. Follow the prompts and try to guess the number!


## 🖥 Example Output

- Enter the maximum number: 50
- Guess the number: 10
- Hint: your number is small, please try again!
- Guess the number: 37
- Hint: your number is large, please try again!
- Guess the number: 25
- 🎉 You win! The number is 25


## 💡 Features

1. Simple and interactive
2. Provides real-time hints
3. Lets user exit anytime using "quit"
4. Uses core JavaScript functions (no libraries required)




