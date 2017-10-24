'use strict';

let chessTable = '';
for (let row = 0; row < 8; row++) {
    for (let tile = 0; tile < 8; tile++) {
        if ((row + tile) % 2 === 0) {
            chessTable += "%";
        }
        else {
            chessTable += " ";
        }
    }
    chessTable += '\n';
}

console.log(chessTable);
