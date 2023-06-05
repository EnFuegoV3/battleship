import './style.css'
import { ships } from './shipFactory'
import { gameBoard } from './gameBoard';

const controlGridArr = [
    ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'],
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'],
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'],
    ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10'],
    ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10'],
    ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
    ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10'],
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10'],
    ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'],
    ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10'],
    ];

// const gridArr = [...Array(10)].map(e => Array(10));
const container1 = document.querySelector('.player-board');

function grid(board, player) {
    const container = document.querySelector(`.${board}`);
    container.style.gridTemplateRows = 'repeat(10, auto)';
    container.style.gridTemplateColumns = 'repeat(10, auto)';
    for(let n = 0; n < player.gridArr.length; n++) {
        for(let i = 0; i < player.gridArr[n].length; i++) {
            let squares = document.createElement('div');
            squares.classList.add('grid');
            squares.textContent = player.gridArr[n][i];
            squares.setAttribute('id', player.gridArr[n][i]);
            container.appendChild(squares);

        }
    }
};

function player1Grid() {
    const container = document.querySelector(`.player-board`);
    container.style.gridTemplateRows = 'repeat(10, auto)';
    container.style.gridTemplateColumns = 'repeat(10, auto)';
    for(let n = 0; n < player1.gridArr.length; n++) {
        for(let i = 0; i < player1.gridArr[n].length; i++) {
            let squares = document.createElement('div');
            squares.classList.add('grid');
            squares.textContent = player1.gridArr[n][i];
            
            squares.setAttribute('id', player1.gridArr[n][i]);
            container.appendChild(squares);
            if(player1.gridArr[n][i] === 'x'){
                
                squares.classList.add('hit')
            } else if(player1.gridArr[n][i] === 'o'){
                
                squares.classList.add('miss');
            } else{
                squares.classList.add('ship');
                                                                //NEED TO FIX THIS OR COME UP WITH DIFFERENT WAY
            } 
            
        }
    }
};


let player1 = gameBoard();
let player2 = gameBoard();

grid('player-board', player1);
grid('computer-board', player2);

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





player1.placement(carrier1, "a1", "a2", "a3", "a4", "a5");
player1.placement(battleship1, "f5", 'f6', 'f7', 'f8');
player1.placement(cruiser1, "h9", 'i9', 'j9');
player1.placement(submarine1, "d1", 'e1', 'f1');
player1.placement(destroyer1, "j4", 'j5');

player2.placement(carrier2, 'a1', 'b1', 'c1', 'd1', 'e1');
player2.placement(battleship2, 'e3', 'e4', 'e5', 'e6');
player2.placement(cruiser2, 'g9', 'h9', 'i9');
player2.placement(submarine2, 'b6', 'b7', 'b8');
player2.placement(destroyer2, 'i2', 'i3');



const computerBoard = document.querySelectorAll('.computer-board > div');


computerBoard.forEach(div => {
    div.addEventListener('click', (e) => {
        // console.log(e.target.id);
        for(let n = 0; n < controlGridArr.length; n++) {
            for(let i = 0; i < controlGridArr[n].length; i++) {
                if(controlGridArr[n][i] === e.target.id){
                    player1.attack(player2, n, i)
                    if(player2.gridArr[n][i] === 'x'){
                        div.classList.add('hit');
                    } else if(player2.gridArr[n][i] === 'o'){
                        div.classList.add('miss');
                    }
                }
            }
        }
        setTimeout(() => {
            player2.compAttack(player1, player2);
            
            
        }, 1400);
    })
})

if(carrier1.sunk == true && battleship1.sunk == true && cruiser1.sunk == true && submarine1.sunk == true && destroyer1.sunk == true){
    alert("you lost");
} else if(carrier2.sunk == true && battleship2.sunk == true && cruiser2.sunk == true && submarine2.sunk == true && destroyer2.sunk == true){
    alert('you won');
}

console.log(carrier1.sunk);




