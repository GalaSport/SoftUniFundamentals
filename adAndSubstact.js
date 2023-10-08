function addAndSubtract(arr){
     arrNew = [];
     let sumArr = 0;
     let sumArrNew = 0;
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        if(currElement % 2 == 0){
            arrNew.push(currElement + i);
        }else{
            arrNew.push(currElement - i);
        }
        
    }
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let curr2 = arrNew[i];
        sumArr += curr;
        sumArrNew += curr2;
        
    }
 console.log(arrNew);
 console.log(sumArr);
 console.log(sumArrNew);
}
addAndSubtract([-5, 11, 3, 0, 2]);