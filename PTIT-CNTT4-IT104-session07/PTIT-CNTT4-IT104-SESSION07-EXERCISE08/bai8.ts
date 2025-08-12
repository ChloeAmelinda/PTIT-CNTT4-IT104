abstract class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: string;

  constructor(accountNumber: string, balance: number, status: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
    this.history = [];
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.history.push(`Deposited: ${amount}`);
  }

  abstract withdraw(amount: number): void;

  showHistory(): void {
    console.log(`Transaction history for account ${this.accountNumber}:`);
    this.history.forEach((entry, index) => {
      console.log(`${index + 1}. ${entry}`);
    });
  }
}

class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(accountNumber: string, balance: number, status: string, overdraftLimit: number) {
    super(accountNumber, balance, status);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    if (amount > this.balance + this.overdraftLimit) {
      console.log("Withdrawal denied: exceeds overdraft limit.");
    } else {
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
