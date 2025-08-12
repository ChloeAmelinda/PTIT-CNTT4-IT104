abstract class Animal{
    public name: string
    constructor(name :string){
        this.name = name
    }
    abstract makeNoise():void;
    printName():void{
        console.log(this.name)
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    makeNoise(): void {
        console.log("Meow")
    }
    
    
}
 class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    makeNoise(): void {
        console.log("Gau gau")
    }
    
    
}
let dog = new Dog("Broken Nguyen")
dog.printName()
dog.makeNoise()
let cat = new Cat("K")
cat.printName()
cat.makeNoise()



