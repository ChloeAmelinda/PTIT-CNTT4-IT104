abstract class Person{
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract displayInfo():void;
}
class Student extends Person{
    id : number
    constructor(name:string, id :number){
        super(name)
        this.id =id
    }
    displayInfo(): void {
        console.log(`id-${this.id}-name:${this.name}`)
    }
}
class Teacher extends Person{
    subject:string
    constructor(name:string , subject :string){
        super(name)
        this.subject = subject
    }
    displayInfo(): void {
        console.log(`name:${this.name} -subject:${this.subject}`)
    }
}
let s1 = new Student("Trang" ,1)
s1.displayInfo()
let t1 = new Teacher("Trang ", "Chemistry")
t1.displayInfo()
