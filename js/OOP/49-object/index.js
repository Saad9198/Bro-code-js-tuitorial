// object = A group of properties and methods 
//          properties = what an object has 
//          methods = what an object can do 
//          use . access properties / methods


let car1 = {
    // properties = what an object has 
    Name: "Mustang",
    color: "red",
    year: 2023,


 // methods = what an object can do
    drive : function(){
        console.log("You Drive the car");
    },

    brake : function(){
        console.log("You Step on the brake")
    } 
}
let car2 = {
    // properties = what an object has 
    Name: "Corvette",
    color: "blue",
    year: 2024,


 // methods = what an object can do
    drive : function(){
        console.log("You Drive the car");
    },

    brake : function(){
        console.log("You Step on the brake")
    } 
}

console.log(typeof(car1.Name),car1.Name);
console.log(typeof(car1.color),car1.color);
console.log(typeof(car1.year), car1.year);

car1.drive();
car1.brake();
console.log(typeof(car2.Name),car2.Name);
console.log(typeof(car2.color),car2.color);
console.log(typeof(car2.year), car2.year);

car2.drive();
car2.brake();