class BankAccount {
    #balance = 0
    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }
    getBalance() {
        return `$${this.#balance}`
    }
}

let sbiAccount = new BankAccount()

console.log(sbiAccount.getBalance()); 

sbiAccount.deposit(1200)
console.log(sbiAccount.getBalance());

sbiAccount.withdraw(800)
console.log(sbiAccount.getBalance());