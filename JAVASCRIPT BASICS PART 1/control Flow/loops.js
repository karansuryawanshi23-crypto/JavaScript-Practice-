// loops used in javascript 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}
 
// break and Continue 

for (let index = 0; index <= 20; index++) {
    const element = index;
    if(index == 5){
        console.log(`detcted 5 `);
        break
    }
    console.log(index)
}

// Apply Loppps On array 
 let myArray = ["KARAN" , "SPOWER", "JONATHAN", "SLUG" , "GOBLIN"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    
}                    


// Types Of Loops 

// While Lopp 
let index = 0 ;
while (index < 10) {
    console.log(`Value of index is ${index}`);
    index = index+2 ;
}


// do While Loops  

let score =11
do {
    console.log("Score IS: " , score)
    score++;
} while (score<=10);

