"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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

  order: function (starterIdx, mainIdx) {
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

  orderDelivery: function ({ starterIdx, mainIdx, time, address }) {
    console.log(`New order: 
    Starter: ${this.starterMenu[starterIdx]} 
    Main Course: ${this.mainMenu[mainIdx]}
    Expected Delivery: ${time}
    Address: ${address}`);
  },

  orderPasta: function (i1, i2, i3) {
    console.log(i1, i2, i3);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(
      `The main ingredient is ${mainIng} with toppings of ${otherIng}`
    );
  },
};

// ------------ && and || operators

const operators = 4 || "dave";
// console.log(operators); // 4

// console.log(undefined || 0 || "hola" || 1 || null); // hola

// console.log(0 && "dave"); // 0, because its the first 'faulthy' value

// console.log(0 ?? "dave");

// _-------------------

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "Capri",
//   owner: "Giorgio",
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // OR ASSIGNMENT OPERATOR
// // SAME AS:
// // rest1.numGuests ||= 10; // Assigns value to a variable if variable is FALSY
// // rest2.numGuests ||= 10;

// // NULLISH ASSIGNMENT OPERATOR
// // // SAME AS:
// // rest1.numGuests ??= 10; // Assigns value to a variable if variable is FALSY
// // rest2.numGuests ??= 10;

// // AND ASSIGNMENT OPERATOR

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the number of goals that were scored in total 
(number of player names passed in)

7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win,
 WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 
'Lewandowski' and 'Kimmich'. Then, call the function again 
with players from game.scored
GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(`GOALS: ${this.score} - PLAYERS: ${playerNames}`);
  },
};

// TASK 1:
const [players1, players2] = game.players;

// TASK 2:
const [gk, ...fieldPlayers] = players1;

// TASK 3:
const allPlayers = [...players1, ...players2];

// TASK 4:
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// TASK 5:
const { team1: oddTeam1, x: oddDraw, team2: oddTeam2 } = game.odds;

//TASK 6:
game.printGoals(game.scored);

// TASK 7 :
// console.log(
//   `Most likely to win: ${oddTeam1 < oddTeam2 ? game.team1 : game.team2}`
// );

oddTeam1 < oddTeam2 && console.log(`- Most likely to win: ${game.team1}`);
oddTeam1 > oddTeam2 && console.log(`- Most likely to win: ${game.team2}`);
