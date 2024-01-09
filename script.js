var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let computerChoiceInNumber = Math.floor(Math.random() * 3)
    let computerChoice;
    switch (computerChoiceInNumber) {
        case 0:
            console.log("The computer chose ROCK");
            computerChoice = "rock";
            break;
        case 1:
            console.log("The computer chose PAPER");
            computerChoice = "paper";
            break;
        case 2:
            console.log("The computer chose SCISSORS");
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function isVictory(a, b) {
    if (a == "rock" && b == "scissors" || a == "paper" && b == "rock" || a == "scissors" && b == "paper") {
        return true;
    } else {
        return false;
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    let resultMessage = '';
    let scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer"

    if (playerChoice == computerChoice) {
        resultMessage = "It's a draw! The computer also chose " + computerChoice;
    } else if (isVictory(playerChoice, computerChoice)) {
        resultMessage = "You win! " + playerChoice + " beats " + computerChoice;
        playerScore++;
    } else {
        resultMessage = "You lose! " + computerChoice + " beats " + playerChoice;
        computerScore++;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = resultMessage;

    scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer";
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = scoreMessage;

    if (computerScore == 5 || playerScore == 5) {
        endGame();
    }
}

function endGame() {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const startButton = document.getElementById("start");

    if (computerScore == 5) {
        resultElement.textContent = "The computer won";
    } else {
        resultElement.textContent = "You've won";
    }

    scoreElement.textContent = "Game Over! Final scores - Player: " + playerScore + ", Computer: " + computerScore;
    
    // Reset scores and enable start button
    playerScore = 0;
    computerScore = 0;
    startButton.disabled = false;
}

function startGame() {
    const startButton = document.getElementById("start");
    startButton.disabled = true; // Disable the start button once the game has started
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    
    // Reset result and score messages
    resultElement.textContent = "";
    scoreElement.textContent = "";
    
    game();
}

const startButton = document.getElementById("start");
startButton.addEventListener('click', startGame);

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', function (e) {
    playRound('rock');
});

paperButton.addEventListener('click', function (e) {
    playRound('paper');
});

scissorsButton.addEventListener('click', function (e) {
    playRound('scissors');
});
