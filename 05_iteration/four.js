// object loop 


// const myObject ={
//     js: 'Javascript',
//     cpp: 'cpp',
//     rb: 'ruby',
//     swift: 'swift by apple',
// }

// for (const key in myObject) {                 // only value print
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }




// array for in loop


// const programing = ["js", "c++", "python", "java"]

// for (const key in programing) {
//     console.log(programing[key]);
//     console.log(`${key} index is for ${programing[key]}`);
// }



const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const [key, value] of map) {
    console.log(key,':-', value);
}





