function computerStore(array){
    let sum = 0;
    let typeClient = array.pop();
    for(let i = 0; i < array.length; i++){
        let currEl = array[i]
        if(currEl <= 0){
            console.log(`Invalid price!`);
            continue;
        }
        sum += Number(currEl); 
    }
    let tax = sum * 0.20;
    let all = sum + tax;
    if(typeClient == 'special'){
        all -=  (all * 0.10);
    }
    if(all == 0){
        console.log(`Invalid order!`);
    }else{
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${all.toFixed(2)}$`);
}
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
//computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
//computerStore(['regular']);