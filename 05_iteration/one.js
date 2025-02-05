// LOOPS 

// let array = [1,2,3,4,5,6,7,8,9];
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log("5 is best Number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

    for (let v = 1; v <= 10; v++) {
        // console.log(`Inner loop value: ${v} and inner loop value: ${v}`);
        // console.log(i + `: ${v}`);
        // console.log(i + '*' + v + ' = ' + i*v );

    }
}


// let myArray = ["flash", "batmen", "superman"];
// for (let index = 0; index < myArray.length; index++) {    
//     const element = myArray[index];
//    // console.log(element, index+1 ,myArray);
// }


// break and continue loop

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        let element = 7
        // console.log(`Detected ${index} element ${element} = ${element+index} `);
        // continue;        
        // break;
    }
    // console.log(`value of i is ${index}`);


}