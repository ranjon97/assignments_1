

class bankAccount {
    constructor(accountNumbers, accountHolders, balance = 0){
        this.accountNumbers = accountNumbers;
        this.accountHolders = accountHolders;
        this.balance = balance;
        
    }

    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposit balance ${amount}`)
            this.displayBalance()
        }else{
            console.log('Invalid deposit amount')
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount
            console.log(`Withdraw balance ${amount}`)
            this.displayBalance()
        }else{
            console.log('Insufficient balance.')
        }
    }

    displayBalance(){
        console.log(`Balance ${this.balance}`)
    }

 /*    accountNumber(accountNumber){
        this.accountNumber = accountNumber
        console.log(accountNumber)
      }
 */
}

const account1 = new bankAccount(123456789, 'David', 200 )

console.log('Account Number : ' + account1.accountNumbers)
console.log('Account Number : ' + account1.accountHolders)

account1.deposit(500)
account1.withdraw(300)