

function getComputerChoice(){
    let num = Math.random();

    return (num > 2/3) ? "rock" :
    (num < 2/3 && num > 1/3) ? "paper" : 
    (num < 1/3 ) ? "scissors" : 
    "computer got confused, malfunctioned and didn't pick anything";
}

function getHumanChoice() {
    return prompt("choose rock, paper or scissors");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice === "rock" & computerChoice === "paper"){
        console.log("You lose! Paper beats rock!")
        computerScore++;
    }
    else if((humanChoice === "paper" & computerChoice === "rock")){
        console.log("You win! Paper beats rock!")
        humanScore++;
    } 
    else if(humanChoice === "scissors" & computerChoice === "rock"){
        console.log("You lose! Rock beats scissors!")
        computerScore++;
    }
    else if((humanChoice === "rock" & computerChoice === "scissors")){
        console.log("You win! Rock beats scissors!")
        humanScore++;
    }
    else if(humanChoice === "paper" & computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!")
        computerScore++;
    }
    else if((humanChoice === "scissors" & computerChoice === "paper")){
        console.log("You win! Scissors beats paper!")
        humanScore++;
    } else{
        console.log("It is a draw!")
    }

}



function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let index = 0; 0 < 5; index++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection)

        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`)

        
    }

    const winner = (humanScore > computerScore) ? "Human won!" : "Computer won!"

}