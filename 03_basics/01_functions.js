function sayMyName() {
    console.log("D");
    console.log("H");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {  //here we pass parameters
//     console.log(number1 + number2);
     
    
// }

function addTwoNumbers(number1, number2) {  
    
//    let result = number1 + number2
//    return result
     return number1 + number2
    
}

const result = addTwoNumbers(5 , 89)  //here we pass arguments
// console.log("result : " ,result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("dheeraj"));
// console.log(loginUserMessage("a"));


