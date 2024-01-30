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

const john = new person('john',20);
john.speak();