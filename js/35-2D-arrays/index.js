// 2D arrays = An array of arrays


let fruits = ["apples","mangoes","banana"];
let vegetables = ["onion","carrots","potatoes"];
let meats = ["fish","eggs","chicken"];

let groceryList = [fruits, vegetables, meats];

groceryList[1][2] = "Cucumber" // Now changing the value of originial array 
// first bracket defines which row and second bracket defines row of which column


for(let list of groceryList){
    for (let food of list){
        console.log(food)
    }
}