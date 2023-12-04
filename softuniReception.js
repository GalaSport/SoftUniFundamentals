function softuiReception(array){
    let emp1 = Number(array[0]);
    let emp2 = Number(array[1]);
    let emp3 = Number(array[2]);
    let commonCount = Number(array[3]);
    let sumPerHour = emp1 + emp2 + emp3;
   
    let hoursCounter = 0;
    while(commonCount > 0){
        hoursCounter++;
        if(hoursCounter % 4 != 0){
           commonCount =  commonCount - sumPerHour;
          
        }else{
            continue;
        }
    }
        console.log(`Time needed: ${hoursCounter}h.`);
}
softuiReception(["1", "2", "3", "45"]);//Time needed: 10h.