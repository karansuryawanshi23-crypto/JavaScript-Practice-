// functions Basic 

function sayMyname() {
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N")
    
}
// sayMyname()

function addTwoNumber (number1 , number2){
//   console.log(number1+ number2);
    //   let result = number1+number2
    //   return result

    return number1+number2
}

 const result = addTwoNumber(3,4) 

console.log("Result:" , result)


function loginUserMessage (username){
    if(!username){
        console.log("plese Enter Username ");
        return
    }
    return '${username}  jusst logged in '
}

console.log(loginUserMessage("KARAN"))