// nested function = Functions Inside other function
//                   other function have access to inner function
//                   inner function are "hidden" from outside the outter function
//                   used in closures (future video topic)


let userName = "Amin";
let userInbox = 0;


login()

function login(){
    displayUserName()
    displayUserInbox();
 
    function displayUserName(){
        console.log(`Welcome ${userName}`)
    }    
    function displayUserInbox(){
        console.log(`you have ${userInbox} new message`)
    }
}
