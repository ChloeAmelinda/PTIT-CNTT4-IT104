"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gau gau");
    }
}
let dog = new Dog("Broken Nguyen");
dog.printName();
dog.makeNoise();
let cat = new Cat("K");
cat.printName();
cat.makeNoise();
//# sourceMappingURL=bai3.js.map