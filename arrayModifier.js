function arrayModifier(array){
    let arrayModify = array.shift().split(" ").map(Number);
    let i = 0;
    let command = array[i];
    
    while( command != "end"){
        let tokens = command.split(" ");
        let commString = tokens[0];
        let firstIndex = Number(tokens[1]);
        let secondIndex = Number(tokens[2]);
        switch(commString){
            case "swap":
                function swap(arrayModify, firstIndex, secondIndex){
            let temporary =  arrayModify[firstIndex];
            arrayModify[firstIndex] = arrayModify[secondIndex]; 
             arrayModify[secondIndex] = temporary;
            //console.log(arrayModify);
             }
             swap(arrayModify, firstIndex, secondIndex);
            break;
            case "multiply":
             let multy = arrayModify[firstIndex] * arrayModify[secondIndex];
             arrayModify.splice(firstIndex, 1, multy);

                //console.log(arrayModify);
            break;
            case "decrease":
                let arrMod = arrayModify.map(x => (x - 1));
                arrayModify = arrMod;
                //console.log(arrayModify);
            break;
        }
        i++;
        command = array[i];
    }
    console.log(arrayModify.join(", "));
}
arrayModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',//87 7383 321 -123 42 290 -2
    'multiply 2 1',//87 7383 2369943 -123 42 90 -2
    'decrease',
    'end']);// 86, 7383, 2369942, -124, 41, 89, -3