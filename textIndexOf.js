function printCharacters(input){
    for(let el of input){
        console.log(el);
    }
}
printCharacters('AWord');

let str = "hello world hello";
let lastIndex = 0;
while(str.indexOf("hello", lastIndex) != -1){
    let foundAt = str.indexOf("hello", lastIndex);
    console.log("found match" , foundAt);
    lastIndex = foundAt + 5;
}