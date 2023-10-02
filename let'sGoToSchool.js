function goToSchool(studentsCount, grade){

    let helpMathPrise = 8.90 * studentsCount;
    let helpBelPrice = 6.90 * studentsCount;
    let testsMathBelPrice = (9.90 * 2) * studentsCount;
    let chasKlasaPrise = 7.00 * studentsCount;
    let itBook4aPrice = 8.90 * studentsCount;
    let englishBook4bPrice = 34.80 * studentsCount;
    let russiamBook4vPrise = 27.40 * studentsCount;
    let allTheSame = helpMathPrise + helpBelPrice + testsMathBelPrice + chasKlasaPrise;

if(grade == "4a"){
    console.log(((allTheSame + itBook4aPrice) -((allTheSame + itBook4aPrice) * 0.20)).toFixed(2));
}else if(grade == "4b"){
    console.log(((allTheSame + englishBook4bPrice) -((allTheSame + englishBook4bPrice) * 0.20)).toFixed(2));  
}else{
    console.log(((allTheSame + russiamBook4vPrise) -((allTheSame + russiamBook4vPrise) * 0.20)).toFixed(2));
}  
}
goToSchool(23, "4v");