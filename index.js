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
    else return "Invalid position object" + position;

    return position;
}

function checkValidity (x, y) {
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        const cell = gameBoard[x * boardSize + y];

        if (cell.visited) return null;
        else return cell;
    } else return null;
}

function findMoves (x, y, boardSize) {

    let validMoves = [];

    const moves = [
        {dx: 2, dy: 1},
        {dx: 2, dy: -1},
        {dx: -2, dy: 1},
        {dx: -2, dy: -1},
        {dx: 1, dy: 2},
        {dx: 1, dy: -2},
        {dx: -1, dy: 2},
        {dx: -1, dy: -2}
    ];

    for (const move of moves) {
        const newX = x + move.dx;
        const newY = y + move.dy;

        if (newX >= 0 && newX < boardSize && newY >= 0 && newY < boardSize) {
            validMoves.push({x: newX, y: newY});
        }
    }
}

function knightTravail (startX, startY, targetX, targetY) {

    if (startX === targetX && startY === targetY) return "Found path";

    let cellVisited = [];
    cellVisited.push(new Position(startX, startY))
    cellVisited[0].visited = true;

    while (cellVisited.length !== 0) {
        let nextCell = cellVisited.pop();

        if (nextCell.x === targetX && nextCell.y === targetY) return "Found path"
        else nextCell.parent = nextCell;

        knightTravail(nextCell.x, nextCell.y, targetX, targetY);
    }
}

console.log(knightTravail(0, 1));