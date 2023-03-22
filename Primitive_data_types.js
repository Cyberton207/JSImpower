// There are 7 Types of primitive data types
/*
acronym to remember name of Primitive data types =  NNSSBBU
N = Number N = Null S = String S = Symbol   B = Boolean B = BigInt  U = Undefined
typeof() = It is used for the Nature of varibles
Object = Non Primitive data types and its is Key-Value pair
*/
let a = null;
let b = 65;
let c = "Dnyaneshwari";
let d = Symbol("Dnyaneshwari");
let e = true;
let f = BigInt(5444545654854);
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof (d));
//Object Syntax
const person = {
    name:"Arnav",
    surname:"Pachghare",
    Roll_number:30,
    veg:false,
    status:"single",
    occupation:undefined

}
console.log(person);
console.log(typeof (person))