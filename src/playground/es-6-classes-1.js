class Person {
    constructor(name = 'Anonymous', age = 0) { // setting name default if no set name exists
        this.name = name;
        this.age = age;
    }
    getGreeting() {
     //   return 'Hi, I am ' + this.name + '!';
     return `Hi. I am ${this.name}, ${this.age} years old.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}


class Student extends Person {              // extending Person class 
    constructor (name, age, major) {
        super(name, age);                   // super refers to the parent class constructor
        this.major = major;
    }
    hasMajor() {
        return !!this.major;                // check if major exists
    }
    getDescription() {
        let description = super.getDescription();   // access getDescription(); in Person class

        if(this.hasMajor()) {
            description = description + ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting = greeting + ` I'm visiting from ${this.homeLocation}.`;
        } 

        return greeting;
    }
}

const me = new Traveler('Mikko Paappanen', '23', 'Suonenjoki');
console.log(me.getGreeting());

const test = new Traveler('Sebander', '23');
console.log(test.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

