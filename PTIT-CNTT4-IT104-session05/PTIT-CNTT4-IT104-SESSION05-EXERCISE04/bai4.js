"use strict";

class vehicle {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }
}
let vehicle1 = new vehicle("Changiuoi", 2027, "VNG", 1);
vehicle1.printInfo();
//# sourceMappingURL=bai4.js.map