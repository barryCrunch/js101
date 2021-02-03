// collection_basics.js

let str = 'abcdefghi';
console.log(str[2]); //'c'
console.log(str.slice(2,5)); // =>'cde'
console.log(str.slice(2)); // => 'cdefghi'
console.log(str.slice()); // => 'abcdefghi'
console.log(str.slice(-4, -2)); // 'fg'


let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
arr.slice(2); // => [ 'c', 'd', 'e', 'f', 'g' ]
arr.slice(); // => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

let obj = { fruit: 'apple', vegetable: 'carrot'};
console.log(obj.fruit);
console.log(obj.fruit[3]);
console.log(obj['vegetable']);
console.log(obj['vegetable'][0]);


let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin'};
console.log(Object.keys(capitals));
console.log(Object.values(capitals));
console.log(Object.values(capitals)[0]);

let string = 'abcde';
let array = ['a', 'b', 'c', 'd', 'e'];
console.log(string[2]); // => 'c'
console.log(array[2]); // => 'c'

console.log(string[5]); // => undefined
console.log(array[5]); // => undefined

console.log(string[-1]); // => undefined
console.log(array[-1]); // => undefined

obj = {a: 'foo', b: 'bar'};
console.log(obj['c']); // => undefined

obj = {a: 'foo', b: 'bar', c: undefined};
console.log(Object.keys(obj).includes('c')); // => true
console.log(Object.keys(obj).includes('d')); // => false

arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
console.log(arr);
console.log(arr.length);
arr.forEach(element => console.log(element));
console.log(Object.keys(arr));

arr = ['foo', 'bar', 'qux'];
obj = {a: 1, b: 2};
console.log(typeof arr);
console.log(typeof obj);
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log('this is a string'.split());
console.log('abcdef'.split(''));
console.log('abcdef'.split('')[0]);
console.log('apple,orange,mango'.split(','));

arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.join());
console.log(arr.join(' '));

obj = {sky: 'blue', grass: 'green'};
console.log(Object.entries(obj));

let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;
console.log(numbers);

str = 'bob';
str[0] = 'B';
console.log(str);

str = 'B' + str.slice(1);
console.log(str);