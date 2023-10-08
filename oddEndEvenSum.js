function oddEndEvenSum(num){ 
    let numAsString = String(num);
    let oddSum = 0;
    let evenSum = 0;
    function print(numAsString){
    for (let i = 0; i < numAsString.length; i++) {
        let currElement = Number(numAsString[i]);
        if(currElement % 2 == 0){
            evenSum += currElement
        }else{
            oddSum += currElement
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
print(numAsString);
}
oddEndEvenSum(1000435);