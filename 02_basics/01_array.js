//Array
// () => parenthesis
// [] => square bracket
// {} => curly braces

let arr = [1, 2, 3];

// console.log(typeof arr);
// console.log(Array.isArray(arr));

// console.log(arr instanceof Array); // true

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(myArray[0]);
// console.log("             ");
const myArr2 = new Array(1,2,3,4)

// console.log("1",myArr2);


// Array methods

myArray.push(3)      // add value in array
myArray.push(4)

// console.log("2",myArray);
// console.log("3",typeof myArray);

myArray.pop();
// console.log("3",myArray);


// console.log("3",myArray.unshift());  
// console.log("4",myArray.shift());     // 5 elements in first array
// console.log(myArray);

const myHeroes = ["shaktiman", "naagraj"]

// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(8));

// const newArr = myArray.join()  //important
// console.log("11",myArray);
// console.log(typeof myArray);
// console.log(newArr);
// console.log(typeof newArr);


// slice ,splice 

let arrs = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log("A",arrs);
const myn1 = arrs.slice(1, 3)

console.log(myn1);
console.log("B", arrs);

const myn2 = arrs.splice(1, 3)
console.log(myn2);
console.log("c", arrs);


const myn3 = arrs.slice(0,4)        // ? ?
console.log(myn3);





