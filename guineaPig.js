function guineaPig(input){
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weightPuppy = Number(input[3]);
    
    for (let i = 1; i <= 30; i++) {

         food -= 0.3;
        if(i % 2 == 0){
            hay -= (0.05 * food);  
        }
        if(i % 3 == 0){
            cover -= (weightPuppy / 3);
        }
    }
        if(food <= 0 || hay <= 0 || cover <= 0){
            console.log("Merry must go to the pet store!");
            
        }else{
            console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);  
        }

    //Food: 1.00, Hay: 1.10, Cover: 1.87.
}
guineaPig(["10",

"5",

"5.2",

"1"])