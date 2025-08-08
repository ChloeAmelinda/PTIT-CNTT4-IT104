class Rectangle{
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }
    //dien tich 
    public getArea(): number {
        return this._width * this._height;
    }
    //chu vi
    public getPerimeter(): number {
        return 2 * (this._width + this._height);
    }
    //dat thuoc tinh
    public setWidth(width: number): void {
        this._width = width;
    }
    public setHeight(height: number): void {
        this._height = height;
    }
    
    //in ra thong tin
    public printInfo(): void {
        console.log(`Rectangle: Width = ${this._width}, Height = ${this._height}, Area = ${this.getArea()}, Perimeter = ${this.getPerimeter()}`);
    }
}
const rectangle1 = new Rectangle(5, 10);
rectangle1.printInfo();
