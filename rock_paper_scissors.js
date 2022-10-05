const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 'paper' || 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  
  const getComputerChoice = ()=> {
    const randomNumber = Math.floor(Math.random() * 2);
    switch(randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
          break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      console.log('Tie');
    };
    if (userChoice === 'rock') {
      if(computerChoice = 'paper') {
        console.log('Computer won!');
      } else {
        console.log('You won!');
      }
    }
    if (userChoice === 'paper') {
      if(computerChoice = 'scissors') {
        console.log('Computer won!');
      } else {
        console.log('You won!');
      }
    }
    if (userChoice === 'scissors') {
      if(computerChoice = 'rock') {
        console.log('Computer won!');
      } else {
        console.log('You won!');
      }
    }
  }
  
  const playGame = ()=> {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You choose ' + userChoice);
    console.log('Computer choose ' + computerChoice);
  }
  
  playGame();