const tools = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

const getComputerChoice = () => {
  let c = Math.floor(Math.random() * 3);
  return tools[c];
};

const playRound = (playerSelection, computerSelection) => {
  let psl = playerSelection.toLowerCase();
  let csl = computerSelection.toLowerCase();
  if (psl == csl) {
    console.log(`It's a draw, ${psl} draws ${csl}`);
  } else if (
    (psl == "rock" && csl == "scissors") ||
    (psl == "scissors" && csl == "paper") ||
    (psl == "paper" && csl == "rock")
  ) {
    playerWins++;
    console.log(`Player wins ${psl} beats ${csl}`);
  } else {
    computerWins++;
    console.log(`Computer wins ${csl} beats ${psl}`);
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let player = prompt("Enter a tool hand");
    let computer = getComputerChoice();
    console.log(`-----Round ${i + 1}-----`);
    playRound(player, computer);
  }
  console.log(`-----FINAL RESULT-----`);
  if (playerWins > computerWins) {
    console.log(
      `The player wins with ${playerWins - computerWins} differed points`
    );
  } else {
    console.log(
      `The computer wins with ${computerWins - playerWins} differed points`
    );
  }
  playerWins = 0;
  computerWins = 0;
};

game();
