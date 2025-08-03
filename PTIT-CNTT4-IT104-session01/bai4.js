let n = prompt("Nhập vào số nguyên dương n: ");
if(isNaN(n)) {
    console.log("not a number.");
}
function checkParity(n){
    if (n % 2 === 0) {
        console.log("Số chẵn");
    } else {
        console.log("Số lẻ");
    }
}
