function sumFirstLast(arr){
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);
    console.log(first + last);
}
sumFirstLast(['20', '30', '40']);

function sumFirstEndLast(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}
sumFirstEndLast(['5', '10', "2"]);
