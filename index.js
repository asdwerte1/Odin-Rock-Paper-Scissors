addEventListener("DOMContentLoaded", () => {

    const computerScore = document.getElementById("computer-score");
    const playerScore = document.getElementById("player-score");
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;

    document.getElementById("rock").addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        checkForWinner();
    });
    document.getElementById("paper").addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        checkForWinner();
    });
    document.getElementById("scissors").addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        checkForWinner();
    });

    function playRound(playerMove, computerMove) {

        let winner = "";

        document.getElementById("computer-move").innerHTML = computerMove;
        document.getElementById("player-move").innerHTML = playerMove;

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
            document.getElementById("winner").innerHTML = winner
            if (winner == "player") {
                playerScore.innerHTML++;
            } else {
                computerScore.innerHTML++;
            }
        }
    }

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

    function checkForWinner() {
        const ps = playerScore.innerHTML >= 5 ? true : false;
        const cs = computerScore.innerHTML >= 5 ? true : false;
        if (!ps && !cs) {
            return;
        } else {
            return playerScore ? playerWins() : computerWins();
        }
    }

    function playerWins() {
        alert("Player wins!");
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }
    function computerWins() {
        alert("Computer wins!");
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
    }
});