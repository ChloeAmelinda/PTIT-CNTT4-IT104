interface person{
    name: string;
    age: number;
    
}
interface employee{
    employeeId: number;
    department: string;
}
type StaffMember = person & employee;
function printStaffInfo(staff: StaffMember): void{
    console.log(`Name: ${staff.name} ( ${staff.age}), Employee ID: ${staff.employeeId}, Department: ${staff.department}`);
}
let staff: StaffMember = {
    name: "Alice",
    age: 28,
    employeeId: 12345,
    department: "Engineering"
};
printStaffInfo(staff);