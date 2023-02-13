"use strict";

// const bookings = [];

// const createBooking = (flightNum, numPass = 199, price = 500) => {
//   const booking = {
//     flightNum,
//     numPass,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LHE123");

// 2 -----

// const flight = "LHE123";

// const jonas = {
//   name: "Jonas Pepe",
//   passport: 12345,
// };

// const checkFlight = (flightNum, passenger) => {
//   flightNum = "LJJ321";
//   passenger.name = "El" + passenger.name;
//   if (passenger.passport === 12345) {
//     alert("Correct! ");
//   } else {
//     alert("Wrong passenger");
//   }
// };

// checkFlight(flight, jonas);
// console.log(flight); // Doesn't get modified. Still is LHE 123
// console.log(jonas); // Gets its name changed. Because, in 2nd line,
// // I change the name. 'jonas' and passenger.name were referencing
// // the same object in the HEAP. So if one changes it, the other will see it too

// 3 -----------

// const oneWord = (str) => {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = (str) => {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = (str, fn) => {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformer("Javascript is the best!", upperFirstWord); //Javascript is the best!
// transformer("Javascript is the best!", oneWord); // javascriptisthebest!

// 4 ------------

const greet = (greeting) => {
  (name) => {
    console.log(`${greeting} ${name}`);
  };
};

// Returns a function
const greeterHey = greet("Jelou");

// We call that function with a name as parameter
greeterHey("Dave"); // "Jelou Dave"

// The same as:
greet("Hello")("Jonas");
