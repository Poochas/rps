// function to get a random item from an array

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    //get random array item
    return arr[randomIndex];
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let roundNumber = 0; roundNumber <= 5; roundNumber++) {
        if (roundNumber != 5) {
            const computerSelection = getComputerChoice()
            const playerSelection = prompt("Rock/Paper/Scissors ?")
            const roundWinner = playRound(playerSelection, computerSelection)
            if (roundWinner === 'Player') {
                console.log(`You win this round ! ${playerSelection} beats ${computerSelection}`)
                playerScore++
            }
            else if (roundWinner === 'Computer') {
                console.log(`You lost this round ! ${computerSelection} beats ${playerSelection}`)
                computerScore++
            }
            else {
                console.log(`This round is tie! ${playerSelection} is equal to ${computerSelection}`)
            }
        } else {
            if (playerScore === computerScore) {
                console.log(`Its a Tie ! Player score: ${playerScore}, Computer score: ${computerScore}`)
            } else if (playerScore > computerScore) {
                console.log(`You win the game ! Player score: ${playerScore}, Computer score: ${computerScore}`)
            }
            else {
                console.log(`You lost the game ! Player score: ${playerScore}, Computer score: ${computerScore}`)
            }
        }
    }
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toUpperCase()
    const computer = computerSelection.toUpperCase()
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


//dadet tikrinima jeigu skaicius arba null

game();