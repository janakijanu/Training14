export interface identifiable{
    id:number;
    getValue():number;
    putValue(n:number):void;
    toString():string;
}

export class Student implements identifiable{
    id:number;
    getValue():number{
        return this.id;
    }
    putValue(n:number):void{
        this.id=n;
    }
    toString(){
        return "Roll Number : "+this.id+""
    }
}

export class Employee implements identifiable{
    id:number;
    getValue():number{
        return this.id;
    }
    putValue(n:number):void{
        this.id=n;
    }
    toString(){
        return "Employee ID : "+this.id+""
    }
}

export class BankAccount implements identifiable{
    id:number;
    getValue():number{
        return this.id;
    }
    putValue(n:number):void{
        this.id=n;
    }
    toString(){
        return "Bank Account Number : "+this.id+""
    }
}

