"use strict";

// 1 --------------------- PASSING ARGUMENTS

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

// 2 --------------

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

// 3 ----------- FIRST CLASS AND HIGHER ORDER FUNCTIONS: CALLBACK FUNCTIONS

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

// 4 ------------ FUNCTIONS THAT RETURN FUNCTIONS

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

// 5 ---------------- CALL AND APPLY KEYWORDS

// const lan = {
//   airline: "LATAM",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lan.book(239, "Dave");
// console.log(lan);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//   },
// };

// // Copying the function to a new variable 'book'
// const book = lan.book;
// // book(23, "Venena"); // ERROR: Can't read airline of undefined
// // This happens because 'book' now is a regular function and the 'this'
// // element now is undefined.

// book.call(eurowings, 23, "Chavo");
// console.log(eurowings);

// // apply method:
// const flightData = [543, "George Cooper"];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// Better with spread:
// const flightData2 = [599, "Jonas Johnson"];
// book.call(eurowings, ...flightData2);
// console.log(eurowings);

// // ----------------
// // doesn't call the function right away. It sets it on a const.
// // It assigns the "this" keyword to eurowings
// const bookEW = book.bind(eurowings);
// bookEW(24, "Serena Williams");

// // We can even pass default pre set parameters
// const bookEWFlight23 = book.bind(eurowings, 23);
// // Now, we only pass the passenger name
// bookEWFlight23("Peperreito");

// eurowings.planes = 300;
// eurowings.buyPlane = function name(params) {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", eurowings.buyPlane.bind(eurowings));

// const addTax = (rate, value) => value + value * rate;
// // Using null as the element that will point to use "this" keyword
// const addVAT = addTax.bind(null, 0.23);

// // console.log(addVAT(100)); // 123

// const VATcalc = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const a = VATcalc(0.23);
// a(100);

// ------------------

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose,
 and an array with the number of replies for each option. This data is stored 
 in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. 
  For example, if the option is 3, increase the value AT POSITION 3 
  of the array by 1. Make sure to check if the input is a number and if 
  the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either
 'string' or 'array'. If type is 'array', simply display the results array as 
 it is, using console.log(). This should be the default option. If type is 'string',
  display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.


HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! 
So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
// */

// const poll = {
//   question: "What is your favorite language?",
//   options: ["0: Javascript", "1: Python", "2: Rust", "3: Go"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const displayMessage = `${this.question}
//         ${this.options[0]}
//         ${this.options[1]}
//         ${this.options[2]}
//         ${this.options[3]}
//         (Write option number)`;
//     const answer = Number(prompt(displayMessage));
//     if ([0, 1, 2, 3].includes(answer)) {
//       this.answers[answer]++;
//       this.displayResults("Array");
//     } else {
//       console.log("Input a valid answer");
//     }
//   },
//   displayResults(type = "string") {
//     if (type === "string") {
//       console.log(
//         `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
//       );
//     } else {
//       console.log(this.answers);
//     }
//   },
// };

// // bind to functions! not objects.
// // the callback function of addEventListener will point 'this' to the
// // .poll
// const pollEl = poll.displayResults.bind(poll);

// document.querySelector(".poll").addEventListener("click", pollEl);

// poll.registerNewAnswer();

// const newArrDisplay = poll.displayResults.call({ answers: [5, 2, 3] });

// ----------------------- CLOSURES

// const secureBooking = function () {
//   let passCount = 0;

//   return function () {
//     passCount++;
//     console.log({ passCount });
//   };
// };

// const booker = secureBooking();

// booker(); // 1
// booker(); // 2
// booker(); // 3

// console.dir(booker);

let f;

// Here, we assign f as a function
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// Now, f gets re assigned again.
const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // runs with initial g() assignation
h();
f(); // runs with h() assignation
// here, f remembers the variables of
// the execution context on which it was created
// first, remembers 'a'
// then, 'b'
