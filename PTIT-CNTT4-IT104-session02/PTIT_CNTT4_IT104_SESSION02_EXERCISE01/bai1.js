function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        if(arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sum([1, 2, 3, 4, 5, 6])); // Output: 12