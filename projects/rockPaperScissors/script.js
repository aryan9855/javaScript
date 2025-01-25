let userScore = 0;
let compScore = 0;

// Selectors
const choices = document.querySelectorAll(".choice");
const msgContainer = document.querySelector(".msg"); // Fixed selector to target the correct message container
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-socre"); // Fixed typo: changed "comp-socre" to "comp-score"

// Generate computer's choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw Game Message
const drawGame = () => {
  msgContainer.innerText = "It's a draw! Play again.";
  msgContainer.style.backgroundColor = "#081b31";
};

// Show Winner or Loser
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msgContainer.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msgContainer.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msgContainer.innerText = `You lose! Computer's ${compChoice} beats your ${userChoice}`;
    msgContainer.style.backgroundColor = "red";
  }
};

// Game Logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors"; // Rock beats Scissors
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock"; // Paper beats Rock
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper"; // Scissors beats Paper
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Add Event Listeners
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
