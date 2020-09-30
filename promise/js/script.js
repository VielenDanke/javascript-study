"use strict";

// console.log("Data requested...");

// Promise

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Data preparing...");
    
//         const product = {
//             name: "TV",
//             price: 501
//         };
    
//         resolve(product);
//     }, 2000);
// }).then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = "ordered";
//             if (product.price > 500) {
//                 reject("Too expensive");
//             }
//             resolve(product);
//         }, 2000);
//     });
// }).then((product) => {
//     product.modify = true;
//     return product;
// }).then((product) => {
//     console.log(product);
// }).catch((reason) => {
//     console.error(`WARNING!!! The reason is: ${reason}`);
// }).finally(() => {
//     console.log("Finally block");
// });

const test = function(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
};

// test(1000).then((time) => {
//     console.log(`Success with Time: ${time}`);
// });

// test(2000).then((time) => {
//     console.log(`Success with Time: ${time}`);
// });

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("To test Promise all succees");
// });

Promise.race([test(1000), test(2000)]).then((time) => {
    console.log(`The winner with Time: ${time}`);
});

// setTimeout(() => {
//     product.status = "ordered";
//     console.log(product);    
// }, 2000);