"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, color, text) {
        super(height, width);
        this.color = color;
        this.text = text;
    }

    showMyProps() {
        return `Text is ${this.text}, and color is ${this.color}`;
    }
}

const square = new Rectangle(13, 13);
const long = new Rectangle(10, 15);
const div = new ColoredRectangleWithText(25, 10, "Descr", "red");

console.log(div.calcArea());
console.log(div.showMyProps());
console.log(square.calcArea());
console.log(long.calcArea());