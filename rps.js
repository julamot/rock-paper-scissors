let humanScore = 0;
let computerScore = 0;

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);

const div = document.createElement("div");
div.textContent = "Your score is " + humanScore + " -- Computer score is " + computerScore;
document.body.appendChild(div);

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

function getComputerChoice() {
   const num = Math.random(); 
   if (num > .66666)
      return "rock";
   else if (num > .33333)
      return "paper";
   else
      return "scissors";

   //console.log(num);
}

function playRound(humanChoice) {
   // Revisit RPS  
   let computerChoice = getComputerChoice(); 
   // Delete for revisit
   // if (humanChoice == computerChoice)
   // {
   //    console.log("Invalid input -- no winner");
   //    return -1;
   // }
   // let score = 0;
   switch (humanChoice) {
     case "rock":
       if (computerChoice == "scissors")
       {
          humanScore += 1;
          computerScore -= 1;
       } 
       else if (computerChoice == "paper")
       {
          humanScore -= 1;
          computerScore += 1;
       }
       break;
     case "paper":
       if (computerChoice == "rock") 
      {
          humanScore += 1;
          computerScore -= 1;
       }
       else if (computerChoice == "scissors")   
      {
          humanScore -= 1;
          computerScore += 1;
       }
       break;
     case "scissors":
       if (computerChoice == "paper")
       {
			    humanScore += 1;
            computerScore -= 1;
       }
       else if (computerChoice == "rock")
       {
             humanScore -= 1;
             computerScore += 1;
       }
       break;
     default:
        console.log ("Invalid human entry!");
   }
   if (humanScore == 5 || computerScore == 5 )
   {
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;

      if (humanScore == 5)
      {
         div.textContent = "Congratulations! You win! Your score is " + humanScore;
   
      }
      else 
      {
         div.textContent = "Sorry, you lose! Computer score is " + computerScore;
      }
   }  
   else
   {
      div.textContent = "Your score is " + humanScore + " -- Computer score is " + computerScore;
   }
}

/* Helper function, get the choices, play, return score. */
// function playOne(humanSelection) {

//    // const humanSelection  = getHumanChoice();
//    let computerSelection = getComputerChoice(); 
   
//    while (humanSelection == computerSelection)
//    {
//       computerSelection=getComputerChoice(); 
//    }
//    console.log("Human, Computer: " + humanSelection + ", " + computerSelection);
//    return playRound(humanSelection, computerSelection);
// }

// function playGame() {
//    // n = 5;
//    let roundScore=0;   
//    let humanScore = 0;
//    let computerScore = n;
//    let i=0;

//    // for (i=1; i<=n; i++) 
//    // {
//       roundScore = playOne();
//       //console.log("roundScore is " + roundScore);
//       humanScore += roundScore; 
//       computerScore = i - humanScore;
//       if (roundScore)
//       {
//          console.log (i + ". HUMAN: " + humanScore + " -- Computer: " + computerScore);
//       }
//       else
//       {
//          console.log (i + ". Human: " + humanScore + " -- COMPUTER: " + computerScore);
//       }
//    // }
// }

// playGame();
