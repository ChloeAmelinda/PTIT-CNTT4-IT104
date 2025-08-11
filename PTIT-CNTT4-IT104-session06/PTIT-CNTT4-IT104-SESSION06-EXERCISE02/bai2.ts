abstract class Job{
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }
    abstract calculateSalary(): number;

}
class PartimeJob extends Job{
    protected workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return this.workingHour * 30000;
    }

}
class FulltimeJob extends Job{
    protected workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return this.workingHour * 10000000;
    }

}
let partimeJob = new PartimeJob("Part-time", 20);
console.log(`partime-${partimeJob.calculateSalary()}`)
let fulltimeJob = new FulltimeJob("Full-time", 160);
console.log(`fulltime-${fulltimeJob.calculateSalary()}`)