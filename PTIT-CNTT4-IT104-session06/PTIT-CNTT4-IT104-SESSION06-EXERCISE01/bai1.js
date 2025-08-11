"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Size of ${this.name} is: ${this.width * this.height}`);
    }
}
let rectangle = new Rectangle("Rectangle1", 5, 10);
rectangle.getSize();
//# sourceMappingURL=bai1.js.map