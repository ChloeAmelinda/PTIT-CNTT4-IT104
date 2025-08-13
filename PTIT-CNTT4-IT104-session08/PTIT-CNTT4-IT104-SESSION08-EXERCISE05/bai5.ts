function findIndex<T>(arr:T[]):T|undefined{
    for ( let i of arr){
        if(typeof i === "number" && i % 2 === 0){
            return i
        }
    }
    return undefined
}
let arr = ["changiuoi" , 10]
console.log(findIndex(arr))