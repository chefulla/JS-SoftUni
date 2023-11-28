function miningRig (input){
    let oneCardPrice = Number(input[0]) ;
    let oneAdapterPrice = Number(input[1]);
    let elctricityPriceByCardForDay = Number(input[2]);
    let earnedMoneyForDayByCard = Number(input[3]);

    let cardsPrice = oneCardPrice * 13;
    let adaptersPrice = oneAdapterPrice * 13;
    let spendMoney = cardsPrice + adaptersPrice + 1000;
    let moneyFromCardForDay = earnedMoneyForDayByCard - elctricityPriceByCardForDay;
    let totalEarnedMoney = moneyFromCardForDay * 13;

    let daysToComeback = spendMoney / totalEarnedMoney;
    let daysToComeback2 = Math.ceil(daysToComeback);

    console.log(spendMoney);
    console.log(daysToComeback2);
}
miningRig(["700","15","0.20","2"])