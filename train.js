function train(array){
    let vagons = array.shift().split(" ").map(Number);
    let maxPassengers = Number(array.shift());
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        let tokens = command.split(" ");
        if(tokens[0] == "Add"){
            let passengers = Number(tokens[1]);
            vagons.push(passengers); 
        }else{
            let passengers = Number(tokens[0]);
            for (let index = 0; index < vagons.length; index++){
                if(passengers + vagons[index] <= maxPassengers){
                vagons[index] += passengers; 
                break; 
            }
        }    
    }
}
console.log(vagons.join(' '));

}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])