let arr = [10, 20, 30, 40];
console.log(includes(arr, 20));
function includes(arr, el){
    for(let item of arr){
        arr.includes(20);
        if(item === el){
            return true;
        }
    }
    return false;
}