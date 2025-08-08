"use strict";

class Rectangle {
    _width;
    _height;
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    //dien tich 
    getArea() {
        return this._width * this._height;
    }
    //chu vi
    getPerimeter() {
        return 2 * (this._width + this._height);
    }
    //dat thuoc tinh
    setWidth(width) {
        this._width = width;
    }
    setHeight(height) {
        this._height = height;
    }
    //in ra thong tin
    printInfo() {
        console.log(`Rectangle: Width = ${this._width}, Height = ${this._height}, Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`);
    }
}
const rectangle1 = new Rectangle(5, 10);
rectangle1.printInfo();
//# sourceMappingURL=bai5.js.map