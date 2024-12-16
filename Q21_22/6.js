class Student{
    constructor(id, name, mark){
        this.id = id;
        this.name = name;
        this.mark = mark;
    }
    static hello(x){
        return `Hello!, ${x.name}`;
    }
}

let student1 = new Student("12344", "Rohimat", "78");

console.log(Student.hello(student1));