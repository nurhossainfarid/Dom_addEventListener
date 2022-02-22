// const listItems = document.getElementsByClassName("item");
// for (const items of listItems) {
//     items.addEventListener('click', function (childEvent) {
//         // document.getElementById('parents-list').removeChild(items);
//         childEvent.target.parentNode.removeChild(childEvent.target);
//     })
// }
document.getElementById('add-button').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = " Add brand new item";
    li.classList.add('item');
    const parent = document.getElementById('parents-list');
    parent.appendChild(li);
})
document.getElementById('parents-list').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})
