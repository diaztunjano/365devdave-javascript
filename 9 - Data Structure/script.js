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
