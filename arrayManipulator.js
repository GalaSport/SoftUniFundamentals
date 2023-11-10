function arrayManipulator(array, commands) {

    for (let el of commands) {
        let tokens = el.split(' ');
        let command = tokens[0];
        if (command == "add") {
            let index = Number(tokens[1]);
            let num = Number(tokens[2]);
            array.splice(index, 0, num);

        } else if (command == "addMany") {
            let index = Number(tokens[1]);
            let numAdd = tokens.slice(2,);
            for (let num of numAdd) {
                array.splice(index, 0, num);
                index++;
            }
        } else if (command == "contains") {
            let num = Number(tokens[1]);
            console.log(array.indexOf(num));

        } else if (command == "remove") {
            let index = Number(tokens[1]);
            array.splice(index, 1);

        } else if (command == "shift") {
            let rotations = Number(tokens[1]);
            for (let i = 0; i < rotations; i++) {
                let shiftNum = array.shift();
                array.push(shiftNum);
            }
        } else if (command == "sumPairs") {
            let newArray = [];

            for (let i = 0; i < array.length; i = i + 2) {
                if (i + 1 < array.length) {
                    let firstNum = array[i];
                    let secondNum = array[i + 1];
                    let sum = firstNum + secondNum;
                    newArray.push(sum);
                } else {
                    newArray.push(array[i]);
                }
            }
            array = newArray;

        } else if (command == "print") {
            console.log(`[ ${array.join(", ")} ]`);
        }
    }
}
arrayManipulator//([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
    //([1, 2, 4, 5, 6, 7, 8], ["sumPairs"]);
([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print']);