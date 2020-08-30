"use strict";

/*
pseudo array - withoud methods forEach, map, filter etc.
*/

const arr = [4, 3, 12, 1, 16, 27, 5];

arr.sort((firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
});

/*
The second approach using function methos separately

arr.sort(comparingNumbers);

function comparingNumbers(first, second) {
    return first - second;
}
*/

console.log(arr);

// arr[99] = 0;

// console.log(arr.length);

// arr.pop(); delete the element at the end of array

// arr.push(10); add the element at the end of array

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach((value, index, arr) => {
    console.log(`${index}: ${value} inside the array ${arr}`);
});

// for (let value of arr) {
//     console.log(value);
// }

console.log(arr);

const str = prompt("", "");

const strArray = str.split(",");

strArray.forEach((value, index, strArray) => {
    console.log(`${index}: ${value} in splitted String ${str}`);
});

strArray.sort();

const newStrAfterJoining = strArray.join("/");

console.log(newStrAfterJoining);