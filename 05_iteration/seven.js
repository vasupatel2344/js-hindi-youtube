const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////////////////
myNumber.map( (nums) => {
    number = nums + 10
    console.log(number);
} )
////////////////
const mynums = myNumber.map( (nums) => (nums + 10) )
console.log(mynums);
////////////////
const numbers = mynums.map( (nums) => {
    nums +10
    return nums
})

console.log(numbers);

const myNumber2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numberses = myNumber2.map( (num) => (num+10))
console.log(numberses);


















// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// console.log(mynum);
// console.log(typeof mynum);
// const str1 = mynum.toString();
// console.log(typeof str1);

// let str2 = [1,2,3,4,5,6,7,8,9]
// console.log(str2);
// const number = new Number(str2);
// console.log(typeof number);











