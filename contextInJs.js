/*
  Two Types of context
  1) Global context
  2) Execution context
  __________________________________________________________________________
  Execution context further divided into
  1) Variable object
  2) Scope chain
  3) this

  Function declarations are scanned and made available
  Variable declarations are scanned and made undefined

*/



function tip(amt){
    let bill = parseInt(amt);
    console.log(bill + 10)
}
tip("25")
bigTip(220)   // Despite early declarations of function before its definition it still run perfrctly
// Because it has global executionable context

function bigTip(amt)
{
    let bill = parseInt(amt);
    console.log(bill + 10);
}

// Variable declarations are scanned and made undefined
console.log(my_name);
 let my_name = "Healy";//   // It will give error because of the above statments
// But it will perfectly works in case of function

console.log(this)
// It will give the empty brackets but in browser it gives all browser properties