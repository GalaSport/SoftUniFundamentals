function bombNumbers(array, bombPower){
    let bomb = Number(bombPower[0]);
    let power = Number(bombPower[1]);
    let sum = 0;
    while(array.includes(bomb)){
        let index = array.indexOf(bomb);
         array.splice(index - power, power * 2 + 1);   
    }
    for(let el of array){
        sum += el;
    }
    
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
            [4, 2]);