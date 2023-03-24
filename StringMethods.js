/*
1) In Js Strings are immutable we can not change string because Synchronization,Security issues,class loading,caching\
2) another Reason that strings are immutable that hacker or other clients in string pool can change the content of the string
 */
//
let name = "Arnav";
for(let i = 0;i<name.length; i++)
{
    console.log(name[i]);
}
// Qu 1 Print consol.log("Har\".length)
let naam = "Arnav";
console.log("naam\n".length);

let str = "HELLO WORLD HOW'RE YOU";
console.log(str.toLowerCase())
let fina = "what is the amount in these";
console.log(Number.parseInt(fina.slice("what is the amount".length)));