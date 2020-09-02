"use strict";

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector("#first");

const btn = btns[0];

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// We can add remove etc. many classes within one method
// console.log(btn.classList.add("red", "new-class"));
// console.log(btn.classList.remove("blue"));
// toggle - if class exists it would be removed, if not exists it would be added
// console.log(btn.classList.toggle("blue"));

// btn.classList.add("bla-bla");

// if (btn.classList.contains("bla-bla")) {
//     console.log("Bla bla");
// }

btn.addEventListener("click", event => {
    event.preventDefault();

    btns[1].classList.toggle("red");

    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    //     console.log("Added");
    // } else {
    //     btns[1].classList.remove("red");
    //     console.log("Removed");
    // }
});

/*
delegating to all childs
*/
wrapper.addEventListener("click", event => {
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.log("Button");
    // }
    if (event.target && event.target.matches("button.red")) {
        console.log("Button");
    }
});

/*
wrong variant, cannot be applied to new buttons created dynamically
*/
// btns.forEach(eachBtn => {
//     eachBtn.addEventListener("click", event => {
//         if (event.target && event.target.tagName == "BUTTON") {
//             console.log("Button");
//         }
//     });
// });

const newBtn = document.createElement("button");
newBtn.classList.add("red");
wrapper.append(newBtn);

// The old method (not using)
// console.log(btn.className);