// const tinder = new Object()    //  singleton Object
// const tinderUsers = {}      // non singleton Object

// tinderUsers.id = "abc123"
// tinderUsers.name = "vasu"
// tinderUsers.isLogging = false;

// console.log(tinderUsers);

// const regularUser = {                        // <- object
//     email: "some@example.com",
//     fullname: {
//         userfullname: {
//             firstname: "vasu",
//             lastname: "patel"
//         }
//     }
// }
// console.log(regularUser);
// console.log(typeof regularUser);
// console.log(regularUser.fullname.userfullname.lastname);


// const obj1 = { 1: "A", 2: "B" }
// const obj2 = { 3: "C", 4: "D" }

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);








































































// const tinderUSer = new Object()
// const tinderUSers = {}

// console.log(tinderUSer);
// console.log(tinderUSers);

const tinderUser = {}

tinderUser.id = "vasu123";
tinderUser.name = "vasu";          // name is keys    &    vasu is value
tinderUser.isLoggedIn = false;

// console.log(tinderUser.name);


// const regularUser = {
//     email: "vasu123@gmail.com",
//     fullname: {
//         userFullname: {
//             firstname: "vasu",
//             lastname: "kumar"
//         }
//     },
//     age: 21
// }

// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username);


// console.log(tinderUser);


// const obj1 = { 1: "a", 2: "b0

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// console.log("obj3 = ", obj3);

// const obj = { ...obj1, ...obj2 } // spread object
// console.log(obj);

const user = [
    {
        id: 1,
        email: "user@example.com"
    },
    {
        id: 2,
        email: "users@example.com"
    },
    {
        id: 3,
        email: "theuser@example.com"
    }
]

// console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(user));
console.log(Object.keys(tinderUser));   // IMPORTANT
console.log(Object.values(tinderUser)); // IMPORTANT
console.log(Object.entries(tinderUser));
console.log(Object.freeze(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js hinditions",
//     price: 999,
//     courseInstructor: "hitesh sir"
// }

// course.courseInstructor="vasu kumar" // change value

// console.log(course);

// const { courseInstructor: Instructor } = course



// {
//     name: "vasu ",
//     coursename : "js hindi",
//     price: "free"
// }



// [Array]

// {Object}




// console.log(Instructor);

// const navbar =   (props.company)  => {
//     console.log(`Welcome to ${props.company} website!`)   //  < =  di-structure

// }

// navbar(company= "Vasu")

// this is a secret of are energy 
/* 
2621
35
1263
50
8
7
21
    */




let num1 = "10";
let num2 = "10";

console.log(num1===num2);



//  for loop statement 


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while loop statement

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do-while loop statement


// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// switch statement

// let day = "Sunday";

// switch (day) {
//     case "Saturday":
//         console.log("It's the weekend!");
//         break;
//     case "Sunday":
//         console.log("It's the weekend!");
//         break;
//     default:
//         console.log("It's a weekday!");
// }

