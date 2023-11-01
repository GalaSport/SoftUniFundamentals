function towns(array){
    for(let el of array){
        let towns = el.split(" | ");
        let name = towns[0];
        let lat = Number(towns[1]);
        let long = Number(towns[2]);

        let town  = {
            town: name,
            latitude: lat.toFixed(2),
            longitude: long.toFixed(2)
        }
        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 
'Beijing | 39.913818 | 116.363625']); 