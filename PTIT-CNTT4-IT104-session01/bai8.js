
function insert(arr1 , arr2 , index){
    arr1.splice(index, 0, ...arr2);
    return arr1;
}

console.log(insert([1, 2, 3], [4, 5], 3)); // [1, 4, 5, 2, 3]
console.log(insert(['a','b' , 'e' ,'f'], ['c','d'], 2))