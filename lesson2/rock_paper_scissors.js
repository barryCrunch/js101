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

function getWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  if (WINNING_COMBINATIONS[userChoice].includes(computerChoice)) {
    prompt('You win!\n');
    return 'player';
  } else if (WINNING_COMBINATIONS[computerChoice].includes(userChoice)) {
    prompt('Computer wins!\n');
    return 'computer';
  } else {
    prompt("It's a tie\n");
    return 'tie';
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function adjustScore(winner, scores) {
  if (winner === 'player') {
    scores['player'] += 1;
  } else if (winner === 'computer') {
    scores['computer'] += 1;
  } else if (winner === 'tie') {
    scores['ties'] += 1;
  }
}

function getUserChoice(availableChoices) {
  while (availableChoices.length > 1) {
    prompt(`Choose one: ${availableChoices.join(', ')}`);
    let choice = readline.question().toLowerCase();
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
  if (round === 1) {
    console.log(`The game is best out of ${BEST_OF_NUMBER}\n`);
  }
}

function displayFinalScore(winner, scores) {

  console.log("====================================");
  console.log(`           WINNER: ${winner}           `);
  console.log("====================================");
  console.log(`Player Score: ${scores['player']} -- Computer Score: ${scores['computer']}`);
  console.log(`Number of Ties: ${scores['ties']}`);
  console.log("\n\n");
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer !== 'y';
}


while (true) {
  let scores = {player: 0, computer: 0, ties: 0};
  let numberOfRounds = 0;
  console.clear();
  while (numberOfRounds < BEST_OF_NUMBER) {

    displayRound(numberOfRounds + 1);
    let choice = getUserChoice(VALID_CHOICES);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let winner = getWinner(choice, computerChoice);
    adjustScore(winner, scores);
    numberOfRounds += 1;
  }

  if (scores['computer'] < scores['player']) {
    displayFinalScore('Player', scores);
  } else {
    displayFinalScore('Computer', scores);
  }

  if (playAgain()) break;
}


