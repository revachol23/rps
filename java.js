function getComputerChoice(){
    chance = Math.random() * 3;
    roundChance = Math.ceil(chance)
    if(roundChance == 1) {
        return "Rock";
    } else if(roundChance == 2){
        return "Scissors";
    } else return "Paper"
};

function rpsPlay(playerSelection, computerSelection){
    if(playerSelection == computerSelection.toLowerCase() ){
        return "Draw!"
    }else if(playerSelection == "rock" && computerSelection.toLowerCase() == "scissors"){
        playerPoint++
        return "You Win! rock beats scissors!";
    }else if(playerSelection == "paper" && computerSelection.toLowerCase() == "rock"){
        playerPoint++
        return "You Win! paper beats rock!";
    }else if(playerSelection == "scissors" && computerSelection.toLowerCase() == "paper"){
        playerPoint++
        return "You Win! scissors beats paper!";    
    }else computerPoint++
    return `You lose! ${computerSelection} beats ${playerSelection}`
}

function playerChoice(){
let entry = prompt("Rock, Paper or Scissors?");
return playerChoice = entry.toLowerCase();
}
let playerPoint = 0
let computerPoint = 0 

// console.log(rpsPlay(playerChoice, computerSelection));

function game(){
    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, paper or Scissors?");
    console.log(rpsPlay(playerSelection,computerSelection))}
           
}
game()

if(playerPoint > computerPoint){
    console.log("You win!");
}else if(computerPoint > playerPoint){
    console.log("You lose!");
}else console.log("It's a draw!")