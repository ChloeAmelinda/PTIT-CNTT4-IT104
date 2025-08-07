"use strict";

function calculateInvoiceTotal(invoice) {
    let total = 0;
    for (const order of invoice.order) {
        for (const item of order.items) {
            total += item.product.price * item.quantity;
        }
    }
    return total;
}
function getUnpaidOrders(invoice) {
    return invoice.order.filter(order => !order.isPaid);
}
function printInvoice(invoice) {
    console.log(`Hoa don ID: ${invoice.invoiceId} - Ngay tao: ${invoice.createAt.toLocaleDateString()}`);
    console.log(`----------------------------------`);
    for (const order of invoice.order) {
        console.log(`don hang ${order.id} - Khach hang: ${order.customerName}`);
        console.log(`san pham:`);
        for (const item of order.items) {
            console.log(`- ${item.product.name} (x${item.quantity}): $${item.product.price * item.quantity}`);
            // if (item.note) {
            //     console.log(`  Ghi chu: ${item.note}`);
            // }
        }
        console.log(`Tong don hang: $${calculateInvoiceTotal({ invoiceId: invoice.invoiceId, order: [order], createAt: invoice.createAt })}`);
        console.log(`trang thai thanh toan: ${order.isPaid ? 'Da thanh toan' : 'Chua thanh toan'}`);
    }
    console.log(`Tong hoa don: $${calculateInvoiceTotal(invoice)}`);
}
let invoice = {
    invoiceId: "VN12345",
    order: [
        {
            id: "001",
            customerName: "Changiuoi",
            items: [
                {
                    product: {
                        id: "001",
                        name: "Clothing",
                        price: 1000
                    },
                    quantity: 1,
                    note: "Urgent delivery"
                },
                {
                    product: {
                        id: "002",
                        name: "Cake",
                        price: 20
                    },
                    quantity: 2
                }
            ],
            deliveryAddress: "Hanoi, Vietnam",
            isPaid: false
        },
        {
            id: "002",
            customerName: "Chloe",
            items: [
                {
                    product: {
                        id: "003",
                        name: "book",
                        price: 50
                    },
                    quantity: 1
                }
            ],
            deliveryAddress: "Hanoi, Vietnam",
            isPaid: true
        }
    ],
    createAt: new Date()
};
printInvoice(invoice);
//# sourceMappingURL=bai9.js.map