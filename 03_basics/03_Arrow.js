// Arrow function 


const user = {                              // object
    username: "vasu",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username} , wlecome to website`);
        console.log(this);                                      //  only this use in object
    }
}

// user.welcomeMessage()
// const newName = user.username = "sam"
// user.welcomeMessage()


function chai (){
    // let username= "vasu"
    // console.log(this.username);
}

chai()


//  Arrow function  -    () =>{}


const chaiorcode = () => {                   //  Arrow function
    let username= "vasu"
    console.log(this.username);
    
}

chaiorcode()


// const addtwo = (num1 ,num2) =>{
//     return (num1+num2)
// }

// const addtwo = (num1 ,num2) => (num1+num2)            // empleset return
// console.log(addtwo(1,2));

// const addtwo = (num1 ,num2) => (num1+num2)

// const addtwo = (num1 ,num2) => ({username:"vasu"})
// console.log(addtwo(31,82));


