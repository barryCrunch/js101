/* eslint-disable max-len */
// problems-easy-2.js

// Question 1
// Given a string, return a new string that replaces every occurence of the word
// "important" with urgent.
let advice = "Few things in life are as important as house training your pet dinosaur.";
const regex = /important/i;
console.log(advice.replace(regex, 'urgent'));

// Question 2
// eslint-disable-next-line max-len
// The Array.prototype.reverse method reverses the order of elements in an array,
// and Array.prototype.sort can rearrange the elements in a variety of ways, including
// descending. Both of these methods mutate the original array as shown below.
// Write two distinct ways of reversing the array without mutating the original array.
// Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(numbers);
console.log(reversedNumbers);

numbers = [1, 2, 3, 4, 5];
[...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers);
console.log(reversedNumbers);

reversedNumbers = [];
numbers.forEach(num => reversedNumbers.unshift(num));
console.log(numbers);
console.log(reversedNumbers);

// Question 3
// Given a number and an array, determine wheter the number is included in the array.
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

// Question 4
// Starting with the gien string show tow different ways to put the expected "Four Score and " in front of it.

let famousWords = "seven years ago...";
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

// Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at
// index 2, so that the array becomes [1, 2, 4, 5].

numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1);
console.log(numbers);

// Question 6
// Create a new array with the inner arrays un-nested
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flinstonesNew = [];

// My solution
flinstonesNew = [].concat(...flintstones);
console.log(flinstonesNew);
flinstonesNew = [];
// Solution with reduce
flinstonesNew = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flinstonesNew);
flinstonesNew = [];

// Solution with forEach
flintstones.forEach(element => {
  flinstonesNew = flinstonesNew.concat(element);
});
console.log(flinstonesNew);

// Question 7
// Create an array from this object that contains only two elements: Barney's name and Barney's number
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// My Solution
console.log(Object.entries(flintstones)[2]);

// Provided Solution
console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift());

// Question 8
// How would you check whether the objects assiged to variables numbers and table below are arrays?
numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

// Question 9
// How do we allign the title of a table if the table is 40 chars long?
let title = "Flintstone Family Members";

// My Solution
let buffer = Math.floor((40 - title.length) / 2);
console.log(buffer);
console.log(' '.repeat(buffer) + title + ' '.repeat(buffer));

// Provided Solution
let paddedTitle = title.padStart(buffer + title.length);
console.log(paddedTitle);

// Question 10
// Write two one-line expressions to count the number of lower-case t characters in each of the 
// following strings.
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.match(/t/g) === null ? 0 : statement1.match(/t/g).length);
console.log(statement1.split("").filter(char => char === 't').length);
console.log(statement2.match(/t/g) === null ? 0 : statement1.match(/t/g).length);
console.log(statement2.split("").filter(char => char === 't').length);

