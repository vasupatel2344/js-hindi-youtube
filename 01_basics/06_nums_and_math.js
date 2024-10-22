// Numbers

const score = 400
// console.log(score);


const balance = new Number(1000 * 2)
// console.log('1', balance);
// console.log('1', );

// console.log('2', balance.toString().length);
// console.log('3', balance.valueOf());
// console.log('4', balance.toLocaleString());
// console.log('5', balance.toFixed(2));

const balance2 = 22333464
// console.log('6', balance2.toPrecision(3));
// console.log('8', balance2.toLocaleString());

const hundreds = 1000000
// console.log('7', hundreds.toLocaleString('en-IN'));



// ================================= Maths ==================================

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(24.5));
// console.log(Math.ceil(4.4));// value for the highest
// console.log(Math.floor(4.9));  // value for the lowest
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20
const random = Math.random()
console.log("RANDOM VALUE", random);

console.log(Math.random());

const min_plush_max = max - min + 1
const min_plush_min = min - max + 1
// console.log("cal", min_plush_max);

// console.log("into", random * min_plush_max);


// console.log(Math.floor(random * min_plush_max) + min); // IMPORTANT
// console.log("1", Math.max(Math.ceil(random * min_plush_min) + max) || ("2", Math.floor(random * min_plush_max) + max));
// console.log("1", Math.max(Math.ceil(random * min_plush_min)) || ("2", Math.floor(random * min_plush_max)));

