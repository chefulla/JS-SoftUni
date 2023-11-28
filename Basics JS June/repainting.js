function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + 1.10) * 14.50;
    let thhinnerSum = (thinner * 5);
    let bags = 0.40;
    
    let totalSum = nylonSum + paintSum + thhinnerSum + bags;
    let sumForWork = (totalSum * 0.30) * workHours;
    let grandTotal = totalSum + sumForWork;

    console.log(grandTotal);
}
repainting(["10", "11", "4", "8"])

function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + 1.00) * 14.50;
    let thhinnerSum = (thinner * 5);
    let bags = 0.40;
    
    let totalSum = nylonSum + paintSum + thhinnerSum + bags;
    let sumForWork = (totalSum * 0.30) * workHours;
    let grandTotal = totalSum + sumForWork;

    console.log(grandTotal);
}
repainting(["5","10","10","1"])