function passWordgenerator(array){
    let concatenateString = array[0] + array[1];
    let thurdArray = array[2].toUpperCase(); 
    let vowels = ["a", "e", "i", "o", "u"];
    let index = 0;
    
    for(let char of concatenateString){
        if (vowels.includes(char) ){
             concatenateString = concatenateString.replace(char, thurdArray[index]);
             index++;
             if(index == thurdArray.length){
                index = 0;
             }
            }
        }
        let password = concatenateString.split('').reverse().join("");
    console.log(`Your generated password is ${password}`);     
}
passWordgenerator([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ]);//sElbGtNgAvRtOhEGzzNpAvRlO