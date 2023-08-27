hide('retry')
const buttons = document.querySelectorAll('i');
const currentRound = document.getElementById('currentRound');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let gameOver = false;
let playerSelectedIcon;
let computerSelectedIcon;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.parentNode.id === 'playerIcons' && (!gameOver)) {
            setSelection(button.id, button.parentNode.id)
            addLog(playRound(button.id), false)
            gameOver = game()
        }
        if (button.id === 'retry') { restart() }
    })
})

function restart() {
    if (document.getElementsByClassName('winner')[0] != null) { document.getElementsByClassName('winner')[0].classList.remove('winner') }
    if (document.getElementsByClassName('loser')[0] != null) { document.getElementsByClassName('loser')[0].classList.remove('loser') }
    currentRound.innerText = '1'
    playerScore.innerText = '0'
    computerScore.innerText = '0'
    setSelection('', 'playerIcons')
    setSelection('', 'computerIcons')
    document.getElementById('log').innerHTML = ''
    hide('retry')
    gameOver = false;
}

function setSelection(button, player) {
    buttons.forEach((item) => {
        if (item.parentNode.id === player) {
            item.classList.replace('fa-solid', 'fa-regular')
            if (item.id === button) {
                item.classList.replace('fa-regular', 'fa-solid');
                if (player === 'computerIcons') {
                    computerSelectedIcon = item;
                } else { playerSelectedIcon = item }
            }
        }
    })
}

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    setSelection(arr[randomIndex], 'computerIcons')
    //get random array item
    return arr[randomIndex];
}

function playRound(playerSelection) {
    const player = playerSelection.toUpperCase()
    const computer = getComputerChoice().toUpperCase()

    let computerScoreValue = parseInt(computerScore.innerText);
    let playerScoreValue = parseInt(playerScore.innerText);
    if (player === computer) {
        return 'Tie'
    }
    else if (player === 'ROCK' && computer === 'SCISSORS') {
        playerScoreValue++
        playerScore.innerText = playerScoreValue
        return 'Player'
    }
    else if (player === 'PAPER' && computer === 'ROCK') {
        playerScoreValue++
        playerScore.innerText = playerScoreValue
        return 'Player'
    }
    else if (player === 'SCISSORS' && computer === 'PAPER') {
        playerScoreValue++
        playerScore.innerText = playerScoreValue
        return 'Player'
    }
    else {
        computerScoreValue++
        computerScore.innerText = computerScoreValue
        return 'Computer'
    }
}

function hide(item) {
    const hide = document.getElementById(item);
    hide.style.visibility = 'hidden';
}
function show(item) {
    const show = document.getElementById(item);
    show.style.visibility = 'visible';
}

function addLog(winner, game) {
    element = document.createElement('li');
    if (!game) {
        const elementText = winner.toUpperCase() === 'TIE' ? 'This round is tie !' : `${winner} wins this round !`
        element.innerText = elementText
    } else {
        const elementText = winner.toUpperCase() === 'TIE' ? 'This game is tie !' : `${winner} wins the game !`
        element.innerText = elementText
        element.classList.add('endGame')
    }
    document.getElementById('log').appendChild(element);
}


function game() {
    let computerScoreValue = parseInt(computerScore.innerText);
    let playerScoreValue = parseInt(playerScore.innerText);
    let currentRoundValue = parseInt(currentRound.innerText);
    currentRoundValue++

    if (currentRoundValue === 6) {
        if (playerScoreValue === computerScoreValue) {
            addLog('Tie', true);
        }
        else if (playerScoreValue > computerScoreValue) {
            addLog('Player', true);
            setWinner('player');
            setLoser('computer');
        }
        else {
            addLog('Computer', true);
            setWinner('computer');
            setLoser('player');
        }
        currentRound.innerText = currentRoundValue - 1
        show('retry')
        return true;
    }
    else {
        currentRound.innerText = currentRoundValue
        return false;
    }
}

function setWinner(player) {
    const element = document.getElementsByClassName(player);
    element[0].firstElementChild.classList.add('winner');
}
function setLoser(player) {
    const element = document.getElementsByClassName(player);
    element[0].firstElementChild.classList.add('loser');
}