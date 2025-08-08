"use strict";

class Employee {
    name;
    company;
    _phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this._phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this._phone}`);
    }
}
const employee1 = new Employee("Changiuoi", "VNG", 1234567890);
employee1.printInfo();
//# sourceMappingURL=bai3.js.map