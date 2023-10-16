function smallestTwoNumbers(array){
    let ascending = array.sort((a, b) => a - b);
    let smallestTwo = array.slice(0, 2);
console.log(smallestTwo.join(" "));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);