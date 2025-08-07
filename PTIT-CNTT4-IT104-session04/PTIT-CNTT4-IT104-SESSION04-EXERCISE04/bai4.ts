function handleUnionType(value: string | number): void {
    if (typeof value === 'string') {
        console.log(`${value.length}`);
    } else if (typeof value === 'number') {
        if (value % 2 === 0) {
            console.log(`${value} la so chan `);
        } else {
            console.log(`${value} la so le`);
    } 
}
}
console.log( handleUnionType("Hello World"));
console.log( handleUnionType(1234));
console.log( handleUnionType(1234.56));