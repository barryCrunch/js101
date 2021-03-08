// sorting.js

console.log([2, 11, 9, 4, 107, 21, 1].sort());

// Generic Sorting
let arr = [2, 11, 9, 4, 107, 21, 1] // sorted result: [ 1, 2, 4, 9, 11, 21, 107 ]
arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);

arr = [2, 11, 9, 4, 107, 21, 1] // sorted result: [ 1, 2, 4, 9, 11, 21, 107 ]
arr.sort((a, b) => a - b);
console.log(arr);

arr = [2, 11, 9, 4, 107, 21, 1] // sorted result: [ 1, 2, 4, 9, 11, 21, 107 ]
arr.sort((a, b) => {
  console.log(`a is ${a} and b is ${b}`);
  return a - b;
});
console.log(arr);


let words = ['go', 'ahead', 'and', 'jump'];
words.sort((a, b) => a.length - b.length);
console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  return a.reduce((a, b) => a + b, 0) - b.reduce((a, b) => a + b, 0)
});
console.log(scores);