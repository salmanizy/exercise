class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    area() {
        return console.log(`Luas dari persegi panjang adalah ${this.width * this.height}`);
    }
}

let kotak1 = new Rectangle(20, 10)
kotak1.area()