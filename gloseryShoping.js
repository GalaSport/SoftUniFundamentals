function gloseryShoping(array) {
    let list = array.shift().split("|");
    let index = 0;
    let command = array[index];
    while (command != "Shop!") {
        let tokens = command.split("%");
        let currCommand = tokens[0];
        let product = tokens[1];
        let otherProduct = tokens[2];
        switch (currCommand) {
            case "Important":
                if (list.includes(product)) {
                    let index = list.indexOf(product);
                    list.splice(index, 1);
                    list.unshift(product);
                } else {
                    list.unshift(product);
                }
                break;
            case "Add":
                if (list.includes(product)) {
                    console.log(`The product is already in the list.`);
                } else {
                    list.push(product);
                }
                break;
            case "Swap":
                if (list.includes(product && otherProduct)) {
                    let indexProduct = list.indexOf(product);
                    let indexOtherProduct = list.indexOf(otherProduct);
                    function swap(list, indexProduct, indexOtherProduct) {
                        let tempprary = list[indexProduct];
                        list[indexProduct] = list[indexOtherProduct];
                        list[indexOtherProduct] = tempprary;
                    }
                    swap(list, indexProduct, indexOtherProduct);
                } else {
                    if (list.includes(product)) {
                        console.log(`Product ${otherProduct} missing!`);
                    } else {
                        console.log(`Product ${product} missing!`);
                    }
                }
                break;
            case "Remove":
                if (list.includes(product)) {
                    let index = list.indexOf(product)
                    list.splice(index, 1)
                } else {
                    console.log(`Product ${product} isn't in the list.`);
                }
                break;
            case "Reversed":
                list.split("").reverse().join("");

                break;
        }
        index++;
        command = array[index];
    }
    for (let i = 0; i < list.length; i++) {
        let num = [i + 1]

        console.log(`${num}. ${list[i]}`);
    }
}
gloseryShoping(["eggs|milk|bread|fish",
    "Important%bread",
    "Swap%eggs%milk",
    "Shop!"]);