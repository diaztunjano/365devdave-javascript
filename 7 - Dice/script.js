"use strict";

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const currentScoreP0El = document.getElementById("current--0");
const currentScoreP1El = document.getElementById("current--1");

let currentScore = 0;
let activePlayer = 0;
let isGamePlaying = true;
const scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  if (isGamePlaying) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    //remove dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNumber}.png`;

    // add to current score:
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Changing player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (isGamePlaying) {
    //Add current score to active player score
    scores[activePlayer] += currentScore;

    // Saving in variable
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if score < 100
    if (scores[activePlayer] < 20) {
      switchPlayer();
    } else {
      diceEl.classList.add("hidden");

      isGamePlaying = false;

      btnHold.classList.add("hidden");
      btnRoll.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
  }
});

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  isGamePlaying = true;
  scores[0] = 0;
  scores[1] = 0;
  btnHold.classList.remove("hidden");
  btnRoll.classList.remove("hidden");
  document.getElementById(`score--0`).textContent = scores[activePlayer];
  document.getElementById(`score--1`).textContent = scores[activePlayer];
});
