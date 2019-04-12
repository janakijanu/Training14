"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getValue = function () {
        return this.id;
    };
    Student.prototype.putValue = function (n) {
        this.id = n;
    };
    Student.prototype.toString = function () {
        return "Roll Number : " + this.id + "";
    };
    return Student;
}());
exports.Student = Student;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getValue = function () {
        return this.id;
    };
    Employee.prototype.putValue = function (n) {
        this.id = n;
    };
    Employee.prototype.toString = function () {
        return "Employee ID : " + this.id + "";
    };
    return Employee;
}());
exports.Employee = Employee;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.getValue = function () {
        return this.id;
    };
    BankAccount.prototype.putValue = function (n) {
        this.id = n;
    };
    BankAccount.prototype.toString = function () {
        return "Bank Account Number : " + this.id + "";
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
