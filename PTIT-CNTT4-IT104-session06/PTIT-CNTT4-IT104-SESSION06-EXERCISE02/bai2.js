"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
}
class PartimeJob extends Job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 30000;
    }
}
class FulltimeJob extends Job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return this.workingHour * 10000000;
    }
}
let partimeJob = new PartimeJob("Part-time", 20);
console.log(`partime-${partimeJob.calculateSalary()}`);
let fulltimeJob = new FulltimeJob("Full-time", 160);
console.log(`fulltime-${fulltimeJob.calculateSalary()}`);
//# sourceMappingURL=bai2.js.map