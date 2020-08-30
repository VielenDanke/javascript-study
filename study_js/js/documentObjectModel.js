"use strict";

const box = document.getElementById("box");

console.log(box);

const buttons = document.getElementsByTagName("button");

console.log(buttons[1]);

const circles = document.getElementsByClassName("circle");

console.log(circles);

/*
when using selectors, need to put . before heart (example), return NodeList

if class - . before
if id - # before

allow to use forEach, entries, item, keys etc.
*/
const hearts = document.querySelectorAll(".heart");

hearts.forEach(item => {
    console.log(item);
});

console.log(hearts);

/*
select first element from NodeList
*/
const oneHeart = document.querySelector(".heart");

console.log(oneHeart);