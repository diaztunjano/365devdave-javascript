"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

score0El.textContent = 0;
score1El.textContent = 0;

console.log(diceEl);

diceEl.classList.add("hidden");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

btnRoll.addEventListener("click", () => {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;

  //remove dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${randomNumber}.png`;

  // change dice image
  diceEl.console.log(randomNumber);
});
