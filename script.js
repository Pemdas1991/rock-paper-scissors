let guess = ""

//Select all the buttons on page
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
        if (button.classList.contains(`guess`)) {
            console.log(button.dataset.guess);
            game(button.dataset.guess);
        }
        if (button.classList.contains(`restart`)) {
            restart();
        }
    });
});



//Access player and computer score
let playerScore = 0;
let compScore = 0;

let results = document.querySelector(".results").innerText


function game(guess) {

    let playerWin = playRound(guess, computerPlay());
    if (playerScore < 5 && compScore < 5) {
        if (playerWin === "Win") {
            playerScore++;

        }
        if (playerWin === "Lose") {
            compScore++;
        };

        document.querySelector(`.pScore`).innerText = playerScore
        document.querySelector(`.cScore`).innerText = compScore

    };


    if (playerScore >= 5) {
        results = "YOU WIN! Click Restart to play again"
    };
    if (compScore >= 5) {
        results = "Computer Wins! Click Restart to play again"
    };

    document.querySelector(".results").innerText = results

};


function restart() {
    playerScore = 0
    compScore = 0

    document.querySelector(`.pScore`).innerText = playerScore
    document.querySelector(`.cScore`).innerText = compScore

    document.querySelector(`.results`).innerText = "Click a button below to start"
}



function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let guess = "";

    switch (randomNum) {
        case (0):
            guess = "PAPER";
            break;
        case (1):
            guess = "ROCK";
            break;
        case (2):
            guess = "SCISSORS"
            break;
    }

    return (guess);
}

function playRound(playerInput, computerSelection) {
    let playerWin = false;

    if (playerInput === computerSelection) {
        playerWin = "Tie";
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

    return (result(playerInput, computerSelection, playerWin));
}



function result(playerSelection, computerSelection, playerWin) {
    if (playerWin === "Tie") {
        results = `You both picked ${computerSelection}. Looks like a Tie`
        return "Tie"
    }
    else if (playerWin) {
        results = `${playerSelection} beats ${computerSelection}. You Win`;
        return "Win";
    }
    else {
        results = `${computerSelection} beats ${playerSelection}. You Lose`;
        return "Lose";
    };
}



function checkInput(playerInput, pScore, cScore) {

    let validInput = false;

    switch (true) {
        case (playerInput === "ROCK"):
            validInput = true;
            break;
        case (playerInput === "PAPER"):
            validInput = true;
            break;
        case (playerInput === "SCISSORS"):
            validInput = true;
            break;
        default:
            break;
    };

    return validInput;
}


