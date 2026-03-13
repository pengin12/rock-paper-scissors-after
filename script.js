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
