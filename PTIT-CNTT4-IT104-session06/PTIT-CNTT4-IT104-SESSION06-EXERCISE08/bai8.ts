class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getAuthor(): string {
        return this.author;
    }
    public getStock(): number {
        return this.stock;
    }
    public getStatus(): string {
        return this.status;
    }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }

    // Getter methods
    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getContact(): string {
        return this.contact;
    }
    public getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }
    public getStatus(): string {
        return this.status;
    }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    public getMemberId(): number {
        return this.memberId;
    }
    public getBookId(): number {
        return this.bookId;
    }
    public getDueDate(): Date {
        return this.dueDate;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    
    addBook(book: Book): void {
        this.books.push(book);
    }

    
    showBooks(): void {
        console.log(`Danh sach sach trong thu vien:`);
        if (this.books.length === 0) {
            console.log("Khong co sach trong thu vien");
        } else {
            this.books.forEach((book) => {
                console.log(
                    `ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Stock: ${book.getStock()}, Status: ${book.getStatus()}`
                );
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