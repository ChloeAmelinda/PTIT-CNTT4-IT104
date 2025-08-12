"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 10;
        console.log(` Speed : ${this.speed}`);
    }
    speedUp() {
        this.speed += 10;
        console.log(` Speed : ${this.speed}`);
    }
    showSpeed() {
        console.log(` Speed : ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`is: ${this.id}, name: ${this.name}, speed : ${this.speed}km/h,gear: ${this.gear} `);
    }
}
let b1 = new Bicycle("Dior", 12, 1, 6);
b1.showSpeed();
b1.slowDown();
b1.speedUp();
b1.showInfo();
//# sourceMappingURL=bai2.js.map