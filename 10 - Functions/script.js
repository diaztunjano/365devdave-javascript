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

// const greet = (greeting) => {
//   (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // Returns a function
// const greeterHey = greet("Jelou");

// // We call that function with a name as parameter
// greeterHey("Dave"); // "Jelou Dave"

// // The same as:
// greet("Hello")("Jonas");

// 5 ----------------

const lan = {
  airline: "LATAM",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lan.book(239, "Dave");
console.log(lan);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

// Copying the function to a new variable 'book'
const book = lan.book;
// book(23, "Venena"); // ERROR: Can't read airline of undefined
// This happens because 'book' now is a regular function and the 'this'
// element now is undefined.

book.call(eurowings, 23, "Chavo");
console.log(eurowings);

// apply method:
const flightData = [543, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings);

// Better with spread:
const flightData2 = [599, "Jonas Johnson"];
book.call(eurowings, ...flightData2);
console.log(eurowings);
