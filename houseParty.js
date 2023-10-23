function houseParty(array){
    let list = [];
    for(let command of array){
         let tokens = command.split(' ');
        let name = tokens[0];
        if(tokens.includes("not")){
            if(list.includes(name)){
                let index = list.indexOf(name);
                    list.splice(index,1);
                }else{
                    console.log(`${name} is not in the list!`);
                }
            }else{
                if(list.includes(name)){
                    console.log(`${name} is already in the list!`);
                }else{
                    list.push(name);
                }
            }
        }
       console.log(list.join("\n")); 
    }
houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!']);
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])