const arr = [[1, 2, 3], [4, 5], [6, 7, 8]]
function sumArray(arr) {
    
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr[i].length; j++) {
            // Kiểm tra nếu phần tử là số
            if(typeof arr[i][j] === 'number' && !isNaN(arr[i][j])) {
                
            sum += arr[i][j];
               
            }
        }
        result.push(sum);
    }
    return result
}
const total = sumArray(arr);
console.log(`${total}`);
