"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: () => {
        console.log("Hello");
    }
};

/*
create object sergeant inherited from soldier
*/
const sergeant = Object.create(soldier);

// const sergeant = {
//     health: 100
// };

// sergeant.__proto__ = soldier; Old version, do not using

// Object.setPrototypeOf(sergeant, soldier);

sergeant.sayHello();