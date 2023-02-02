"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpen.length; i++) {
  const btn = btnOpen[i];
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}
