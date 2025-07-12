function getComputerChoice() {
  let num = Math.random();

  return num > 2 / 3
    ? "rock"
    : num < 2 / 3 && num > 1 / 3
    ? "paper"
    : num < 1 / 3
    ? "scissors"
    : "computer got confused, malfunctioned and didn't pick anything";
}

function getHumanChoice() {
  return prompt("choose rock, paper or scissors");
}

function playRound(humanChoice, computerChoice) {
  let winner;
  humanChoice = humanChoice.toLowerCase();
  if ((humanChoice === "rock") & (computerChoice === "paper")) {
    winner = "computer";
  } else if ((humanChoice === "paper") & (computerChoice === "rock")) {
    winner = "human";
  } else if ((humanChoice === "scissors") & (computerChoice === "rock")) {
    winner = "computer";
  } else if ((humanChoice === "rock") & (computerChoice === "scissors")) {
    winner = "human";
  } else if ((humanChoice === "paper") & (computerChoice === "scissors")) {
    winner = "computer";
  } else if ((humanChoice === "scissors") & (computerChoice === "paper")) {
    winner = "human";
  }
  return winner;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let roundWinner = playRound(humanSelection, computerSelection);

    switch (roundWinner) {
      case "human":
        humanScore++;

        alert(
          `You win! ${humanSelection} beats ${computerSelection}! \nHuman score: ${humanScore}\nComputer score: ${computerScore}`
        );
        break;
      case "computer":
        computerScore++;
        alert(
          `You lose! ${computerSelection} beats ${humanSelection}!\nHuman score: ${humanScore}\nComputer score: ${computerScore}`
        );
        break;
      default:
        alert(
          `It is a draw!\nHuman score: ${humanScore}\nComputer score: ${computerScore}`
        );
        break;
    }
  }

  const gameWinner =
    humanScore > computerScore
      ? "Human won!"
      : computerScore > humanScore
      ? "Computer won!"
      : "Its a draw!";

  alert(gameWinner);
}

playGame();
