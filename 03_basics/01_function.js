// Function

// function MyName() {     //  function <keyword MyName(  syntax ) {   
//     console.log("v");
//     console.log("a");
//     console.log("s");
//     console.log("u");
// }
// MyName();               // 1 reference (execution)

// function addTwoNumber(number1, number2) {   // parameters (number1, number2)
// console.log(number1 + number2);
// }

// addTwoNumber("Value is = " , (10,25));       // parameter (10, 25)


// function addTwoNumber(number1, number2) {

//     console.log(number1 + number2);

// }

// const result = addTwoNumber(10, 25);

// console.log(result);



// function addTwoNumber(number1, number2) { return number1 + number2 }

// const result = addTwoNumber(10, 25);

// console.log("result: =", result);



// function addTwoNumber(number1,number2){
//     // let result = number1 + number2;
//     // return result
//     return number1+number2;
// }  

// const result = addTwoNumber(10, 25); 
// console.log(result);


function loginUserMessage(username) {
    return `${username} just login in`
}

// console.log(loginUserMessage("vasu"));

// function prints (print = "same"){
//     // let print = "vasu"
//     if(!print){
//         console.log("Please enter a username");
//         return
//     }
//     return print
// }

// console.log(prints("vasu")); 

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000, 3000, 4000));      // rest operators // output Array

function calculateCartPrices(valu1, valu2, ...num1) {
    return num1
}

console.log(calculateCartPrices(200, 400, 500, 2000, 3000, 4000));

const user = {
    username: 'vasu',
    price: 199
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user);
handleobject({
    username: "sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray) {
    return getArray[3]
}

console.log(returnSecondvalue(myNewArray));

