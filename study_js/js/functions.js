"use strict";

let num = 20;

const anotherNum = ret();

/*
function expression

Created only when code is reached function, cannot be used before it is actual declaration
*/
const logger = function() {
    console.log("Hello");
};

logger();

console.log(calc(1, 2));
console.log(calc(2, 3));
console.log(calc(4, 5));
console.log(anotherNum);
console.log(num);

showFirstMessage("First text");

/*
function is declared before all code in the script

in the example below we can call function before it is actual declaration
*/

function showFirstMessage(text) {
    console.log(text);
    num = 30;
}

function calc(a, b) {
    return a + b;
}

function ret() {
    let num = 50;
    
    return num;
}

/*
New standart in function declaration (Arrow function)

Cannot be called before actual declaration

Like a lambda in Java
*/
const ultraCalc = (a, b) => {
    console.log(`The first argument is: ${a}`);
    console.log(`The second argument is: ${b}`);

    const result = a + b;

    console.log(`The result is: ${result}`);

    return result;
};

ultraCalc(1, 3);