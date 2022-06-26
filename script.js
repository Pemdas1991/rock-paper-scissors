

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

function playRound(upperPlayerSelection, computerSelection){
    let playerWin = false;

    if (upperPlayerSelection === computerSelection) {
        return `You both picked ${computerSelection}. Looks like a tie!` ;
    };
    
    if ((upperPlayerSelection === "PAPER") && (computerSelection === "ROCK")) {
        playerWin = true;
    }
    
    else if ((upperPlayerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
        playerWin = true;
    }
    
    else if ((upperPlayerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
        playerWin = true;
    };


    if (playerWin) {
        console.log(win(upperPlayerSelection, computerSelection));
        return true;
    }
    else {
        console.log(lose(upperPlayerSelection, computerSelection));
        return false;
    };

    }

    

function result (playerSelection, computerSelection, playerWin){
    if (playerWin){
        console.log(`${playerSelection} beats ${computerSelection}. You Win`);
        return true;
    }
    else {
        console.log(`${computerSelection} beats ${playerSelection}. You Lose`);
        return false;
    };
}


function game () {
    for (let i =0; i<5; i++){
        let playerScore = 0;
        let compScore = 0;

        let guess = getGuess(playerScore, compScore)

        

    }
}


function getGuess (pScore, cScore) {
    let guess = prompt(`Score is ${pScore} to ${cScore}. Please enter Rock, Paper, or Scissors!`);
    checkInput(guess);
}


function checkInput (playerInput){
    let upperPlayerSelection = playerInput.toUpperCase()
    let validInput = false;

    switch (upperPlayerSelection){
        case("ROCK"):
            validInput = true;
            break;
        case("PAPER"):
            validInput = true;
            break;
        case("Scissors"):
            validInput = true;
            break;
        default;
            break;
    };

    if (!validInput) {
        console.log(`You typed ${playerInput}. Please try again with Rock, Paper, or Scissors!`)
        getGuess();
    }
}