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
   public findBookByName(name:string):void {
        const foundBooks = this._books.filter(book => book['_title'].toLowerCase().includes(name.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                console.log(`Found Book - Title: ${book['_title']}, Author: ${book['_author']}, ID: ${book['_id']}`);
            });
        } else {
            console.log("No books found with that name.");
        }
    }
   

    public printBooks(): void {
        this._books.forEach((book) => {
            console.log(` Title - ${book['_title']}, Author - ${book['_author']}`);
        });
    }
}

let book1 = new Book("Chang", "123", 1);
let book2 = new Book("1984", "Chang dang iu", 2);
let book3 = new Book("Choe","Chloe Amelinda", 3);
let book4 = new Book("chang ", "ChangChang", 4);
let library = new Library();
library['_books'].push(book1);
library['_books'].push(book2);
library['_books'].push(book3);
library['_books'].push(book4);
library.findBookByName("chang");