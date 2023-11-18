function replaceRepeatingChars(string){
    let noRepeatString = "";
    let prevChar = "";

    for(let curChar of string){
        if(curChar !== prevChar){
         noRepeatString += curChar;
         prevChar = curChar;
        }
    }
    console.log(noRepeatString);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');