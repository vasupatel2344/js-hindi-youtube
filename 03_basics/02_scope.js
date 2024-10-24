// {} // scope

// let a = 300;

if(true){
    let a = 10;
    const b = 30;
    console.log("INNER: " , a);        // important
    
}

// for(let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

// console.log("OUTER: ", a);

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "vasu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two();

}

// one()            //  this is execution 


if (true){
    const username = "vasu"
    if(username==="vasu"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
    
}

// console.log(username);


//  ================================================= interesting ===============================================



console.log(addone(5));

function addone (num){
    // console.log(num);
    return num + 1
}

addtwo(5)

const addtwo = function (num){             // addtwo < = expression
    return num + 2
}

