"use strict";

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

const domContentLoaded = "DOMContentLoaded";

console.log(domContentLoaded);

window.addEventListener(domContentLoaded, () => {
    const box = document.querySelector(".box");

    console.log(box);

    box.addEventListener("touchstart", event => {
        event.preventDefault();

        console.log("Start");
        console.log(event.touches);
        console.log(event.targetTouches);
    });

    // box.addEventListener("touchmove", event => {
    //     event.preventDefault();

    //     console.log("Move");
    // });

    // box.addEventListener("touchend", event => {
    //     event.preventDefault();

    //     console.log("End");
    // });
});

// touches - all fingers on display
// targetTouches - touches on concrete event
// changedTouches - amount of finges are participating in event