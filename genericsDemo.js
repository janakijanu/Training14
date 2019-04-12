var DataPrinter = /** @class */ (function () {
    function DataPrinter(d) {
        this._data = d;
    }
    DataPrinter.prototype.print = function () {
        console.log("This is data : " + this._data);
    };
    return DataPrinter;
}());
var dp = new DataPrinter("Hello");
dp.print();
