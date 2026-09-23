function getHumanChoice() {
    let userInput = window.prompt("Choose rock, paper or scissors")
    return userInput
    }


function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"]
    let computer = Math.floor(Math.random() * 3)

    return rps[computer]
}

let computerScore = 0
let humanScore = 0
let counter = 0
while (counter != 5) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    if (humanChoice == computerChoice) {
        console.log("This round was a tie")
    }       // for when human wins
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        console.log("Human wins this round!")
        humanScore++
        counter++
    }
    else {
        console.log("Computer wins this round!")
        computerScore++
        counter++
    }
}