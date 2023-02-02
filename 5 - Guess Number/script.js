"use strict";

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "No number 🚫";
  }
});
