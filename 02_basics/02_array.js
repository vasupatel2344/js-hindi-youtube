const marvel_heros = ["thor", "ironman", "spiderman", "iron"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[1][2]);   // ? ?

marvel_heros.concat(dc_heros);
console.log("1-marge", marvel_heros);


const allNewHeros = [...marvel_heros, ...dc_heros]  // spared operator

console.log("2-spred", allNewHeros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(3)  // or infinite array

console.log(real_another_array);

// console.log(Array.isArray("Vasu Patel"));                        // IMP
// console.log(Array.from("Vasu Patel"));                          // IMP
// console.log(Array.from(["12",(dc_heros, "Vasu Patel")]));      // IMP

// console.log(Array.isArray("vasu"));
// console.log(Array.from("vasu"));
// console.log(Array.from({name: "vasu"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));          // IMP






// merge arrays using several methods

// let mergedarray = arr1.concat(arr2);
// let margedarray = [...arr1, ...arr2];
// let mergedarray =  array.flat();


let arrays = [[1, 2], [3, 4], [5, 6]];
let mergedArray = arrays.reduce((acc, val) => acc.concat(val), []);    // ? ?
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]





