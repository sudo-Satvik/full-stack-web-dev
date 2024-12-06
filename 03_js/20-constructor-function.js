
// The blueprint or just like the class
function Person(name, age){
    // We can do this but
    // let myName = name;
    // This is a good practice
    this.name = name;   // placeholder
    this.age = age;     // placeholder
}

let myPerson = new Person("Satvik", 20);
// console.log(myPerson);

let myPerson2 = new Person("Poonam", 42);
// console.log(myPerson2);


function Desktop(processor, ram) {
    this.processor = processor;
    this.ram = ram;
    this.troubleshoot = () => `Troubleshooting under ${this.ram}GB of RAM...`
}

let myDesktop = new Desktop('Ryzen 7 5800h 3.5GHz', 32)
// console.log(myDesktop);
// console.log(myDesktop.troubleshoot);        // This is just function's reference
// console.log(myDesktop.troubleshoot());       // This is the actual calling that function


function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound!`
} 


let dog = new Animal("Dog")
// console.log(dog.sound());

let cat = new Animal("Cat")
// console.log(cat.sound());


function Drink(name) {
    // Handling error
    if(!new.target){
        // It sense error and raise an exception
        throw new Error("Drink must be called with new keyword!");
    }
    this.name = name;
}

let coffee = new Drink("coffee")

let tea = Drink("tea") 