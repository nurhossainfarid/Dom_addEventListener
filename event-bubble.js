// // childe
document.getElementById("second-item").addEventListener('click', function (childeEvent) {
    console.log("Second item");
    childeEvent.stopPropagation();
})

/* // stop immediate propagation
document.getElementById("second-item").addEventListener('click', function (childeEvent) {
    console.log("Second item1");
    childeEvent.stopImmediatePropagation();
})
document.getElementById("second-item").addEventListener('click', function (childeEvent) {
    console.log("Second item2");
})
document.getElementById("second-item").addEventListener('click', function (childeEvent) {
    console.log("Second item3");
})
document.getElementById("second-item").addEventListener('click', function (childeEvent) {
    console.log("Second item4");
}) */

// parents
document.getElementById("parents-list").addEventListener('click', function () {
    console.log("Parents of the list");
})

// section
document.getElementById("section").addEventListener('click', function () {
    console.log("Second of ul");
})