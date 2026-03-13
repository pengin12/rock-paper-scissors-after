function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getHumanChoice() {
  const choice = prompt("Rock, Paper or Scissors?").toLowerCase();

  if (choice === "rock") {
    return 0;
  } else if (choice === "paper") {
    return 1;
  } else if (choice === "scissors") {
    return 2;
  }
}

function getComputerChoice() {
  return getRandomInt(3);
}

function numberToChoice(choice) {
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const humanChoiceText = numberToChoice(humanChoice);
  const computerChoiceText = numberToChoice(computerChoice);

  const humanWin = `You win! ${humanChoiceText} beats ${computerChoiceText}`;
  const computerWin = `You lose! ${computerChoiceText} beats ${humanChoiceText}`;

  if (humanChoice === computerChoice) {
    console.log("Draw!");
    return -1;
  } else if (humanChoice === 0 && computerChoice === 2) {
    console.log(humanWin);
    return 1;
  } else if (humanChoice === 2 && computerChoice === 0) {
    console.log(computerWin);
    return 0;
  } else if (humanChoice > computerChoice) {
    console.log(humanWin);
    return 1;
  } else {
    console.log(computerWin);
    return 0;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  while (roundCount < 5) {
    roundCount++;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundResult = playRound(humanSelection, computerSelection);
    if (roundResult === 1) {
      humanScore++;
    } else if (roundResult === 0) {
      computerScore++;
    }
  }

  console.log(`You ${humanScore} : ${computerScore} Computer`);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else {
    console.log("Draw!");
  }
}

playGame();
