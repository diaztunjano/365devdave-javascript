"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (movements, sort = false) => {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = "";

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    
    `;
    // 'afterbegin' means it inserts newer to the top.
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Call and print balance
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = (account) => {
  let movements = account.movements;
  let interest = account.interestRate;
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} €`;

  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interests = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * interest) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${Math.abs(interests)} €`;
};

// In this case, we dont use map, because we don't want to return a new array
const createUsernames = (accounts) => {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((user) => user[0])
      .join("");
  });
};

createUsernames(accounts);

let currentAccount;

const updateUI = (acc) => {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler to login:
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  // Find the current Account
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // Check password
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }!`;

    containerApp.style.opacity = 100;

    // Update UI
    updateUI(currentAccount);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount?.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(accounts);
    //delete User
    accounts.splice(index, 1);
    console.log(accounts);

    // Hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

// // SOME
// const anyDeposits = movements.some((mov) => mov > 0);
// console.log(anyDeposits); //True

// //EVERY
// const everyDeposits = movements.every((mov) => mov > 0);
// console.log(everyDeposits) // False

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

const accMovements = accounts.map((acc) => acc.movements);

const allMovements = accMovements.flat();

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalance);

// Chaining:

const overallBal = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBal);

//flatMap

const overallBalFlatMap = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(overallBalFlatMap);

let isSorted = false;

btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !isSorted);
  isSorted = !isSorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//------ 1

// const arr = [2, 3, 4, 5, 6];
// console.log(arr.slice(2)); // Doesn't mutate original array
// console.log(arr.slice(-2)); // Last 2 elements
// console.log(arr.slice()); // Creates a copy of the new array,
// // but its better to use the spread operator

// console.log(arr.splice(2)); // [4,5,6]
// console.log(arr); // [2,3]  splice mutates the original array
// console.log(arr.splice(-1)); // [6]
// console.log(arr.splice(1, 3)); // From position 1, delete 3 elements

// // REVERSE
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['f', 'g', 'h', 'i', 'j'] - mutates the orig. array

// // CONCAT
// const letters = arr.concat(arr2); // [2, 'f', 'g', 'h', 'i', 'j']
// console.log(letters);
// // The same as:
// const letters2 = [...arr, ...arr2];
// console.log(letters2);

// // JOIN
// console.log(letters.join(" - ")); // 2 - f - g - h - i - j

// // ------------ 2

// // getting last value
// console.log(arr.slice(-1)[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// -------------- 3

// // We pass a callback function to the forEach
// movements.forEach((mov, i) => {
//   if (mov > 0) {
//     console.log(`${i + 1} - Deposited: ${mov}`);
//   } else {
//     console.log(`${i + 1} - Withdrew: ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((value, key, map) => {
//   console.log(value);
//   console.log(key);
//   console.log(map);
// });

// 4 ---------------- Bankist introduction

// 5 ---------- bankist arrays

// 6 Coding Challenge:

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog 
owners about their dog's age, and stored the data into an array (one array 
  for each). For now, they are just interested in knowing whether a dog is
   an adult or a puppy. A dog is an adult if it is at least 3 years old, and
    it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs 
actually have cats, not dogs! So create a shallow copy of Julia's array, 
and remove the cat ages from that copied array (because it's a bad practice 
to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 
is still a puppy 🐶")

4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const checkDogs = (dogsJulia, dogsKate) => {
//   const realJuliaInfo = dogsJulia.slice(1, -2);
//   const completeDogs = [...realJuliaInfo, ...dogsKate];
//   completeDogs.forEach((dog, i) => {
//     const printString =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult`
//         : `Dog number ${i + 1} is a puppy`;
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// ------------------------ 7 MAP

// const eurToUSD = 2;

// // Multiplies * 2 each movement
// const movUSD = movements.map((mov) => mov * eurToUSD);

// const movDescription = movements.map((mov, i) => {
//   return `${i + 1} - You ${mov > 0 ? "deposited" : "withdrew"}`;
// });

//  -------------------- 8 MAP

// ----------------- 9 FIlTER

// const filterMovs = movements.filter((mov) => mov > 100);

// console.log(filterMovs);

// ---------------10 REDUCE

// accum ---> SNOWBALL
// In each iteration, the curr goes changing and the accum is the snowball

// Now, we are getting the max value of movements array

// const maxValue = movements.reduce(
//   (acc, curr) => (curr > acc ? curr : acc),
//   movements[0]
// );
// console.log(maxValue);

// 11 CHALLENGE

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an
 arrays of dog's ages ('ages'), and does the following things 
in order:
1. Calculate the dog age in human years using the following
 formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
 If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years 
  old)
3. Calculate the average human age of all adult dogs (you 
  should already know from other challenges how we calculate 
  averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

//   humanAges.filter((dog) => dog <= 18);

//   const averageAge =
//     humanAges.reduce((acc, curr) => acc + curr) / humanAges.length;
//   console.log(`The average age is ${averageAge}`);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// --------------------- 12:

// const euroToUSD = 1.1;
// const totalDepositUDS = movements
//   .filter((mov) => mov > 0)
//   .map((mov, i, arr) => {
//     // Good use case for "arr" parameter : debugging
//     console.log(arr);
//     return euroToUSD * mov;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// CHALLENGE 3

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the 
previous challenge, but this time as an arrow function,
 and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const averageAges = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((dog) => dog <= 18)
//     .reduce((acc, curr, i, arr) => {
//       return (acc + curr) / arr.length;
//     });
//   console.log(`The average age is ${averageAges}`);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// ----------13 : FIND

// const lessZero = movements.find((mov) => mov < 0);
// // Returns the first element of the array that satisfies the condition
// console.log(lessZero);

// const jessOwner = accounts.find((acc) => acc.owner === "Jessica Davis");

// console.log(jessOwner);

// ------------- 14 : FLAT

// const arrDeep = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const arrDeeper = [
//   [["a", "b", "c"], 2, 3],
//   [4, 5, 6],
// ];
// console.log(arrDeep.flat()); // [1,2,3,4,5,6]
// console.log(arrDeeper.flat(2)); // ['a', 'b', 'c', 2, 3, 4, 5, 6]

/// ----------------- SORT

// console.log(movements);
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// //Ascending
// movements.sort((a, b) => a - b);

// console.log(movements);

// --------- CREATE ARRAYS:

// MUltiple ways

console.log([1, 2, 3, 4, 5]);
console.log(new Array(1, 2, 3, 4, 5));
