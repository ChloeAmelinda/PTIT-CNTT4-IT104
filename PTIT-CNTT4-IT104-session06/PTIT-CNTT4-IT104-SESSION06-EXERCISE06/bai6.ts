class Student{
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    
}
const allStudents: Student[] = [];

class ClassRoom{
    private student : Student[]=[]

    showStudent(): void {
        console.log(`Danh sach sinh vien trong lop:`);
        allStudents.forEach((student) => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
    addStudent(student: Student): void {
        this.student.push(student);
       
    }
    filterStudentById(id: number): Student[]{
        return this.student.filter(student => student.getId() === id);
    }
    addStudentInClass(student: Student[]): void {

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
allStudents.push(new Student(6, "Lan"))
allStudents.forEach((student) => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});


const classRoom1 = new ClassRoom();

classRoom1.showStudent();


