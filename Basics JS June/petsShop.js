function petsShop (input) {
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let total = numDogFood * 2.5 + numCatFood * 4;
    console.log(`${total} lv.`);
}
petsShop(["5", "4"])