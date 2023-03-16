// const answer = Math.floor(Math.random() * 10 + 1);

// let guesses = 0;

// // console.log(guess);
// document.querySelector("input[type=submit]").addEventListener("click",function(){
//     let guess = document.querySelector("input[type=text]").value;
//     guesses+=1;

//     if(guess === answer){
//         alert(`${answer} is the #. It took you ${guesses} guesses`)
//     }
//     else if (guess < answer){
//         alert("the number is too small")
//     }
//     else{
//         alert("The Number is too Large!")
//     }
// });


const answer = Math.floor(Math.random() * 10 +1);

let guesses = 0;

// document.querySelector("input[type=submit]").addEventListener("click", function(){
    document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses+=1;
    if(guess == answer) {
        alert(`${answer} is the #. It took you ${guesses} guesses`);
    }
    else if(guess < answer) {
        alert(`the number is too small`);
    }
    else {
        alert(`the number is too Large!`);
    }
}




// for(let i = 0; i <= 100; i++) {
//     Math.floor(Math.random() * 10) +1; 
//     console.log(Math.random());
// }
