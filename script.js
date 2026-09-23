let computerScore = 0
let humanScore = 0
let counter = 0

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"]
    let computer = Math.floor(Math.random() * 3)

    return rps[computer]
}


const rockButton = document.getElementById("rockButton")
const paperButton = document.getElementById("paperButton")
const scissorsButton = document.getElementById("scissorsButton")

const displayResult = document.getElementById("results")

rockButton.addEventListener("click", () => {
    playRound("rock")
})
paperButton.addEventListener("click", () => {
    playRound("paper")
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors")
})

function playRound(humanChoice) {
        if (counter != 5) {
            let computerChoice = getComputerChoice()
            displayResult.textContent = `Computer has chosen: ${computerChoice} and user has chosen: ${humanChoice}`

            if (humanChoice == computerChoice) {
                displayResult.textContent = "This round was a tie!"
            }       // for when human wins
            else if ((humanChoice == "rock" && computerChoice == "scissors") || //why does it have to be like this --> (())
                    (humanChoice == "paper" && computerChoice == "rock") ||
                    (humanChoice == "scissors" && computerChoice == "paper")
            ) {
                displayResult.textContent = "Human wins this round!"
                humanScore++
                counter++
            }
            else {
                displayResult.textContent = "Computer wins this round!"
                computerScore++
                counter++
            }
        }
        else {
            displayResult.textContent = `Computers score: ${computerScore}`
            displayResult.textContent = `Users score: ${humanScore}`

            displayResult.textContent = "Refresh game to play again!"
            return
        }
}
