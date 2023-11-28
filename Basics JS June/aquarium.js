function aquarium (input){
    let length = Number(input[0]);
    let width =Number(input[1]);
    let heihgt = Number(input[2]);
    let percent = Number(input[3]);

    let capacity = (length * width * heihgt);
    let letersCapacity = (capacity * 0.001);
    let neededLiters = letersCapacity * (1 - 0.17);

    console.log(neededLiters);


}
aquarium(["85", "75", "47", "17"])