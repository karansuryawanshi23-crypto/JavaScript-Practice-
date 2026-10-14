// LOPPS TYPES 

// for of loop 
// no need to declare it is design for [] array it auttomaticaly detects array 
const arr= [1,2,3,4,5,6]
for (const val of arr) { 
    console.log(val)
    
}



// Maps 
// map is object that  holds key value pair
//holds unique value only in sequence 

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('FR', "France")
map.set("IN", "INDIA")
console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}


// for in loops 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift :  'swift by apple '
}

for (const key in myObject) {
    
    console.log(myObject[key]);

    
}


// for each loops for arrray 

const coding = ["js",'java',"CPP","SQL","Python"]

coding.forEach( function (items) {
    console.log(items)
}  )

coding.forEach( (item , index , arr) => {
    console.log(item,index,arr);
    
} )


const myCoding = [
    {
        languageName : "Javascript",
        languageFileName: "js"
    },
    {
        languageName : "java",
        languageFileName: "java"
    },
    {
        languageName : "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})