function basketAccesories (input){
    yearFee = Number(input[0]);

    let shoes = yearFee * 0.60;
    let clothes = shoes * 0.80;
    let ball = clothes / 4;
    let others = ball / 5; 
    
    let total = yearFee + shoes + clothes + ball + others;
    console.log(total);
}
basketAccesories(["365"])