const userEmail = "vasu123@ai"


// if (userEmail) {
//     console.log("Got user email");

// } else {
//     console.log("Don't have user email");

// }


// falsy values 

// false, 0, -0, Bigint - 0n, "", null, undefined, NaN

// truthy values 

// true, "0", "false", " " ,[],{}, function(){}


if (userEmail.length === 0) {
    console.log("Array is empty");
} else {
    console.log("EMPTY array");

}

const emptyObject = { 1: "a", 2: "b", 3: "c", 4: "b" };

let b = Object.keys(emptyObject);
console.log(b.length);


if (Object.keys(emptyObject).length === 0) {        // ? ?
    console.log("Object is empty");

} else {
    console.log("Non-empty object");
}

// Nullish Coalescing Operators (??) : null undefined


let val1;
// val1 = 57 ?? 10;
// val1 = null ?? 39;  
val1 = null ?? undefined;
console.log(val1);

// ternary operator


// condition ? true : false;


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

