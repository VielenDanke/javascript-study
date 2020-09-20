"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const modalTriggerBtns = document.querySelectorAll("[data-modal]");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector("[data-close]");

    modalTriggerBtns.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            contactUsModalWindow(
                "show",
                "hide",
                "hidden"
            );
            clearInterval(modalTimerId);
        });
    });

    modalCloseBtn.addEventListener("click", event => {
        event.preventDefault();
        contactUsModalWindow(
            "hide",
            "show",
            ""
        );
    });

    modal.addEventListener("click", event => {
        event.preventDefault();

        if (event.target === modal) {
            contactUsModalWindow(
                "hide",
                "show",
                ""
            );
        }
        document.addEventListener("keydown", event => {
            if (event.code === "Escape" && modal.classList.contains("show")) {
                contactUsModalWindow(
                    "hide",
                    "show",
                    ""
                );
            }
        });
    });

    function contactUsModalWindow(toAdd, toRemove, overflowStyle) {
        modal.classList.add(toAdd);
        modal.classList.remove(toRemove);
        document.body.style.overflow = overflowStyle;
    }

    function showModalWindowWithTimeout() {
        contactUsModalWindow("show", "hide", "hidden");
    }

    const modalTimerId = setTimeout(showModalWindowWithTimeout, 3000);

    function showByScrollEvent() {
        if ((window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
            contactUsModalWindow("show", "hide", "hidden");
            window.removeEventListener("scroll", showByScrollEvent);
        }
    }

    window.addEventListener("scroll", showByScrollEvent);
});