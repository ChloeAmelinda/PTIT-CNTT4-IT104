abstract class shape{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    abstract getSize(): void;
}
class Rectangle extends shape {
    public width: number;
    public height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): void {
        console.log(`Size of ${this.name} is: ${this.width * this.height}`);
    }
    
}
let rectangle = new Rectangle("Rectangle1", 5, 10);
rectangle.getSize()