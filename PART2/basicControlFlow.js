// control flows in javascript 

const teperature =  41

if(teperature<50) {
    console.log("Less Than 50: ");
} else {
    console.log("Greater Than 50: ")
}

const userLogedIn = true 
const DebitCard = true 

if(userLogedIn && DebitCard){
    console.log("Allow to Purchase")
}

if(userLogedIn || DebitCard ){
    console.log("Userr logged in ")
}