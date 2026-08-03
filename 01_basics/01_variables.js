const accountId = 235685
let accountEmail = "dheeraj@google.com"
var accountPassword = 854774
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed because const value can't be changed

accountEmail = "dheeraj@meta.com"
accountPassword = 587496
accountCity = "Bengaluru"
 
console.log(accountId);

/*prefer not to use var because of issue in 
block scope and functional scope*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

