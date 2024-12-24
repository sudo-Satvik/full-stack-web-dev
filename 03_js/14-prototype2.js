// This is the new way to create a prototype object
// Instead of dunder we can use this!

let genericCar = { engine: 1, wheels: 4 };

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);

console.log(`Tesla has ${tesla.engine} engine and ${tesla.wheels} wheels driven by ${tesla.driver}`); // Tesla has 1 engine and 4 wheels

console.log("Tesla: " + Object.getPrototypeOf(tesla)); // Tesla: [object Object]