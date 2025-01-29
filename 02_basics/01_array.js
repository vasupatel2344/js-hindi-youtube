//Array
// () => parenthesis
// [] => square bracket
// {} => curly braces


const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(myArray[0]);
console.log("             ");
const myArr2 = new Array(1,2,3,4)

console.log("1",myArr2);


// Array methods

// myArray.push(3)
// myArray.push(4)

// console.log("2",myArray);

// myArray.pop(1);
// console.log("3",myArray);


// console.log("3",myArray.unshift(9));  
// console.log("4",myArray.shift());     // 5 elements in first array

const myHeroes = ["shaktiman", "naagraj"]

// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(5));

// const newArr = myArray.join()     //important
// console.log(myArray);
// console.log(typeof myArray);
// console.log(newArr);
// console.log(typeof newArr);


// slice ,splice 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log("A",arr);
const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B", arr);

const myn2 = arr.splice(1, 3)
console.log(myn2);
console.log("c", arr);


const myn3 = arr.slice(1,2)
console.log(myn3);





