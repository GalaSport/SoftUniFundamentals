function muOnline(input) {
    let arr = input.split("|");
    let healt = 100;
    let coins = 0;

    for (let i = 0; i < arr.length; i++) {
        let room = (arr[i]).split(" ");
        let type = room[0];
        let num = Number(room[1]);
        if (type == "chest") {
            coins += num;
            console.log(`You found ${num} bitcoins.`);
        } else if (type == "potion") {
            if (healt + num > 100){
                num = 100 - healt;
            }
            healt += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${healt} hp.`);
        } else {
            healt = healt - num;
            if (healt <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else if (healt > 0) {
                console.log(`You slayed ${type}.`);
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${healt}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
//"rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"