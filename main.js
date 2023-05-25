import './style.css'
import { ships } from './shipFactory'
import { gameBoard } from './gameBoard';

// export const gridArr = [
//     ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'],
//     ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'],
//     ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'],
//     ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10'],
//     ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10'],
//     ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
//     ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10'],
//     ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10'],
//     ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'],
//     ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10'],
//     ];

// const gridArr = [...Array(10)].map(e => Array(10));

let player1 = gameBoard();
let player2 = gameBoard();

const carrier1 = ships("carrier1", 5);
const battleship1 = ships("battleship1", 4);
const cruiser1 = ships("cruiser1", 3);
const submarine1 = ships("submarine1", 3);
const destroyer1 = ships("destroyer1", 2);

const carrier2 = ships("carrier2", 5);
const battleship2 = ships("battleship2", 4);
const cruiser2 = ships("cruiser2", 3);
const submarine2 = ships("submarine2", 3);
const destroyer2 = ships("destroyer2", 2);

function grid() {
    const container = document.querySelector('#container');
    container.style.gridTemplateRows = `repeat(10, auto)`;
    container.style.gridTemplateColumns = `repeat(10, auto)`;
    for(let n = 0; n < (10 * 10); n++) {
        let squares = document.createElement('div');
        container.appendChild(squares);
    }
};




player1.placement(cruiser1, "a1", "a2", "a3");
// player2.placement(cruiser2);
// player1.attack(player2, 0, 0);
// player1.attack(player2, 0, 1);
// player1.attack(player2, 0, 2);
console.log(player1)
console.log(cruiser2);


// console.log(carrier1.hit(carrier2));

// carrier2.hit(cruiser1);
// carrier2.hit(cruiser1);

// console.log(cruiser1);
// export { carrier1, carrier2 };

// console.log(carrier1.name);
// console.table(gridArr);