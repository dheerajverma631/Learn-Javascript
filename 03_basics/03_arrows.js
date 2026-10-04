const user = {
    username : "dheeraj",
    price : 499,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
        
    }
}

// user.welcomeMessage()
// user.username = "nathan"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "dheeraj"
//     console.log(this);
    
// }

// chai()

// const chai = function (){
//     let username = "dheeraj"
//     console.log(this);
    
// }

// chai()

const chai =  () => {     // arrow function
    let username = "hitesh"
    console.log(this);
    
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4));

const addTwo = (num1 , num2) => ({username: "hitesh"})
// console.log(addTwo(3,4));

const myArray = [2 , 5 , 6 , 8 , 4]

myArray.forEach(() => {})






               