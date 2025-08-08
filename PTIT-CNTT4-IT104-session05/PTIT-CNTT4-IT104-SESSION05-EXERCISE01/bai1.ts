class vehicle{
    public name: string;
    public year: number;
    public company: string;
    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
function printVehicle(vehicle: vehicle): void {
    console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Company: ${vehicle.company}`);
}
const vehicle1 = new vehicle("Model S", 2020, "Tesla");

printVehicle(vehicle1);