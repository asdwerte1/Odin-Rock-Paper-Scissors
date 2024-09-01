function getComputerChoice() {

    const choice = 3 * Math.random();

    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper, scissors?").toLowerCase();
    return choice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    // Why do the instructions say to do this?!?
    function playRound(playerMove, computerMove) {

        let winner = "";

        // This is an attrocious piece of code
        // But I am limiting myself to only content covered so far
        // Match case and terniary would be so much better
        if (computerMove != playerMove) {
            if (playerMove == "rock") {
                if (computerMove == "paper") {
                    winner = "computer";
                } else {
                    winner = "player";
                }
            } else if (playerMove == "paper") {
                if (computerMove == "scissors") {
                    winner = "computer";
                } else {
                    winner = "player";
                }
            } else {
                if (computerMove == "rock") {
                    winner = "computer";
                } else {
                    winner = "player";
                }
            }
            if (winner == "player") {
                humanScore++;
            } else {
                computerScore++;
            }
            console.log(`Compuer move: ${computerMove}\nPlayer move: ${playerMove}\nWinner: ${winner}`);
        } else {
            console.log("It is a tie!");
        }

    }

    // Using a loop against my own rules because
    for (let i = 0; i < 5; i++) {

        const computerMove = getComputerChoice();
        const playerMove = getHumanChoice();
        playRound(playerMove, computerMove);
    }

    console.log(`Player final score: ${humanScore}\nCompuer final score: ${computerScore}`);
}

playGame();