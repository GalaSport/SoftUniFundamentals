function stringManipulator(array){
    let theString = array.shift();
    for(let command of array){
        if(command.includes("Translate")){ //"Translate {char} {replacement}"
            let tokens = command.split(" ");
            let ch = tokens[1];
            let replacement = tokens[2];
            let parts = theString.split(ch);
            theString = parts.join(replacement);
            console.log(theString);

        }else if(command.includes("Includes")){ //"Includes {substring}"
            let tokens = command.split(" ");
            let substring = tokens[1];
            if(theString.includes(substring)){
                console.log("True");
            }else{
                console.log("False");
            }

        }else if(command.includes("Start")){ //"Start {substring}"
            let tokens = command.split(" ");
            let givenSubstring = tokens[1];
            if(theString.startsWith(givenSubstring)){
                console.log("True");
            }else{
                console.log("False");
            }

        }else if(command.includes("Lowercase")){ //"Lowercase"
            let toLow = theString.toLowerCase();
            console.log(toLow);
            theString = toLow;

        }else if(command.includes("FindIndex")){ //"FindIndex {char}"
            let tokens = command.split(" ");
            let ch = tokens[1];
            let index = theString.lastIndexOf(ch);
            console.log(index);

        }else if(command.includes("Remove")){ //"Remove {startIndex} {count}"
            let tokens = command.split(" ");
            let startIndex = tokens[1];
            let count = tokens[2];
            let remove = theString.split("").splice(startIndex,count).join("");
            let rest = theString.split(remove).join("");


            console.log(rest);

        }else if(command.includes("End")){
            console.log();
        }
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s", 
"Includes string", 
"Start //This",
 "Lowercase", 
 "FindIndex i", 
 "Remove 0 10", 
 "End"]);