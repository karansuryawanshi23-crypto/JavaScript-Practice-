// obejects in js Litreal Objects in javascript 


const mySym = Symbol("KEY1") //u canot access the symbol in obeject directly u neeed to write it in [] bracket to access 

const jsUser = {
    name : "Karan Suryawanshi",
    age : 20,
    "Full Name ": "KARAN RAMESH SURYAWANSHI ",
    email : "karan33@gmail.comm",
    [mySym] : "MyKey1"
}
// these is how used to create object 

console.log(jsUser.email) // '.' methoad is used to access values 
console.log(jsUser.age)

console.log(jsUser["Full Name"]) // thesse only posible way to access string
console.log(jsUser[mySym]) 