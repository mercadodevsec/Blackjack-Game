
let message = ""
let hasBlackJack = false
let isAlive = true
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
let newCardEl = document.getElementById("newcard-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    sum += Math.floor(Math.random() * 10) + 2
    sumEl.textContent = "Sum: " + sum
    startGame()
}

