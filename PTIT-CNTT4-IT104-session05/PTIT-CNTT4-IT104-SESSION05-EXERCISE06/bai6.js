"use strict";

class Book {
    _title;
    _author;
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
}
class Library {
    _books = [];
    addBook(book) {
        this._books.push(book);
    }
    printBooks() {
        this._books.forEach((book) => {
            console.log(` Title - ${book['_title']}, Author - ${book['_author']}`);
        });
    }
}
let book1 = new Book("Changiuoi", "123");
let book2 = new Book("1984", "Chang dang iu");
let book3 = new Book("Choe", "Chloe Amelinda");
let book4 = new Book("chang ", "ChangChang");
let book5 = new Book("I love you ", "Amelinda Chloe");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBooks();
//# sourceMappingURL=bai6.js.map