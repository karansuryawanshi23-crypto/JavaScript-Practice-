const user = {
    username : "Karan" ,
    price : 9999999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website `);
        console.log(this)
       // this keyword refer to current context 
    }


}
user.welcomeMessage();
user.username = "sam"
user.welcomeMessage()


const chai =  () => {
    let username ="KARAN"
                
}

// implicit return provide by arrow functionn 
const addTwo = (nnum,num2) => (nnum+num2)

console.log(addTwo(3,4))