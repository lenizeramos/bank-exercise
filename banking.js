function Account(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance = this.balance + amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
};

// SavingsAccount
function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance);
  this.interestRate = interestRate;
}
Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype);

SavingsAccount.prototype.addInterest = function () {
  this.balance = this.balance + this.balance * this.interestRate;
};

// CheckingAccount
function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);
}

Object.setPrototypeOf(CheckingAccount.prototype, Account.prototype);

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  this.balance = this.balance - amount;
};

/* ******************************** */
const account1 = new Account("1", 5);
//console.log(account1);
account1.deposit(10);
account1.withdraw(3);
console.log(account1);

const savings1 = new SavingsAccount("2", 10, 0.2);
//console.log(savings1);
savings1.addInterest();
savings1.deposit(3);
console.log(savings1);

const checking1 = new CheckingAccount("3", 3);
//console.log(checking1);
checking1.deposit(6);
checking1.withdrawUsingCheck(2);
console.log(checking1);
