// Dark Mode Toggle

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// Change Message

const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", () => {

    const message = document.getElementById("message");

    if (message.innerText === "Welcome to my webpage!") {
        message.innerText = "🚀 Thanks for visiting my interactive webpage!";
    } else {
        message.innerText = "Welcome to my webpage!";
    }

});


// Counter

let count = 0;

document.getElementById("increase").addEventListener("click", () => {
    count++;
    document.getElementById("count").innerText = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    document.getElementById("count").innerText = count;
});


// Show Hide Content

document.getElementById("toggleContent").addEventListener("click", () => {

    const content = document.getElementById("content");

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }

});