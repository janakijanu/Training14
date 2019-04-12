import {identifiable,Student,Employee,BankAccount} from './identity';

class DataPrinters<T extends identifiable>{
    private _data:T;

    constructor(d:T){
        this._data=d;
    }

    print():void{
        console.log(`This is data : ${this._data}`);
    }
}

// let dps=new DataPrinters<string>("Hello");
// dps.print();

// let dps1=new DataPrinters<number>(20);
// dps1.print();

// let dps2=new DataPrinters<Date>(new Date());
// dps2.print();

// let dps4=new DataPrinters<Array<number>>([10,20,30]);
// dps4.print();

let stud=new Student();
stud.id=100;
let dps5=new DataPrinters<identifiable>(stud);
dps5.print();

let emp=new Employee();
emp.id=200;
let dps6=new DataPrinters<identifiable>(emp);
dps6.print();