"use strict";

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Username: ${this.name}, age: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("Wrong age");
        }
    };
}

const firstUser = new User("First", 28);
console.log(firstUser.name);
console.log(firstUser.getAge());

firstUser.setAge(30);
firstUser.setAge(300);

console.log(firstUser.getAge());

firstUser.say();

class UserConst {

    #surname = "Surnamovich";

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    say = () => {
        console.log(`Username: ${this.name} ${this.#surname}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Wrong age");
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const constFirstUser = new UserConst("First", 28);

console.log(constFirstUser.age);
console.log(constFirstUser.surname);
constFirstUser.age = 99;
console.log(constFirstUser.age);

constFirstUser.say();

console.log(constFirstUser.surname);
constFirstUser.surname = "New surname";
console.log(constFirstUser.surname);