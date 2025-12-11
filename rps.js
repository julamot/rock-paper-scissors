let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let num = Math.random(); 
   let out = 0;
   if (num < .33333)
      return "rock";
   else if (num > .66666)
      return "scissors";
   else
      return "paper";

   //console.log(num);
}

function getHumanChoice() {
   let human = prompt("What's your sign?");
   return human.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
   let score = 0;
   switch (humanChoice) {
     case "rock":
       if (computerChoice == "paper")
       {
          console.log("You lose! Paper beats Rock");
       }
       else if (computerChoice == "scissors")
       {
          console.log("You win! Rock beats Scissors");
          score = 1;
       }
       else
       {
          console.log("No winner");
       }
       break;
     case "paper":
       if (computerChoice == "rock")
       {
          console.log("You win! Paper beats Rock");
       }
       else if (computerChoice == "scissors")
       {
          console.log("You lose! Scissors beats Paper");
       }
       else
       {
          console.log("No winner");
       }
       break;
     case "scissors":
       //console.log ("Human chose scissors");
       if (computerChoice == "rock")
       {
          console.log("You lose! Rock beats Scissors");
       }
       else if (computerChoice == "paper")
       {
          console.log("You win! Scissors beats Paper");
			    score = 1;
       }
       else
       {
          console.log("No winner");
       }
       break;
     default:
        console.log ("Invalid human entry!");
   }
   return score;
}

function playOne() {

   const humanSelection  = getHumanChoice();
   let computerSelection = getComputerChoice(); 
   
   while (humanSelection == computerSelection)
   {
      console.log("Try again, poo-ter");
      computerSelection=getComputerChoice(); 
   }
   console.log("Computer: " + computerSelection);
   const score = playRound(humanSelection, computerSelection);
}

//playOne();
function playGame() {

   n = 5;
   let humanScore=0;

   for (i=0; i<n; i++) 
   {
      humanScore += playOne(); 
   }
   const computerScore = n-humanScore; 
}
