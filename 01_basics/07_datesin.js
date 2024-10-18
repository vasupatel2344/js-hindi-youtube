// Dates 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23);
// let myCreateDate = new Date(2024, 0, 31, 5, 3);
let myCreateDate = new Date("01-10-2023");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

let theNewDate = newDate.toLocaleString('default', {
    weekday: "long",
    sunday: "full",
    // timeZone: "",
    saturday: "short"
});



// let newDates = new Date(); // current date
// let formattedDate = newDates.toLocaleString('default', {
//     weekday: "long",  // "long" gives the full name of the weekday
//     sunday: "full",
//     timeZone: "UTC",   // optional, specify the time zone if needed
//     saturday: "short"
// });

// console.log(formattedDate, "sunday");  // Output: "Monday", "Tuesday", etc.



