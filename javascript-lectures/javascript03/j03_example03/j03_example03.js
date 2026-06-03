const cells = document.querySelectorAll("td"); // Select all cells
let currentPlayer = "X";
let gameOver = false;

// Function to handle player moves
function makeMove(cell) {
    if (gameOver || cell.textContent !== "") {
        return;
    }

    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";

    const message = checkWinner();
    updateMessage(message);
}

// Function to update the message displayed below the board
function updateMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message || (currentPlayer + "'s Turn");
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const cellA = cells[condition[0]].textContent;
        const cellB = cells[condition[1]].textContent;
        const cellC = cells[condition[2]].textContent;

        if (cellA === cellB && cellB === cellC && cellA !== "") {
            gameOver = true; // Set game over flag if a winning condition is met
            return `${cellA} Wins!`; // Return the winning player's symbol
        }
    }

    return false; // No winner or draw yet
}

// Call the updateMessage function to display the starting message
updateMessage();


