document.getElementById("delete-button").addEventListener('click', function () {
    const removeParagraph = document.getElementById('paragraph');
    removeParagraph.remove();
}) 

// focus 
document.getElementById("delete-input").addEventListener('focus', function () {
    document.body.style.backgroundColor = "CornflowerBlue";
})
// blur
document.getElementById("delete-input").addEventListener('blur', function () {
    document.body.style.backgroundColor = "white";
})
/* // keydown 
document.getElementById("delete-input").addEventListener('keydown', function () {
    const keydownText = document.getElementById("delete-input");
    console.log(keydownText.value);
})
// keypress
document.getElementById("delete-input").addEventListener('keypress', function () {
    const keydownText = document.getElementById("delete-input");
    console.log(keydownText.value);
})  */
// keyup
document.getElementById("delete-input").addEventListener('keyup', function (event) {
    const deleteButton = document.getElementById("delete-button");
    if (event.target.value == 'delete') {
        deleteButton.removeAttribute('disabled');
    } else {
        deleteButton.setAttribute('disabled', true)
    }
}) 
// change
document.getElementById("delete-input").addEventListener('change', function () {
    const keydownText = document.getElementById("delete-input");
    console.log(keydownText.value);
})
