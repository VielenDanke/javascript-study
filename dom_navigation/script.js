"use strict";

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

const arr = [];

console.log(document.querySelector("#current").parentNode.parentNode);

console.log(document.querySelector("#current").parentElement);

// data-# attributes

const dataCurrent = document.querySelector("[data-current='3']");

console.log(dataCurrent.previousSibling);

console.log(dataCurrent.nextElementSibling);

const allChildNodes = document.body.childNodes;

allChildNodes.forEach(node => {
    if (node.nodeName != "#text") {
        arr.push(node);
    }
});

arr.forEach(node => {
    console.log(node.nodeName);
});

// for (let node of allChildNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }