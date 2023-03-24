let a  = 5;
let b = 6;
let c = 8;
console.log(avg(a, b, c));
function avg(a,b,c)
{
    return (a+b+c)/3;
}
// These is called the arrow function these is the more advanced way to call the function in js
const sum = (a,b,c)=>{
    return a+b+c;
}
console.log(sum(a,b,c));