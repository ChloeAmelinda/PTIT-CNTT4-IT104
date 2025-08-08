"use strict";

class vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
function printVehicle(vehicle) {
    console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Company: ${vehicle.company}`);
}
const vehicle1 = new vehicle("Model S", 2020, "Tesla");
printVehicle(vehicle1);
//# sourceMappingURL=bai1.js.map