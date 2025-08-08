"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const studentArr = [];
let student1 = new Student(1, 20, "!@gmail.com");
studentArr.push(student1);
let student2 = new Student(2, 21, "@gmail.com");
studentArr.push(student2);
let student3 = new Student(3, 22, "#gmail.com");
studentArr.push(student3);
function printStudent(student) {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
}
for (let student of studentArr) {
    printStudent(student);
}
//# sourceMappingURL=bai2.js.map