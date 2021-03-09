// working_with_callbacks.js

 let numbers = [1, 2, 3, 4, 5];
 let transformedNumbers = [];

 for (let index = 0; index < numbers.length; index += 1) {
   let currentNum = numbers[index];
   let squaredNum = currentNum * currentNum;

   transformedNumbers.push(squaredNum);
 }

 console.log(transformedNumbers);

 transformedNumbers = numbers.map(num => num * num);
 console.log(transformedNumbers);

 // Functions that take other functions as arguments are called "Higher Order Functions"
 // Functions that we pass to other functions are called "callback functions"

 
// What specific pieces of information should we track, then? When evaluating code like this, ask the following questions:

// What type of action is being performed? Method call? Callback? Conditional? Something else?
// On what value is that action performed?
// What is the side-effect of that action (e.g., output or destructive action)?
// What is the return value of that action?
// Is the return value used by whatever instigated the action?