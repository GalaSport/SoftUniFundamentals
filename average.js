function average(array){
    let sum = array.reduce((a,b) => a + b)
    let average = sum / array.length
console.log(average.toFixed(2));
}
average([2, 4, 5, 6, 2, 4, 3, 1])