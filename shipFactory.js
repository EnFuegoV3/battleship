export const ships = (name, length) => {
    let health = length;
    let sunk = false;
    
    const isSunk = () => {
        
        
    };

    const hit = (ship) => {
            ship.health -= 1;
            
            if(ship.health === 0) {
                console.log(`your ${ship.name} has been sunk`);
                
                return ship.sunk = true;
            }
            return ship.health;
    };

    return {name, health, hit, sunk};
}