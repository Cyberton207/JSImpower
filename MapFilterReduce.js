//Map function use case
// Map function creates the new array
// Map takes 3 arguments 1) Value 2) index 3)arrays
let arr = [12,14,15,16];
let a = arr.map((val)=>{
    console.log(val);
    return val + 2;
})
console.log(a)
/*
1) filter function filter the arrays
2)It Takes the function as a argument to filter the arrays values
 */
let num_arr  = [1,15,18,98,5,6,7,3,8];
let test = num_arr.filter(val=>{
    return val<10;
})
console.log(test);

/*
1) reduce function is used to reduce the arryas into single value e.g. to find sum of all array ele or diffn array ele
 */
let ans1 = num_arr.reduce((a1,a2)=>{
    return a1-a2;
})
console.log(ans1)