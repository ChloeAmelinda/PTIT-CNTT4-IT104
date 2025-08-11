"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks;
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    // Getter methods
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log(`Danh sach sach trong thu vien:`);
        if (this.books.length === 0) {
            console.log("Khong co sach trong thu vien");
        }
        else {
            this.books.forEach((book) => {
                console.log(`ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Stock: ${book.getStock()}, Status: ${book.getStatus()}`);
            });
        }
    }
}
const library = new Library();
const book1 = new Book(1, "To Kill a Mockingbird", "Harper Lee", 5, "Available");
const book2 = new Book(2, "1984", "George Orwell", 3, "Available");
const book3 = new Book(3, "Pride and Prejudice", "Jane Austen", 2, "Available");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
//# sourceMappingURL=bai8.js.map