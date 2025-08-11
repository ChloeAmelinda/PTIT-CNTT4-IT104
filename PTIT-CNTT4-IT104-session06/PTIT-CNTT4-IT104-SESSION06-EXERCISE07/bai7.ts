class Student {
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

class ClassRoom {
    private student: Student[] = [];

    showStudent(): void {
        console.log(`Danh sach sinh vien trong lop:`);
        if (this.student.length === 0) {
            console.log("Khong co sinh vien trong lop");
        } else {
            this.student.forEach((student) => {
                console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
            });
        }
    }
    addStudent(student: Student): void {
        this.student.push(student);
    }
    filterStudentById(id: number): Student[] {
        return this.student.filter(student => student.getId() === id);
    }
    addStudentInClass(id: number): void {
        const index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            this.student.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
    }
    // Phương thức mới: removeStudent
    removeStudent(id: number): void {
        const index = this.student.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.student.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    // Phương thức mới: editStudent
    editStudent(id: number, newName: string): void {
        const studentToEdit = this.student.find(s => s.getId() === id);
        if (studentToEdit) {
            studentToEdit['name'] = newName; // Ghi đè thông tin (tạm thời chỉ chỉnh name, vì id là private và không nên thay đổi)
        }
    }
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Cường"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));

// In danh sách allStudents ban đầu (thay cho allStudents.showStudent())
console.log("Danh sach tat ca sinh vien ban dau:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});

const classRoom1 = new ClassRoom();
const classRoom2 = new ClassRoom();

// Thêm 3 học sinh vào classRoom1
classRoom1.addStudentInClass(1); // An
classRoom1.addStudentInClass(2); // Bình
classRoom1.addStudentInClass(3); // Cường

// Thêm 3 học sinh vào classRoom2
classRoom2.addStudentInClass(4); // Dũng
classRoom2.addStudentInClass(5); // Hà
classRoom2.addStudentInClass(6); // Lan

// Kiểm tra ban đầu
console.log("\nClassRoom 1 ban dau:");
classRoom1.showStudent();
console.log("\nClassRoom 2 ban dau:");
classRoom2.showStudent();

// Sử dụng removeStudent: Xóa học sinh ID 2 khỏi classRoom1 và thêm lại vào allStudents
classRoom1.removeStudent(2);
console.log("\nSau khi xoa hoc sinh ID 2 khoi ClassRoom 1:");
classRoom1.showStudent();
console.log("\nallStudents sau khi xoa:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});

// Sử dụng editStudent: Chỉnh sửa tên học sinh ID 1 trong classRoom1 thành "An Moi"
classRoom1.editStudent(1, "An Moi");
console.log("\nSau khi chinh sua ten hoc sinh ID 1 trong ClassRoom 1:");
classRoom1.showStudent();

// Sử dụng tương tự cho classRoom2 (ví dụ: xóa ID 4 khỏi classRoom2)
classRoom2.removeStudent(4);
console.log("\nSau khi xoa hoc sinh ID 4 khoi ClassRoom 2:");
classRoom2.showStudent();
console.log("\nallStudents sau khi xoa them:");
allStudents.forEach(student => {
    console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
});

// Chỉnh sửa tên học sinh ID 5 trong classRoom2 thành "Ha Moi"
classRoom2.editStudent(5, "Ha Moi");
console.log("\nSau khi chinh sua ten hoc sinh ID 5 trong ClassRoom 2:");
classRoom2.showStudent();