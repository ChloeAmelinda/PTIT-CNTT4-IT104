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
    public editBook(id: number, newTitle: string, newAuthor: string): void {
        const book = this._books.find(book => book['_id'] === id);
        if (book) {
            book['_title'] = newTitle;
            book['_author'] = newAuthor;
        } else {
            console.log(`Book with ID ${id} not found.`);
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
let library = new Library();
library['_books'].push(book1);
library['_books'].push(book2);
library.editBook(1, "Chang ", "ChangChang");
library.printBooks();