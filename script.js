

function computerPlay (){
    let randomNum = Math.floor(Math.random()*3);
    let guess = "";

    switch (randomNum){
        case(0) :
            guess = "PAPER";
            break;
        case(1) :
            guess = "ROCK";
            break;
        case(2):
            guess = "SCISSORS"
            break;
        }
    
    return(guess);
}

function playRound(playerInput, computerSelection){
    let playerWin = false;

    if (playerInput === computerSelection) {
        playerWin = "Tie" ;
    }
    
    else if ((playerInput === "PAPER") && (computerSelection === "ROCK")) {
        playerWin = true;
    }
    
    else if ((playerInput === "ROCK") && (computerSelection === "SCISSORS")) {
        playerWin = true;
    }
    
    else if ((playerInput === "SCISSORS") && (computerSelection === "PAPER")) {
        playerWin = true;
    };


    return(result(playerInput, computerSelection, playerWin));
}

    

function result (playerSelection, computerSelection, playerWin){
    if (playerWin === "Tie"){
        console.log(`You both picked ${computerSelection}. Looks like a Tie`)
        return "Tie"
    }
    else if (playerWin){
        console.log(`${playerSelection} beats ${computerSelection}. You Win`);
        return "Win";
    }
    else {
        console.log(`${computerSelection} beats ${playerSelection}. You Lose`);
        return "Lose";
    };
}


function game () {
    let playerScore = 0;
    let compScore = 0;

    for (let i =1; i<6; i++){
        
        let guess = getGuess(playerScore, compScore)
        let playerWin = playRound(guess, computerPlay());

        if(playerWin === "Win"){
            playerScore++;
        }
        if (playerWin === "Lose"){
            compScore++;
        };

        if (playerScore >= 3) {
            alert(`You win ${playerScore} to ${compScore}!`)
            return;
        };

        if (compScore >= 3) {
            alert(`Computer wins ${compScore} to ${playerScore}!`)
            return;
        };
    };
};




function getGuess (pScore, cScore) {
    
    let guess = prompt(`Score is ${pScore} to ${cScore}. Please enter Rock, Paper, or Scissors!`); 
    let upperGuess = guess.toUpperCase();
    if(!checkInput(upperGuess)){
        console.log(`You typed ${guess}. Please try again with Rock, Paper, or Scissors!`)
        return getGuess(pScore, cScore);
    };
    return upperGuess;
};


function checkInput (playerInput, pScore, cScore){
    
    let validInput = false;

    switch (true){
        case(playerInput === "ROCK"):
            validInput = true;
            break;
        case(playerInput === "PAPER"):
            validInput = true;
            break;
        case(playerInput === "SCISSORS"):
            validInput = true;
            break;
        default:
            break;
    };

    return validInput;
}