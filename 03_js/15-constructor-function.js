function Person(name, age) {
    this.name = name;
    this.age = age;
}

// my variable = param variable
// this.varName = varName;

function Car(make, model) {
    this.make = make;
    this.model = model;
}


let myCar = new Car('Toyota', 'Corolla');
// console.log(myCar);

let myCar2 = new Car('Honda', 'Civic');
// console.log(myCar2);

let me = new Person("Satvik", 21);
// console.log(me);


// we can assign nested function

function Animal(species) {
    this.species = species
    this.eat = function() {
        return `${this.species} is eating`;
    }
}

let lion = new Animal("cat")

// console.log(lion);
// console.log(lion.eat());


// Prototype in function is different than __proto__ or Object.getPrototypeOf()

Animal.prototype.sound = function() {
    return `${this.species} makes a sound!`
}

let germanSheperd = new Animal("dog");

console.log(germanSheperd.sound());