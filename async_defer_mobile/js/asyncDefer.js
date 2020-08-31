"use strict";

/*
defer
*/
// means async loads scripts, also scripts with defer are staring themselves
// only when dom content is loaded
// also they are saving order with anothenr scripts

/*
async
*/
// the page is not waiting async scripts
// DOMContenLoaded and async scripts are not waiting each other
// async not maintaining the order, not waiting other scripts

const allParag = document.querySelectorAll("p");

console.log(allParag);

function loadScript(src) {
    const script = document.createElement("script");

    script.src = src;
    
    // make script do not loadin like async
    script.async = false;
    
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/script.js");