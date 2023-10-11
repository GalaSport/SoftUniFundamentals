function loadingBar(num){
    let chPerSent = "";
    let dotaCount = (100 - num) / 10;
    let dota = `${"."}`.repeat(dotaCount);
    for (let i = 0; i < (num / 10); i++){
        chPerSent += `%`; 
    }
    if(num < 100){
    console.log(`${num}% [${chPerSent}${dota}]`);
    console.log(`Still loading...`);
    }else{
        console.log(`100% Complete!`);
    }
}
loadingBar(100);