let number = "33"

console.log(typeof(number))

let valueInNumber = Number(number)
console.log(typeof(valueInNumber))
// we changed the type of number from string to Number using Number()  function similarly we can use Boolean() 

/* 
Operations 
*/

let value = 3
let negValue = -value 
// -3 op 

console.log(2+2);
console.log(2-2);
console.log(2%2);
console.log(2/2);
console.log(2*2);
console.log(2**2); // power

let str1 = "hello"
let str2 = "Karan "

let str3 = str1+str2;
console.log(str3)

// primitive data types declaration 
const name = "Karan" //String 
const score = 100 // Number 
const scoreValue = 100.3 // big int
const isLogeedIn = false //Bollean 
const outsideTemp = null // null 
let userEmail; // undefined 

const id = Symbol('123') // symbol 

console.table([name,score,scoreValue,id,outsideTemp])