// Module Wrapper function é o mesmo de eu usar module.exports

// Module Wrapper function
// (function (exports,require,module, __filename, __dirname){

//     )}


// console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }

}

// import Person from './person';

const Jackson = new Person('Jackson Silva', 19);

Jackson.greeting()