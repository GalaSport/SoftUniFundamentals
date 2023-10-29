function goldMine(input){
    let locationCount  = Number(input[0]);
    let averageYieldExp= 0;
    let dayCount = 0;
    let all = 0;
    let index = 0;

    while(true){
        Number(input[index]);
        index++;
        averageYieldExp = Number(input[index]);
        index++;
        dayCount = Number(input[index]);
        index++;
        
        let averageYieldPlace = all / dayCount;
        for(let i = Number(input[index]); i <= Number(input[index]); i++){
            let yieldGoldDay = Number(input[index]);
            all = all = yieldGoldDay;
        }
        if(averageYieldExp > averageYieldPlace){
            console.log(`You need ${(averageYieldExp - averageYieldPlace).toFixed(2)} gold.`); 
        }else{
            console.log(`Good job! Average gold per day: ${averageYieldPlace.toFixed(2)}.`);
        }
        
        
    }
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);
