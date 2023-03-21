/*
 Notes on Difference between var,val,let,const
 1) Var is used for declaring variables before ES6
 2) const is to store the constant values
 3) Let is used to store the block scoped variables
 5) var can be updated as well as re-declared
 4) let can be updated but can't be re-declared
 6) const can't be updated and re-declared
 */
var a = 5;
var b = 6;
{
    var a = 999;
    console.log(a);
}
console.log(a);
// See that if despite of the block the variable value of a changes to this
// and locally as well as glovbally
// Let's see the example of using let
let a = 5;
let b = 8;
{
    let a = 999;
    console.log(a);
}
console.log(a);
// Output will be 5 999 beacause the let is a block level elements