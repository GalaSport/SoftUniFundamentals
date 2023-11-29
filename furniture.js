function furniture(array){
    let items = [];
    let totalPrice = 0;
    let command = array.shift();
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    while (command != "Purchase"){
        let maTch  = command.match(pattern);

        if(maTch){
            let {name, price, qty} = maTch.groups;

            let furniturePrice = Number(qty) * Number(price); //current
            totalPrice += furniturePrice;
            items.push(name);

            // let name = maTch.groups.name;
            // let price = Number(maTch.groups.price);
            // let qty = Number(maTch.groups.qty);
        }

        command = array.shift();
    }
    console.log(`Bought furniture:`);
    if(items.length > 0){
        console.log(items.join("\n"));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
// Bought furniture: 
// Sofa 
// TV 
// Total money spend: 2436.69 