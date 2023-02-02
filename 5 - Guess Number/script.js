"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No number 🚫";
  }
  if (guess < randomNumber) {
    document.querySelector(".message").textContent = "To low 🥱 ";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "To high 🫣 ";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct 🤑 ";
  }
});
