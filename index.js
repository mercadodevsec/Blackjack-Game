// initialization
let playerIsAlive = true
let playerHasBlackJack = false
let playerSum = 0
let playerCards = []
let playerCardCounter = 0;
let message = ''
let bet = 0
let dealerIsAlive = true
let dealerHasBlackJack = false
let dealerSum = 0
let dealerCards = []
let dealerCardCounter = 0;

let player = {
    name: 'You',
    chips: 145,
    move: 0
}


// models
let messageEl = document.getElementById('message-el')
let playerSumEl = document.querySelector('.player-sum-el')
let dealerSumEl = document.querySelector('.dealer-sum-el')
let playerCardsEl = document.getElementById('player-cards-el')
let dealerCardsEl = document.getElementById('dealer-cards-el')
let newCardEl = document.getElementById('newcard-el')
let playerEl = document.getElementById('player-el')
let inputChipsEl = document.getElementById('inputchips-el')
let inputBetEl = document.getElementById('inputbet-el')


inputChipsEl.addEventListener('keydown', function (pressed) {
    if (pressed.key === 'Enter') {
        let value = parseInt(this.value)
        player.chips = this.value
        playerEl.textContent = `${player.name}: $${player.chips}`
    }
})

inputBetEl.addEventListener('keydown', function (pressed) {
    if (pressed.key === 'Enter') {
        let value = parseInt(this.value)
        bet = this.value
    }
})




function resetGame() {
    playerSum = 0;
    playerCards = []
    playerHasBlackJack = false
    playerCardCounter = 0;
    playerIsAlive = true
    dealerIsAlive = true
    dealerHasBlackJack = false
    dealerSum = 0
    dealerCards = []
    dealerCardCounter = 0;
}

function startGame() {
    resetGame()
    for (let i = 0; i < 2; i++) {
        playerCards.push(getRandomCard())
        playerCardCounter++
        playerSum += playerCards[i]
    }
    for (let i = 0; i < 2; i++) {
        dealerCards.push(getRandomCard())
        dealerCardCounter++
        dealerSum += dealerCards[i]
    }
    renderGame()
}

function renderGame() {
    playerCardsEl.textContent = 'Cards:'
    for (let i = 0; i < playerCardCounter; i++) {
        playerCardsEl.textContent += ' ' + playerCards[i]
    }

    dealerCardsEl.textContent += ' * ' + dealerCards[1]
    playerSumEl.textContent = 'Sum: ' + playerSum
    if (playerSum <= 20) {
        message = 'What is your next move?'
    } else if (playerSum === 21) {
        message = 'Congratulations! You\'ve got Blackjack!'
        player.chips += bet * 2
        playerHasBlackJack = true
    } else {
        message = 'You\'re out of the game!'
        playerIsAlive = false
        player.chips -= bet
        playerEl.textContent = `${player.name}: $${player.chips}`
    }
    messageEl.textContent = message;
}

function newCard() {
    if (playerIsAlive && !playerHasBlackJack) {
        let newCard = getRandomCard()
        playerCards.push(newCard)
        playerCardCounter++
        if (playerSum < 20 && newCard === 1) playerSum += 11
        else playerSum += newCard
        playerSumEl.textContent = 'Sum: ' + playerSum
        renderGame()
    }
}

function getRandomCard() {
    let randNum = Math.floor(Math.random() * 13) + 1
    if (randNum > 10) return 10
    else return randNum
}

