// Something that can take more than one form is called polymorphism
class Bird{
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly() {
        return `Penguins can't fly...`
    }
}

let bird = new Bird();
let penguin = new Penguin();

// Here the method names are same but the behaviors are different!

console.log(bird.fly());            // Flying...
console.log(penguin.fly());         // Penguins can't fly...