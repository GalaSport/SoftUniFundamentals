function  secretChat(array){
    let conceleadMessage = array.shift();
    for(let command of array){
        if(command.includes("InsertSpace")){
            let tokens = command.split(":|:");
            let index = Number(tokens[1]);
           let firsthalf = conceleadMessage.slice(0, index);
           let secondHalf = conceleadMessage.slice(index);
           conceleadMessage = firsthalf + " " + secondHalf;
           console.log(conceleadMessage);

        }else if(command.includes("Reverse")){
            let tokens = command.split(":|:");
            let substring = tokens[1];
            let indexSubstring = conceleadMessage.indexOf(substring);
            if(indexSubstring == -1){
                console.log("error");
                continue;
            }
            let left = conceleadMessage.slice(0, indexSubstring);
            let right = conceleadMessage.slice(indexSubstring + substring.length);
             conceleadMessage = left + right + substring.split("").reverse().join("");
             console.log(conceleadMessage);

        }else if(command.includes("ChangeAll")){
            let tokens = command.split(":|:");
            let match = tokens[1];
            let replacement = tokens[2];
            let parts = conceleadMessage.split(match);
            conceleadMessage = parts.join(replacement);
            console.log(conceleadMessage);

        }else if(command.includes("Reveal")){
            console.log(`You have a new text message: ${conceleadMessage}`);
        }
    }
}
secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
    //hellodar!gnil 
    //hellodarling! 
    //hello darling! 
    //You have a new text message: hello darling!