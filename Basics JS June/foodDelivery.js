function foodDelivery(input){
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegetarianMenu = Number(input[2]) * 8.15;
    let deliveryFee = 2.50;

    let totalMenuSum = chickenMenu + fishMenu + vegetarianMenu;
    let desertPrice = totalMenuSum * 0.20;
    let grandTotal = totalMenuSum + deliveryFee + desertPrice;

    console.log(grandTotal);
}
foodDelivery(["2", "4", "3"])