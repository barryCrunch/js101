// calculator.js
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
prompt("Please select your locale");
for (let index = 0; index < Object.keys(MESSAGES).length; index++) {
  console.log(`${index + 1}) ${Object.keys(MESSAGES)[index]}`);
}
let localeChoice = readline.question();
const locale = Object.keys(MESSAGES)[Number(localeChoice) - 1];

prompt(MESSAGES[locale]['welcome']);

while (true) {

  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES[locale]['invalidNumber']);
    number1 = readline.question();
  }

  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES[locale]['invalidNumber']);
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multipy 4) Divide?');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`the result is: ${output}`);

  prompt(MESSAGES[locale]['againMessage']);
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}
