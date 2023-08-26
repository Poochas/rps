hide('retry')
const buttons = document.querySelectorAll('i');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const round = document.querySelector('.round');
const winner = document.querySelector('#winner');

let computerScoreValue = 0
let playerScoreValue = 0
let currentRound = 1

computerScore.innerText = computerScoreValue
playerScore.innerText = playerScoreValue

// computerScore.innerText = parseInt(computerScore.innerText) + 1
// we use the .forEach method to iterate through each button
// function restart() {

//     let playerScore = 0;
//     let computerScore = 0;
// }

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if (button.id === 'Retry') {
            currentRound = 1
            computerScoreValue = 0
            playerScoreValue = 0
            hide('retry');
            show('icons');
            restart();
            round.innerText = 'Round: 1'
            computerScore.innerText = computerScoreValue
            playerScore.innerText = playerScoreValue
            winner.innerText = 'Choose your weapon'
        }
        else {
            setSelection(button)
            currentRound++
            showChoice('player', button.id)
            round.innerText = `Round: ${currentRound}`
            game(playRound(button.id), currentRound)
        }
    });
});

function playRound(playerSelection) {
    const player = playerSelection.toUpperCase()
    const computer = getComputerChoice().toUpperCase()
    if (player === computer) {
        return 'Tie'
    }
    else if (player === 'ROCK' && computer === 'SCISSORS') {
        return 'Player'
    }
    else if (player === 'PAPER' && computer === 'ROCK') {
        return 'Player'
    }
    else if (player === 'SCISSORS' && computer === 'PAPER') {
        return 'Player'
    }
    else {
        return 'Computer'
    }
}

// function to get a random item from an array

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    showChoice('computer', arr[randomIndex])
    //get random array item
    return arr[randomIndex];
}

function game(roundWinner, currentRound) {
    computerScoreValue = computerScore.innerText
    playerScoreValue = playerScore.innerText
    addLog(roundWinner);
    if (roundWinner === 'Player') {
        playerScoreValue++
        playerScore.innerText = playerScoreValue
        winner.innerText = `${roundWinner} wins this round`
        setWinner('player');
        setLoser('computer');

    }
    else if (roundWinner === 'Computer') {
        computerScoreValue++
        computerScore.innerText = computerScoreValue
        winner.innerText = `${roundWinner} wins this round`
        setWinner('computer');
        setLoser('player');
        // addLog('Computer')
    }
    else {
        winner.innerText = 'This round is tie!'
        setTie();
    }

    if (currentRound == 6) {
        if (playerScoreValue === computerScoreValue) {
            round.innerText = 'Game is tie !';
            winner.innerText = '';
            hide('icons');
            show('retry');

            // round.innerText = 'It`s a Tie !'
        } else if (playerScoreValue > computerScoreValue) {
            round.innerText = 'You won the game !';
            winner.innerText = '';
            hide('icons');
            show('retry');
            // round.innerText = 'You win the game !';
        }
        else {
            round.innerText = 'You lost the game !';
            winner.innerText = '';
            hide('icons');
            show('retry');
        }
    }
}

function hide(item) {
    const hide = document.getElementById(item);
    // hide.style.visibility = 'hidden';
    hide.style.display = 'none';
}
function show(item) {
    const show = document.getElementById(item);
    show.style.display = 'flex';
    // show.style.visibility = 'visible';
}

function showChoice(player, choice) {
    const element = document.querySelector(`#${player}Selection`);
    switch (choice) {
        case 'rock':
            element.className = 'fa-solid fa-hand-back-fist fa-2x';
            element.style.visibility = 'visible';
            break;
        case 'paper':
            element.className = 'fa-solid fa-hand fa-2x';
            element.style.visibility = 'visible';
            break;
        case 'scissors':
            element.className = 'fa-solid fa-hand-scissors fa-rotate-90 fa-2x';
            element.style.visibility = 'visible';
            break;
    }
}

function setWinner(player) {
    const element = document.querySelector(`#${player}Selection`);
    element.classList.add('winner')

}
function setLoser(player) {
    const element = document.querySelector(`#${player}Selection`);
    element.classList.add('loser')
    element.classList.add('fa-fade')
}

function setTie() {
    playerSelection.classList.add('tie');
    computerSelection.classList.add('tie');
}

function setSelection(button) {
    buttons.forEach((item) => {
        console.log(item.id)
        if (item.id != 'Retry') { item.classList.replace('fa-solid', 'fa-regular') }
    })
    button.classList.replace('fa-regular', 'fa-solid')
}

function addLog(winner) {
    element = document.createElement('li');
    const elementText = winner.toUpperCase() === 'TIE' ? 'This round is tie !' : `${winner} wins this round !`
    element.innerText = elementText
    document.getElementById('log').appendChild(element);
}

function restart() {
    const ul = document.getElementById('log');
    ul.innerHTML = '';
}