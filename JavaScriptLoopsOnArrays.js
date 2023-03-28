let arr = [1,15,25,35,45,55,65,75,85,95];
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
//for Each loop
// arr.forEach((ele)=>{
//     console.log(ele(ele);
// })
arr.forEach((ele)=>{
    console.log(ele*ele);//Prints the Square Of a Number
});
//Array.from Loop is used for the convert HTML collections into arrays
// Arrays.from() = Make an arrays from these strings
name = "Dnyaneshwari";
let modName = Array.from(name);
console.log(modName);

// for Of Loop
arr_num = [11,12,13,14,15,16,17,18,19,20];
for(let i of arr_num){
    console.log(i);
}