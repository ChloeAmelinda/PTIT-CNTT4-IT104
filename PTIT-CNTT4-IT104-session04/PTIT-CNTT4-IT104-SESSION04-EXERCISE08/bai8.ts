interface Product{
    readonly id: string;
    name: string;
    price: number;
}
interface OderItem{
    product: Product;
    quantity: number;
}
interface Order{
    id: string;
    customerName: string;
    items: OderItem[];
    note?: string;// Optional property
}
function calculateOrderTotal(order: Order): number{
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrderSummary(order: Order): void {
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
let order: Order = {
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
}
printOrderSummary(order);