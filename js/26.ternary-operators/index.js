// ternary operators = Shortcut for an 'if/else statement'
//                     Takes 3 operands


//                     1. a condition with ?
//                     2. expression if True :
//                     3. expression if False

// condition ? exprIfTrue : exprIfFalse


// let adult = checkAge(17);

// function checkAge(age) {
//     if(age >= 18){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// function checkAge(age){
//     return age >= 18 ? true : false;
// }

// console.log(adult);

checkwinner(false);


function checkwinner(win){
    win ? console.log('YOU WIN!') : console.log('You Lose!')
}