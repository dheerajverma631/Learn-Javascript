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

function calculatorCartPrice(val1, val2, ...num1){   //"..."  -- is a rest operator it bundles all the elements into one
    return num1
}

// console.log(calculatorCartPrice(200,400,600,800,1000));

const user = {
    username : "Dheeraj",
    price : 999
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)

// handleobject({
//     username : "sam",
//     price : 499
// })

const newArray = [200,400,500,600,100]

function returnSecondValue(getArray){

    return getArray[1]
}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,800,900]));
