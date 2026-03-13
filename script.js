function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getHumanChoice() {
  choice = prompt("Rock, Paper or Scissors?").toLowerCase();

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
