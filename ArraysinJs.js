/*
1) Arrays in Js Store various Data Types
2)
 */
const arr = [1,2,3,4,5];
for (let i = 0; i <arr.length ; i++) {
    console.log(arr[i]);
}
const names = ["Shubham","Hrishi","Vaibhav","Ameya","Shreyash"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log(names.length)
names[2] = "Karsh";
console.log(names);
let arr1 = [1,2,3,4,5];
let arrstr = arr1.toString();
console.log (arrstr);
let a = arr.join("-");
console.log(a);

