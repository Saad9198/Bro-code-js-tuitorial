let x;
let y;
let z;

//  Number
document.getElementById('rollButton').onclick = function(){
    x = Math.floor(Math.random() * 100) +100;
    y = Math.floor(Math.random() * 10) +1;
    z = Math.floor(Math.random() * 10) +1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}

//  A b c  numb

// Hex color
