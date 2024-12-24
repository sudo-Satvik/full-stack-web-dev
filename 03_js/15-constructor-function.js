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
console.log(myCar);

let myCar2 = new Car('Honda', 'Civic');
console.log(myCar2);

let me = new Person("Satvik", 21);
console.log(me);
