class Book{
    private _title: string;
    private _author: string;
    private _id: number;
    constructor(title: string, author: string, id: number) {
        this._title = title;
        this._author = author;
        this._id = id;
    }
}
class Library{
    private _books: Book[] = [];
   public deletedById(id: number): void {
        const index = this._books.findIndex(book => book['_id'] === id);
        if (index !== -1) {
            this._books.splice(index, 1);
            console.log(`Book with ID ${id} has been deleted.`);
        } else {
            console.log(`No book found with ID ${id}.`);
    }
}
   

    public printBooks(): void {
        this._books.forEach((book) => {
            console.log(` Title - ${book['_title']}, Author - ${book['_author']}`);
        });
    }
}

let book1 = new Book("Changiuoi", "123", 1);
let book2 = new Book("1984", "Chang dang iu", 2);
let book3 = new Book("Choe","Chloe Amelinda", 3);
let book4 = new Book("chang ", "ChangChang", 4);
let library = new Library();
library['_books'].push(book1);
library['_books'].push(book2);
library['_books'].push(book3);
library['_books'].push(book4);
library.printBooks();
library.deletedById(2);
library.printBooks();
library.deletedById(5); 
library.printBooks(); 