"use strict";

// new RegExp("patter", "flags");

// /pattern/flags

// const ans = prompt("Insert your name");
// const ans = prompt("Insert your number");
const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/ig));
console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));

// Flags
// i - not registr sensitive
// g - find all matches
// m - multistrings
// \d - digets
// \w - words
// \s - spaces
// \D - not digets
// \W - not words

// const reg = /n/ig;
const reg = /\d/g;

// console.log(ans.match(reg));
// console.log(reg.test(ans));

// ans.search for single result
// ans.match for multi results
// console.log(ans.match(reg));
// . - all elements
// \ - make point working exactly as point

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));