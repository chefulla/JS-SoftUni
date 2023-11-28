function spaceShip (input){
    let shipWidth = Number(input[0]);
    let shipLentgh = Number(input[1]);
    let shipHeight = Number(input[2]);
    let averageHeightOfAustronauths = Number(input[3]);

    let rocketSpace = shipWidth * shipLentgh * shipHeight;
    let roomSpace = (averageHeightOfAustronauths + 0.40) * 2 * 2;

    let roomFor = rocketSpace / roomSpace;
    let roomsFor = Math.floor(roomFor);
    
    let persons = roomsFor;

    //console.log(roomsFor);

    if (persons >= 3 && persons <= 10) 
    {
        console.log(`The spacecraft holds ${roomsFor} astronauts.`);
    } 

    else if (persons < 3 )
    {
        console.log("The spacecraft is too small.");
    } 

    else(console.log("The spacecraft is too big."))
    {
        
    }
}

spaceShip(["3.5", "4", "5", "1.70"])