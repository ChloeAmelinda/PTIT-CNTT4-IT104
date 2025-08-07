"use strict";

function calculateOrderTotal(order) {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrderSummary(order) {
    console.log(`Order ID: ${order.id}`);
    console.log(`Customer Name: ${order.customerName}`);
    console.log(`Items:`);
    for (const item of order.items) {
        console.log(`- ${item.product.name} (x${item.quantity}): $${item.product.price * item.quantity}`);
    }
    if (order.note) {
        console.log(`Note: ${order.note}`);
    }
    console.log(`Total: $${calculateOrderTotal(order)}`);
}
let order = {
    id: "ORD12345",
    customerName: "John Doe",
    items: [
        {
            product: {
                id: "P001",
                name: "Laptop",
                price: 1200
            },
            quantity: 1
        },
        {
            product: {
                id: "P002",
                name: "Mouse",
                price: 25
            },
            quantity: 2
        }
    ]
};
printOrderSummary(order);
//# sourceMappingURL=bai8.js.map