"use strict";

const inputRub = document.querySelector("#rub"),
      inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", event => {
    if (Number.isNaN(+inputRub.value)) {
        inputUsd.value = "Please insert only numbers";
        return;
    }
    const request = new XMLHttpRequest();

    // request.open("method", "url", "async", "login", "password");

    request.open("GET", "js/current.json", true);
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    // request.send(body); for POST requests
    request.send();

    request.addEventListener("load", () => {
        // request.readyState === 4 && with readystatechange in listener
        if (request.status === 200) {
            const responseJson = request.response;

            const currentFromJson = JSON.parse(responseJson);

            inputUsd.value = (+inputRub.value / currentFromJson.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Something went wrong, try later";
        }
    });

    // status of Request (404, 200, 201, 203, 400, 500 etc.)
    // statusText (text of status)
    // response
    // readyState (https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState)

});