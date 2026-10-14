// falsy Value

// false , 0 , -0 , BigInt 0n ,null , undefined , NaN

//Truthy Value 

// true , "0" ,  'false' , " " , []  , {} , function() {} ,

//nullish coalescing operator (?? ) :: Null and undefined  

let val1;
val1 = 5 ?? 10 
val1 = null ?? 10 
console.log(val1);

// Terniary Opeartor 

// Condition ? true : false

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log("Less than 80 ") : console.log("More Than 80")