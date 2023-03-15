//toLocaleString() = retruns a string with a language 
//                   sensitive representation of this number

// number.toLocaleString(Locale, {options});

// 'locale'  = specify that language (undefined = default set in browser)
// 'options'  = object with formatting options


// let myNum = 123456.789;
let myNum = 40;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindhi
// myNum = myNum.toLocaleString("de-DE"); // Standard German


// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
// myNum = myNum.toLocaleString(undefined, {style: "percent"});
// myNum = myNum.toLocaleString(undefined,{style:"unit", unit:"celsius"});

console.log(myNum);