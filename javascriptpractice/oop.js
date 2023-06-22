class BankAccount{
    constructor(name, DOB, address, email, balance){
        this.name = name;
        this.DOB = DOB;
        this.address = address;
        this.email = email;
        this.balance = balance;
    }
    get(detail){
        switch (detail){
            case "name":
                return this.name;
            break;
            case "DOB":
                return this.DOB;
                break;
            case "address":
                return this.name;
            break;
            case "email":
                return this.DOB;
                break;
                case "balance":
                    return this.balance;
                    break;
                default:
                    return `Invalid option. Please select among the followiing: name, DOB, address, email and balance`
        }
    }
    deposit(amount){
        this.balance =  this.balance + amount;
        return `Your new balance is CAD ${this.balance}`;
    }
    withdraw(amount){
        if(this.balance - amount > 0){
            this.balance =  this.balance - amount;
            return `Your new balance is CAD ${this.balance}`;
        }
        else{
            return `Insufficient balance: CAD ${this.balance}`
        }
        
    }
}

class Savings extends BankAccount {
    constructor(name, DOB, address, email, balance, active, interest, withdrawalLimit ){
        super(name, DOB, address, email, balance);
        this.active = active;
        this.interest = interest;
        this.withdrawalLimit = withdrawalLimit;
    } isActive(){
        if(this.active){
            return 'This account is active'
        }
    }

}



const sushantAcc = new Savings("Sushant", "09 Oct 1778", "Toronto", "s.q@gmail.com", 5000, true, 0.5, 2000);

