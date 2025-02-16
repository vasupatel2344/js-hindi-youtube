// const code = ["html", "css", "js", "java", "python"]


// const codeLanguage = code.forEach(() =>{
//     console.log(code);)


// console.log(codeLanguage);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// const mynums = myNums.filter((num) => num <= 4)
// console.log(mynums.length, mynums);



// const mynums = myNums.filter((nums) => {    // object
//     return nums <= 5
// })

console.log(myNums);

const mynums = myNums.filter((num) => {
    if (num >= 1) {
        myNums.pop(num);
        return num;
    }
})

console.log(mynums);





const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    
    { title:'Book Nine', genre: 'Non-Fiction' , publish: 1981, edition: 1989 }

];

