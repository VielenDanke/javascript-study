"use strict";

// month count from 0
// show Grinvich time
// new Date(2020, 5, 1, 20)
// const now = new Date(-9999999999999);

const now = new Date();

const parseDate = Date.parse("2020-01-01");

/*
to set something - use set instead of get
*/

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());

// UTC hours
// console.log(now.getUTCHours());

// different between current time and Grinvich in minutes
// console.log(now.getTimezoneOffset());

// Timestamp from 1970 im ms
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    // pow the i in 3
    let sum = i ** 3;
}

let end = new Date();

console.log(`Cycle worked for ${end - start} ms`);