document.body.style.margin = "60px";
// Just call function name
function addText() {
    const addParagraph = document.getElementById("clicking-method");
    addParagraph.innerText = "Hello, Farid";
}

// direct 
document.getElementById("direct").addEventListener('click', function () {
    document.getElementById("clicking-method").innerText = "";
})

// direct
document.getElementById("updateName").addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const addParagraph = document.getElementById("clicking-method");
    addParagraph.innerText = nameField.value;
    nameField.value = '';
})