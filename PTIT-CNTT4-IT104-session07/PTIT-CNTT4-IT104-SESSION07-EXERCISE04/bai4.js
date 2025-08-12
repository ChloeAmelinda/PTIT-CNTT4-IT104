"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`id-${this.id}-name:${this.name}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`name:${this.name} -subject:${this.subject}`);
    }
}
let s1 = new Student("Trang", 1);
s1.displayInfo();
let t1 = new Teacher("Trang ", "Chemistry");
t1.displayInfo();
//# sourceMappingURL=bai4.js.map