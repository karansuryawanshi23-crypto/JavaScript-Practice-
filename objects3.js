// objects and API 

const course ={
    coursename: "JS in Hindi ",
    price : "999",
    courseInstrctor : "KARAN "

}
// these is syntax of accesing object info 

console.log(course.courseInstrctor)

// We used Destructring Object it makes code more redable and clean 
// we can changedd name to access it easily 
// {} is noyhing but destruturing 

const {courseInstrctor : instrctor } = course 

console.log(instrctor)


// ++++++++++++++++ API +++++++++++++++++++++++++++++++++++

// json formatt of API 
// object has no name 
// Every key value must be wriiten in string "" 

//   {
//     "name": "KAran ",
//     "age": 21,
//     "stcak": "MERN "
//   }
// // data can be in array format also 
// [
//     {},
//     {},
//     {}
// ]