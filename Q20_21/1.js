function animal (name){
    this.name = name;
    this.eat = function(){
        console.log(this.name + " sedang makan");
    };
}

function dog (name, breed){
    animal.call(this, name);
    this.breed = breed;
    this.bark = function(){
        console.log(this.name + " sedang menggonggong");
    };
}

let myDog = new dog("Rammy", "Pitbull");

console.log(myDog.name + " (" + myDog.breed+ ") ");
myDog.eat()
myDog.bark()