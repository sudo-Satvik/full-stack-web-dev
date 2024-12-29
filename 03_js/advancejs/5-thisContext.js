let person = {
    name: "Satvik",
    greet(){
        console.log("Hello, I am " + this.name);
    }
}

person.greet()

// Transferring the reference of the greet function
// greetfunction lose the this context!
const greetFunction = person.greet
greetFunction()

// This will bind the this context with the new function. It doesn't invoke automatically
const boundGreetFunction = person.greet.bind({name: "Mayank"})
boundGreetFunction()


// .apply(): Immediately invokes the function with arguments as an array.

function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old. My name is ${this.name}.`);
}
  
  const person2 = { name: "Alice" };
  greet.apply(person, ["Bob", 30]);  // Output: Hello, Bob! You are 30 years old. My name is Alice.
  


// .call(): Immediately invokes the function with individual arguments.
function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
const person3 = { name: "Alice" };
greet.call(person, "Bob");  // Output: Hello, Bob! My name is Alice.
  
    