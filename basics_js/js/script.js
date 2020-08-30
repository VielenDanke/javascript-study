"use strict";

/*
use strict - telling the file exactly that we are working in a modern way.

Need to use before everything or before function
*/

let number = 5;
const leftBorderWidth = 1;

number = 10;

console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

/*
    Cannot be reachable from block of code { }
*/

// {
//     let result = 50;
// }

// console.log(result);

/*
    Could be reacheable everywhere even if the execution code is located before
*/

// var name = "Ivan";