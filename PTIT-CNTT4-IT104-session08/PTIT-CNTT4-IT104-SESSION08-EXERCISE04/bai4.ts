function merge<T,U>(arr1:T,arr2:U):T&U{
    return Object.assign({},arr1,arr2)
}
let obj1 = {
    name:"Changiuoi"
}
let obj2 = {
    company:"VNG"
}
console.log(merge(obj1,obj2))