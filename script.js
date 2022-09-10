function getComputerChoice() {
    num = Math.floor(Math.random() * (3 - 0)) + 0; // random number between 0 and 3 (excluded)
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return null;
            break;
    }

    return null;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return -1; //tie
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 1; //win
        }
        return 0; //loose
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return 1; //win
        }
        return 0; //loose
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 1; //win
        }
        return 0; //loose
    }

    return null;
}

function validateInput(choice) {
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    }

    return null;
}

function game() {
    let result = 0;
    let playerWins = 0;
    let playerSelection = validateInput(prompt('Rock, paper or scissors?').toLowerCase());
    let computerSelection = validateInput(getComputerChoice().toLowerCase());
    if (playerSelection && computerSelection) {
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerWins++;
        } else if (result === 0) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        } else if (result === -1) {
            console.log(`Tie! ${playerSelection} is equal to ${computerSelection}`);
        } else {
            console.log(`Something very, very bad happened... Player input: ${playerSelection}. Computer input: ${computerSelection}`);
        }
    }
    else {
        console.log(`Invalid input! Player input: ${playerSelection}. Computer input: ${computerSelection}`);
    }

    console.log(`You had ${playerWins} out of 5 wins`);
}