var Num1 = 0
var Num2 = 0
var answer = 0
let rationale = "Rationale: "

function formchange() {
    Num1 = Number(document.getElementById("Num1").value)
    Num2 = Number(document.getElementById("Num2").value)
}

function displayAnswer() {
    document.getElementById("answer").textContent = answer
    document.getElementById("rationale").textContent = rationale
    rationale = "Rationale: "
}

//aritmatic functions
function add() {
    answer = Num1 + Num2
    rationale += String("You added " + Num1 + " and " + Num2)
    displayAnswer()
    console.log(Num1, Num2, "add")
}

function substract() {
    answer = Num1 - Num2
    rationale += String("You substracted " + Num2 + " from " + Num1)
    displayAnswer()
    console.log(Num1, Num2, "substract")
}

function multiply() {
    answer = Num1 * Num2
    rationale += String("You multiplied " + Num1 + " and " + Num2)
    displayAnswer()
    console.log(Num1, Num2, "multiply")
}

function division() {
    answer = Num1/Num2
    rationale += String("You divided " + Num1 + " by " + Num2)
    displayAnswer()
    console.log(Num1, Num2, "division")
}