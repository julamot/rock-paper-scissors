let humanScore = 0;
let computerScore = 0;

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

/* Prompt for user input. */
function getHumanChoice() {
   let human = prompt("What's your sign?");
   return human.toLowerCase();
}

/* Given human and computer choice, return winner. */
function playRound(humanChoice, computerChoice) {
   if (humanChoice == computerChoice)
   {
      console.log("Invalid input -- no winner");
      return -1;
   }
   let score = 0;
   switch (humanChoice) {
     case "rock":
       if (computerChoice == "scissors")
       {
          score = 1;
       }
       break;
     case "paper":
       if (computerChoice == "rock")
       {
          score = 1;
       }
       break;
     case "scissors":
       if (computerChoice == "paper")
       {
			    score = 1;
       }
       break;
     default:
        console.log ("Invalid human entry!");
   }
   return score;
}

/* Helper function, get the choices, play, return score. */
function playOne() {

   const humanSelection  = getHumanChoice();
   let computerSelection = getComputerChoice(); 
   
   while (humanSelection == computerSelection)
   {
      computerSelection=getComputerChoice(); 
   }
   console.log("Human, Computer: " + humanSelection + ", " + computerSelection);
   return playRound(humanSelection, computerSelection);
}

//console.log("Your score is " + playOne());

function playGame() {

   n = 5;
   let roundScore=0;   
   let humanScore = 0;
   let computerScore = n;
   let i=0;

   for (i=1; i<=n; i++) 
   {
      roundScore = playOne();
      //console.log("roundScore is " + roundScore);
      humanScore += roundScore; 
      computerScore = i - humanScore;
      if (roundScore)
      {
         console.log (i + ". HUMAN: " + humanScore + " -- Computer: " + computerScore);
      }
      else
      {
         console.log (i + ". Human: " + humanScore + " -- COMPUTER: " + computerScore);
      }
   }
}

playGame();
