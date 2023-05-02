let points = 0

// function for changing points
function displayPoints() {
    document.getElementById("points").innerText = points
}

// add3 function
function add3Points() {
    points += 3
    displayPoints()
    console.log("User added 3 points")
}

// remove1
function remove1Point() {
    points -= 1
    displayPoints()
    console.log("User removed 1 point")
}