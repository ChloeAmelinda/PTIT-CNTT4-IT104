"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
function partialUpdate(obj, update) {
    return Object.assign({}, obj, update);
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 }));
//# sourceMappingURL=bai8.js.map