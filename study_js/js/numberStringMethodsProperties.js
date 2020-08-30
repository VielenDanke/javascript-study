"use strict";

/*
string
*/
const str = "test";
const fruit = "Some fruit";
const logg = "Hello world!";

console.log(logg.slice(6, logg.length));
console.log(logg.slice(6));
/*
cut the amount of symbols equals 5
*/
console.log(logg.substr(6, 5));

console.log(str[2]);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));
console.log(fruit.substring(5, fruit.length));

console.log(str);

/*
number
*/
const num = 12.2;
const test = "12.2px";

console.log(Math.round(num));
console.log(Math.pow(num, 2));
console.log(parseInt(test));
console.log(parseFloat(test));

/*
array
*/
const arr = [1, 2, 3];

console.log(arr.length);