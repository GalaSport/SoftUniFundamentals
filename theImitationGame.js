function theImitationGame(array){
    let message = array.shift();
    for(let command of array){ 
        if(command.includes("ChangeAll")){
            let tokens = command.split("|");
            let substring = tokens[1];
            let replacement = tokens[2];
            let parts = message.split(substring);
             message = parts.join(replacement);


        }else if(command.includes("Insert")){
            let tokens = command.split("|");
            let index = Number(tokens[1]);
            let value = tokens[2];
            let left = message.slice(0,index);
            let right = message.slice(index);
            message = left + value + right;
           

        }else if(command.includes("Move")){
            let tokens = command.split("|");
            let lettersCount = Number(tokens[1]);
            //Moves the first n letters to the back of the string
            let firstHalf = message.substring(lettersCount);
            let secondHalf = message.substring(0, lettersCount);
           message = firstHalf + secondHalf;
          


        }else if(command.includes("Decode")){
            console.log(`The decrypted message is: ${message}`);
        }
    }
}
theImitationGame(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
     //The decrypted message is: Hello