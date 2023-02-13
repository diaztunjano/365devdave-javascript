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

const flight = "LHE123";

const jonas = {
  name: "Jonas Pepe",
  passport: 12345,
};

const checkFlight = (flightNum, passenger) => {
  flightNum = "LJJ321";
  passenger.name = "El" + passenger.name;
  if (passenger.passport === 12345) {
    alert("Correct! ");
  } else {
    alert("Wrong passenger");
  }
};

checkFlight(flight, jonas);
console.log(flight); // Doesn't get modified. Still is LHE 123
console.log(jonas); // Gets its name changed. Because, in 2nd line,
// I change the name. 'jonas' and passenger.name were referencing
// the same object in the HEAP. So if one changes it, the other will see it too
