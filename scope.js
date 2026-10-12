// scope 

// gloabal scope 
let  a = 300 
let b = 200 

if (true) {
    // local scope values reamin {} only 
    let a = 1010
    let b = 1000
    console.log("Inner : ", a )
    console.log("Inner : ", b)
}

console.log(a);
console.log(b);

function one() {
    const username = "KARAN"

    function two () {
        const website = "Youtube " 
        console.log(username);
        // child function can acess parent varibles 
    }
    // console.log(website)

    two()
}
one()

if(true){
    const username ="Karn "
    if(true){
        const website ="Youtube"
        console.log(username+website)
    }
    
   // console.log(website) // cannot access outside the {} 
}




// ++++++++++++++++ Intresting Concept +++++++++++++++


function addone(num){
    return num+1;
}

console.log(addone(5))

 

///  Exppresion function 

const addTwo = function(num){
    return num +2 
}