"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "No number 🚫";
    }

    // Wrong input - TOO LOW
    if (guess < randomNumber) {
      document.querySelector(".message").textContent = "To low 🥱 ";
      score -= 1;
      document.querySelector(".score").textContent = score;
    }

    // Wrong input - TOO HIGH
    else if (guess > randomNumber) {
      document.querySelector(".message").textContent = "To high 🫣 ";
      score -= 1;
      document.querySelector(".score").textContent = score;
    }

    // Correct input - WINNER
    else if (guess === randomNumber) {
      document.querySelector(".message").textContent = "Correct 🤑 ";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  } else {
    document.querySelector(".message").textContent = "You lost the game 💩 ";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  // Resetting to original values
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing 🐰 ";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
