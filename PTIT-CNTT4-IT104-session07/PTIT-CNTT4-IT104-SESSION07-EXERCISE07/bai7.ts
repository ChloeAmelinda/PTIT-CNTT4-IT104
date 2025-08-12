abstract class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string, balance: number, history: string[], status: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.history = history;
    this.status = status;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.history.push(`Deposited: ${amount}`);
  }

  withdraw(amount: number): void {
    this.balance -= amount;
    this.history.push(`Withdrew: ${amount}`);
  }

  showHistory(): void {
    console.log(`Transaction history for account ${this.accountNumber}:`);
    this.history.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry}`);
    });
  }
}

class SavingAccount extends Account {
  interestRate: number;

  constructor(accountNumber: string, balance: number, history: string[], status: string, interestRate: number) {
    super(accountNumber, balance, history, status);
    this.interestRate = interestRate;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Withdrawal denied: insufficient funds.");
    } else {
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
