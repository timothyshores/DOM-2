// Your code goes here
let header = document.getElementsByTagName("h1")[0];
header.addEventListener("mouseover", () => {
	console.log("header mouse over");
});

let body = document.getElementsByTagName("body")[0];
body.addEventListener("keydown", () => {
	console.log("body keydown");
});

body.addEventListener("wheel", () => {
	console.log("body wheel");
});

const btn1 = document.querySelectorAll(".btn")[0];
const btn2 = document.querySelectorAll(".btn")[1];
const btn3 = document.querySelectorAll(".btn")[2];

btn1.addEventListener("click", () => {
	btn1.style.color = "red";
});

btn2.addEventListener("click", () => {
	btn2.style.color = "green";
});

btn3.addEventListener("click", () => {
	btn3.style.color = "blue";
});

// element.addEventListener("drag");
// element.addEventListener("load");
// element.addEventListener("focus");
// element.addEventListener("resize");
// element.addEventListener("scroll");
// element.addEventListener("select");
// element.addEventListener("dblclick");
