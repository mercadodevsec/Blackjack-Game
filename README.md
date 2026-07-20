# Blackjack Game

A simple, interactive Blackjack card game built with vanilla HTML, CSS, and JavaScript.

## Overview

This is a browser-based implementation of the classic Blackjack card game. Players attempt to get a hand value of 21 or as close as possible without going over, competing against the deck.

## Features

- 🎴 Draw cards and build your hand
- 💰 Manage your chip balance
- 🎯 Win with Blackjack (exactly 21)
- 🎨 Beautiful themed UI with styling effects
- ⚡ Fast and responsive gameplay

## How to Play

1. **Set Your Chips**: Enter the amount of chips (money) you want to play with in the input field.
2. **Start Game**: Click the "START GAME" button to deal 2 initial cards.
3. **Draw Cards**: Click "NEW CARD" to draw additional cards.
4. **Win Conditions**:
   - Get exactly **21** → Blackjack! You win!
   - Get closer to 21 than busting → You're still in the game
   - Go over **21** → You're out of the game (bust)

## Game Rules

- Number cards (2-10) are worth their face value
- Face cards (Jack, Queen, King) are worth 10
- Aces can be worth 1 or 11 (treated as 11 when possible and safe)
- If your sum exceeds 21, you bust and lose
- If you reach exactly 21, you achieve Blackjack and win immediately
- You cannot draw new cards after reaching Blackjack or busting

## Project Structure

```
Blackjack Game/
├── index.html      # Game UI and HTML structure
├── index.css       # Styling and visual effects
├── index.js        # Game logic and functionality
├── images/         # Game assets
│   └── background.jpg
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. The game will load with the default UI
3. Enter your starting chips and click "START GAME"
4. Enjoy!

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, hover effects, and responsive design
- **JavaScript (Vanilla)**: Game logic, card generation, and DOM manipulation

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS3
- HTML5

## Future Enhancements

Potential features for future versions:
- Dealer AI
- Multiple rounds tracking
- Chip history/statistics
- Mobile responsive design improvements
- Sound effects
- Card animations


Enjoy the game! 🎰
