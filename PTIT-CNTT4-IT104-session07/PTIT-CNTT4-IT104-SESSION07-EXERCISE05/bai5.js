"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    islogin;
    role;
    constructor(id, userName, passWord, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = passWord;
        this.islogin = isLogin;
        this.role = role;
    }
    logOunt() {
        if (this.islogin === true) {
            console.log("Đăng xuất thành công");
            this.islogin = false;
        }
        else {
            console.log("Đăng xuất ko thành công");
        }
    }
}
class userAcc extends Account {
    status;
    constructor(id, userName, passWord, isLogin, role, status) {
        super(id, userName, passWord, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            console.log("cho phép đăng nhập");
            this.islogin = true;
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
let user1 = new userAcc(1, "Chang ", "123456", true, "tester", "active");
user1.login();
user1.logOunt();
//# sourceMappingURL=bai5.js.map