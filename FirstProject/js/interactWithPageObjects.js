"use strict";

const box = document.getElementById("box");
const btns = document.getElementsByTagName("button");
const circles = document.getElementsByClassName("circle");
const wrapper = document.querySelector(".wrapper");
/*
can query in any elements
*/
const hearts = wrapper.querySelectorAll(".heart");
const oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

// Equalent changing style

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     console.log(hearts[i]);
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

/*
only inside js file
*/
const div = document.createElement("div");
// const text = document.createTextNode("Here I was");

div.classList.add("black");

/*
append - modern method
appendChild - old method
*/

// document.body.append(div);

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// hearts[0].before(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

/*
old methods

using through the parent
*/

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]);

/*
add an text or html element on the page
*/
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello World";

// beforebegin afterbegin beforeend afterend
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
