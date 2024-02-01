class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak()
    {
        console.log(`Hello! My name is ${this.name}.`);
    }
}

class Student extends person {
    constructor(name, age ,grade) {
        super(name,age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name}'s grade is ${this.grade}.`);
    }
}

const alice = new Student('Alice',22,95);
alice.speak();
alice.study();
console.log(Object.keys(alice));
console.log(Object.values(alice));
console.log(Object.entries(alice));
