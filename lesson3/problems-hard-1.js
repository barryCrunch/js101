/* eslint-disable max-len */
// problems-hard-1.js

// Question 1
// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}
// No - the object in second() is unreachable
console.log(first());
console.log(second());

// Question 2
// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

// first: [1,2]
console.log(numArray); //  => "[1, 2]"
console.log(object);


// Question 3
// Given the following similar sets of code, what will each code snippet print?

// A
function messWithVars(one, two, three) {
  one = two;
  // one now points to ['two']
  two = three;
  // two now points to ['three']
  three = one;
  // three now points to ['two']
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ['one']
console.log(`two is: ${two}`); // ['one']
console.log(`three is: ${three}`); // ['one']

// Actual Output
// one
// two
// three
// I was wrong because once these variables were passed to messWithVars they actually start
// being shadowed. The global variables one, two, and three become inaccessible
// from within the function. I can only access the local variables.
// When those are reassigned, I'm not modifying the underlying array
// but just changing what the LOCAL variable points to. Once the function exits
// and console.log is called I'm now back to referencing the global variables
// which were never reassigned.

// B
function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars2(one, two, three);

console.log(`one is: ${one}`); // ['two']
console.log(`two is: ${two}`); // ['three']
console.log(`three is: ${three}`); // ['one']

// Actual Ouput
// one
// two
// three
// Same issue as the code in second A. The variables inside of messWithVars2
// are shadows of the global variables. The three assignements within the
// function are reassigning the locally scoped variables not the global
// variables called from console.log.

// C
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars3(one, two, three);

console.log(`one is: ${one}`); // ['two']
console.log(`two is: ${two}`); // ['three']
console.log(`three is: ${three}`); // ['one']

// I got this one right but only by luck. The reason why this worked was
// because splice() actually mutates the caller. By running it on one, two, and
// three, the underlying array was being mutated. Since the locally scoped
// one, two, and three point to the same array as the globally scoped one, two,
// and three when that array was mutated it's reflected by both the local and global
// scoped variables.

// Question 4
// Help Ben Fix is code

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('192.168.255.124'));
console.log(isDotSeparatedIpAddress('192.168.abc.10'));