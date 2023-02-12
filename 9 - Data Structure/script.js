"use strict";

// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIdx, mainIdx) {
//     return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({ starterIdx, mainIdx, time, address }) {
//     console.log(`New order:
//     Starter: ${this.starterMenu[starterIdx]}
//     Main Course: ${this.mainMenu[mainIdx]}
//     Expected Delivery: ${time}
//     Address: ${address}`);
//   },
// };

// restaurant.orderDelivery({
//   starterIdx: 2,
//   mainIdx: 1,
//   time: "22:35",
//   address: " Calle 123",
// });

// // --------------------- DESTRUCTURE ARRAYS:

// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// const c = arr[2];

// // This is the same as:
// const [x, y, z] = arr;
// console.log(x, y, z); // 2, 3, 4

// const [first, , third] = restaurant.starterMenu;
// console.log(first, third);

// Switching variables order:
// let [main, , secondary] = restaurant.categories;
// const temp = main;
// main = secondary;
// secondary = temp;
// // console.log(main, secondary);

// // Now, with destructuring without using a temp variable:
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // Nested arrays:
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// // console.log(i, j); // [2, [5,6]]
// // If we want to destructure the nested array:
// const [l, , [m, n]] = nested;
// console.log(l, m, n); // 2 5 6

// --------------------- DESTRUCTURE OBJECTS:

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// Mutating variables:

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b); // 23, 7

// // Destructing opening hours:
// const {
//   fri: { open, close },
// } = hours;

// // console.log(open, close); // 11, 23

// // Destructing parameters:

// // -----------------------

// // Destructuring Arrays

// const exampleArr = [1, 2, 3];

// const newArr = [0, 9, 8, ...exampleArr];

// console.log(newArr); // [0, 9, 8, 1, 2, 3]

//  Union two arrays:

// const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(completeMenu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// const ingredients = [
//   prompt("Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// const finalOrderPasta = restaurant.orderPasta(...ingredients);

// copying objects:

// const newResta = { ...restaurant };
// console.log(newResta);

// SPREAD: Because it goes on the RIGHT of the =
// const exampleArr = [1, 2, ...[3, 4, 5]];
// console.log(exampleArr); // [1, 2, 3, 4, 5]

// // REST: Goes on the LEFT of the =
// const [var1, var2, ...other] = ["hola", "jeje", "x", "w", "z"];
// console.log(other); // ['x', 'w', 'z']

// const { sat: saturday, ...otherDays } = restaurant.openingHours;

// console.log(saturday); // {open: 0, close: 24}

// // Spread functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };
// const result = add(2, 5, 6, 63, 3, 24, 4);
// console.log(result);

// restaurant.orderPizza("carne", "queso", "tomate");

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery({ starterIdx, mainIdx, time, address }) {
    console.log(`New order: 
    Starter: ${this.starterMenu[starterIdx]} 
    Main Course: ${this.mainMenu[mainIdx]}
    Expected Delivery: ${time}
    Address: ${address}`);
  },

  orderPasta(i1, i2, i3) {
    console.log(i1, i2, i3);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(
      `The main ingredient is ${mainIng} with toppings of ${otherIng}`
    );
  },
};

// ------------ && and || operators

// const operators = 4 || "dave";
// // console.log(operators); // 4

// // console.log(undefined || 0 || "hola" || 1 || null); // hola

// // console.log(0 && "dave"); // 0, because its the first 'faulthy' value

// // console.log(0 ?? "dave");

// // _-------------------

// // const rest1 = {
// //   name: "Capri",
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: "Capri",
// //   owner: "Giorgio",
// // };

// // // rest1.numGuests = rest1.numGuests || 10;
// // // rest2.numGuests = rest2.numGuests || 10;

// // // OR ASSIGNMENT OPERATOR
// // // SAME AS:
// // // rest1.numGuests ||= 10; // Assigns value to a variable if variable is FALSY
// // // rest2.numGuests ||= 10;

// // // NULLISH ASSIGNMENT OPERATOR
// // // // SAME AS:
// // // rest1.numGuests ??= 10; // Assigns value to a variable if variable is FALSY
// // // rest2.numGuests ??= 10;

// // // AND ASSIGNMENT OPERATOR

// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// // console.log(rest1);
// // console.log(rest2);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
// ('fieldPlayers') with all the remaining 10 field players

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final')
// containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and
// prints each of them to the console, along with the number of goals that were scored in total
// (number of player names passed in)

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
//  WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller',
// 'Lewandowski' and 'Kimmich'. Then, call the function again
// with players from game.scored
// GOOD LUCK 😀
// */

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...playerNames) {
//     console.log(`GOALS: ${this.score} - PLAYERS: ${playerNames}`);
//   },
// };

// // TASK 1:
// const [players1, players2] = game.players;

// // TASK 2:
// const [gk, ...fieldPlayers] = players1;

// // TASK 3:
// const allPlayers = [...players1, ...players2];

// // TASK 4:
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// // TASK 5:
// const { team1: oddTeam1, x: oddDraw, team2: oddTeam2 } = game.odds;

// //TASK 6:
// game.printGoals(game.scored);

// // TASK 7 :
// // console.log(
// //   `Most likely to win: ${oddTeam1 < oddTeam2 ? game.team1 : game.team2}`
// // );

// oddTeam1 < oddTeam2 && console.log(`- Most likely to win: ${game.team1}`);
// oddTeam1 > oddTeam2 && console.log(`- Most likely to win: ${game.team2}`);

// ------------------- Methods:

// // console.log(restaurant.order?.(0, 1) ?? "Method doesnt exists");

// // Looping over KEYS:
// const properties = Object.keys(restaurant.openingHours);
// // console.log(properties); // ['thu', 'fri', 'sat']

// // Looping over VALUES:
// const openValues = Object.values(restaurant.openingHours);
// console.log(openValues); // [{…}, {…}, {…}] : Each with open and close as Keys.

// // Looping over VALUES:
// const openDaysInfo = Object.entries(restaurant.openingHours);
// // console.log(openDaysInfo); // [{…}, {…}, {…}] : Each with open and close as Keys.
// // returns an Array of Arrays:
// // Structure: [[key, value], ...]
// // Result: [['thu', {…}], ['fri', {…}], ['sat', {…}]]

// const openDaysInfo = Object.entries(restaurant.x);

// for (const [key, { open, close }] of openDaysInfo) {
//   console.log(`On ${key} we are open from ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console,
 along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
 HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored 
as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals(...playerNames) {
//     console.log(`GOALS: ${this.score} - PLAYERS: ${playerNames}`);
//   },

//   printOdds() {
//     console.log(`
//     Odds of victory ${this.team1}: ${this.odds["team1"]}
//     Odds of draw - ${this.odds["x"]}
//     Odds of victory ${this.team2}: ${this.odds["team2"]}

//     `);
//   },
// };

// // 1:
// for (let scorer = 0; scorer < game.scored.length; scorer++) {
//   const player = game.scored[scorer];
//   console.log(`Goal ${scorer + 1}: ${player}`);
// }

// // 2:
// const odds = Object.values(game.odds);
// const averageOdd = odds.reduce((a, b) => a + b) / odds.length;
// console.log(averageOdd);

// //3:
// game.printOdds();

// // Bonus:
// const scorers = {};
// for (let player = 0; player < game.scored.length; player++) {
//   const scorer = game.scored[player];
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
// }
// console.log(scorers);

// SETS:

// const orderSet = new Set(["pasta", "pasta", "pizza", "rissoto"]);
// console.log(orderSet); // Set(3) {'pasta', 'pizza', 'rissoto'}

// // Remove duplicate values from array
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);

// MAP

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest
//   .set("categories", "Firenze, Italy")
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");

// const time = 21;
// const isOpen = rest.get(time > rest.get("open") && time < rest.get("close"));
// console.log(isOpen); // we are open

// console.log(rest);

// const question = new Map([
//   ["question", "Best language?"],
//   [1, "C"],
//   [2, "Python"],
//   [3, "Java"],
//   [4, "Javascript"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Try again!"],
// ]);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt("You answer:")) === question.get("correct");
// console.log(question.get(answer)); // Correct!

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log 
of the events that happened during the game. The values are the events themselves, 
and the keys are the minutes in which each event happened (a football game has 90 
minutes plus some extra time).


1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from 
minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1 :
// const events = gameEvents.values();
// const diffEvents = [...new Set(events)];
// console.log(diffEvents);

// // 2:
// gameEvents.delete(64);
// console.log(gameEvents);

// //4:
// for (const [key, value] of gameEvents.entries()) {
//   const gameTime = key <= 45 ? "FIRST HALF" : "SECOND HALF";
//   console.log(`[${gameTime}] ${key}: ${value}`);
// }

// const airline = "TAP Air Portugal";
// const plane = "A320";
// // These methods return a NEW string. Needs to be saved if I want to use it.
// console.log(airline.indexOf("r")); // 6
// console.log(airline.lastIndexOf("r")); // 10
// console.log(airline.indexOf("Air")); // 4
// console.log(airline.slice(4)); // 'Air Portugal'
// console.log(airline.slice(-2)); // 'Air Portugal'

// const checkMiddleSeat = (seat) => {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   return console.log(s === "B" || s === "E" ? "Yes! Middle seat" : "Nop! ");
// };

// checkMiddleSeat("11B");

// // Fix capitalization

// const passenger = "DaVId";
// const pLower = passenger.toLowerCase();
// const correctName = passenger[0].toUpperCase() + pLower.slice(1);
// console.log(correctName);

// console.log(passenger.replace("Id", "id")); // 'David
// console.log(passenger.includes("Id")); // true
// console.log(passenger.startsWith("D")); // true

// STRINGS SPLIT

// const [firstName, lastName] = "David Diaz";

// function capitalizeName(name) {
//   const names = name.split(" ");
//   const fullName = [];

//   for (const n of names) {
//     fullName.push(n[0].toUpperCase() + n.slice(1));
//   }

//   return console.log(fullName.join(" "));
// }

// // capitalizeName("david diaz tunjano");

// const maskCard = (number) => {
//   const str = number + "";
//   const digits = str.slice(-4);
//   console.log(digits.padStart(12, "*"));
// };

// maskCard("1234 6543 2345 9876");

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in 
underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below),
 and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const words = document.querySelector("textarea").value.split("\n");

//   for (const [i, word] of words.entries()) {
//     const [first, second] = word.toLowerCase().trim().split("_");
//     const finalWord =
//       first.toLowerCase() + second[0].toUpperCase() + second.slice(1);
//     console.log(finalWord.padEnd(20) + `${"✅".repeat(i + 1)}`);
//   }
// });

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const rows = flights.split("+");

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const row of rows) {
  const [type, from, to, hour] = row.split(";");
  const output = `${type.startsWith("_Delayed") ? "🛑" : " "} ${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} ${hour.replace(
    ":",
    "h"
  )}`.padStart(45);
  console.log(output);
}
