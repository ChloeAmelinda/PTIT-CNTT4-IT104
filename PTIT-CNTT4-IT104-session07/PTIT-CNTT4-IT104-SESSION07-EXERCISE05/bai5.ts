abstract class Account{
    id:number
    userName:string
    private password:string
    islogin:boolean
    role:string
    constructor(id:number , userName:string,passWord:string , isLogin:boolean, role: string){
        this.id = id
        this.userName = userName
        this.password = passWord
        this.islogin = isLogin
        this.role = role
    }
    abstract login():void;
    logOunt():void{
        if(this.islogin === true){
            console.log("Đăng xuất thành công")
            this.islogin = false
        }else{
            console.log("Đăng xuất ko thành công")
        }
    }
}

 class userAcc extends Account{
    status:string ;
    constructor(id:number , userName:string,passWord:string , isLogin:boolean, role: string,status:string){
        super(id,userName,passWord,isLogin,role)
        this.status = status
    }
    login(): void {
        if(this.status ==="active"){
            console.log("cho phép đăng nhập")
            this.islogin = true
        }else{
            console.log("Tài khoản đã bị khóa")
        }
    }
}
let user1 = new userAcc(1, "Chang " , "123456", true,"tester","active")
user1.login()
user1.logOunt()

