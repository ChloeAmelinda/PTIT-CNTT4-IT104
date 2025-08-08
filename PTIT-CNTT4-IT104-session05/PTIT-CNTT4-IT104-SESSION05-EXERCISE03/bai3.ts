class Employee{
    public name: string;
    protected company: string;
    private _phone:number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this._phone = phone;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this._phone}`);
    }
}
const employee1 = new Employee("Changiuoi", "VNG", 1234567890);
employee1.printInfo();