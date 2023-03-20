// let numbers = [69, 56, 122, 100001, 1000344333302];

// numbers = numbers.sort();   //  Make them arrange in order
// numbers = numbers.reverse(); // Make them reverse
// for (let number of numbers){
//     console.log(number);
// }


let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}
function ascendingSort(x, y){
    return x- y;
}
function print(element){
    console.log(element);
}