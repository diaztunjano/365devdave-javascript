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

/////////////////////////////////// 187. Styles

// inline styles:
// message.style.backgroundColor = "#354fd1";

// Get styles from component
// console.log(getComputedStyle(message).color); // rgb(187,187,187)
// console.log(getComputedStyle(message).height); //50px

// // Modify properties after getting it
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// CSS Variables:

// document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes:

const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // Alternative text: Bankist Logo

console.log(logo.src); // Source: absolute url
// http://127.0.0.1:5500/13%20-%20DOM%20Manipulation/img/logo.png
console.log(logo.getAttribute("src")); // Source: relative url to logo in pc
// img/logo.png

console.log(logo.dataset);

/////////////////////////////////// 188. Smooth Scrolling

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  e.preventDefault();
  const s1coods = section1.getBoundingClientRect();

  // console.log("Current Scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   "Height Width of Vierport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling to:
  // window.scrollTo(
  //   s1coods.left + window.pageXOffset,
  //   s1coods.top + window.pageYOffset
  // );

  // [OLD SCHOOL] : SMOOTH scrolling to:
  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // [NEW FORMAT] : SMOOTH scrolling to:
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

/////////////////////////////////// 189. Events and events handlers

// Mouse enter
// const h1 = document.querySelector("h1");

// const showAlert = () => {
//   alert("add eventlistener: great");
//   // Remove an event handler
//   h1.removeEventListener("mouseenter", showAlert);
// };

// h1.addEventListener("mouseenter", showAlert);

// setTimeout(() => h1.removeEventListener("mouseenter", showAlert), 2000);

/////////////////////////////////// 191. Event propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("link", e.target, e.currentTarget);
  console.log(e.currentTarget == this); // True

  e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("container", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("nav", e.target, e.currentTarget);
  },
  false
);

console.log("Hola");
