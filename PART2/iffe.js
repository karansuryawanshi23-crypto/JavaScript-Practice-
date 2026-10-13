// Immediately Invoked Function Expression (IIFE)

//to avoid gloabal scope polution 

(function chai(){
    //named IfFE
    console.log(`Db connected `);
}) () ;

( (name)  => {
    console.log(`Db connected 2 ${name}`);
}) ('KARAN')     