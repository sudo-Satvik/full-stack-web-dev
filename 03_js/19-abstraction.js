class CoffeMachine {
    start() {
        // call DB (that I don't need to knw)
        // filter value (that I don't need to knw)
        return `Starting the machine...`
    }
    brewCoffee(){
        // complex calculations (that I don't need to knw)
        return `Brewing coffee`
    }
    pressStartButton(){
        // Without being knowing all those about shits, which is complex mechanism, we can run this directly
        let msg1 = this.start()
        let msg2 = this.brewCoffee()
        return `${msg1} \n${msg2}`
    }
}

let myMachine = new CoffeMachine()

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton());