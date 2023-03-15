// template lietrals - delimited with (')
//                     instead of double or single quotes
//                     allow embedded variable and expressipons

let userName = "Bro";
let items = 3;
let total = 75;

// console.log("Hellow", userName);
// console.log("you have", items, "items in your cart");
// console.log("Your total is $", total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(` your total is $ ${total}`);

let text = 
`Hello ${userName}
You have ${items} items in your cart
your total is $ ${total}`

// console.log(text)

document.getElementById("myLabel").innerHTML = text;