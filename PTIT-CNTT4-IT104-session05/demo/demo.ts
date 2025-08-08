class Student{
    public fullName: string;
    private age: number;
    protected address: string;
    constructor(fullName: string, age: number, address: string) {
        this.fullName = fullName;
        this.age = age;
        this.address = address;
    }

    getInfo(): string {
        return `xin chao ${this.fullName}, tuoi cua ban la ${this.age}`;

    }
    

}