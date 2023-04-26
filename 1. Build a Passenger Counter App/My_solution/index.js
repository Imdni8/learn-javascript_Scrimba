let passengers = 0
let saveMsg = "Previous entries: "

//HTML targets
let currentCountHTML = document.getElementById("count-el")
let savedCountHTML = document.getElementById("save-history")

// Function - for increments the passenger count
function adder() {
	passengers += 1
	currentCountHTML.innerText = passengers
	console.log("user clicked on increment")
	//document.getElementById("count-el").innerText = passengers
}

//let saveString = "- " + passengers

// Function - for saving the passenger count in history -> then reseting the count -> 
function save() {
	console.log("user saved")
	saveMsg += " - " + passengers
	savedCountHTML.innerText = saveMsg
	passengers = 0
	currentCountHTML.innerText = passengers
}
