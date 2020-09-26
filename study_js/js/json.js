"use strict";

const person = {
    name: "Son",
    tel: "+77477477477",
    parents: {
        mom: "Mom",
        dad: "Dad"
    }
};

// JSON object

const deepCloneObject = deepClone(person);

const toJson = JSON.stringify(person);

console.log(toJson);

const fromJson = JSON.parse(toJson);

console.log(fromJson);

console.log(deepCloneObject);

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}