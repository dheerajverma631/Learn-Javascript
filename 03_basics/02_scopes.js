// var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "dheeraj"
    

    function two() {
        const website = "youtube"
        console.log(username);
    }

    

    // two()
    
}

one ()

if (true) {
    const username = "dheeraj"
    if (username === "dheeraj"){
        const website = "youtube"
        // console.log(username  + website);
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++   Interesting ++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1
}

addtwo(5)
const addtwo= function (num){  // here it is declared as a expression
    return num + 3
}










