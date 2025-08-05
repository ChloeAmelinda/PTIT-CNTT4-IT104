function getOrderSummary(products, bulkDiscount = 0) {
    
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    let details = [];

    for (let i of products) {
        const { name, price, quantity, discount } = i;
        const beforeDiscount = price * quantity;
        totalBeforeDiscount += beforeDiscount;

        const finalPrice = Math.round(price * (1 - discount));
        
        const afterDiscount = finalPrice * quantity;
        totalAfterDiscount += afterDiscount;

        details.push({
            name,
             finalPrice,
             subTotal: afterDiscount

        })
    }
    return {
        totalAfterDiscount,
        totalBeforeDiscount,
        details
    }
}
const products = [
    { name: "A", price: 100, quantity: 2, discount: 0.1 },
    { name: "B", price: 200, quantity: 1, discount: 0.2 },
    { name: "C", price: 300, quantity: 3, discount: 0.15 }
];
const result = getOrderSummary(products, 0.5);
console.log(result);