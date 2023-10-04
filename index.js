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

for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < i; j++) {
        gameBoard.push(new Position(i, j))
    }
}

function setVisited (position) {
    if (position && typeof position === "object" && "visited" in position) position.visited = true;
    else return "Invalid position object" + position;
}

function checkValidity (x, y) {
    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
        const cell = gameBoard[x * boardSize + y];

        if (cell.visited) return null;
        else return cell;
    } else return null;
}

function findMoves (x, y) {
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
    return validMoves;
}

function knightTravail (startX, startY, targetX, targetY) {

    if (startX === targetX && startY === targetY) return [{x: startX, y: startY}]

    let cellVisited = [];
    const initialCell = new Position(startX, startY);
    initialCell.visited = true;
    cellVisited.push(initialCell);

    while (cellVisited.length !== 0) {
        const currentCell = cellVisited.pop();
        
        const possibleMoves = findMoves(currentCell.x, currentCell.y);

        for (const move of possibleMoves) {
            const { x: newX, y: newY } = move;

            if (checkValidity(newX, newY) && checkValidity(newX, newY).visited !== true) {
                const newCell = new Position(newX, newY);
                newCell.visited = true;
                newCell.parent = currentCell;
                cellVisited.push(newCell);

                if (newX === targetX && newY === targetY) {
                    let path = [];
                    let traceCell = newCell;

                    while (traceCell !== initialCell) {
                        path.unshift({x: traceCell.x, y: traceCell.y});
                        traceCell = traceCell.parent;
                    }
                    path.unshift({x: initialCell.x, y: initialCell.y});
                    return path;
                }
            }
        }
    }
    return null;
}

function returnPath () {
    path = knightTravail(1, 1, 2, 3);

    console.log("Found path");
    for (const cell of path) {
        console.log(`${cell.x}, ${cell.y}`);
    }
}

returnPath()