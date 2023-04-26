// let username = "Tousif"
// let newNotifs = 0
// let messageToUser = "You have " + newNotifs + " new notifications, " + username

// console.log(messageToUser)

// // adder function
// function adder() {
// 	newNotifs = newNotifs + 1
// 	document.getElementsById("notif").innerText = messageToUser

//     console.log("user clicked on button, new notif count is " + newNotifs)
// 	//document.getElementById("count-el").innerText = passengers
// }


let myName = "tousif"
let greeting = "Welcome back"
let myGreeting = greeting + ", " + myName

let htmlTarget = document.getElementById("notif")

console.log(myGreeting)

function changeGreeting() {
    htmlTarget.innerText = myGreeting
    console.log("user clicked")
}