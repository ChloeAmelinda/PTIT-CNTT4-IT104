"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    slowDown() {
        this.speed -= 10;
        return `Xe dang chay voi toc do ${this.speed} km/h`;
    }
    stop() {
        this.speed = 0;
        return `Xe da dung lai`;
    }
    speedUp() {
        this.speed += 10;
        return `Xe dang chay voi toc do ${this.speed} km/h`;
    }
}
let car = new Vehicle(100);
console.log(car.speedUp());
console.log(car.slowDown());
console.log(car.stop());
//# sourceMappingURL=bai5.js.map