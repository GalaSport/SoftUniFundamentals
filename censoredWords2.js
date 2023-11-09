function sensoredWords(text, word){
    let sensor = "*".repeat(word.length);
    let newStr = text.split(word).join(sensor);
    console.log(newStr);
    console.log(text.replace(word, sensor));

}sensoredWords('A smallest sentence with some words',
'smallest');