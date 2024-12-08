// Object Literal
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    start: function () {
        return `${this.make} from ${this.model} is starting...`;
    }
};

console.log(car.start());

// The problem with Object Literal is that we can't reuse this.
// So we introduced a new concept called Constructor Function.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
        return `${this.make} created ${this.model} in ${this.year}`
    }
}

let car1 = new Car("Toyota", "Fortuner", 2004);
console.log(car1.start());

let car2 = new Car("Lamborghini", "Aventador", 2011);
console.log(car2.start());



// Prototype and Prototypal Chain

function Animal(type) {
    this.type = type;
}

// Accessing it's prototype and adding a function
Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.satvik = function() {
    return `array: ${this}`
}


let myArray = [1, 2, 3]
console.log(myArray.satvik());


let myArray2 = [1, 2, 3, 4, 5]
console.log(myArray2.satvik());



// How classes are created and a glimpse of inheritance
// When a function goes inside the class, it reffered as a Method!
// Constructor is also optional in js

class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}
// Inheritance
class Gaadi extends Vehicle{
    drive() {
        return `${this.make} : This is an inheritance example!`;
    }
}

let myCar = new Gaadi("Lamborghini", "Aventador")
console.log(myCar.drive());
console.log(myCar.start());