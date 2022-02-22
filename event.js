function makeBackgroundColor() {
    document.body.style.backgroundColor = "red";
}

// just set the name of the function
const greenButton = document.getElementById("bg-color-green");
greenButton.onclick = makeBackgroundColorGreen;

function makeBackgroundColorGreen() {
    document.body.style.backgroundColor = "green";
}

// just set the anonymous function 
const skyBlueButton = document.getElementById("bg-color-skyBlue");
skyBlueButton.onclick = function () {
    document.body.style.backgroundColor = "lightSkyBlue";
}

// addEventListener call function name
const purpleButton = document.getElementById("bg-color-purple");
purpleButton.addEventListener('click', makeBackgroundColorPurple);

function makeBackgroundColorPurple() {
    document.body.style.backgroundColor = "MediumPurple";
}

// addEventListener direct call anonymous function
const cyanButton = document.getElementById("bg-color-cyan");
cyanButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "cyan";
})