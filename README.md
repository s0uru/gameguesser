# GameGuesser 🎮

An interactive browser-based game that tests your video game knowledge. Guess titles based on image fragments, descriptions, or trivia, rack up points, and beat your own high scores!

## ✨ Features

* **Diverse Game Modes:** Guess games from partial images, blurred covers, or text clues.
* **Scoring System:** Track your performance and aim for a new personal best.
* **Smooth Animations:** Highly interactive and engaging user interface.
* **Built-in Database:** Features a wide variety of titles, from retro classics to modern AAA releases, stored directly in the app.
* **Responsive Design:** Fully responsive layout that works flawlessly on mobile, tablet, and desktop.

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Data Management:** Local JSON/TS files (`puzzles.json`, `gamesList.ts`)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine. You don't need to install any browser extensions or Tailwind globally – npm will handle everything.

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

        git clone https://github.com/s0uru/gameguesser.git
        cd gameguesser

2. **Install dependencies:**

        npm install

3. **Run the development server:**

        npm run dev

4. **Open the application:**
   Open your browser and navigate to the localhost address provided in your terminal (usually `http://localhost:5173`).

## 📁 Project Structure

    src/
    ├── assets/        # Static files and images
    ├── components/    # Reusable UI components (e.g., SearchBar)
    ├── data/          # Game data and puzzles (gamesList.ts, puzzles.json)
    ├── types/         # TypeScript definitions (game.ts)
    ├── App.tsx        # Main application component
    └── main.tsx       # Application entry point

## 👤 Author

**Jakub Pietrusiak**
* GitHub: [@s0uru](https://github.com/s0uru)
