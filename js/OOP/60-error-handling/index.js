// error = Object description of 
//         something went wrong


//         Can't open a file
//         lose connection
//         User types incorrect input
//         Type Error

// throw = executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!"
    if(x =="" ) throw "That wasn't a number!"
    
    console.log(`${x} is a number`)

}
catch(error){
    console.log(error);
}

// try{
//     console.lag()
// }