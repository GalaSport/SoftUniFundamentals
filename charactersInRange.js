function charactersInRange(ch1, ch2){
    let ch1Code = ch1.charCodeAt(0);
    let ch2Code = ch2.charCodeAt(0);
    let output = "";
    let minCh = Math.min(ch1Code, ch2Code);
    let maxCh = Math.max(ch1Code, ch2Code);

    for (let i = minCh + 1; i < maxCh; i++) {
        let currElement = String.fromCharCode(i);

        output += `${currElement} `;
        
    }
    
    console.log(output);
}
charactersInRange('d', 'a');