
// Singleton constructor

// object.create


// object literals == \/ 


const mysym = Symbol("mysym");

const JsUsers = {
    name : "vasu",
    age : 18,
    location : "bhayavadar",
    email :"vasu@Google.com",
    [mysym]: "mykey1",
    isLogin : false,
    LastloginDays : ["sunday", "monday", "tuesday"]
}

// console.log(JsUsers.email);
// console.log(JsUsers["name"]);
// console.log(typeof JsUsers["LastloginDays"]);
// console.log(JsUsers);


JsUsers.email = "vasu123@gmail.com";
// Object.freeze(JsUsers);
JsUsers.email = "vasu111@gmail.com";
// console.log(JsUsers.email);


JsUsers.greeting = function() {
    console.log("Hello JS User");
}

JsUsers.greetingTwo = function() {
    console.log(`Hello JS User ${this.email}`);
}

// console.log(JsUsers.greeting());
// console.log(JsUsers.greetingTwo());





























































































































// singleton

// declare object  [literals,contractor]


// object literals
// object.create  'constructor'

// const mySym = Symbol("mySym");

// const JsUser = {
//     name: 'vasu',
//     "fullName": "vasu vegda",
//     [mySym]: "mykey1",
//     age: 21,
//     location: "bhayavadar",
//     email: "vasu@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Mooonday", "Saturday"]
// } //  < = This Is Objectcls
// console.log(JsUser.age);
// console.log(typeof JsUser["age"]);
// console.log(JsUser["fullName"]);
// console.log(typeof JsUser.fullName);
// console.log(JsUser["mySym"]);
// console.log(JsUser[mySym]);
// console.log(JsUser.location);




// const my_Sym = Symbol("mySym");
// console.log(my_Sym);


// JsUser.email = "vasu@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "vasu@microsoft.com";
// console.log(JsUser);

// JsUser.greeting = function () {
    // console.log("Hello JS User");
// }

// JsUser.greetingTwo = function () {
    // console.log(`Hello JS User, ${this.name}`);
// }
// console.log("1", JsUser.greeting());

// console.log("2", JsUser.greetingTwo());

/* const mySym = Symbol("key1")

const jsUser = {
    name: "Rahul",
    "full name": "Rahul Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "XXXXXXXXXXXXXXX",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


jsUser.email = "XXXXXXXXXXXXXXXXX"
jsUser.email = "XXXXXXXXXXXXXXXXX"

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo()); */