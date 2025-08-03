function insert( arr1 , arr2){
    arr1.push(...arr2);
    arr1.sort((a, b) => a - b);
    return arr1;
}
console.log(insert([12,3,4], [66,8])); 