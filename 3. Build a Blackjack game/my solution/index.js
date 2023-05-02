function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

var firstCard = getRandomIntInclusive(2,11)
var secondCard = getRandomIntInclusive(2,11)

var sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let Msg = ""

// Blackjack logic
function startGame() {
  if (sum <= 20) {
    Msg = "Do you want to draw another card?"
  } else if (sum === 21) {
    Msg = "Wohoo! You have Blackjack"
    hasBlackJack = true
  } else {
    Msg = "You're out of the game"
    isAlive = false
  }

  document.getElementById("Msg-el").textContent = Msg
  document.getElementById("cards").textContent = firstCard + ", " + secondCard
  document.getElementById("sum").textContent = sum
}

console.log(firstCard, secondCard, sum)
