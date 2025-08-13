function flatten<T>(arr : T[][]):T[]{
    return arr.reduce((i,array) => i.concat(array),[])

}
let arr1 = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(arr1))