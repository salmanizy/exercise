class BankAccount{
    constructor(balance, withdrawLimit){
        this._balance = balance;
        this._withdrawLimit = withdrawLimit;
    }
    
    get balance(){
        return this._balance;
    }

    get withdrawLimit(){
        return this._withdrawLimit;
    }

    set withdraw(amount){
        if(amount > this._withdrawLimit){
            console.error("Too much!");
        }
        else{   
            this._balance -= amount;
            console.log("Jumlah Penarikan: " + amount);
        }
    }
    
}

let acc1 = new BankAccount(200, 180);

console.log("Saldo: " + acc1.balance);
console.log("Limit Penarikan: " + acc1.withdrawLimit);

acc1.withdraw = 170;
console.log("Sisa Saldo: " + acc1.balance);