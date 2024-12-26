// Dealing with the errors or the edge cases

function Food(name) {
    // if somebody creating the constructor function without the 'new' keyword, then it will throw the error!
    if(!new.target) {
        throw new Error("Please use new keyword in order to begin");
    }
    this.name = name;
}

let pizza = Food("Pizza");

console.log(pizza);