import "./styles.css";

var inputText = document.querySelector("#input-text");
var h1Btn = document.querySelector("#h1");
var h2Btn = document.querySelector("#h2");
var h3Btn = document.querySelector("#h3");

function h1() {
  inputText.style.fontSize = "2.0em";
}

function h2() {
  inputText.style.fontSize = "1.5em";
}

function h3() {
  inputText.style.fontSize = "1.17em";
}

h1Btn.addEventListener("click", h1);
h2Btn.addEventListener("click", h2);
h3Btn.addEventListener("click", h3);
