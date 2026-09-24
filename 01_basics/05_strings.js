const name = "Dheeraj "
const repoCount = 30

//console.log(name + repoCount + " Value");   // old way of writing syntax

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //modern way of writing syntax i.e. called string interpolation

const gameName = new String ('dheeraj-dv')

console.log(gameName[7]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('s'));

console.log(gameName.substring(0 , 4));

const newString = gameName.slice(-8 ,4)
console.log(newString);

const newString1 = "    dheeraj     "
console.log(newString1.trim());

const url = "https://dheeraj.com/dheeraj%20verma"

console.log(url.replace('%20' , '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


















