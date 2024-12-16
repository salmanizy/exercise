class Student {
    constructor(id, name, mark){
        this.id = id;
        this.name = name;
        this.mark = mark;
    }
    
    getId(){
        return this.id;
    }
    setId(id){
        this.id_ = id;
    }
    
    getName(){
        return this.name;
    }
    setName(name){
        this.id = name;
    }
    
    getMark(){
        return this.mark;
    }
    setMark(mark){
        if(mark < 0){
            console.error("Invalid Mark!")
            return;
        }
        this.mark = mark;
    }

    checking(){
        if(this.mark > 65){
            return`You Passed the test!`;
        }
        else{
            return `You Failed the test :s(`
        }
    }
}

const student1 = new Student(2037129373, "Isal", 0);
console.log(student1.getName());
console.log(student1.getId());
console.log(student1.getMark());
console.log(student1.checking());

student1.setMark(90);
console.log(student1.getMark());
console.log(student1.checking());

student1.setMark(-10);