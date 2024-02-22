let userScore = 0;
let computerScore = 0;
let button = document.querySelector(".play-button");
let message = document.querySelector(".message");
let finaluserScore = document.querySelector(".user-score");
let finalcompscore = document.querySelector(".comp-score");

const computerChoices = () => {
  const computerchoices = ["rock", "paper", "scissor"];
  var final_choice = computerchoices[Math.floor(Math.random()*3)];
  console.log("comp choice, ",final_choice)
  return final_choice;
};
const choices = document.querySelectorAll(".choice");
const playGames = (userChoices, final_choice) => {
  if (
    (userChoices == "paper" && final_choice == "scissor") ||
    (userChoices == "scissor" && final_choice == "rock") ||
    (userChoices == "rock" && final_choice == "paper")
  ) {
    computerScore = computerScore + 1;
    console.log(computerScore, "computerScore");
    finalcompscore.innerHTML = computerScore;
    message.innerHTML = `computer wins, computer chose ${final_choice}`;
    console.log(message)
  } else if (
    (userChoices == "scissor" && final_choice == "paper") ||
    (userChoices == "rock" && final_choice == "scissor") ||
    (userChoices == "paper" && final_choice == "rock")
  ) {
    userScore = userScore + 1;
    console.log(userScore, "computerScore");
    finaluserScore.innerHTML = userScore;
    message.innerHTML =`you win, computer chose ${final_choice}`;
    console.log(message)

  }
  else{
    message.innerHTML = `computer too  chose ${final_choice}`;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("user choice, ", userChoice);
    computerMove = computerChoices();
    playGames(userChoice, computerMove);
  });
});


button.addEventListener("click",()=>{
  userScore=0;
  computerScore=0;
  finalcompscore.innerHTML = "0";
  finaluserScore.innerHTML = "0";
  message.innerHTML = "";

})