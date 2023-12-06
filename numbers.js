function numbers(string){
    let numbersArray = string.split(" ").map(Number);
    let sum = numbersArray.reduce((accumulator, value) => accumulator + value);
    let average = sum / numbersArray.length;
    let numbers = numbersArray.filter(x => x > average).sort((a,b) => b - a);
    let topNumbers = numbers.slice(0, 5);
    if(numbers.length == 0){
        console.log("No");
    }else{
        console.log(topNumbers.join(" "));
    }
}
numbers('10 20 30 40 50'); // 50 40
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'); //60 60 51 50 50
numbers("1"); //No