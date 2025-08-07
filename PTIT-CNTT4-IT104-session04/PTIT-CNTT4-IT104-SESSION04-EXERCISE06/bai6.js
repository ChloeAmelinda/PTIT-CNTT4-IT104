"use strict";

;
let products = [
    {
        id: "1",
        name: "Laptop",
        price: 1500,
        category: {
            id: "c1",
            name: "Electronics"
        },
        discount: 10
    },
    {
        id: "2",
        name: "Smartphone",
        price: 800,
        category: {
            id: "c1",
            name: "Electronics"
        }
    },
    {
        id: "3",
        name: "Book",
        price: 20,
        category: {
            id: "c2",
            name: "Literature"
        }
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - (product.price * product.discount / 100);
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name} - Giá: ${finalPrice} USD - Danh mục: ${product.category.name}`);
}
products.forEach(printProductInfo);
//# sourceMappingURL=bai6.js.map