"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
function flatten(arr) {
    return arr.reduce((i, array) => i.concat(array), []);
}
let arr1 = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(arr1));
//# sourceMappingURL=bai7.js.map