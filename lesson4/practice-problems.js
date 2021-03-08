// practice-problems.js


// Practice Problem 1
// What is the return value of the filter method call below? Why?
console.log([1, 2, 3].filter(num => 'hi'));

// Practice Problem 2
// What is the return value of map in the following code? Why?
// Returns [ undefined, undefined, undefined ] because there is 
// no explicit return statement.
let result = [1, 2, 3].map(num => {
    num * num;
});
console.log(result);

// Practice Problem 3
// The following code differs slightly from the above code.
// What is the return value of map in this case? Why?
// Returns [1, 4, 9]
result = [1, 2, 3].map(num => num * num);
console.log(result);

// Practice Problem 4
// What is the return value of the following statement? Why?
// 11 because it actually returns the length of the word caterpillar
result = ['ant', 'bear', 'caterpillar'].pop().length
console.log(result);

// Practice Problem 5
// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?
result = [1, 2, 3].every(num => {
    return num = num * 2;
});
console.log(result);

// Practice Problem 6
// How does Array.prototype.fill work? Is it destructive? How can we find out?
// Yes it is destructive. It will fill an array with x from postion a to 
// postion b array.fill(x, a, b)
let arr = [1, 2, 3, 4, 5]
console.log(arr.fill(1, 1, 5));

// Practice Problem 7
// What is the return value of map in the following code? Why?
// [undefined, bear]
result = ['ant', 'bear'].map(elem => {
    if (elem.length > 3) {
        return elem;
    }
});
console.log(result);

// Practice Problem 8
// Write a program that use this array to create an object where the names
// are the keys and the values are the positions in the array.
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let newObj = {};
flintstones.forEach((element, index) => newObj[element] = index);
console.log(newObj);

// Practice Problem 9
// Add up all of the ages from the Munster family object
let ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
};

let total = Object.values(ages).reduce((accum, curr) => {
    return accum + curr;
}, 0);
console.log(total);

// Practice Problem 10
// Pick out the minimum age from our current Munster family object.
ages = {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
};

// My solution
let youngest = Object.values(ages).sort((a, b) => {
    return a - b;
})[0];
console.log(youngest);

// Provided solution
let agesArr = Object.values(ages);
console.log(Math.min(...agesArr));


// Practice Problem 11
// Create an object that expresses the requency with which
// each letter occurs in this string
let statement = "The Flintstones Rock";

// My solution
obj = {};

statement.split('').forEach(element => {
    if (obj.hasOwnProperty(element)) {
        obj[element] += 1;
    } else if (!(obj.hasOwnProperty(element)) && element !== ' ') {
        obj[element] = 1;
    }
});
console.log(obj);

// Provided Solution
// I feel the filter method may be a better way to pull out the space.
let charsInStatment = statement.split('').filter(char => char !== ' ');
result = {};

charsInStatment.forEach(char => {
    result[char] = result[char] || 0;
    result[char] += 1;
});
console.log(result);
