function catProblem(array){
    class Cat{
        name;
        age;
        constructor(name, age){
        this.name = name,
        this.age = age
    }
    saysMeow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
let cats = [];
for(let el of array){
    let tokens = el.split(" ");
    let name = tokens[0];
    let age = tokens[1];
let cat = new Cat(name, age);
cats.push(cat);
}
for(let cat of cats){
    cat.saysMeow();
}
}
catProblem(['Mellow 2', "Tom 5"]);