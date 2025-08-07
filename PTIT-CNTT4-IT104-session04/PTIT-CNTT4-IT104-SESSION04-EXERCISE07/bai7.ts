function isprime(n: number){
    if(n <=1 )return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
} 
function processInput(input: string | number | boolean) : void{
    if (typeof input === 'string') {
        if(/\d/.test(input)) {

            let change = Number(input);
            console.log(change * change);

        }else if(/[a-zA-Z]/.test(input)){
            let length = input.length;
            console.log(length + "ky tu ");
        }
    } else if (typeof input === 'number') {
        if (isprime(input)) {
            console.log(input + " la so nguyen to");
        } else {
            console.log(input + " khong phai la so nguyen to");
        }

        
    } else if (typeof input === 'boolean') {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
        
    } else {
        console.log('Unknown type');
    }
}
console.log(processInput("123abc"));
console.log(processInput(12345678));
console.log(processInput("123456"));
console.log(processInput(3));
console.log(processInput(true));
console.log(processInput(false));