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

    //increment count
    count += 1
    leadCount.textContent = count

    //render lead stats
    renderLeads.innerHTML = ""
    for (let i=0; i<myLeads.length; i++) {
        renderLeads.innerHTML += "<li>" + myLeads[i] + "</li>"
    }

    //reset the field
    inputField.value = ""
})

