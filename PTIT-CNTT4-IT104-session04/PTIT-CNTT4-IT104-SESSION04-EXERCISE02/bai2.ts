let n : number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let sum = n.reduce((sum, value) => sum + value, 0);
let average = sum / n.length;
console.log(average.toFixed(2));