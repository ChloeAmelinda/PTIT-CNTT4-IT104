interface changeSpeed{
    speedUp(): string;
    slowDown(): string;
    stop(): string;
}
class Vehicle implements changeSpeed {
    private speed:number;
    constructor(speed: number) {
        this.speed = speed;
    }
    slowDown(): string {
        this.speed -= 10;
        return `Xe dang chay voi toc do ${this.speed} km/h`;
    }
    stop(): string {
        this.speed = 0;
        return `Xe da dung lai`;
    }
    speedUp(): string {
        this.speed += 10;
        return `Xe dang chay voi toc do ${this.speed} km/h`;
    }
}
let car = new Vehicle(100);
console.log(car.speedUp());
console.log(car.slowDown());
console.log(car.stop());