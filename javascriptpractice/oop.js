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
                case "email":
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


const sushantAcc = new BankAccount("Sushant", "11 Oct 1992", "Toronto", "sk@gmail.com", 2000)

 console.log(sushantAcc.withdraw(200));