function mirrorWords([input]) {
    let count = 0;
    let result = [];
    let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gi;
    let maTch = pattern.exec(input);

    while (maTch) {
        count++;
        let first = maTch[2];
        let second = maTch[3];

        if (first == second.split("").reverse().join("")) {
            result.push(`${first} <=> ${second}`);
        }
        maTch = pattern.exec(input);
    }

    if (count == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (result.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`"The mirror words are:`);
        console.log(result.join(", "));
    }

}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
// 5 word pairs found!
//The mirror words are:
//Part <=> traP, leveL <=> Level, sAw
//<=> wAs