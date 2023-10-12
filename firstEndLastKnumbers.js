function firstEndLastKnum(arr){
    let cutcount = arr[0];
    let first = arr.slice(1,cutcount + 1);
    let last = arr.slice(arr.length - cutcount);
    console.log(first.join(" "));
    console.log(last.join(" "));
    
}
firstEndLastKnum([3, 6, 7, 8, 9]);