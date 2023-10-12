function negativeOrPositiveNum(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let currEl = Number(arr[i]);
        if(currEl >= 0){
            newArr.push(currEl);
        }else{
            newArr.unshift(currEl);
        }
    }
    console.log(newArr.join('\n'));
}
negativeOrPositiveNum(['3', '-2', '0', '-1']); 