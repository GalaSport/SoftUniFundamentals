function matrix(num){
    for (let i = 0; i < num; i++) {
       let buff = "";
        for(let i = 0; i < num; i++){
            buff += `${num} `; 
        }
        console.log(buff);  
    }
}
matrix(3);