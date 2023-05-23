let myLeads = []
let count = 0

// -------targetting DOM elements-------
//buttons
const saveBtn = document.getElementById("save-btn")
const clearListBtn = document.querySelector("#del-btn")
const getLinkBtn = document.querySelector("#get-link")

//input field
const inputField = document.getElementById("input-field")

//text fields
const leadCount = document.querySelector("#lead-count")
const renderLeads = document.querySelector(".leads")

//-----support functions-------
//add render function here because it repeats in 3 places

//render out localstorage if there is data
if (localStorage.getItem("Leads") !== null) {
    myLeads =  JSON.parse(localStorage.getItem("Leads"))

    leadCount.textContent = myLeads.length

    let listItems = ""
    for (let i=0; i<myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href= "${myLeads[i]}">
            ${myLeads[i]}
            </a>
        </li>
        `
    }

    renderLeads.innerHTML = listItems
}


//Save btn function
saveBtn.addEventListener("click", function() {
    //push lead to myLeads array on "SAVE INPUT" btn click
    myLeads.push(inputField.value)
    console.log(myLeads)

    //reset the field
    inputField.value = ""

    //increment count (number of leads in MyLeads) - in DOM
    leadCount.textContent = myLeads.length

    //storing myleads to localstorage
    localStorage.setItem("Leads", JSON.stringify(myLeads))

    //construct the list
    let listItems = ""
    for (let i=0; i<myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href= "${myLeads[i]}">
            ${myLeads[i]}
            </a>
        </li>
        `
    }

    console.log(listItems)

    //render the list - in DOM
    renderLeads.innerHTML = listItems    
})

//clear list
clearListBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    leadCount.textContent = myLeads.length
    renderLeads.innerHTML = ""
})

//get link
getLinkBtn.addEventListener("click", function() {
    
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
        var tabURL = tabs[0].url

        myLeads.push(tabURL)

        //reset the field
        inputField.value = ""

        //increment count (number of leads in MyLeads) - in DOM
        leadCount.textContent = myLeads.length

        //storing myleads to localstorage
        localStorage.setItem("Leads", JSON.stringify(myLeads))

        //construct the list
        let listItems = ""
        for (let i=0; i<myLeads.length; i++) {
            listItems += `
            <li>
                <a target='_blank' href= "${myLeads[i]}">
                ${myLeads[i]}
                </a>
            </li>
            `
        }

        console.log(listItems)

        //render the list - in DOM
        renderLeads.innerHTML = listItems    
    })
})