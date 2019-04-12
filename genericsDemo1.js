"use strict";
exports.__esModule = true;
var identity_1 = require("./identity");
var DataPrinters = /** @class */ (function () {
    function DataPrinters(d) {
        this._data = d;
    }
    DataPrinters.prototype.print = function () {
        console.log("This is data : " + this._data);
    };
    return DataPrinters;
}());
var dps = new DataPrinters("Hello");
dps.print();
var dps1 = new DataPrinters(20);
dps1.print();
var dps2 = new DataPrinters(new Date());
dps2.print();
var dps4 = new DataPrinters([10, 20, 30]);
dps4.print();
var stud = new identity_1.Student();
stud.id = 100;
var dps5 = new DataPrinters(stud);
dps5.print();
var emp = new identity_1.Employee();
emp.id = 200;
var dps6 = new DataPrinters(emp);
dps6.print();
