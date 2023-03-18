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
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        playerPoint++
        return "You Win! rock beats scissors!";
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerPoint++
        return "You Win! paper beats rock!";
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
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
    while(playerPoint <= 5){    
    const computerSelection = getComputerChoice();
        //Choice UI//
        const pChoiceUi = document.getElementById("player-choice")
        const cpuChoiceUi = document.getElementById("cpu-choice")
        pChoiceUi.textContent = `Player: ${playerSelection}`;
        cpuChoiceUi.textContent = `CPU: ${computerSelection}`;
        //Point UI//
        const pPointUi = document.getElementById("player-points")
        const cpuPointUi = document.getElementById("cpu-points")
        pPointUi.textContent = `Player: ${playerPoint}`;
        cpuPointUi.textContent = `CPU: ${computerPoint}`;
        if(computerPoint == 5){break}

        return rpsPlay(playerSelection,computerSelection);
    }
    let winner = document.getElementById("condition");
    if(playerPoint == 5){
        winner.textContent = "You Win!";
    }else if(computerPoint == 5){
        winner.textContent = "You Lose!";
    }
}

let rockBtn = document.getElementById('rock')
rockBtn.addEventListener("click",function(){
    game("Rock")
});
let paperBtn = document.getElementById('paper')
paperBtn.addEventListener("click",function(){
    game("Paper")
});
let scissorBtn  = document.getElementById('scissors')
scissorBtn.addEventListener("click",function(){
    game("Scissors")
});


