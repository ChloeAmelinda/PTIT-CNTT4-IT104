class Book{
    id:number
    title:string
    author:string
    year:number
    constructor(id:number , title:string, author:string , year: number){
        this.id = id
        this.title = title
        this.author = author
        this.year = year
    }
}
class Library<T extends {id:number,name:string}>{
    books : T[] = []
    addBook(book:T):void{
        this.books.push(book)
    }
    getBookById(id: number):T|undefined{
        return this.books.find( item =>item.id === id)
    }
    removeBookById(id:number):void{
        let index = this.books.findIndex(item => item.id ===id)
        if(index == -1){
            console.log("not book")
        }else{
            let confirmDelete = confirm ("Do you want to delete?")
            if(confirmDelete){
                this.books.splice(index,1)
            }
        }

    }
    updateBook(id:number, new_book:T):void{
        let index = this.books.findIndex(item => item.id ===id)
        if(index == -1){
            console.log("not book")
        }else{
             let confirmUpdate = confirm ("Do you want to update?")
             if(confirmUpdate){
                this.books[index] = new_book
                console.log("updated")
             }
        }
    }
    // findBookByTitleorAuthor(searchTerm : string):T[]{
    //     return  this.books.filter(item =>
    //         item.name.toLocaleLowerCase().includes()
    //     )
        
    // }

}