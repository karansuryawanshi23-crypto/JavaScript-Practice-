//ARRAY IN JAVASCRIPT 

const myArr = [0,1,2,3,4,5]
const myFav = ["Hardik Pandya ", "Karan Aujla "]

console.log(myFav[0]);


//ARRAY METHODS 

myArr.push(6); // Addd Elemennt In front Index
myArr.pop(); // Remove Element From Last Index
myArr.unshift(7);// Adds Element In First Index
myArr.shift(); // Removes First  Element 


console.log(myArr); // Used to print Whole Array 

console.log(myArr.includes(5)) // IT checks  Whether the elemnt is present or not in array it gives values in (TRUE/False )
console.log(myArr.indexOf(4)) // It gives index of mentioned value if not present give -1 



// ++++++++++++++++++++++++ Slice & Spice ++++++++++++++++++++++++++++++++++++++

//slice
//does not manupulate  orginal array
//ignores last  value of range (1,3 ) op > 1,2 ignores 3 
console.log ("Slice", myArr );

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("Array After Slice ",myArr);


// Splice interview diff
//Manipulates Orginal Array 
// Gives mentioned values from start to end (1,4)  -> Op IS 1,2,3,4 

console.log("Spice",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("Array After Splice",myArr);