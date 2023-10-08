function palindrome(arr){
    for(let el of arr){
        let elString = String(el);
        let reverseElString = elString.split('').reverse().join('');
        console.log(elString == reverseElString);
    }
}
palindrome([123, 323, 421, 121]);