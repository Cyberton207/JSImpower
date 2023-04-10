let str = 'Hello World';
let name = "Dnyaneshwari";
let f_ans = `I Love You, ${name}`;
console.log(f_ans.length);
console.log(f_ans.toUpperCase());
console.log(f_ans.toLowerCase());
console.log(f_ans.slice(2,4));
console.log(f_ans.replace("Dnyaneshwari","Saukhyda"));

let fruits = ["Apple", "Banana", "Orange", "Mango"];
fruits[3] = "Chickoo";
console.log(fruits);
let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.toString())
console.log(typeof (numbers))
console.log(numbers.join("-")); // Separate the Arrays elements inshort it is used as separator as in python
console.log(numbers.pop());  // Pop actually removes the digit from the arrays
console.log(numbers)
console.log(numbers.push(0)) // Push add element at the last in an arrays
console.log(numbers);
numbers.sort();  // Sort the Numbers
console.log(numbers)
console.log(numbers.reverse()); // Reverse Sort the functions

// for each Loop
numbers.forEach(function(number) {
  console.log(number);
});

fruits.forEach(function (str)
{
  console.log(str)
})

for (let number of numbers) {
  console.log(number);
}

let person = { name: "John", age: 30, city: "New York" };
for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}
