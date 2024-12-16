class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

let book1 = new Book("Calm", "Michael Acton Smith", "2016");
let book2 = new Book("Secret of the World", "Jonnatan Black", "2019");

console.log(`Judul: ${book1.title}`);
console.log(`Penulis: ${book1.author}`);
console.log(`Tahun Terbit: ${book1.year}\n`);
console.log(`Judul: ${book2.title}`);
console.log(`Penulis: ${book2.author}`);
console.log(`Tahun Terbit: ${book2.year}`);