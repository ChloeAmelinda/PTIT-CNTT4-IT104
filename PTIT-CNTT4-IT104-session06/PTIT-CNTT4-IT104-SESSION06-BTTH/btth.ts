interface IAnimal {
    name: string;
    age: number;
    category: string|number|boolean;

    Sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;


}

abstract class Animal implements IAnimal {
    name: string;
    age: number;
    category: string|number|boolean;

    constructor(name: string, age: number, category: string|number|boolean) {
        this.name = name;
        this.age = age;
        this.category = category;
    }

    Sound(): string{
        return ``;
    }
    getDetails(): string{
        return ``
    }
     move(): string{
        return ``;
    }
     feed(): string{
        return ``;
    }
}
class Mammal extends Animal {
    private fullColor: string;
    constructor(name: string, age: number,  fullColor: string) {
        super(name, age,fullColor);
        this.fullColor = fullColor;
        this.age = age;
        this.name = name;
    }
    move(): string {
        return `Phuomg thuc di chuyen cua dong vat ${this.name} la di bo`;
    } 
    getFullColor(): string {
        return `Mau long cua dong vat ${this.name} la ${this.fullColor}`;
    }   
}
class Bird extends Animal {
    private wingSpan: number;
    constructor(name: string, age: number, wingSpan: number) {
        super(name, age, wingSpan);
        this.wingSpan = wingSpan;
        this.age = age;
        this.name = name;
    }
    move(): string {
        return `phuong thuc di chuyen cua dong vat ${this.name} la bay`;
    }
    getWingSpan(): string {
        return `Canh cua dong vat ${this.name} la ${this.wingSpan} met`;
    }
    
}
class RepTitle extends Animal {
    private scaleColor: boolean;
    constructor(name: string, age: number, scaleColor: boolean) {
        super(name, age, scaleColor);
        this.scaleColor = scaleColor;
        this.age = age;
        this.name = name;
    }
    move(): string {
        return `phuong thuc di chuyen cua dong vat ${this.name} la boi`;
    }
    getFullColor(): string {
        return `Mau long cua dong vat ${this.name} la ${this.scaleColor}`;
    }
    
}
const animal:Animal[] =[
    new Mammal("Lion", 5, "Golden"),
    new Bird("Eagle", 3, 5),
    new RepTitle("Snake", 2, true)
]

animal.forEach(element => {
    console.log(`Ten: ${element.name}, Tuoi: ${element.age}, Phan loai: ${element.category}`);
    console.log(element.move());
    console.log(element.getDetails());
   
});
const newAnimal = new Mammal("Elephant", 10, "Gray");
console.log(newAnimal.getFullColor());