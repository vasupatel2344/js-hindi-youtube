// primitives

// 7 types primitives : String,Number ,Boolean,Null,Undefined,Symbol,Bigint
// 3 types non primitives (reference)  : Array, object, Function

const score = 100
const scoreValue = 100.3

// console.log(score);             // 100
// console.log(scoreValue);        // 100.3


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
// console.log(isLoggedIn);        // false
// console.log(outsideTemp);       // null
// console.log(userEmail);         // undefined

const bigint = 1234n;
// console.log(bigint);
// console.log(typeof bigint);


/* const id = Number("686828")
const Id = Number("686828");
console.log(id);
const idType = typeof id;
console.log("id type",idType);

console.log(id == Id);

console.log(id === Id);

const heros = { "shaktiman": "naagraj" }; */

// console.log(heros);
// console.log(typeof heros);
// console.log(typeof shaktiman);


let myObj = {
    name: "vasu",
    age: 22,
    isLoggedIn: true
}
// console.log(myObj);
// console.log(myObj.age);

const myobj = String(myObj.age);
// console.log(myobj);
// console.log(typeof myobj);


const myFunction = function () {
    console.log("Hello world");
}

const sunction = () => {
    console.log("hello world!");

}

// myFunction();
// sunction();


console.log(myFunction);

console.log(typeof myFunction);
console.log(typeof another);

//   _
// Reference (Non Primitive)  \//-\S|_|

// Array,Objects,Functions vasu 

// ==================================================================================================

// Stack(Primitive)==> copy value || Heap (Non Primitive) => original value     // < = Memory

// Primitive datatypes => String,Number ,Boolean,Null,Undefined,Symbol,Bigint

// Non Primitive datatypes => Objects Array Function


let myYoutubename = "vasupatel123@gmail.com";
// let chaiaurcode = Number ("1");
let anothername = myYoutubename;
anothername = "chaiaurcode";
// console.log(typeof anothername);


// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

// object in primitive datatypes

let userTwo = userOne;
console.log(typeof userTwo);


userTwo.email = "vasu123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


let x = 10;
console.log(x);

for (let i = 0; i < 7; i++) {
    if (x = i) {
        console.log(x, "11 = string" + i);
    } else (
        console.log("it's value still not met the requirement")
    )
}



