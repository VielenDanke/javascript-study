"use strict";

// const num = new Number(3);
// const fun = new Function(3);

// console.log(num);

let sayUsername = "Foo";

function User(name, id) {
    this.id = id;
    this.name = name;
    this.human = true;
    this.hello = () => {
        console.log(`Hello, ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} is logged out`);
};

const firstUser = new User("Foo", 1);
const secondUser = new User("Bar", 2);

console.log(firstUser);
console.log(secondUser);

if (sayUsername === "Foo") {
    firstUser.hello();
} else if (sayUsername === "Bar") {
    secondUser.hello();
}

firstUser.exit();