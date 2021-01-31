// problems-easy-1.js

// Question 2
// How can you determin whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// My Solution
console.log(str1.substring(str1.length - 1) === "!");
console.log(str2.substring(str2.length - 1) === "!");

// Provided Solution
console.log(str1.endsWith("!"));
console.log(str2.endsWith("!"));

// Question 3
// Determine whether the following object of people and their age contains an entry for 'Spot'
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// My Solution
console.log(Object.keys(ages).includes('Spot'));

// Provided Solution
console.log(ages.hasOwnProperty('Spot'));

// Question 4
// Using the following string, create a new string that contains
// all lowercase letters except for the first character, which
// should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.substring(0,1).toUpperCase() +
  munstersDescription.substring(1).toLowerCase());

// Question 5
// What will the following code output

console.log(false == '0'); // true
console.log(false === '0'); // false

// Question 6
// Add entries for Marilyn and spot to the Munster family object

let additionalAges = { Marilyn: 22, Spot: 237 };
console.log(Object.assign(ages, additionalAges));

// Question 7
// Determine wheter the name Dino appears in the strings below --
// check each string separately.

str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// My Solution
console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

// Alternate Solution
console.log(str1.match("Dino") !== null);
console.log(str2.match("Dino") !== null);

// Yet another Solution
console.log(str1.indexOf("Dino") > -1);
console.log(str2.indexOf("Dino") > -1);

// Question 8
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
console.log(flintstones.push("Dino"));
console.log(flintstones);

// Question 9
// How can we add multiple ites to our array? ('Dino' and 'Hoppy')

// My Solution
let pets = ['Dino', 'Hoppy'];
flintstones.push(...pets);
console.log(flintstones);

// Provided Solution
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");   // we can pass multiple arguments to push
console.log(flintstones); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]

// Question 10
// Return a new version of this sentence that ends just before the word house
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// My Solution
console.log(advice.substring(0, advice.indexOf('house')));

// Provided Solution
console.log(advice.slice(0, advice.indexOf('house')));