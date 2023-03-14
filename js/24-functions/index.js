// function = Define code once, and use it many times
//            To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Bro";
    let age = 21;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("happy britdahy to You");
    console.log("happy britdahy to You");
    console.log("happy birthday dear", userName);
    console.log("happy britdahy to You");
    console.log("you are", age, " years old");

}