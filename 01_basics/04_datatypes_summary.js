//+++++++++++++++++++++++ primitive ++++++++++++++++++++++++++++++++++

//---7 types -- String , Number ,Boolean , null , undefined , symbol, bigInt

const score = 100.25
const age = 17

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')  // the values given here are but both are unique due to the 
//Symbol datatype

console.log(id === anotherId);
const bigNumber = 3315484132548674524n


// +++++++++++++ Non- Primitive (Reference Type ) ++++++++++++++++++

// -----------   Array , Objects , Functions

const heros =  ["Alex" , "Jhon" , "Leo"] 

let myObj = {

    name : "Dheeraj" ,
    age : 22 ,
}

const myFunc = function(){
    console.log("Hello World");
    
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive)   ,  Heap (Non - Primitive)

// in stack the values are copied and any changes happens is in the copy not original one where as in heap we get the reference so that why the real value gets changed

let myEmail = "dheerajvrma63@gmail.com"

let anotherEmail = myEmail
anotherEmail = "dv8881360@gmail.com"

console.log(myEmail);
console.log(anotherEmail);

let userone = {
    email : "user@meta.com" ,
    upi : "user@rbl"

}

let userTwo = userone

userTwo.email = "Dheeraj@meta.com"

console.log(userone.email);
console.log(userTwo.email);








