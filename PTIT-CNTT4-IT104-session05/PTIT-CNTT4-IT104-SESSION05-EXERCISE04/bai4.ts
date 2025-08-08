class vehicle{
    public name: string;
    public year: number;
    public company: string;
    readonly id:number;
    constructor(name: string, year: number, company: string,id:number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo(): void {
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}, ID: ${this.id}`);
    }


}
let vehicle1 = new vehicle("Changiuoi", 2027, "VNG", 1);
vehicle1.printInfo();