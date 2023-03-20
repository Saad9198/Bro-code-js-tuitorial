// this =  reference to a particular object
//         the object depends on immediate context


/*
let car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,
    drive : function(){
        console.log(`You Drive the ${this.model}`);
    },

    brake : function(){
        console.log("You Step on the brake")
    } 
}
car1.drive()

let car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,


    drive : function(){
        console.log(`You Drive the ${this.model}`);
    },

    brake : function(){
        console.log("You Step on the brake")
    } 
}
car2.drive();
*/
window.name = "Saad";
console.log(this.name);