// problems-medium-1.js

// Question 1
// Write a program that outputs The Flintstones Rock 10 times,
// with each line indented 1 space to the write of the line above it.

// My Solution
let str1 = "The Flintstones Rock!";
for (let i = 0; i < 10; i++) {
  console.log(str1.padStart(i + str1.length));
}

// Provided Solution
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}

// Question 2
// Return a new string that swaps the case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";
let flippedArray = munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
});
console.log(flippedArray.join(''));

// Question 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor >= 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

factors(0);
factors(-1);
