"use strict";

// To String

// 1.
console.log(String(null));
console.log(String(4));

// 2.
console.log(typeof(null + ""));
console.log(typeof(5 + ""));

const num = 5;

console.log("https://vk.com/catalog/" + num);
console.log(`https://vk.com/catalog/${num}`);

const fontSize = 26 + "px";

// To Number

// 1.
console.log(typeof(Number("4")));

// 2.
console.log(typeof(+"4"));

// 3.
// Second argument is means number system 
console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// To Boolean

// 1.
// always false - 0, "", null, undefined, NaN

let switcher = 1;

if (!switcher) {
    console.log("The switcher is false (0)");
} else {
    console.log(`The switcher is true and equals to ${switcher}`);
}

// 2.
console.log(typeof(Boolean("4")));

// 3.
console.log(typeof(!!"444"));

// И запинается на лжи
// ИЛИ запинается на правде