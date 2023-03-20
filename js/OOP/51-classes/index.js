// class = a blueprint for creating object
//         defines what properties and methods the have
//         use a constructor for unique properties


class player {
    score = 0;

    pause(){
        console.log("You pause the game")
    }
    
    
    exit(){
        console.log("You exited the game")
    }
}


const player1 = new player();
const player2 = new player();
const player3 = new player();
const player4 = new player();
const player5 = new player();

player1.score +=1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
