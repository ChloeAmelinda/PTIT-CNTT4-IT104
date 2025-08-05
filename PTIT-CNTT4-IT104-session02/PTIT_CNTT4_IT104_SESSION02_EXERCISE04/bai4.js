function checkElement(arr,index){
    if(arr.indexOf(arr[index]) !== -1) {
        return true;
    }
    return false;
}
console.log(checkElement([1, 2, 3, 4, 5], 2)); 
console.log(checkElement([1, 2, 3, 4, 5], 5)); 
console.log(checkElement([1, 2, 3, 4, 5], 6)); 