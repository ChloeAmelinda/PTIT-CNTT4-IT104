"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    accountNumber;
    balance;
    history;
    status;
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Deposited: ${amount}`);
    }
    withdraw(amount) {
        this.balance -= amount;
        this.history.push(`Withdrew: ${amount}`);
    }
    showHistory() {
        console.log(`Transaction history for account ${this.accountNumber}:`);
        this.history.forEach((entry, index) => {
            console.log(`${index + 1}. ${entry}`);
        });
    }
}
class SavingAccount extends Account {
    interestRate;
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal denied: insufficient funds.");
        }
        else {
            this.balance -= amount;
            this.history.push(`Withdrew: ${amount}`);
        }
    }
}
// ✅ Create instance and test
const mySavings = new SavingAccount("1", 12000, [], "active", 0.05);
mySavings.deposit(5000);
mySavings.withdraw(2000);
mySavings.withdraw(15000); // Should be denied
mySavings.showHistory();
//# sourceMappingURL=bai7.js.map