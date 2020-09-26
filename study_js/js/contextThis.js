"use strict";

// function showThis(firstArg, secondArg) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return firstArg + secondArg;
//     }
//     console.log(sum());
// }

// showThis(1, 2);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(id, name) {
//     this.id = id;
//     this.name = name;
//     this.human = true;
//     this.hello = () => {
//         console.log(`Hello from ${this.name}`);
//     };
// }

// let firstUser = new User(1, "first");

// firstUser.hello();

// function sayHello(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: "John"
// };

// sayHello.call(user, "Smith");
// sayHello.apply(user, ["Smith"]);

// // Создает новую функцию и подвязывает контекст
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));

// const btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

const double = a => a * 2;

console.log(double(2));

obj.sayNumber();

// 1. Обычная функция - this = window, но если "use strict" - undefined
// 2. Контекст у методов объекта - сам объект
// 3. this в конструкторах и классах - новый экземпляр объекта
// 4. Ручная привязка this (call, apply, bind)

