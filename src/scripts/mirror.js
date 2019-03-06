console.log("mirror.js")

//declare variable to grab input element
const messageEl = document.getElementById("message");
const outputEl = document.getElementById("article1");
const outputEl2 = document.getElementById("article2");

//Write an event listener that listens for the keyup event on the input field.

messageEl.addEventListener("keyup", function(e) {
    outputEl.innerHTML = e.target.value;
    outputEl2.innerHTML = e.target.value;
})
