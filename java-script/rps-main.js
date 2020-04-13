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

function playRound(playerChoice, computerChoice) {
  var resultOfRound = "";
  if (playerChoice == "rock" && computerChoice == "rock") {
    resultOfRound = "You tied.";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    resultOfRound = "You lost, paper beats rock.";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    resultOfRound = "You won! Rock beats scissors!";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    resultOfRound = "You won! Paper beats rock!";
  } else if (playerChoice == "paper" && computerChoice == "paper") {
    resultOfRound = "You tied.";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    resultOfRound = "You lost, scissors beat paper.";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    resultOfRound = "You lost, rock beats scissors.";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    resultOfRound = "You won! Scissors beat paper!";
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    resultOfRound = "You tied.";
  }
  return resultOfRound;
}

var playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase(),
  computerSelection = computerPlay();
