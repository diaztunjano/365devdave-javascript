"use strict";

// Hoisting:

// // console.log(me);
// // console.log(job);
// // console.log(year);

// // var me = "dave";
// // let job = "dev";
// // const year = 1991;

// // --------
// // console.log(add(7, 8));

// // This function is HOISTED, so I
// // can log the result before its initialization
// function add(a, b) {
//   return a + b;
// }

// // --------
// // Doesn't work here. Needs to be executed after addExpr initialization.
// // console.log(addExpr(10, 12));

// // Const function is unitialized -> it is in the temporal dead zone.
// const addExpr = function (a, b) {
//   return a + b;
// };

// // Here it works:
// // console.log(addExpr(10, 12));

// // --------

// const addArrow = (a, b) => a + b;

// // DONT USE VAR:

// if (!numProducts) {
//   console.log("Delete Everything! HEHE");
// }

// var numProducts = 10;

// // DONT USE VAR!
// // "Delete Everything! HEHE" Printed.
// // That is beacause before initialization, numProducts
// // is undefined because it is "var". So !undefined === true

// ------------------------

// THIS KEYWORD

// gives the "window" object
// console.log(this);

// Its still window object
// The arrow function doesn't get a this keyword.
// It will bring the one from its parent -> this lexical scope

// const arrowAge = (birthYear) => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// arrowAge(1996);

// const dave = {
//   year: 1996,
//   calcAge: function () {
//     console.log(this); // This is "dave" object
//     console.log(2023 - this.year); // It lets me access to "year" from the "dave" object
//   },
// };

// dave.calcAge();

// --------------------

// ARROW FUNCTIONS:

// const dave = {
//   year: 1996,
//   firstName: "El dave",
//   calcAge: function () {
//     console.log(this); // This is "dave" object
//     console.log(2023 - this.year); // It lets me access to "year" from the "dave" object

//     // this -> undefined because its a regular function call.
//     const isMillenial = function () {
//       console.log(1981 <= this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// // dave.greet();
// dave.calcAge();

// ---------------------

// Primitives and reference values

let lastName = "diaz";
let oldLastName = lastName;
lastName = "davis";

// It works as expected: changing value of primitives in call stack
console.log(lastName);

// Doesn't work for HEAP References:

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;

// Here, we change the value AT THE REFERENCE, so it changes to 'jessica'
// as well as 'marriedJessica'. Because both names hold the SAME address
// in the HEAP
marriedJessica.age = 28;

console.log({ marriedJessica, jessica });

// This doesnt work, because it changes the reference to a new object
// in the HEAP. this can't happen because 'marriedJessica' is const.
// marriedJessica = {};

const jess2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

// This now works because we are assigning a NEW object in the HEAP
// with a copy of jess2
const jessCopy = Object.assign({}, jess2);
jessCopy.lastName = "Sanchez";

console.log({ jessCopy, jessica });
