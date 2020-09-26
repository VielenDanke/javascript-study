"use strict";

window.addEventListener("DOMContentLoaded", () => {

    const modalTitle = document.querySelector(".order__form");
    // let timerId;
    // let count = 0;

    const recallBtn = modalTitle.querySelectorAll("button");
    // const timerId = setTimeout((text) => {
    //     console.log(text);
    // }, 2000, "Hello");
    const footer = document.querySelector(".footer");
    let actionBtn;

    function myAnymation() {
        let position = 0;

        const id = setInterval(frame, 10);

        function frame() {
            console.log(position);
            if (position == 300) {
                clearInterval(id);
            } else {
                position++;
                actionBtn.style.height = `${position}px`;
            }
        }
    }
    recallBtn.forEach(item => {
        if (item.classList.contains("btn")) {
            actionBtn = item;
            item.addEventListener("click", myAnymation);
        }
    });

    // recallBtn.forEach(item => {
    //     if (item.classList.contains("btn")) {
    //         item.addEventListener("click", event => {
    //             event.preventDefault();
    //             // const timerId = setTimeout(logger, 2000);
    //             timerId = setInterval(logger, 1000);
    //         });
    //     }
    // });
    // function logger() {
    //     if (count == 3) {
    //         clearInterval(timerId);
    //     }
    //     console.log("text");
    //     count++;
    // }

    // recursion with setTimeout
    // let id = setTimeout(function log() {
    //     console.log("Hello");
    //     id = setTimeout(log, 500);
    // }, 500);
});