// selections_transformations.js

let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers.length; counter++) {
    let currentNum = numbers[counter];

    if (currentNum === 1) {
        ones.push(currentNum);
    }
}

console.log(ones);

let fruits = ['apple', 'bannana', 'pear'];
let transformedElements = [];
let counter = 0;

while (counter < fruits.length) {
    let currentElement = fruits[counter];

    transformedElements.push(currentElement + 's');
    counter += 1;
}

console.log(transformedElements);


function selectVowels(str) {
    let selectedChars = '';

    for (let counter = 0; counter < str.length; counter += 1) {
        let currentChar = str[counter];

        if ('aeiouAEIOU'.includes(currentChar)) {
            selectedChars += currentChar;
        }
    }

    return selectedChars;
}

console.log(selectVowels('the quick brown fox'));

let sentence = 'I wandered lonely as a cloud';
console.log(selectVowels(sentence));

let numberOfVowels = selectVowels('hello world').length;
console.log(numberOfVowels);

function selectFruit(prod) {
    let fruits = {};
    let produceKeys = Object.keys(prod);

    for (let index = 0; index < produceKeys.length; index++) {
        if (prod[produceKeys[index]] === 'Fruit') {
            fruits[produceKeys[index]] = 'Fruit';
        }
    }
    return fruits;

}

let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
};


console.log(selectFruit(produce));

function doubleNumbers(numbers) {
    let doubledNums = [];
    let counter = 0;

    while (counter < numbers.length) {
        let currentNum = numbers[counter];
        doubledNums.push(currentNum * 2);

        counter += 1;
    }

    return doubledNums;
}

function doubleNumbersMutate(numbers) {
    let counter = 0;

    while (counter < numbers.length) {
        let currentNum = numbers[counter];
        numbers[counter] = currentNum * 2;
        counter += 1;
    }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));
console.log(myNumbers);

doubleNumbersMutate(myNumbers);
console.log(myNumbers);

function doubleOddNumbers(numbers) {
    let doubledNums = [];

    for (let counter = 0; counter < numbers.length; counter += 1) {
        let currentNumber = numbers[counter];

        if (currentNumber % 2 === 1) {
            doubledNums.push(currentNumber * 2);
        } else {
            doubledNums.push(currentNumber);
        }
    }

    return doubledNums;
}

myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));

console.log(myNumbers);

function doubleOddIndices(numbers) {
    let doubledNums = [];
    for (let counter = 0; counter < numbers.length; counter += 1) {
        let currentNumber = numbers[counter];

        if (counter % 2 === 1) {
            doubledNums.push(currentNumber * 2);
        } else {
            doubledNums.push(currentNumber);
        }
    }
    return doubledNums;
}

console.log(doubleOddIndices(myNumbers));
console.log(myNumbers);

function selectType(produceList, selectionCriterion) {
    let produceKeys = Object.keys(produceList);
    let selectedItems = {};

    for (let counter = 0; counter < produceKeys.length; counter++) {
        let currentKey = produceKeys[counter];
        let currentValue = produceList[currentKey];

        if (currentValue === selectionCriterion) {
            selectedItems[currentKey] = currentValue;
        }

    }
    return selectedItems;
}

var hello = "yes"
produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
};

console.log(selectType(produce, 'Fruit'));     // => {apple: 'Fruit', pear: 'Fruit'}
console.log(selectType(produce, 'Vegetable')); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
console.log(selectType(produce, 'Meat'));      // => {}

function multiplyNumbers(numbers, multiplier) {
    let multipliedNumbers = [];

    for (let counter = 0; counter < numbers.length; counter++) {
        multipliedNumbers.push(numbers[counter] * multiplier);
    }
    return multipliedNumbers;
}

myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiplyNumbers(myNumbers, 3));
