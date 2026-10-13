// reduce method in js

//reduce method has two values current value and accumulator 
// it adds preious vallue  
const myNums = [1,2,3,4,5]

const myToal = myNums.reduce((acc,num) => acc+num , 1)
console.log(myToal)


const shoppingCart = [
    {
        itemName: "Js course",
        price: 9999
    },
    {
        itemName: "dsa course",
        price: 99999
    },
    {
        itemName: "web course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 99
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay)