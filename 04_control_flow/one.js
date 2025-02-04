// if( condition ){

// }


const usUserLoggedIn = true

if (usUserLoggedIn) {

} else {
    console.log();

}

const temperature = 41
if (temperature < 50) {
    console.log("less then 50");
} else {
    console.log("greater then 50");
}

const price = 610;

if (price > 1000) {
    console.log(`Price in 1000 : ${price}`);
} else if (price > 800) {
    console.log(`Price in 800 : ${price}`);
} else if (price >= 600) {
    console.log(`Price in 600 : ${price}`);
} else {
    console.log(`Price in 400 : ${price}`);
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow To Buy Course");
}else{

}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}








// let value = "1465";
// console.log(value.padEnd(5,'0'));
