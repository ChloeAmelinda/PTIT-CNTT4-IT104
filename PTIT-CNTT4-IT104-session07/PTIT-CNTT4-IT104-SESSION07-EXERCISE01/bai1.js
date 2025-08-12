"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.company = company;
        this.name = name;
        this.phone = phone;
    }
    printInfo() {
        console.log(`name: ${this.name}, company : ${this.company} , phone:${this.phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`name: ${this.name}, company : ${this.company} , phone:${this.phone} , teamSize: ${this.teamSize}`);
    }
}
let employee = new Manager(12, "Chang", "VNG", 12345678);
employee.printInfo();
//# sourceMappingURL=bai1.js.map