// costructor = a special method of class
//               accept arguments and assign properties


class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Amin", 34, 4.5);
const student2 = new Student("Raess", 30, 2.5);
const student3 = new Student("Saad", 22, 5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();


console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();