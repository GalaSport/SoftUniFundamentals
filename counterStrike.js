function counterStrike(array) {
    let energy = Number(array.shift());
    let counter = 0;
    let index = 0;
    let command = array[index];
    let isFinish = false;

    while (command != "End of battle") {

        if (energy >= Number(command)) {
            energy -= Number(command);
            counter++;
        } else{
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
            isFinish = true;
            break;
        }

        if (counter % 3 == 0) {
            energy += counter;
        }
        index++;
        command = array[index];
    }
    if (isFinish) {

    } else {
        console.log(`Won battles: ${counter}. Energy left: ${energy}`);
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
//Not enough energy! Game ends with 7 won battles and 0 energy
// counterStrike(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"]);
// //Won battles: 4. Energy left: 94


