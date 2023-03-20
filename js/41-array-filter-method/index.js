// array.filter() =  creates a new array with all elements 
//                   that pass the test provided by function


let ages = [18, 17, 98, 34, 12];

let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18; 
}
function print(element){
    console.log(element);
}





