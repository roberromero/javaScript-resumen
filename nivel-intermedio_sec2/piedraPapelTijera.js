/* ROCK, PAPER, SCISSORS GAME  (there are some arrow functions) */


//Function proves that "rock", "paper" or "scissors" is introduced
const getUserChoice= userInput =>{
    userInput.toLowerCase();
  
    if(userInput==="rock"||userInput==="paper"|| userInput==="scissors"){
      return userInput;
    }else{
      console.log("Introduce la palabra correcta");
    }
  };

  //Function that creates randomly one of the three options
  const getComputerChoice= () => {
    var number= Math.floor(Math.random()*3);
    switch(number){
      case 0:
      return "rock";
      case 1:
      return "paper"
      case 2:
      return "scissors"
      braak;
    }
  
  };

  //Function that determines the winner
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice===computerChoice){
      return "Game was a TIE";
    }else{
      if(userChoice=== "rock"){
        if(computerChoice=== "paper"){
          return "Has perdido";
        }else{
          return "Has ganado";
        }
      }else if(userChoice==="paper"){
        if(computerChoice==="scissors"){
          return "Has perdido";
        }else{
          return "Has ganado";
        }
      }else{
        if(userChoice ==="scissors"){
          if(computerChoice==="rock"){
            return "Has perdido";
          }else{
            return "Has ganado";
          }
        }
      }
  
  
    }
  }
  var ordenadorChoice= getComputerChoice();
  console.log(ordenadorChoice);

  console.log(determineWinner(getUserChoice("rock"), ordenadorChoice));
