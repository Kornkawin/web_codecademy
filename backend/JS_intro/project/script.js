let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let target = Math.random() * 10;
  return Math.floor(target);
};

const getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
};

const compareGuesses = (userGuess, comGuess, target) => {
  let userDiff = getAbsoluteDistance(userGuess, target);
  let comDiff = getAbsoluteDistance(comGuess, target);
  if (userDiff <= comDiff) {
    // player wins
    return true;
  } else {
    // computer wins
    return false;
  };
};

const updateScore = (winnerIs) => {
  if (winnerIs === 'human') {
    humanScore += 1; 
  } else if (winnerIs === 'computer') {
    computerScore += 1;
  };
};

const advanceRound = () => {
  currentRoundNumber += 1;
};