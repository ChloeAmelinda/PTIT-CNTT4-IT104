function reverseArr<T>(arg: T[]):T[]{
    return arg.slice().reverse()
}
console.log(reverseArr([1,2,3,4]))
console.log(reverseArr(['a' , 'b' , 'c']))
