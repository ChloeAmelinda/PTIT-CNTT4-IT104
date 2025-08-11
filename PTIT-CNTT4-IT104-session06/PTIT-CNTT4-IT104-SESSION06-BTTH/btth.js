"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    category;
    constructor(name, age, category) {
        this.name = name;
        this.age = age;
        this.category = category;
    }
    Sound() {
        return ``;
    }
    getDetails() {
        return ``;
    }
    move() {
        return ``;
    }
    feed() {
        return ``;
    }
}
class Mammal extends Animal {
    fullColor;
    constructor(name, age, fullColor) {
        super(name, age, fullColor);
        this.fullColor = fullColor;
        this.age = age;
        this.name = name;
    }
    move() {
        return `Phuomg thuc di chuyen cua dong vat ${this.name} la di bo`;
    }
    getFullColor() {
        return `Mau long cua dong vat ${this.name} la ${this.fullColor}`;
    }
}
class Bird extends Animal {
    wingSpan;
    constructor(name, age, wingSpan) {
        super(name, age, wingSpan);
        this.wingSpan = wingSpan;
        this.age = age;
        this.name = name;
    }
    move() {
        return `phuong thuc di chuyen cua dong vat ${this.name} la bay`;
    }
    getWingSpan() {
        return `Canh cua dong vat ${this.name} la ${this.wingSpan} met`;
    }
}
class RepTitle extends Animal {
    scaleColor;
    constructor(name, age, scaleColor) {
        super(name, age, scaleColor);
        this.scaleColor = scaleColor;
        this.age = age;
        this.name = name;
    }
    move() {
        return `phuong thuc di chuyen cua dong vat ${this.name} la boi`;
    }
    getFullColor() {
        return `Mau long cua dong vat ${this.name} la ${this.scaleColor}`;
    }
}
const animal = [
    new Mammal("Lion", 5, "Golden"),
    new Bird("Eagle", 3, 5),
    new RepTitle("Snake", 2, true)
];
animal.forEach(element => {
    console.log(`Ten: ${element.name}, Tuoi: ${element.age}, Phan loai: ${element.category}`);
    console.log(element.move());
    console.log(element.getDetails());
});
const newAnimal = new Mammal("Elephant", 10, "Gray");
console.log(newAnimal.getFullColor());
//# sourceMappingURL=btth.js.map