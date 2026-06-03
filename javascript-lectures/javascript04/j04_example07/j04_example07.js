const cells = [];
let currentPlayer = "X";
let gameOver = false;

// Function to create and display the game board
function createBoard() {
    const gameBoard = document.getElementById("game-board");
    const tbody = document.createElement("tbody");

    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            console.log("FOR/FOR: cell", i, j);
            cell.addEventListener("click", function() {
                console.log("CELL/LISTENER cell", i, j);
                makeMove(cell);
            });
            cells.push(cell);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    gameBoard.appendChild(tbody);
}

// Function to handle player moves
function makeMove(cell) {
    if (gameOver || cell.textContent !== "") {
        return;
    }

    cell.textContent = currentPlayer;
    checkWinner();
    if (!gameOver) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateMessage();
    }
}

// Function to check for a winning player
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
        const cellA = cells[condition[0]];
        const cellB = cells[condition[1]];
        const cellC = cells[condition[2]];

        if (cellA.textContent === cellB.textContent && cellB.textContent === cellC.textContent && cellA.textContent !== "") {
            gameOver = true;
            updateMessage(cellA.textContent + " Wins!");
            return;
        }
    }

    // Check for a tie
    let tie = true;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            tie = false;
            break;
        }
    }

    if (tie) {
        gameOver = true;
        updateMessage("It's a Tie!");
    }
}

// Function to update the message displayed below the board
function updateMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message || (currentPlayer + "'s Turn");
}

// Call the createBoard function to initialize the game
createBoard();
updateMessage();
