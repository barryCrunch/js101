// problems-easy-3.js

// Question 1
// Write three different ways to remove all of the elements from the following
// array.

// My Solution
let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers);

// Providers Solution
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);


numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

// Question 2
// What will the following code output?
console.log([1, 2, 3] + [4, 5]); // [1, 2, 3, 4, 5]
// 1, 2, 34, 5 JavaScript first converts the arrays to string.

// Question 3
// What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // hello there

// Qustion 4
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: 42 }, { second: "value2" }, 3, 4, 5]
arr2[2] = 69;
console.log(arr1);

// Question 5
// The following function unnecessarily uses two return statements to return
// boolean values. Can you rewrite this function so it only has one
// return statement and does not explicity use either true or false?
function isColorValid(color) {
  return color === "blue" || color === "green";
}
console.log(isColorValid('blue'));
console.log(isColorValid('red'));

