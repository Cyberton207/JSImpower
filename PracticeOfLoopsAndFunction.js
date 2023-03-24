// Write a Program to print the marks of the students in an object
let marks = {
    "Riya":97,
    "Manish":98,
    "Vedant":95,
    "Shreyash":97,
    "Ameya":95
}
// for(let i in marks){
//     console.log("=" + marks + marks[i]);
// }
for(let i = 0;i<Object.keys(marks).length; i++)
{
    console.log(
        Object.keys(marks)[i] + "Marks are  " + marks[Object.keys(marks)[i]]
    );
}

//Que 2 write above program in for in loop
for(let key in marks){
    console.log(key +" "+  marks[key])
}
//Que 3 Enter a correct Number
// let cn = 45;
// let i = prompt("Enter a Number")
// i = Number.parseInt(i)
// whle(i!=cn)
// {
//     i = prompt("Enter a number")
//     console.log("try Again")
// }
// console.log("You've entered Correct Number")

// find mean of the 5 Numbers
let a = 15,b = 16,c = 23,d = 85, e =91;
console.log(avgof5(a,b,c,d,e))


function avgof5(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
const mean1 = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5

}
console.log(mean1(a,b,c,d,e))