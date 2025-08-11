"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
const allStudents = [];
class ClassRoom {
    student = [];
    showStudent() {
        console.log(`Danh sach sinh vien trong lop:`);
        allStudents.forEach((student) => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.student.push(student);
    }
    filterStudentById(id) {
        return this.student.filter(student => student.getId() === id);
    }
    addStudentInClass(student) {
        const index = allStudents.findIndex(s => s.getId() === student[0].getId());
        if (index !== -1) {
            allStudents.push(...student);
            allStudents.splice(index, 1);
        }
    }
}
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Cường"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));
allStudents.forEach((student) => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});
const classRoom1 = new ClassRoom();
classRoom1.showStudent();
//# sourceMappingURL=bai6.js.map