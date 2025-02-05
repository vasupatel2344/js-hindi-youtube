const num1 = [1,2,3,4,5]


// const redu = num1.reduce(function (acc, currval) {
//     console.log(`acc:${acc} currval:${currval}`);
//     return acc + currval
// },0)


const redu =num1.reduce( (acc, currval) => acc + currval,0)

console.log(redu);

const shopingCard = [

    {
        itemName: "js course",
        price: 999
    },

    {
        itemName: "java course",
        price: 599
    },

    {
        itemName: "python course",
        price: 899
    },
    {
        itemName: "Data science course",
        price: 11999
    }
]


const totalCourseprice = shopingCard.reduce( (acc,curval) => acc + curval.itemName,0)

console.log(totalCourseprice);


