"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
function findIndex(arr) {
    for (let i of arr) {
        if (typeof i === "number" && i % 2 === 0) {
            return i;
        }
    }
    return undefined;
}
let arr = ["changiuoi", 10];
console.log(findIndex(arr));
//# sourceMappingURL=bai5.js.map