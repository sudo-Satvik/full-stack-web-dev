// static methods or static property(variables)

// Static are special keyword which can only be called by class itself, nobody else can call this

class Calculator{
    static add(a, b) {
        return a+b
    }
}

// let miniCalc = new Calculator()          // No need to create an instance

// console.log(miniCalc.add(2,3));          // error

console.log(Calculator.add(2, 3));          // Valid