/*
 1) prompt() is used for the taking input === Asking
 2) alert()= It is used for the browser notifications === telling
 3) Number.parseInt()= convert String into Number.
 */
let age = prompt("What is your age vroo");
age = Number.parseInt(age);
// console.log(typeof age);
// console.log(age)
if(age<18)
{
    console.log("You're under age")
}
