// Objects  in detailed  

const tinderUser = new Object()  

console.log(tinderUser);

tinderUser.id="123KAran"
tinderUser.name="KARANUU"
tinderUser.isLoggedIn=false
 //u can declare object inside object 
const regularUser = {
    email: "karan@gmail.com",
    fullName :  {
        firstName: "KARAN",
        lastName : "Suryawanshi"

    }
}       
console.log(regularUser.fullName.firstName)

//combined object 

const obj1 = {1:"a",2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = { obj1, obj2}
console.log(obj3)

const obj4 = Object.assign(obj1,obj2)
console.log(obj4)

// 

const obj5= {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email:"Karan33@gmail.com"
    }
]



console.log(Object.keys(tinderUser)); // type of keys used in object 
console.log(Object.values(tinderUser)); // to find values indie objecct
console.log(Object.entries(tinderUser)); // entries done in object 

