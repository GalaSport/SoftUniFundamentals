function treasureHunt(array) {
    let newArray = array.shift().split('|');
    let i = 0;
    let command = array[i];
    
    while (command != "Yohoho!"){
        let currArray = command.split(' ');
        let action = currArray.shift();

        if (action == "Loot") {
            for (let el of currArray) {
                let result = newArray.includes(el);
                if (result == false) {
                    newArray.unshift(el);
                }
            }
        } else if (action == "Drop") {
            for (let el of currArray) {
                let elAsNum = Number(el);
                if (elAsNum >= 0){
                    let item = newArray.splice(elAsNum, 1).shift();
                    newArray.push(item);
                }else{
                    continue;
                }
            }
        } else if(action == "Steal"){
            for(let el of currArray){
                let elAsNum = Number(el);
                let last = newArray.splice(- elAsNum);
                console.log(last.join(', ')); 
            
            if(newArray.length <= last.length){
                console.log(`Failed treasure hunt.`);
                return;
            }
        }
    }
        command = array[i];
        i++; 
    }
    let average = 0;
    for(let el of newArray){
        average += el.length;
    }
    
    let totalAverage = average / newArray.length;
    console.log(`Average treasure gain: ${totalAverage.toFixed(2)} pirate credits.`);
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);