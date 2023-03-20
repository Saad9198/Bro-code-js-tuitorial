// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it

// 1. simple function

// function sayHello(){
//     console.log("Hello!");
// }

// sayHello();

// 2.function expression

// const greeting = function(){
//     console.log("Greetings!")
// }
// greeting();

// 3. Another Example 
document.getElementById("increaseButton").onclick = function(){
    count+=1
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count-=1
    document.getElementById("myLabel").innerHTML = count;
}
let count = 0;

// function increaseCount(){
//     count+=1
//     document.getElementById("myLabel").innerHTML = count;
// }
// function decreaseCount(){
//     count-=1
//     document.getElementById("myLabel").innerHTML = count;
// }