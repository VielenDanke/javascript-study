"use strict";

// const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const buttons = document.querySelectorAll("button");

/*
in html page script onclick="alert('Click')"

for small puproses only
*/

/*
rare using of this code

hard to track changes
*/
// btn.onclick = () => {
//     alert("Click");
// };

/*
the most common and right approach

not missing anything
*/
let count = 0;

const deleteMouseEnterCallbackFunction = (event) => {
    event.target.remove();
};

const logMouseEnterCallbackFunction = (event) => {
    console.log(event.type);
    console.log(event.currentTarget);
    // if (count == 10) {
    //     btn.removeEventListener("mouseenter", logMouseEnterCallbackFunction);
    //     console.log("Finished count");
    // }
};

// btn.addEventListener("click", deleteMouseEnterCallbackFunction);

/*
as a result will be dublicated in console
*/
// btn.addEventListener("mouseenter", logMouseEnterCallbackFunction);
overlay.addEventListener("mouseenter", logMouseEnterCallbackFunction);

// btn.addEventListener("click", () => {
//     alert("Second Click");
// });

/*
cancel the default behavior
*/
const link = document.querySelector("a");

// {once: true} means it will work one time only
link.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event.target);
}, {once: true});

buttons.forEach(btn => {
    btn.addEventListener("click", logMouseEnterCallbackFunction);
});