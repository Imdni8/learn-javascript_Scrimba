let myLeads = []

// targetting DOM elements
const inputField = document.getElementById("input-field")
const saveBtn = document.getElementById("save-btn")
const savedLeads = document.querySelector(".leads")
const leadNum = document.querySelector("#lead-num")


saveBtn.addEventListener("click", function() {
    //push lead to myLeads array when "SAVE INPUT" btn is clicked
    myLeads.push(inputField.value)
    console.log(myLeads)

    //render lead stats
    // for (let i=0; i<myLeads.length; i++) {
    //     savedLeads.innerHTML += "<li>" + myLeads[i] + "</li>"
    // }

    savedLeads.innerHTML += "<li>" + myLeads[-1] + "</li>"

    //reset the field
    inputField.value = ""
})

