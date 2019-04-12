class DataPrinter{
    private _data:string;

    constructor(d:string){
        this._data=d;
    }

    print():void{
        console.log(`This is data : ${this._data}`);
    }
}

let dp=new DataPrinter("Hello");
dp.print();