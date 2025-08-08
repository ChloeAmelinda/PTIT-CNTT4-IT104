class Student{
    public id: number;
    public age: number;
    public email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const studentArr = []
let student1 = new Student(1,20 ,"!@gmail.com");
studentArr.push(student1);
let student2 = new Student(2,21 ,"@gmail.com");
studentArr.push(student2);
let student3 = new Student(3,22 ,"#gmail.com");
studentArr.push(student3);
function printStudent(student: Student): void {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
for (let student of studentArr) {
    printStudent(student);
}