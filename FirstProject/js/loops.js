"use strict";

let num = 50;

while (num < 55) {
    num++;
}

do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 0; i < 10; i++) {
    if (i === 6) {
        // break
       continue;
    }
    console.log(i);
}

console.log(num);