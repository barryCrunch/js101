// array_methods.js

// Array.prototype.forEach

let numbers = [1, 2, 3];
let counter = 0;

while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter += 1;
}

[1, 2, 3].forEach(number => {
  console.log(number);
});

[1, 2, 3].forEach((number, idx) => {
  console.log(`${idx}: ${number}`);
});

'abcd'.split('').forEach(char => {
  console.log(char);
});

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


let produceValues = Object.values(produce);

produceValues.forEach(value => {
  console.log(value);
});

let produceKeys = Object.keys(produce);
produceKeys.forEach(key => {
  console.log(key);
});

let produceKeyValues = Object.entries(produce);

produceKeyValues.forEach(keyValue => {
  // array destructring assignment
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});

// Array.prototype.filter

numbers = [1, 2, 3];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}
console.log(oddNumbers);

oddNumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

console.log(oddNumbers);
[1, 2, 3].filter(num => num % 2 === 1);

produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

produceKeyValues = Object.entries(produce);
let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [ key, value ] = keyValue;
  onlyVegetables[key] = value;
});

console.log(onlyVegetables);

onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});
console.log(onlyVegetables);

// Array.prototype.map

console.log([1, 2, 3].map(num => num * 2));
console.log([1, 2, 3].map(num => num % 2 === 1));

let str = "What's up, Doc?";
let vowels = str.split('')
  .filter(char => 'aeiou'.includes(char.toLowerCase()))
  .join('');

console.log(vowels);

let doubledStr = str.split('')
  .map(char => char + char)
  .join('');
console.log(doubledStr);