/*
1)This KeyWord = For All regular function calls === 'this' points to window object

 */
console.log(this);
// create a user object with properties
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    city: "New York",
    getCourseCount : function () {
        console.log("Line 8",this);
    },
};
user.getCourseCount()
//
// // accessing properties of user object
// console.log(user.firstName); // output: John
// console.log(user.age); // output: 30
//
// // adding new property to user object
// user.gender = "Male";
// console.log(user.gender); // output: Male
//
// // modifying the value of a property
// user.age = 35;
// console.log(user.age); // output: 35
