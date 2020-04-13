function computerPlay() {
  var randomInt = Math.floor(Math.random() * 3) + 1;
  var computerSelection = "";

  switch (randomInt) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }

  return computerSelection;
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
