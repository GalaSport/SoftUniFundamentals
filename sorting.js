function sorting(array){
    let newArray = [];
    let ascending = array.sort((a,b) => a - b);
    
    while(ascending.length > 0){
       let bigest = array.pop();
       newArray.push(bigest);
        let smallest = array.shift();
        newArray.push(smallest);
    }
    
console.log(newArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);