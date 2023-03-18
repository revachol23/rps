let playerPoint = 0
let computerPoint = 0 

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


// function playerChoice(){
// let entry = prompt("Rock, Paper or Scissors?");
// return playerChoice = entry.toLowerCase();
// }

// console.log(rpsPlay(playerChoice, computerSelection));

function game(playerSelection){
        const computerSelection = getComputerChoice();
        console.log(playerSelection)
        return rpsPlay(playerSelection,computerSelection);
           
}

let rockBtn = document.getElementById('rock')
rockBtn.addEventListener("click",function(){
    game("rock")
});
let paperBtn = document.getElementById('paper')
paperBtn.addEventListener("click",function(){
    game("paper")
});
let scissorBtn  = document.getElementById('scissors')
scissorBtn.addEventListener("click",function(){
    game("scissors")
});

if(playerPoint > computerPoint){
    console.log("You win!");
}else if(computerPoint > playerPoint){
    console.log("You lose!");
}else console.log("It's a draw!")
