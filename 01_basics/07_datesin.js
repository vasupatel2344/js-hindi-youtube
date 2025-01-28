// Dates 

// console.log(Temporal Now.instant());


let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23);
// let myCreateDate = new Date(2024, 0, 31, 0, 5);
let myCreateDate = new Date("12-31-2024");
// console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


const newDate = new Date()

console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());

// console.log(newDate.getSeconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getHours());

// `${newDate.getDay()} and the time` 

const myDates = newDate.toLocaleString('default', {
    weekday: "narrow"
}); 


// console.log(myDates);

// let newDates = new Date(); // current date
// let formattedDate = newDates.toLocaleString('default', {
//     weekday: "long",  // "long" gives the full name of the weekday
//     sunday: "full",
//     timeZone: "UTC",   // optional, specify the time zone if needed
//     saturday: "short"
// });

// console.log(formattedDate, "sunday");  // Output: "Monday", "Tuesday", etc.