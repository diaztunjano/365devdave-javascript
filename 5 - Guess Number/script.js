"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector(".highscore").textContent);

function reduceScore() {
  score -= 1;
  document.querySelector(".score").textContent = score;
}

function changeMessage(message) {
  document.querySelector(".message").textContent = `${message}`;
}

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      changeMessage("No number 🚫");
    } else if (guess === randomNumber) {
      changeMessage("Correct 🤑 ");

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;

      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      let message = guess < randomNumber ? "To low 🥱 " : "To high 🫣 ";
      changeMessage(message);
      reduceScore();
    }
  } else {
    changeMessage("You lost the game 💩 ");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  // Resetting to original values

  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".guess").value = "";

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  changeMessage("Start guessing 🐰 ");
});
