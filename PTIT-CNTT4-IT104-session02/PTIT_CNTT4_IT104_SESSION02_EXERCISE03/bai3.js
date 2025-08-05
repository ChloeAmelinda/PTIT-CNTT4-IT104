const typeConsole = (type = "log")=>{
    return `day la type : ${type}`;
}
console.log(typeConsole("log")); // Output: day la type : log
console.log(typeConsole("error")); // Output: day la type : error
console.log(typeConsole("warn")); // Output: day la type : warn
console.log(typeConsole()); // Output: day la type : log
