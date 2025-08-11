//abstract Method :
//Chi trong abstract class , ko co phan than implementation,chỉ khai bao, bat buoc lop con trien khai
//method: trong bat ky class nao,co phan than implementation, ko can neu ko override
//vd 
abstract class CAnimal{
    constructor(public name: string) {}
    abstract makeSound(): void; 
    move(): void {
        console.log(`${this.name} is moving`);
    }


}
class Dog extends CAnimal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log(` gau gau`);
    }
}
const dog = new Dog("Dog");
dog.makeSound(); // gau gau
dog.move(); // Dog is moving