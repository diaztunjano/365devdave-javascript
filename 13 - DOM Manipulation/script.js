"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector(".header");

const allSections = document.querySelectorAll(".section"); // returns a node list

// console.log(allSections);

const allButtons = document.getElementsByTagName("button"); // returns a node list

// console.log(allButtons);

const allButtonsBTN = document.getElementsByClassName("btn"); // returns a node list

// console.log(allButtonsBTN);

// CREATING ELEMENTS:

// Creates a DOM Element and stores it on "message" variable
// It is not inserted on the page yet.
const message = document.createElement("div");

// We can modify it: Adding class
message.classList.add("cookie-message");

// Adding text content:
// message.textContent = "";

// Adding Inner HTML
message.innerHTML =
  'We use cookies for improved analytics. <button class="btn btn--close-cookie">Got it! </button>';

// Adds as the first child of the header
// header.prepend(message);
header.append(message);

// Now, it gets appended as SIBLINGS, not as father-child as with 'append'
// header.before(message);

// DELETE ELEMENTS:

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  // message.remove();
  message.parentElement.removeChild(message);
});
