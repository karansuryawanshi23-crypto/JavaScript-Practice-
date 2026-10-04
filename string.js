// Strings Used In JS
const name = "Karan "
const lastName = "Suryawanshi"

console.log(name + lastName)
//Normal Way to add two strings 

console.log(`Hello My name is ${name} and My Surname is  ${lastName}`);
//Perfect Way to add two Strings Prefer these for future 

const gameName = new String("KARANOP")
//theese string declartion technique is perfect technique to decalre string and manupualte string 

//Prototypes USed to Manupulte String 
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString = gameName.substring(8,4)
console.log(newString);
//It tokks First Four Worrd Of string 

const anotherString = gameName.slice(-8,3)
console.log(anotherString);
// it takes last 3 values from string 

const newAnotherString = "    KARAN     "
console.log(newAnotherString);
console.log(newAnotherString.trim());
//  it helps To reomove Unnessary spacce 