"use strict";

/*
simulate delay with 500
*/
function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log(`I study: ${lang}`);
    callback();
}

const lang = "JavaScript";

learnJs(lang, () => {
    console.log("I finished the lesson");
});

function done() {
    console.log("I finished the lesson");
}

/*
if we passed the function, we are no need in (), 
because we just passed it inside and it would be called later
*/
learnJs(lang, done);