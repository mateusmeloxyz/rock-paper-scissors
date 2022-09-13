const buttons = document.getElementsByTagName('button');
const result = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        const p = document.createElement("p");
        p.textContent = game(e.target.textContent);
        result.appendChild(p);
    });
};

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

function playRound(playerSelection = 'scissors', computerSelection = getComputerChoice()) {

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

function game(playerSelection) {
    let result = 0;
    playerSelection = validateInput(playerSelection.toLowerCase());
    let computerSelection = validateInput(getComputerChoice().toLowerCase());
    if (playerSelection && computerSelection) {
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (result === 0) {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (result === -1) {
            return `Tie! ${playerSelection} is equal to ${computerSelection}`;
        } else {
            return `Something very, very bad happened... Player input: ${playerSelection}. Computer input: ${computerSelection}`;
        }
    }

    return `Invalid input! Player input: ${playerSelection}. Computer input: ${computerSelection}`;
}