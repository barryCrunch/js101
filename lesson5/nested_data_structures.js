// nested_data_structures.js

let arr = [[1, 3], [2]];
console.log(arr[0]);
console.log(arr[0][1]);

arr[1] = 'hi there';
console.log(arr);

arr = [[1, 3], [2]];
arr[0][1] = 5;
console.log(arr);


arr = [[1], [2]];
arr[0].push(3);
console.log(arr);

arr = [{ a: 'ant'}, { b: 'bear' }];

arr[0]['c'] = 'cat';
arr[0].d = 'dog';
console.log(arr);

// Shallow Copy

arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
console.log(copyOfArr);


// ES6 Spread Syntax
arr = ['a', 'b', 'c'];
copyOfArr = [...arr];
console.log(copyOfArr)

copyOfArr.push('d');

console.log(arr);
console.log(copyOfArr);



arr = [['a'], ['b'], ['c']];
copyOfArr = arr.slice();

copyOfArr[1].push('d');
console.log(arr);
console.log(copyOfArr);

arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
copyOfArr = [...arr];

copyOfArr[1].d = 'qux';
console.log(arr);
console.log(copyOfArr);

let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

Object.assign(obj1, obj2);
console.log(obj1);

let obj = { a: 'foo', b: 'bar' };
let copyOfObj = Object.assign({}, obj);

console.log(copyOfObj);

copyOfObj['c'] = 'baz'
console.log(copyOfObj);
console.log(obj);

arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr);
console.log(serializedArr);
let deepCopiedArr = JSON.parse(serializedArr);
console.log(deepCopiedArr);