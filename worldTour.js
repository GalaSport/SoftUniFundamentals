function worldTour(array) {
    let firstArray = array.shift().split('');

    for (let command of array) {
        if (command.includes("Add")) {
            let tokens = command.split(":");
            let index = Number(tokens[1]);
            let destination = tokens[2];
        if(index < 0 || index > firstArray.length){ 
            continue;
            }else{
            firstArray.splice(index, 0, destination);
            console.log(firstArray.join(""));
        }
        } else if (command.includes("Remove")) {
            let tokens = command.split(":");
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if(startIndex < 0 || endIndex > firstArray.length){
                continue;
            }else{
            let newString = firstArray.join("").substring(0, startIndex) + firstArray.join("").substring(endIndex + 1);
            firstArray = newString;
            console.log(newString);
            }
        } else if (command.includes("Switch")) {
            let tokens = command.split(":");
            let first = tokens[1];
            let second = tokens[2];
            let newString = firstArray.replace(first, second);
            firstArray = newString;
            console.log(newString);

        } else if (command.includes("Travel")) {
            console.log(`Ready for world tour! Planned stops: ${firstArray}`);
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
//Hawai::RomeCyprys-Greece
//Hawai::Rome-Greece
//Bulgaria::Rome-Greece
//Ready for world tour! Planned stops:
//Bulgaria::Rome-Greece

