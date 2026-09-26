const score = 500
//console.log(score);  here js automatically detects the datatype

const balance = new Number(100)
//console.log(balance);  here we explicitly declare the datatype with new object

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   

const otherNumber = 125.5464

// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++  Maths  +++++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-6));
// console.log(Math.round(6.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
//console.log(Math.min(4 , 3 , 6 , 9));
//console.log(Math.max(4 , 6 , 3 , 9));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);

// console.log(Math.floor(Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);






















