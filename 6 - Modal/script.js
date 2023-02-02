"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

function toggleHidden() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

for (let i = 0; i < btnOpen.length; i++) {
  const btn = btnOpen[i];
  btn.addEventListener("click", () => {
    toggleHidden();
  });
}

btnClose.addEventListener("click", () => {
  toggleHidden();
});

overlay.addEventListener("click", () => {
  toggleHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleHidden();
  }
});
