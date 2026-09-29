// const tinderUser = new Object ()
// console.log(tinderUser);

const tinderUser = {}

tinderUser.id = "12345bcd"
tinderUser.name = "Dheeraj"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {

    email: "Dheeraj@gamil.com",
    fullname: {
        userfullname:{
            firstname: "Dheeraj",
            lastname: "Verma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [  //array of objects
    {
        id: 1,
        email: "dheeraj@gmail.com"
    },
    {
        id: 2,
        email: "dheeraj@gmail.com",
    },
    {
        id: 3,
        email: "dheeraj@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));






