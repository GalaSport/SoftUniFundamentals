function taxCalculator(array){
    let newArray = array[0].split(">>");
    let totalTotal = 0;

    for (let i = 0; i < newArray.length; i++) {
        currElement = newArray[i];
        let tokens = currElement.split(" ")
       let type = tokens[0];
       let years = Number(tokens[1]);
       let km = Number(tokens[2]);
       if(type == "family"){
        let total = 50;
        for (let i = 0; i < years; i++){
        total -= 5;  
        }
        for (let i = 1; i <= (km / 3000); i++) {
           total += 12  
        }
        console.log(`A ${type} car will pay ${total.toFixed(2)} euros in taxes.`);
        totalTotal += total;
       }else if(type == "heavyDuty"){
        let total = 80;
        for (let i = 0; i < years; i++){
        total -= 8;  
        }
        for (let i = 1; i <= (km / 9000); i++) {
           total += 14  
        }
        console.log(`A ${type} car will pay ${total.toFixed(2)} euros in taxes.`);
        totalTotal += total;
       }else if(type == "sports"){
        let total = 100;
        for (let i = 0; i < years; i++){
        total -= 9;  
        }
        for (let i = 1; i <= (km / 2000); i++) {
           total += 18  
        }
        console.log(`A ${type} car will pay ${total.toFixed(2)} euros in taxes.`);
        totalTotal += total;
       }else{
        console.log(`Invalid car type.`);
       }
    }
    console.log(`The National Revenue Agency will collect ${totalTotal.toFixed(2)} euros in taxes.`);
}
taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
