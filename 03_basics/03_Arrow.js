// Arrow function 


const user = {
    username: "user",
    price:'99',

    welcomeMessage: function(message) {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "vasu";
// user.welcomeMessage()
// console.log(this);



// function chai(){
//     console.log(this);
    
// }

// chai()



// const users = {
//     usernames: "user",
//     price:'99',
// }

// const welcomeMessage= function(userObj) {
//     console.log(`${userObj.usernames},welcome to website`);      // use this
//     // console.log(this);
//     return
// }
// welcomeMessage(users);


// const chai = function(){
//     let username = "vasu"
//     console.log(this.username);
// }

// console.log(chai)


// arrow function

// const addtwo = (num1 , num2) => {             // explicit return   
//     return num1+num2
// }


// const addtwo = (num1 , num2) => (num1+num2)      // implicit return

// console.log(addtwo(8,8));


// const addtwo = (num1 , num2) => ({username:"vasu"})
// console.log(addtwo());




// const myArray = [1,2,3,4,5,6,7,8];

// myArray.forEach(()=>())




// function addtwo() {
//     let result =10+10
//     console.log(result);
// }

// addtwo();

// function addthree(n1,n2) {
//     let result = n1+n2
//     console.log(result);
// }
// addthree(5,5)


// function addfour(n1,n2,n3) {
//     let result = n1+n2+n3
//     return result
// }

// console.log(addfour(5,5,5));



























// const user = {                              // object
//     username: "vasu",
//     price :999,
//     welcomeMessage: function(){
//         console.log(`${this.username} , wlecome to website`);
//         console.log(this);                                      //  only this use in object
//     }
// }

// user.welcomeMessage()
// const newName = user.username = "sam"
// user.welcomeMessage()


// function chai (){
    // let username= "vasu"
    // console.log(this.username);
// }

// chai()


//  Arrow function  -    () =>{}


// const chaiorcode = () => {                   //  Arrow function
//     let username= "vasu"
//     console.log(username);
    
// }

// chaiorcode()


// const addtwo = (num1 ,num2) =>{
//     return (num1+num2)
// }

// const addtwo = (num1 ,num2) => (num1+num2)            // empleset return
// console.log(addtwo(1,2));

// const addtwo = (num1 ,num2) => (num1+num2)

// const addtwo = (num1 ,num2) => ({username:"vasu"})
// console.log(addtwo(31,82));


