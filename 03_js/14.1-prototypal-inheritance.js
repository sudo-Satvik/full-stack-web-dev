// Constructor Function
function Person(name){
    this.name = name
}

Person.prototype.greet = function() {
    console.log(`Hello I am ${this.name}`);
}


let me = new Person("Satvik");
me.greet();


// Also possible in class

class PersonClass{
    constructor(name){
        this.name = name
    }
}

PersonClass.prototype.greet = function() {
    console.log(`Hello I am ${this.name}`);
}

let me2 = new PersonClass("Kivtas");
me2.greet();