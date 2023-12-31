function worldTracker(array){
    let searchedWords = array.shift().split(" ");
    let occurrences = {};
    for(let word of searchedWords){
        occurrences[word] = 0;
    }
    for(let word of array){
        if(word in occurrences){
            occurrences[word]++;
        }
    }
    let entries = Object.entries(occurrences).sort((a,b) => b[1]-a[1]);

    for(let [word, repeats] of entries){
    console.log(`${word} - ${repeats}`);
    }
}
worldTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task']);