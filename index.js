class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.parent = null;
    }
}

let boardSize = 8;
let gameBoard = [];

for (let i = 0; i <= boardSize; i++) {
    for (let j = 0; j <= i; j++) {
        gameBoard.push(new Position(i, j))
    }
}

function setVisited (position) {
    if (position && typeof position === "object" && "visited" in position) position.visited = true;
    else return "Invalid position object";

    return position;
}

function checkValidity (x, y) {
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        const cell = gameBoard[x * boardSize + y];
        
        if (cell.visited) return null;
        else return cell;
    } else return null;
}