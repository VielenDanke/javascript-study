"use strict";

/*
objects in JavaScript is an associative arrays
*/
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    color: {
        border: "black",
        background: "red"
    },
    makeTest: () => {
        console.log("test");
    },
    anotherTest: function() {
        console.log("another test");
    }
};

console.log(options.name);

/*
delete the property name from object options

delete options.name;

console.log(options);
*/

let counter = 0;

for (let key in options) {
    counter++;

    if (typeof(options[key]) == "object") {
        for (let innerKey in options[key]) {
            console.log(`The property with ${innerKey} has value ${options[key][innerKey]}`);
        }
    } else {
        console.log(`The property with ${key} has value ${options[key]}`);
    }
}

options.makeTest();

/*
distructurization of object
*/
const {border, background} = options.color;

console.log(border);

console.log(counter);
console.log(Object.keys(options).length);