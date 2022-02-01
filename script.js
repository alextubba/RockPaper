let choice = window.prompt("Rock, paper, or scissors?")
choice = choice.toLowerCase()

let choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random()*3)]

function GetWin() {
    if (choice == "rock") {
        if (computerChoice == "paper") {
            return 1
        } else if (computerChoice == "scissors"){
            return 2
        } else if (computerChoice == "rock"){
            return 3
        }
    } else if (choice == "paper") {
        if (computerChoice == "paper") {
            return 3
        } else if (computerChoice == "scissors"){
            return 1
        } else if (computerChoice == "rock"){
            return 2
        }
    } else if (choice == "scissors") {
        if (computerChoice == "paper") {
            return 2
        } else if (computerChoice == "scissors"){
            return 3
        } else if (computerChoice == "rock"){
            return 1
        }
    } 
}

let decide = GetWin()
let win = ""

if (decide == 1) {
    win = "lost!"
} else if (decide == 2) {
    win = "won!"
} else if (decide == 3) {
    win = "tied!"
}

window.alert(`computer chose ${computerChoice}! You have ${win}`)