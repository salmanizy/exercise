function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

let firstBook = new Book("Harry Potter and the Philoshopher's Stone", "J.K Rowling", "1997");

console.log(firstBook.title)
console.log(firstBook.author)
console.log(firstBook.year)