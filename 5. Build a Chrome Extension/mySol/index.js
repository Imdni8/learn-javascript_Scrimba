let myLeads = []
let count = 0

// targetting DOM elements
const inputField = document.getElementById("input-field")
const saveBtn = document.getElementById("save-btn")
const leadCount = document.querySelector("#lead-count")
const renderLeads = document.querySelector(".leads")


saveBtn.addEventListener("click", function() {
    //push lead to myLeads array when "SAVE INPUT" btn is clicked
    myLeads.push(inputField.value)
    console.log(myLeads)

    //increment count (number of leads in MyLeads) - in DOM
    count += 1
    leadCount.textContent = count

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

    //reset the field
    inputField.value = ""
})