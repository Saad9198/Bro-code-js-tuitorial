// spread operator =  allows an iterable such as an
//                    array or string to be expected
//                    in places where zero or more
//                    arguments are expected
//                    (unpacks the element)


let numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers)
console.log(maximum);


let class1 =  ["ubaid","nazim","maina"];
let class2 =  ["amin","saad","raees"];

class1.push(...class2);
console.log(...class1);
