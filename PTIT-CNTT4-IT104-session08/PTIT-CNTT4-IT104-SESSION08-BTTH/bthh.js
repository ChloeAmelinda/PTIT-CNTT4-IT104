"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    getBookById(id) {
        return this.books.find(item => item.id === id);
    }
    removeBookById(id) {
        let index = this.books.findIndex(item => item.id === id);
        if (index == -1) {
            console.log("not book");
        }
        else {
            let confirmDelete = confirm("Do you want to delete?");
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    updateBook(id, new_book) {
        let index = this.books.findIndex(item => item.id === id);
        if (index == -1) {
            console.log("not book");
        }
        else {
            let confirmUpdate = confirm("Do you want to update?");
            if (confirmUpdate) {
                this.books[index] = new_book;
                console.log("updated");
            }
        }
    }
}
//# sourceMappingURL=bthh.js.map