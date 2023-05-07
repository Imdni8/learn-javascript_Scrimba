function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

var firstCard
var secondCard
let cards = []

var sum = 0

let hasBlackJack = false
let isAlive = true

let Msg = ""

// Blackjack logic
function gameLogic() {
  if (sum <= 20) {
    Msg = "Do you want to draw another card?"
  } else if (sum === 21) {
    Msg = "Wohoo! You have Blackjack. Another game?"
    hasBlackJack = true
  } else {
    Msg = "You're out of the game. Start a new game?"
    isAlive = false
  }

  // player is out and ask to start a new game
  /* Ask to start new game when - 
  1. player has blackjack 
  (or)
  2. player is out
  */
  if (hasBlackJack === true || isAlive === false) {
    document.getElementById("newCardBtn").style.display = "none"
  }

  document.getElementById("Msg-el").textContent = Msg
  document.getElementById("cards").textContent = cards
  document.getElementById("sum").textContent = sum
}

function startGame() {
  firstCard = getRandomIntInclusive(2,11)
  secondCard = getRandomIntInclusive(2,11)
  cards.push(firstCard)
  cards.push(secondCard)
  sum = firstCard + secondCard

  gameLogic()
}

function newCard() {
  cards.push(getRandomIntInclusive(2,11))
  
  //calculating sum of the cards array
  sum += Number(cards.slice(-1))

  gameLogic()
}