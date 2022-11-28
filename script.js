const tools = ["Rock", "Paper", "Scissors"];
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const resultDiv = document.querySelector(".result");
const playAgainButton = document.querySelector("#playAgain");

let playerWins = 0;
let computerWins = 0;

const pRes = document.createElement("p");

const getComputerChoice = () => {
  let c = Math.floor(Math.random() * 3);
  return tools[c];
};

const pResCreator = (result) => {
  resultDiv.innerHTML = `
  <p>${result}</p>
  <br />
  <p>=======================================================</p>
  <p>Score: Player ${playerWins} - Computer ${computerWins}</p>
  <p>=======================================================</p>
  `;
};

const playAgain = () => {
  window.location.reload();
};

const winCheck = () => {
  if (playerWins > 4 || computerWins > 4) {
    rockButton.setAttribute("disabled", "disabled");
    paperButton.setAttribute("disabled", "disabled");
    scissorButton.setAttribute("disabled", "disabled");

    resultDiv.innerHTML = `
    <p>Game Over</p>
    <p>=======================================================</p>
    ${
      playerWins > computerWins
        ? `</p>The player wins with ${
            playerWins - computerWins
          } differed points</p>`
        : `<p>The computer wins with ${
            computerWins - playerWins
          } differed points</p>`
    }
    `;
    playAgainButton.classList.toggle("none");
  }
};

const playRound = (playerSelection, computerSelection) => {
  let psl = playerSelection.toLowerCase();
  let csl = computerSelection().toLowerCase();
  if (psl == csl) {
    pResCreator(`It's a draw, ${psl} draws ${csl}`);
  } else if (
    (psl == "rock" && csl == "scissors") ||
    (psl == "scissors" && csl == "paper") ||
    (psl == "paper" && csl == "rock")
  ) {
    playerWins++;
    pResCreator(`Player wins ${psl} beats ${csl}`);
  } else {
    computerWins++;
    pResCreator(`Computer wins ${csl} beats ${psl}`);
  }
};

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice);
  winCheck();
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice);
});

scissorButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice);
});

playAgainButton.addEventListener("click", playAgain);

// const game = () => {
//   for (let i = 0; i < 5; i++) {
//     let player = prompt("Enter a tool hand");
//     let computer = getComputerChoice();
//     console.log(`-----Round ${i + 1}-----`);
//     playRound(player, computer);
//   }
//   console.log(`-----FINAL RESULT-----`);
//   if (playerWins > computerWins) {
//     console.log(
//       `The player wins with ${playerWins - computerWins} differed points`
//     );
//   } else {
//     console.log(
//       `The computer wins with ${computerWins - playerWins} differed points`
//     );
//   }
//   playerWins = 0;
//   computerWins = 0;
// };

// game();
