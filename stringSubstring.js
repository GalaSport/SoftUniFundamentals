function stringSubstring(word, string){
    let array = string.toLowerCase().split(" ");
    if(array.includes(word)){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }

}
stringSubstring('javascript', 'JavaScript is the best programming language');