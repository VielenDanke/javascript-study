import $ from 'jquery';

$(function() {
    $(".list-item:first").on("mouseenter mouseleave", (event) => {
        $(event.target).toggleClass("active");
    });
    $(".list-item:eq(2)").on("click", (event) => {
        $(".image:even").fadeToggle();
    });
    $(".list-item:eq(4)").on("click", (event) => {
        $(".image:odd").animate({
            opacity: "toggle",
            height: "toggle"
        }, 2000);
    });
});

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

for (let k of count(7)) {
    console.log(k);
}
// function* generator() {
//     yield "S";
//     yield "c";
//     yield "R";
//     yield "t";
//     yield "E";
//     yield "p";
// }

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());