import './style.css'
import { ships } from './shipFactory'

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

console.log(carrier1.hit(carrier2));

// carrier2.hit(cruiser1);
// carrier2.hit(cruiser1);
// carrier2.hit(cruiser1);
// console.log(cruiser1.health);
export { carrier1, carrier2 };