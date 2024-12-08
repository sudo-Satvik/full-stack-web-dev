// Encapsulation

class BankAccount{
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return "Deposited!";
    }

    getBalance() {
        return  `Current Balance is: $${this.#balance}`;
    }
}


let account = new BankAccount(); 

// console.log(account.deposit(100));
// console.log(account.getBalance());



// Abstraction

class CoffeeMachine{
    start() {
        // Call DB
        // Filter Values
        return "Starting the machine";
    }
    brewCoffee(){
        // Complex calculation
        return "Brewing the coffee";
    }
    pressStartButton(){
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1} \n${msg2}`;
    }
}

let myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


class Bird{
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly() {
        return `Can't Fly...`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// Here the method name is same but behavious is different

console.log(bird.fly());
console.log(penguin.fly());


// static method
// Can be used with the method as well as variables/constants
// it is a special method which can only be called by the class itself, nobody else can call this


class Calculator {
    static add(a, b){
        return a + b;
    } 
}

let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));                // Will not work because of static 

console.log(Calculator.add(2, 3));



// getter and setter

class Employee{
    #salary;    // truly hidden
    constructor(name, salary) {
        if(salary < 0 ) {
            throw new Error("Salary can't be in negative!")
        }
        this.name = name;
        this.#salary = salary;
    }
        get salary() {
            return `You're not allowed to see the salary`
        }
        set salary(value){
            this.#salary = value;
        }
    }


let emp = new Employee("Satvik", 1000000);
console.log(emp.salary);
emp.salary = 100000000000000;