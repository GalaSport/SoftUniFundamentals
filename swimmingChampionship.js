function swimmingChampionship(array) {
    let days = Number(array[0]);
    let neededPoint = Number(array[1]);
    let swimmerCount = Number(array[2]);
    let hotelPriceDay = Number(array[3]);
    let participationFee = Number(array[4]);
    let expenses = (days * (swimmerCount * hotelPriceDay)) + (participationFee * swimmerCount);

    let allPoints = Number(array[5]);

    for (let i = 6; i < array.length; i++) {
        currEll = Number(array[i]);
        let fivePersent = allPoints * 0.05;
        allPoints = allPoints + currEll + fivePersent;

    }
    if (allPoints >= neededPoint) {
        console.log(`Money left to pay: ${(expenses - (0.25 * expenses)).toFixed(2)} BGN.
The championship was successful!`);
    } else {
        console.log(`Money left to pay: ${(expenses - (0.10 * expenses)).toFixed(2)} BGN.
The championship was not successful.`);
    }
}
swimmingChampionship(["3",
    "400",
    "5",
    "70.6",
    "15.0",
    "100.6",
    "300.59",
    "250.9"]); //Money left to pay: 850.50 BGN. The championship was successful!
