function yardGreening (input) {
    let sqrArea = Number(input[0]);
    let initialCost = sqrArea * 7.61;
    let discount = initialCost * 0.18;
    let totalCost = initialCost - discount;

    console.log(`The final price is: ${totalCost} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["1220"])