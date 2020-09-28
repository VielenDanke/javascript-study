"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabsContent = document.querySelectorAll(".tabcontent");
    const tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(contentNumber = 0) {
        tabsContent[contentNumber].classList.add("show", "fade");
        tabsContent[contentNumber].classList.remove("hide");
        tabs[contentNumber].classList.add("tabheader__item_active");
    }

    tabsParent.addEventListener("click", event => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(index);
                }
            });
        }
    });
    hideTabContent();

    showTabContent();

    // Forms
    const forms = document.querySelectorAll("form");

    forms.forEach(item => {
        postData(item);
    });

    const message = {
        loading: "Loading",
        success: "Thank you. We will call you in next 30 minutes",
        failure: "Something went wrong"
    };

    function postData(form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            statusMessage.textContent = message.loading;
            
            form.append(statusMessage);

            const request = new XMLHttpRequest();

            request.open("POST", "http://foodproject/server.php",);
            request.setRequestHeader("Content-Type", "application/json");

            const formData = new FormData(form);

            const object = {};

            formData.forEach((value, key) => {
                object[key] = value;
            });

            const jsonObj = JSON.stringify(object);

            request.send(jsonObj);

            request.addEventListener("load", () => {
                if (request.status === 200) {
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
});