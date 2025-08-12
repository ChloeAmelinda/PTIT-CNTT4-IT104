class Employee{
    name:string;
    company:string;
    phone:number;
    constructor(name:string, company:string,phone:number){
        this.company = company;
        this.name = name;
        this.phone = phone
    }
    printInfo():void{
        console.log(`name: ${this.name}, company : ${this.company} , phone:${this.phone}`)
    }


}
class Manager extends Employee{
    teamSize:number;
    constructor(teamSize : number,name:string, company:string,phone:number){
        super(name,company,phone);
        this.teamSize = teamSize
    }
    printInfo(): void {
         console.log(`name: ${this.name}, company : ${this.company} , phone:${this.phone} , teamSize: ${this.teamSize}`)
    }

}
let employee = new Manager (12,"Chang" , "VNG" , 12345678)
employee.printInfo()


