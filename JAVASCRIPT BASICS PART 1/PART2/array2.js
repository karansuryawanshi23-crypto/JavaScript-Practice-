//ARRAY PART 2

const marvel_heros = ["thor","Irronman", "spiderman"];
const dc_heros = ["Superman", "flash ", "batman "];

marvel_heros.push(dc_heros); // it push all dc heros arrray into marvel heros as single element 

const allHeros = marvel_heros.concat(dc_heros); // new array 
console.log(allHeros);

const all_new_heros =[...marvel_heros,...dc_heros]; //spread operator accept every element as single unit 

const another_array = [1,2,3,[4,5,6],7,[6,7,8[2,3]]]; 
const real_another_array = another_array.flat(3)//flat solves multiarray Problem 
console.log(another_array);