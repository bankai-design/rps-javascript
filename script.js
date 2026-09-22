function getHumanChoice() {
    let userInput = window.prompt("Choose rock, paper or scissors")
    return userInput
    }


function getComputerChoice() {
    let computer = Math.ceil(Math.random() * 3)

    switch (computer) {
    case 1:
        computer = "rock"
        break
    case 2:
        computer = "paper"
        break
    case 3:
        computer = "scissors"
        break 
}
    return computer
}


let computerScore = 0
let humanScore = 0
let counter = 0
while (counter != 5) { 
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
     if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Computer beats human this round!")
        computerScore++
        counter++
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer beats human this round!")
        computerScore++   
        counter++                                    
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer beats human this round!")
        computerScore++
        counter++                                         // computer winning ends
    } else if (computerChoice == "rock" && humanChoice == "paper") {      
        console.log("Human beats computer this round!")
        humanScore++
        counter++
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("Human beats computer this round!")
        humanScore++
        counter++
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("Human beats computer this round!")
        humanScore++
        counter++
    } else {
        console.log("Tie!")
        counter++
}
}

console.log(computerScore)
console.log(humanScore)