// program to get a random item from an array

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    //get random array item
    return arr[randomIndex];
}
const computerSelection = getComputerChoice()
const playerSelection = prompt("Rock/Paper/Scissors ?")
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase()
    const computer = computerSelection.toUpperCase()
    if (player === computer) {
        return (`Tie! ${playerSelection} is equal to ${computerSelection}`)
    }
    else if (player === 'ROCK' && computer === 'SCISSORS') {
        return (`You win ! ${playerSelection} beats ${computerSelection}`)
    }
    else if (player === 'PAPER' && computer === 'ROCK') {
        return (`You win ! ${playerSelection} beats ${computerSelection}`)
    }
    else if (player === 'SCISSORS' && computer === 'PAPER') {
        return (`You win ! ${playerSelection} beats ${computerSelection}`)
    }
    else {
        return (`You lost ! ${computerSelection} beats ${playerSelection}`)
    }
}
console.log(playRound(playerSelection, computerSelection))