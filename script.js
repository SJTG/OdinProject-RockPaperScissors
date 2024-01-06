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

function playRound(){
    let playerChoice = prompt("Choose between rock, paper, and scissors!");
    let computerChoice = getComputerChoice();

    playerChoice = playerChoice.toLowerCase(); 

    if(playerChoice == computerChoice){
        console.log("It's a draw! The computer also chose " + computerChoice);
    } else if (isVictory(playerChoice, computerChoice)){
        console.log("You win! " + playerChoice + " beats " + computerChoice);
        playerScore ++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
        computerScore ++;
    }

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

game();
