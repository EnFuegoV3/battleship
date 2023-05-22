export const ships = (name, length) => {
    let health = length;
    let sunk = false;
    
    const isSunk = () => {
        
        
    };

    const hit = (boat) => {
            boat.health -= 1;
            
            if(boat.health === 0) {
                console.log(`your ${boat.name} has been sunk`);
                
                return boat.sunk = true;
            }
            return boat.health;
    };

    return {name, health, hit, sunk};
}