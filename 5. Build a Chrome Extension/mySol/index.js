let myLeads = []

// targetting DOM elements
const inputField = document.getElementById("input-field")
const saveBtn = document.getElementById("save-btn")
const feedback = document.getElementById("feedback")


//push lead to myLeads array when "SAVE INPUT" btn is clicked
saveBtn.addEventListener("click", function() {
    myLeads.push(inputField.value)
    inputField.value = ""
    console.log(myLeads)
})