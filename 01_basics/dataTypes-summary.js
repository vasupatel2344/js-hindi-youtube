// primitives

// 7 types : String,Number ,Boolean,Null,Undefined,Symbol,Bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 456543576654356759n;
console.log(bigNumber);



const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "vasu",
    age: 22,
    isLoggedIn: true
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(myFunction);

console.log(typeof myFunction);


// Reference (Non Primitive) | \/

// Array,Objects,Functions