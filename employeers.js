function employees(array){
     for(let el of array){
        let employee ={name: el, persNum: el.length}
        
        console.log(`"Name: ${employee.name} -- Personal Number: ${employee.persNum}"`);
     }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);