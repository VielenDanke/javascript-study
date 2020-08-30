"use strict";

if (1) {
    console.log("Ok");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too big number");
} else {
    console.log(`Our number is: ${num}`);
}

const bool = (num == 50) ? console.log("Is equals 50") : console.log("Not equals 50");

switch(num) {
    case 49:
        console.log("num is 49");
        break;
    case 100:
        console.log("num is 100");
        break;
    case 50:
        console.log("num is 50");
        break;
    default:
        console.log("Default switch");    
}