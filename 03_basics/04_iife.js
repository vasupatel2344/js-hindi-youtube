// Immediately Invoked Function Expressions (IIFE)

(function chai(name) {
    console.log(`DB CONNECTED  ${name}`);

})('vasu');


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('vasu');




// ("function definition")  (execution)

// function chai(...code) {
//     // console.log(`DB CONNECTED`);
//     return code = 10
// }
// console.log(chai(11));


let val1 = 10;
let val2 = 5;

function addnum(num1, num2) {
    let total = num1 + num2;
    return  total
}

let result1 = addnum(val1,val2);
let result2 = addnum(10,5);

// result1()

console.log(result1,result2);
