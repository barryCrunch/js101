// car_loan_calculator.js
const readline = require('readline-sync');

// the loan amount
// the Anual Percentage Rate APR
// the loan duration

// monthly interest rate
// loan duration in months

// let m = p * (j / (1 - Math.pow((1 + j), (-n))))
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || number <= 0 || Number.isNaN(Number(number));
}

while (true) {
  prompt("Welcome to the car loan calculator");

  prompt("Please enter the total loan amount: ");
  let principal = readline.question();

  while (invalidNumber(principal)) {
    prompt("Hmm...that doesn't look right. Let's try again.");
    principal = readline.question();
  }

  prompt("Please enter you APR:");
  let apr = readline.question();
  if (apr.slice(-1) === '%') {
    apr = apr.substring(0, apr.length - 1);
  }

  while (invalidNumber(apr)) {
    prompt("Hmm...that doesn't look right. Let's try again.");
    principal = readline.question();
    if (apr.slice(-1) === '%') {
      apr = apr.substring(0, apr.length - 1);
    }
  }

  if (apr > 1) {
    apr /= 100;
  }

  let monthlyInterestRate = apr / 12;

  prompt("Please enter the loan duration: ");
  let loanDuration = readline.question();
  while (invalidNumber(loanDuration)) {
    prompt("Hmm...that doesn't look right. Let's try again.");
    loanDuration = readline.question();
  }

  prompt("Is the loan duration in years or months? (y/m)");
  let answer = readline.question();
  while (answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'm') {
    prompt("Hmm...that doesn't look right. Let's try again.");
    answer = readline.question();
  }

  if (answer[0].toLowerCase() === 'y') {
    loanDuration *= 12;
  }

  let monthlyPayment = principal * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

  prompt(`Your monthly payment amount is $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  let cont = readline.question().toLowerCase();
  while (cont[0].toLowerCase() !== 'y' && cont[0].toLowerCase() !== 'm') {
    prompt('Please enter "y" or "n".');
    cont = readline.question();
  }
  if (cont[0] === 'n') break;
}
