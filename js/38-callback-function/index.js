// callback = a function pass an argument
//            to another function.

//   Ensures that a function is not going 
//   to run before a task completed. 
//   Helps us develop asynchronous code 
//   (When one function has to wait for another function) 
//   that helps us avoid errors and potential problems
//   Ex. Wait for a file to load 
// displayConsole(total);
// displayDOM(total);

// function sum(x,y){
//     let result = x + y;
//     return result
// }

// let total = sum(2, 3);


sum(2, 3,displayDOM);

function sum(x, y, callback){
    result = x + y;
    callback(result);
}



function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
}