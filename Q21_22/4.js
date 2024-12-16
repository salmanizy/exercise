class Shape{
    constructor(color){
        this.color = color;
    }
    draw(){
        return `Drawing a shape with ${this.color} color`;
    }
}

class Rectangle extends Shape{
    constructor(width, height, color){
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    }
}

let rec1 = new Rectangle(200, 5, "Black");

console.log(rec1.draw());
console.log(rec1.calculateArea());