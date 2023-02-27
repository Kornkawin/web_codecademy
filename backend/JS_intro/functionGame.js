const getUserChioce = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Input error!');
    }
  };
  
  
  const getComputerChoice = () => {
    const tmp = Math.floor(Math.random() * 3);
    if (tmp === 0) {
      return 'rock';
    } else if (tmp === 1) {
      return 'paper';
    } else if (tmp === 2) {
      return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      console.log('Tie!');
    } else if (userChoice === 'paper') {
      if (computerChoice === 'rock'){
        console.log('User win!');
      } else {
        console.log('Computer win!');
      }
    } else if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        console.log('User win!');
      } else {
        console.log('Computer win!');
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        console.log('User win!');
      } else {
        console.log('Computer win!');
      }
    }
  }
  
  const playGame = (userChoice, computerChoice) => {
    console.log(`User: ${userChoice}`);
    console.log(`Computer: ${computerChoice}`);
    determineWinner(userChoice, computerChoice);
  };
  
  user_threw = getUserChioce('scissors');
  com_threw = getComputerChoice();
  playGame(user_threw, com_threw);
  