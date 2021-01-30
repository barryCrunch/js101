// rock_paper_scissors.js
const readline = require('readline-sync');
const WINNING_COMBINATIONS = {
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['rock', 'scissors'],
  scissors: ['lizard', 'paper'],
  paper: ['spock', 'rock'],
};
const VALID_CHOICES = Object.keys(WINNING_COMBINATIONS);
const BEST_OF_NUMBER = 5;
let computerScore = 0;
let playerScore = 0;
let numberOfTies = 0;

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  if (WINNING_COMBINATIONS[userChoice].includes(computerChoice)) {
    prompt('You win!');
    adjustScore('player');
  } else if (WINNING_COMBINATIONS[computerChoice].includes(userChoice)) {
    prompt('Computer wins!');
    adjustScore('computer');
  } else {
    prompt("It's a tie");
    adjustScore('tie');
  }
  console.log("\n");
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function adjustScore(winner) {
  if (winner === 'player') {
    playerScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  } else if (winner === 'tie') {
    numberOfTies += 1;
  }
}

function getUserChoice(availableChoices) {
  while (availableChoices.length > 1) {
    prompt(`Choose one: ${availableChoices.join(', ')}`);
    let choice = readline.question();
    let filteredChoices = availableChoices.filter(item => {
      return item.substring(0, choice.length) === choice;
    });

    if (filteredChoices.length === 0) {
      prompt("Invalid selection please try again.\n");
    } else if (filteredChoices.length > 1) {
      prompt("Please be more specific.\n");
      availableChoices = filteredChoices;
    } else {
      availableChoices = filteredChoices;
    }
  }
  return availableChoices[0];
}

function displayRound(round) {
  console.log("====================================");
  console.log(`           ROUND ${round}           `);
  console.log("====================================");
}

function displayFinalScore(winner) {

  console.log("====================================");
  console.log(`           WINNER: ${winner}           `);
  console.log("====================================");
  console.log(`Player Score: ${playerScore} -- Computer Score: ${computerScore}`);
  console.log(`Number of Ties: ${numberOfTies}`);
  console.log("\n\n\n");
}


while (true) {
  let numberOfRounds = 0;
  console.clear();
  while (numberOfRounds < BEST_OF_NUMBER) {

    displayRound(numberOfRounds + 1);
    let choice = getUserChoice(VALID_CHOICES);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);
    numberOfRounds += 1;
  }

  if (computerScore < playerScore) {
    displayFinalScore('Player');
  } else {
    displayFinalScore('Computer');
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}


