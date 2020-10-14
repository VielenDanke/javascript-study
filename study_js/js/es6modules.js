// import {one, two as second} from "./es6lib";
import * as data from "./es6lib";
import sayHi from "./es6lib";

console.log(`Variable ${data.one} and ${data.two}`);

sayHi();

data.sayHi();