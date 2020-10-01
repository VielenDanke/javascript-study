"use strict";

// Methods of iterating over array
// const nameLength = 5;

// const names = ["Ivan", "Sergey", "Viktoriya", "Irina", "Voldemart"];

// const filteredNames = names.filter(i => i.length > nameLength);

// const shortNames = names.filter(i => i.length < nameLength);

// const numberInsteadNames = names.map(i => i.length);

// const nameToFind = names.find(i => i.toLowerCase() === "IVAn".toLowerCase());

// const isEveryNameBiggerThan2Letters = names.every(i => i.length > 2);

// const isSomeNameContainsMoreThan6Numbers = names.some(i => i === "Volodya");

// const oneNameJoined = names.reduce((first, second) => `${first}, ${second}`);

// const namesLengthSum = names.map(i => i.length).reduce((sum, current) => sum + current);

// // reducer with start value

// const oneNameJoinedWithDefaultValue = names.reduce((sum, current) => `${sum}, ${current}`, "BOSS");

// console.log(filteredNames);
// console.log(numberInsteadNames);
// console.log(nameToFind);
// console.log(isEveryNameBiggerThan2Letters);
// console.log(isSomeNameContainsMoreThan6Numbers);
// console.log(oneNameJoined);
// console.log(namesLengthSum);
// console.log(oneNameJoinedWithDefaultValue);

const obj = {
    ivan: "person",
    anna: "person",
    dog: "animal",
    cat: "animal"
};

const newArray = Object.entries(obj).filter(i => i[1] === "person").map(i => i[0]);

console.log(newArray);