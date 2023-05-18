let arrLocal = []

// targetting html elements
const ulist = document.getElementById("local")

function increment() {
    console.log("----increment ran----")

    //gen random num and push to array
    let rando = (Math.random()*5).toFixed(2)
    arrLocal.push(rando)

    //console log arrLocal present state
    console.log(typeof arrLocal, arrLocal)

    //save in local
    localStorage.setItem("array", JSON.stringify(arrLocal))

    //console log localStorage
    console.log(typeof localStorage.getItem("array"), localStorage.getItem("array"))
}

function showList () {
    ulist.innerHTML = ''

    arrLocal = JSON.parse(localStorage.getItem("array"))

    //add <li> tags to arrLocal items
    for (let i = 0; i<arrLocal.length; i++) {
        ulist.innerHTML += `
        <li>${arrLocal[i]}</li>
        `
    }

    console.log("showList ran")
}

function clearLocal() {
    localStorage.clear()
    ulist.innerHTML = ''
    arrLocal = []
}