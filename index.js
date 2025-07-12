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
