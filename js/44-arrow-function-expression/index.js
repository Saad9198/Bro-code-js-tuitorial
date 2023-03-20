// arrow function  = compact alternative to a traditional function expression
//      =>

// Note:           = you do not need curly braces if your functiuon uses more than 1 statement


// function Expression
// const greeting = function(userName){
//     console.log(`Hellow ${userName}`)
// }

// greeting("saad");


// Arrow function
// const greeting = (userName) => console.log(`Hellow ${userName}`);


// greeting("saad")


// const percent = (x, y)=> x / y * 100


// console.log(`${percent(75, 100)}%`);
// console.log(`${percent(85, 150)}%`);

let grades = [100, 50, 90, 60, 80, 70];




// const descending = (x, y) =>  y - x;
// const print = element => console.log(element);

grades.sort((x, y) => y-x);

grades.forEach((element)=> console.log(element));
