// singleton -- constructor object
// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dheeraj",
    "full name": "Dheeraj Verma",
    [mySym]: "mykey1",
    age: 22,
    location: "Gorakhpur",
    email: "dheerajvrma63@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dheeraj@google.com"
// Object.freeze(JsUser)
// console.log(JsUser.email);
JsUser.email = "dheeraj@meta.com"
// console.log(JsUser.email);

JsUser.greeting = function () {
    console.log("Hello JS User");
    
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





