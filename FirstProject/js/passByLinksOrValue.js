"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Link to object, if copy was modified, than actual object would be modified

// copy.a = 10;

// console.log(copy);
// console.log(obj);

/*
make a copy only for main properties, for nested object uses a link
*/
// function copyObject(mainObject) {
//     if (mainObject == null) {
//         return;
//     }
//     let copyObject = {};

//     for (let key in mainObject) {
//         copyObject[key] = mainObject[key];
//     }
//     return copyObject;
// }

const numbers = {
    a: 2,
    b: 3,
    c: {
        x: 7,
        y: 4
    }
};

// const copiedNumbers = copyObject(numbers);

// copiedNumbers.a = 10;
// copiedNumbers.c.x = 10;

// console.log(copiedNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

/*
combine two objects in one

const resultObject = Object.assign(numbers, add);

console.log(resultObject);
*/

/*
create new object like one in incoming parameters
uses links for nested objects
*/
const absolutelyNewObject = Object.assign({}, numbers);

absolutelyNewObject.a = 10;

// console.log(absolutelyNewObject);
// console.log(numbers);

const oldArray = ["a", "b", "c"];

const newArray = oldArray.slice();

newArray[newArray.length - 1] = "Magic";

// console.log(newArray);
// console.log(oldArray);

/*
Spread operator

...t
*/

const video = ["youtube", "vimeo", "rutube"], 
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function logg(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

logg(...num);

const array = ["a", "b"];

/*
copy array using Spread operator
*/

const spreadNewArray = [...array];

const objectForSpreadExample = {
    one: 1,
    two: 2
};

/*
copy object using Spread operator
*/
const newObjectForSpreadExample = {
    ...objectForSpreadExample
};