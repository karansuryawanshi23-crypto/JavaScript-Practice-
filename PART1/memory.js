// memory mangment in javaScrpt 

// Two types of meomry Heap & Stack 
// heap is used to store primtive datatypes in meomry 
// stcak saves non primitive datatypes in meomry 

let myName = "KAran "
let nameChange = myName 
nameChange=" KARNOP " 
console.table([myName,nameChange]) 

// it creates copy of data and pass that copy so chnage is happend in copy adress not main meomry

//non primitve gives orginal change 

let userOne = {
    email: "Karan@gmail.com",
    upi: "karan@ybl" 

}
let userTwo  = userOne
userTwo.email = "op@gmail.com" 

console.log(userOne.email);
console.log(userTwo.email);