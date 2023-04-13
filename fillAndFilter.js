let arr = [2,4,6,8,10];
console.log(arr.fill("h",2,4));
// arr.fill(val,starting_index)
let arr2 = [20,55,6,58,95,74,15,89,25,15,85,96,99];
console.log(arr2.filter((ele)=>{  // In Filter Function It makes new Arrays
    return ele > 50;
}))

const girlsNames = [
    "Ava",
    "Olivia",
    "Emma",
    "Sophia",
    "Isabella",
    "Mia",
    "Charlotte",
    "Amelia",
    "Harper",
    "Evelyn"
];
console.log(girlsNames.slice(5)) // In Slice remove the part of the array
console.log(girlsNames.splice(5)) // while in splice that part from the index prints
console.log(girlsNames.splice(1,2,"Monami"))