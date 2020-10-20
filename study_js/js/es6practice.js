function max(a, b, ...numbers) {
    console.log(numbers)
}

let names = ["one", "TwO", "Three", "FoUr", "five"];

names = names.filter(it => it.length > 4).map(it => {
    return `${it[0].toUpperCase()}${it.slice(1, it.length).toLowerCase()}`
});

console.log(names);

const arr1 = [1, 5, 4, 11],
      arr2 = [57, 3, 2, 49];

const maxNumber = Math.max(...arr1, ...arr2);

console.log(maxNumber);

const avatar = "Photo";

const user = {
    name: {
        first: "Sam",
        second: "Smith"
    },
    pass: "qwerty",
    rights: "user"
};

const admin = {
    name: "admin",
    pass: "root"
};

console.log(user.name);

const {name: {first, second}, pass, rights} = user;

console.log(first);

// const result = Object.assign({}, user, admin);
const result = {...user, ...admin, avatar}

console.log(result);

const x = 25;
const y = 10;

// const coordinates = {
//     x: x,
//     y: y,
//     calcSquare: function() {
//         console.log(this.x * this.y);
//     }
// }

const coordinates = {x,y,
    calcSquare() {
        console.log(this.x * this.y);
    }
};

coordinates.calcSquare();

console.log(coordinates);

function connect({
    host = "localhost", port = 3000, user = "default"
}) {
    console.log(`Host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    // host: "localhost",
    port: 5500
    // user: "default"
});

const arrNum = [3, 5, 6, 6];

const [, , c] = arrNum;

console.log(c);

const matrixArray = [[3, 5], [6, 6]];

const [[a, b], [c, d]] = matrixArray;

console.log(a, b, c, d)