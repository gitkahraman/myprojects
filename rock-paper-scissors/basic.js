document.addEventListener('DOMContentLoaded', () => {
const model = ['Rock', 'Paper', 'Scissors']
let userSelection
let randomMovePicker = Math.floor(Math.random()*model.length)
let computerSelection = model[randomMovePicker]
window.onclick = e => {
    userSelection = e.target.title
    console.log(userSelection , computerSelection)
    gameLogic(userSelection,computerSelection)
}

function gameLogic(userSelection, computerSelection) {
    if (userSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You have won!')
    }
    else if (userSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You have won!')
    }
    else {
        console.log('Computer won!')
    }
}
})