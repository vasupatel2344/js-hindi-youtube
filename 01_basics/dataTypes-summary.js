// primitives

// 7 types primitives : String,Number ,Boolean,Null,Undefined,Symbol,Bigint
// 3 types non primitives : Array, object, Function

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


const id = Symbol('123')
const Id = Symbol('123');

// console.log(id === Id);


// console.log(id === anotherId);




const heros = {"shaktiman": "naagraj" };
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


const myFunction = function(){
    console.log("Hello world");
}


// console.log(myFunction);

// console.log(typeof myFunction);
// console.log(typeof another);


// Reference (Non Primitive) | \/

// Array,Objects,Functions vasu 

// ==================================================================================================

// Stack(Primitive) , Heap (Non Primitive)      // < = Memory

let myYoutubename = "vasupatel2344@gmail.com";

let anothername = myYoutubename;
anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "vasu123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


