const inputs = document.querySelectorAll(".input");

const img = document.querySelector("img");
const highlight = document.querySelector(".hl");
const color = document.querySelector("#base");

function change() {
  img.style.setProperty(`--${this.name}`, `${this.value}px`);
}

function colored() {
  img.style.backgroundColor = `${color.value}`;
  highlight.style.color = `${color.value}`;
}

inputs.forEach((input) => input.addEventListener("change", change));
inputs.forEach((input) => input.addEventListener("mousemove", change));

color.addEventListener("change", colored);
color.addEventListener("mousemove", colored);
