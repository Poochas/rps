// program to get a random item from an array

function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    //get random array item
    return arr[randomIndex];
}

console.log(getComputerChoice());