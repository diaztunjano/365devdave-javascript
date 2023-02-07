"use strict";

// Hoisting:

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "dave";
// let job = "dev";
// const year = 1991;

// --------
// console.log(add(7, 8));

// This function is HOISTED, so I
// can log the result before its initialization
function add(a, b) {
  return a + b;
}

// --------
// Doesn't work here. Needs to be executed after addExpr initialization.
// console.log(addExpr(10, 12));

// Const function is unitialized -> it is in the temporal dead zone.
const addExpr = function (a, b) {
  return a + b;
};

// Here it works:
// console.log(addExpr(10, 12));

// --------

const addArrow = (a, b) => a + b;

// DONT USE VAR:

if (!numProducts) {
  console.log("Delete Everything! HEHE");
}

var numProducts = 10;

// DONT USE VAR!
// "Delete Everything! HEHE" Printed.
// That is beacause before initialization, numProducts
// is undefined because it is "var". So !undefined === true
