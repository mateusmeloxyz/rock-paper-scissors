let playerWins = 0;
let computerWins = 0;

const buttons = document.getElementsByTagName('button');
const result = document.getElementById("result");

const p = document.createElement("p");
p.textContent = "First to reach 5 wins the game";
result.appendChild(p);

const playerBox = document.getElementById("player-box");
const computerBox = document.getElementById("computer-box");

const playerCount = document.getElementById("player-count");
const computerCount = document.getElementById("computer-count");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        result.innerHTML = "";
        const p = document.createElement("p");
        p.textContent = `${game(e.target)}\n`;
        result.appendChild(p);
        playerCount.textContent = playerWins;
        computerCount.textContent = computerWins;
        if( !(playerWins >= 5 || computerWins >= 5) ){
            playerBox.textContent = e.target.textContent;
        }
    });
};

function wordToEmoji(word){
    const dictionary = {
        "rock": "✊",
        "paper": "✋",
        "scissors": "✌️"
    }

    return dictionary[word];
}

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

function game(playerElm) {
    let result = 0;
    playerSelection = validateInput(playerElm.id.toLowerCase());
    let computerSelection = validateInput(getComputerChoice().toLowerCase());

    if (playerWins >= 5) {
        return `Player won!`;
    }

    if (computerWins >= 5) {
        return `Computer won!`;
    }

    playerBox.textContent = playerElm.textContent;
    computerBox.textContent = wordToEmoji(computerSelection);
    playerBox.classList.remove('lose', 'win');
    computerBox.classList.remove('lose', 'win');
    
    if (playerSelection && computerSelection) {
        result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            playerWins++;
            playerBox.classList.add('win');
            computerBox.classList.add('lose');
            return 'You win!';
        } else if (result === 0) {
            playerBox.classList.add('lose');
            computerBox.classList.add('win');
            computerWins++;
            return 'You Lose!';
        } else if (result === -1) {
            playerBox.classList.add('tie');
            computerBox.classList.add('tie');
            return 'Tie!';
        } else {
            return `Something very, very bad happened... Player input: ${playerSelection}. Computer input: ${computerSelection}`;
        }
    }

    return `Invalid input! Player input: ${playerSelection}. Computer input: ${computerSelection}`;
}