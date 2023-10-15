function processOddNumbers(array){
    let oddArr = [];
    let oddArr2 = [];
    let reverseArr = [];
    for (let i = 0; i < array.length; i++) {
    
        if(i % 2 == 1){
     oddArr.push(array[i]);
        }
    }
    for(let el of oddArr){
         oddArr2.push(el * 2);
       } 
    for (let i = oddArr2.length - 1 ; i >= 0; i--) {
        
        reverseArr.push(oddArr2[i]);
    }
    
console.log(reverseArr.join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);