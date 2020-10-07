'use strict';

// localStorage.setItem("number", 5);

// const num = localStorage.getItem("number");

// console.log(num);

// localStorage.removeItem("number");

// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),  
      change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg")) {
    form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", event => {
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click", event => {
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red";
    }
});

const person = {
    name: "Alex",
    age: 25
};

const serializedPerson = JSON.stringify(person);

localStorage.setItem("person", serializedPerson);

console.log(localStorage.getItem("person"));