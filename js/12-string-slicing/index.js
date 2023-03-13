// slice() extracts a section of a string 
//         and returns it as a new string,
//         without modifying the original String


let fullName = "Snoop Dog";
let firstName;
let lastName;

// firstName = fullName.slice(0, 3);
// lastName = fullName.slice(4);
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = lastName.slice(lastName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);