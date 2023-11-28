function suppliesForSchool (input) {
    let pencilPacks = Number(input[0]) * 5.80;
    let markersPacks = Number(input[1]) * 7.20;
    let leters = Number(input[2]) * 1.20;
    let discountPercent = Number(input[3]) / 100;

    let totalSum = pencilPacks + markersPacks + leters;
    let priceWithDiscount = totalSum - (totalSum * 0.25);
    //console.log(totalSum);
    console.log(priceWithDiscount);
}
suppliesForSchool(["2","3", "4", "25"])