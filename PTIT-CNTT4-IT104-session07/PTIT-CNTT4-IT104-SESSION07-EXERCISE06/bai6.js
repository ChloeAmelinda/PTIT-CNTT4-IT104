"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class _Account {
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
class userAcc extends _Account {
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
class adminAcc extends _Account {
    login() {
        console.log("Admin đăng nhập thành công");
        this.islogin = true;
    }
    constructor(id, userName, passWord) {
        super(id, userName, passWord, false, "admin");
    }
    banUser(user) {
        user.status = "Banned";
        console.log("Banned");
    }
}
let user1 = new userAcc(1, "Chang ", "123456", true, "tester", "active");
user1.login();
let admin = new adminAcc(1, "Chang ", "admin");
admin.banUser(user1);
//# sourceMappingURL=bai6.js.map