const a = 5;
const arr = [1, 2, 3];

// Thử thay đổi giá trị của biến a
try {
    a = 10; // Lỗi: Assignment to constant variable
} catch (error) {
    console.log("Lỗi khi thay đổi a:", error.message);
}

// Thêm một phần tử mới vào mảng arr
arr.push(4);

// In kết quả
console.log("Giá trị của a:", a);
console.log("Mảng arr sau khi thêm phần tử:", arr);