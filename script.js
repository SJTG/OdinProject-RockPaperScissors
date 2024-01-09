var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
    let computerChoiceInNumber = Math.floor(Math.random() * 3)
    let computerChoice;
    switch (computerChoiceInNumber){
        case 0: //si es 0, es PIEDRA
            console.log("The computer chose ROCK");
            computerChoice = "rock";
            break;
        case 1: //si es 1, es PAPEL
            console.log("The computer chose PAPER");
            computerChoice = "paper";
            break;
        case 2: //si es 2, es TIJERA
            console.log("The computer chose SCISSORS");
            computerChoice = "scissors";
            break;
    }   
    return computerChoice;
}

function isVictory(a, b){
    if (a == "rock" && b == "scissors" || a == "paper" && b == "rock" || a == "scissors" && b == "paper"){
        return true;
    } else {
        return false;
    }
}

function playRound(playerChoice){
    
    let computerChoice = getComputerChoice();

    let resultMessage = '';
    let scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer"

    if(playerChoice == computerChoice){
        resultMessage = "It's a draw! The computer also chose " + computerChoice;
        scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer"
    } else if (isVictory(playerChoice, computerChoice)){
        resultMessage = "You win! " + playerChoice + " beats " + computerChoice;
        playerScore ++;
        scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer"
    } else {
        resultMessage = "You lose! " + computerChoice + " beats " + playerChoice;
        computerScore ++;
        scoreMessage = "The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer"
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = resultMessage;

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = scoreMessage;

    console.log("The scores are: " + playerScore + " points for the player and " + computerScore + " for the computer")
}

function game(){
    while(computerScore < 5 && playerScore < 5){
        playRound();
    }

    if (computerScore == 5){
        console.log("The computer won")
    }else{
        console.log("You've won")
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', function(e){
    playRound('rock');
});

paperButton.addEventListener('click', function(e){
    playRound('paper');
});

scissorsButton.addEventListener('click', function(e){
    playRound('scissors');
});


/* game(); */
