"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.status = status;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`);
    }
    showHistory() {
        console.log(`Transaction history for account ${this.accountNumber}:`);
        this.history.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry}`);
        });
    }
}
class CheckingAccount extends Account {
    overdraftLimit;
    constructor(accountNumber, balance, status, overdraftLimit) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Withdrawal denied: exceeds overdraft limit.");
        }
        else {
            this.balance -= amount;
            this.history.push(`Withdrew: ${amount}`);
        }
    }
}
const myChecking = new CheckingAccount("CA001", 1000, "active", 500);
myChecking.deposit(300);
myChecking.withdraw(1100);
myChecking.withdraw(800);
myChecking.showHistory();
//# sourceMappingURL=bai8.js.map