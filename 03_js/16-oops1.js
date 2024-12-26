// This is how we declare an OBJECT in JavaScript

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return `${this.make} ${this.model} got started in ${this.year}`
    },
};

console.log(car.start());


// This is how we can create the class in JavaScript

class Vehicle {
    constructor(make, model, year) {
        this.model = model
        this.make = make
        this.year = year
    }

    start() {
        return `${this.make} ${this.model} got started in ${this.year}`
    }
}

