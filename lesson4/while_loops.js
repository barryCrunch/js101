// while_loops.js
let numbers = [1, 2, 3, 4];
numbers[0] += 1;
numbers[1] += 1;
numbers[2] += 1;
numbers[3] += 1;
numbers;               // => [ 2, 3, 4, 5 ]

numbers = [1, 2, 3, 4];
let idx = 0;
while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log(numbers);

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number=== 5) {
    console.log('Exiting...');
    break;
  }
}

// Iterating over Collections
// Strings

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}

for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}

// Arrays

let colors = ['green', 'blue', 'purple', 'orange'];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`I'm the color ${colors[counter]}!`);
}

let mixed = ['hello', 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}


// Objects

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
counter = 0;

while (counter < pets.length) {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}

let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');

let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}


while (str.length < 10) {
  str += '*';
  console.log(str);
}

let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index] * numbers[index]);
  }
}

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue;

  console.log(numbers[index] * numbers[index]);
}