// for of loops

["", "", ""]
{ "", "", "", "" }


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const num of arr) {
        console.log(num);
}


const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best Number");
    }
    console.log(element);    
}



// Maps 

// const map = new Map();

// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('FR', 'France')

// console.log(map);


// for (const [key, value] of map) {
//     console.log(key,':-', value);
// }


const myobjs = {
    game1 : 'NFS',
    game2 : 'Spidermen'
}

for(const [key,value] of Object.entries(myobjs)) {
    console.log(`value of ${key} & ${value}`);
}





