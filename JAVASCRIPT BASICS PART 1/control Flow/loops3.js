const nubers = [1,2,3,4,5,6,7,8,9,10]

let nums = nubers.filter((num)=> num>4)
console.log(nums) 


// APPly filter on objects 

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981 ,
        edition: 2004 
    },
    {
        title: 'Book Two', genre: 'non -Fiction', publish: 1982 ,
        edition: 2008 
    },
    {
        title: 'Book Three', genre: 'History', publish: 1999 ,
        edition: 2007 
    },
    {
        title: 'Book four', genre: 'non - fiction', publish: 1989 ,
        edition: 2004 
    },
    {
        title: 'Book five', genre: 'History', publish: 2005 ,
        edition: 2009
    },
    {
        title: 'Book six', genre: 'Fiction', publish: 1981 ,
        edition: 2004 
    },
]

let bookss= books.filter((Apply) => Apply.genre=='History' && Apply.publish >=1990)
console.log(bookss)

bookss = books.filter((name)=> name.genre==="Fiction")
console.log(bookss);
