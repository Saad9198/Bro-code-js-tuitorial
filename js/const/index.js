// const = a variable that can't be changed


const PI = 3.14159;
let radius;
let circumferences;

radius = window.prompt("Enter the radius of the circle");
radius = Number(radius);

// pi = 420.69;

circumferences = 2 * PI * radius;

console.log("the circumference is:", circumferences)