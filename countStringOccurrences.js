function countStringOccurrences(text, word){
    let words = text.split(' ');
    let count = 0;
    for(let el of words){
        if(el == word){
            count++
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence',

'is')