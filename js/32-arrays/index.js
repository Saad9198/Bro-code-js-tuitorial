// array = think of it as a variable 
//         that can store multiple values 

let fruits = ["apple", "orange", "banana"];
// fruits[0] = "coconut";

fruits.push("lemon");// add element from last
fruits.pop("");// removes element from last
fruits.unshift("mango"); // add element from beginning
fruits.shift(""); // removes element from beginning


let length = fruits.length;

let index = fruits.indexOf("apple")
console.log(index);