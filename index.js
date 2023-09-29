class position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let boardSize = 8;
let gameBoard = [];

for (let i = 0; i <= boardSize; i++) {
    for (let j = 0; j <= i; j++) {
        gameBoard.push(new position(i, j))
    }
}
console.log(gameBoard);