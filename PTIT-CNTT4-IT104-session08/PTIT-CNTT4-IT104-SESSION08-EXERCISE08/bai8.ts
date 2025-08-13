function partialUpdate<T>(obj:T,update:Partial<T>):T{
    return Object.assign({},obj, update)
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 }))