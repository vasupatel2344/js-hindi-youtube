// STRING  "string"

const name = "vasu";
const repoCount = 50;

// console.log(name + repoCount + "Value");


// console.log(`Hello my name is ${name} and may repo count is ${repoCount}`); // <= string interpolation

// console.log(`Hello my name is ${name.toUpperCase()} and may repo count is ${Number.repoCount}`);  

const gameName = new String('abcdefg');

// console.log(gameName);
// console.log(typeof gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(typeof gameName.__proto__);

// console.log(gameName.small());
// console.log(gameName.search('d'));


// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));            // THIS IS METHOD ONLY

// console.log(gameName.substring(0, 4));
console.log(gameName.slice(0, 6));

const newStringOne = "   vasu    ";
console.log("1", newStringOne);
console.log("2", newStringOne.trim);



const url = "https://vasupatel/2321@gmail.com"

// console.log(url.replace('21', '44'));

// console.log(url.includes('https://vasupatel'));


// console.log(gameName.split('z'));    // ??


url.includes('vashu') ? console.log("vasu is present") : console.log("vasu is not present");

console.log(gameName.split());
