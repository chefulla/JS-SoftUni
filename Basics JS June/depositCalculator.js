function depositCalculator(input){
    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let interestRate = Number(input[2]) / 100;

    let total = depositSum + term * ((depositSum * interestRate) / 12);
    console.log(total)
}
depositCalculator(["200", "3", "5.7"])