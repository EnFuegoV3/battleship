export const ships = (name, length) => {
    let health = length;

    const sunk = (boat) => {
        
        console.log(`your ${boat} has been sunk`)
        
    };

    const hit = (boat) => {
            boat.health -= 1;
            if(boat.health === 0) {
                sunk(boat.name);
            }
        
    };

    return {name, health, sunk, hit};
}