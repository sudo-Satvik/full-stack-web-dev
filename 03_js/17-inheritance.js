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

class Car extends Vehicle {
    drive() {
        return `${this.model}: this is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Camry", 2020);

// console.log(myCar);
console.log(myCar.drive());
console.log(myCar.start());     // child can use the method of parent's one


let myCar2 = new Vehicle("Lamborghini", "Aventador", 2024);

// console.log(myCar2.drive());    // parent can't access the child's method