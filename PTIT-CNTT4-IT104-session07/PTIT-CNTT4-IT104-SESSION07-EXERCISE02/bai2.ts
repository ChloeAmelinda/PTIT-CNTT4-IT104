class Vehicle{
    protected name: string;
    protected speed : number;
    protected id : number|string;
    constructor(name:string, speed:number,id:number|string){
        this.name = name;
        this.speed  = speed;
        this.id = id
    }
    slowDown():void{
        this.speed-=10
        console.log(` Speed : ${this.speed}`)
    }
    speedUp():void{
       this.speed +=10
       console.log(` Speed : ${this.speed}`)
    }
    showSpeed():void{
       console.log(` Speed : ${this.speed}`)
    }
}
class Bicycle extends Vehicle{
    private gear : number;
    constructor(name:string, speed:number,id:number|string,gear:number){
        super(name,speed,id)
        this.gear = gear
    }
    showInfo():void{
        console.log(`is: ${this.id}, name: ${this.name}, speed : ${this.speed}km/h,gear: ${this.gear} `)
    }
}
let b1 = new Bicycle("Dior" , 12 , 1,6)
b1.showSpeed()
b1.slowDown()
b1.speedUp()
b1.showInfo()