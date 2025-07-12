function getComputerChoice(){
    let num = Math.random();

    const choice = (num > 2/3) ? "rock" : (num < 2/3 && num > 1/3) ? "paper" : (num < 1/3 ) ? "scissors" : "computer got confused, malfunctioned and didnt pick anything"
    
    return choice;
}

