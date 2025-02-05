// For Each 


const coding = ["HTML", "CSS", "JS", "JAVA", "PAYTHON"]
const code = ["html", "css", "js", "java", "paython"]


// coding.forEach( function name (value) {
//     console.log(value);
// } )


coding.forEach( (item) => {
    // console.log(item.replace('HTML', 'html'));
    
})

function printMe (item){
    console.log(item);
}

printMe(coding);
coding.forEach(printMe);

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// })

// IMPORTANT CONCEPT

const myObject = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'python'
    }
]

myObject.forEach( (item ,array, index) => {
    console.log(item.languageName , index, array);
})







