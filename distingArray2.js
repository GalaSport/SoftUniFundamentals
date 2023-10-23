function distingArray2(array) {
    let newArray = [];
    for (let num of array) {
        if (!newArray.includes(num)) {
            newArray.push(num);
        }
    }
    console.log(newArray.join(" "));
}
distingArray2([20, 8, 12, 13, 4,

    4, 8, 5])