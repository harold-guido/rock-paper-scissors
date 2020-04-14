function game() {
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
      --counter;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
      resultOfRound = "You won! Rock beats scissors!";
      ++counter;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
      resultOfRound = "You won! Paper beats rock!";
      ++counter;
    } else if (playerChoice == "paper" && computerChoice == "paper") {
      resultOfRound = "You tied.";
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
      resultOfRound = "You lost, scissors beat paper.";
      --counter;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
      resultOfRound = "You lost, rock beats scissors.";
      --counter;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
      resultOfRound = "You won! Scissors beat paper!";
      ++counter;
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
      resultOfRound = "You tied.";
    }
    return resultOfRound;
  }

  var playerSelection = "",
    computerSelection = "",
    counter = 0,
    winner = "";

  alert("Welcome to a 5 round game of rock paper scissors!!");

  for (i = 0; i != 5; i++) {
    playerSelection = prompt("Choose: rock, paper or scissors").toLowerCase();
    computerSelection = computerPlay();

    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissors"
    ) {
      alert("The computer has chosen " + computerSelection);
      alert(playRound(playerSelection, computerSelection));
    } else {
      alert("You have made an invalid selection, please choose again");
      i -= 1;
    }
  }

  alert(
    `${
      counter > 0
        ? "The game is finished!! Congratulations, you won!!"
        : counter < 0
        ? "The game is finished. You have lost :("
        : "The game is finished. You tied!"
    }`
  );
}

game();
