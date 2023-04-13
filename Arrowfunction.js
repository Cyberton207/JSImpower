function isEven(num){
    if(num % 2 == 0)
    {
        return true;
    }
    return false;
}
let check = function isEvencheck(num){
    if(num % 2 == 0)
    {
        return true;
    }
    return false;
}
let ans = (num) =>{
    if(num % 2 == 0)
    {
        return true;
    }
    return false;
}
let num = 8;
console.log(isEven(num));
console.log(check(num))
// If you are using the var for the function for that you have to give the arguments
console.log(ans(num))

let checkNum = [2,4,6,8,10].every(isEven);
console.log(checkNum)


let ans_Num = [2,4,6,8,10].every((e) => e % 2 === 0)