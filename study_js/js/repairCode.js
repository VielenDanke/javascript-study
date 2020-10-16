"use strict";

try {
    console.log("Normal");
    console.log(a);
    console.log("result");
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Finally");
}
console.log("Still normal");