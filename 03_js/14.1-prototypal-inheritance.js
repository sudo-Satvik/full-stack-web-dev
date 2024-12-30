// Define the Animal constructor function (parent class)
function Animal() {}

// Add a method to Animal's prototype
// This method will be shared by all instances of Animal and its subclasses
Animal.prototype.makeSound = function() {
    console.log("animal makes a sound");
};

// Define the Dog constructor function (child class)
function Dog() {}

// Set up inheritance so that Dog inherits from Animal
// This links Dog.prototype to a new object created from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Add a specific method to Dog's prototype
// This method is unique to Dog and won't exist on Animal or other subclasses
Dog.prototype.bark = function() {
    return 'Woof!';
};

// Reset the constructor property on Dog's prototype
// After setting Dog.prototype = Object.create(...), the constructor points to Animal
// This step ensures Dog's prototype has the correct constructor reference
Dog.prototype.constructor = Dog;

// Example Usage
const myDog = new Dog();
myDog.makeSound(); // Output: animal makes a sound (inherited from Animal)
console.log(myDog.bark()); // Output: Woof! (defined specifically for Dog)
