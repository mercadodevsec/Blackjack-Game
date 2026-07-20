// initialization
let isAlive = true
let hasBlackJack = false
let sum = 0
let cards = []
let cardCounter = 0;
let message = ''

let player = {
    name: 'You',
    chips: 145
}

// models
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('.sum-el')
let cardsEl = document.getElementById('cards-el')
let newCardEl = document.getElementById('newcard-el')
let playerEl = document.getElementById('player-el')
let inputEl = document.getElementById('input-el')


inputEl.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        let value = parseInt(this.value)
        player.chips = this.value
        playerEl.textContent = `${player.name}: $${player.chips}`
    }
})

playerEl.textContent = `${player.name}: $${player.chips}`


function resetGame() {
    sum = 0;
    cards = []
    hasBlackJack = false
    cardCounter = 0;
    isAlive = true
    console.log(cards.length)
}
function startGame() {
    resetGame()
    for (let i = 0; i < 2; i++) {
        cards.push(getRandomCard())
        cardCounter++
        sum += cards[i]
    }
    renderGame()
}

function renderGame() {
    cardsEl.textContent = 'Cards:'
    for (let i = 0; i < cardCounter; i++) {
        cardsEl.textContent += ' ' + cards[i]
    }
    sumEl.textContent = 'Sum: ' + sum
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'Congratulations! You\'ve got Blackjack!'
        hasBlackJack = true
    } else {
        message = 'You\'re out of the game!'
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard()
        cards.push(newCard)
        cardCounter++
        if (sum < 20 && newCard === 1) sum += 11
        else sum += newCard
        sumEl.textContent = 'Sum: ' + sum
        renderGame()
    }
}

function getRandomCard() {
    let randNum = Math.floor(Math.random() * 13) + 1
    if (randNum > 10) return 10
    else return randNum
}

