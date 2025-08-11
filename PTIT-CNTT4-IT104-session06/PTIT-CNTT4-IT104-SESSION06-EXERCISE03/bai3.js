"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//abstract Method :
//Chi trong abstract class , ko co phan than implementation,chỉ khai bao, bat buoc lop con trien khai
//method: trong bat ky class nao,co phan than implementation, ko can neu ko override
//vd 
class CAnimal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends CAnimal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(` gau gau`);
    }
}
const dog = new Dog("Dog");
dog.makeSound(); // gau gau
dog.move(); // Dog is moving
//# sourceMappingURL=bai3.js.map