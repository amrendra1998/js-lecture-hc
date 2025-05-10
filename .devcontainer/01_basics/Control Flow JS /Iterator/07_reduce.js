const Mynums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = Mynums1.map( (num) => {return num + 10})

let newNums = Mynums1
        .map((num) => num *10)
        .map((num) => num+ 1)
        .filter((num) => num >= 40)

// console.log(newNums);

// Reduce Method()

let arr1 = [1, 2, 3, 4, 5]
// let sumArr = arr1.reduce((accumulator, currentValue) => {
//     console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);

//     return accumulator + currentValue
// }, 3);
// console.log(sumArr);

 let sumArr = arr1.reduce((accumulator, currentValue) => accumulator + currentValue
, 3)
// console.log(sumArr);

const ShoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 4999
    },
    
    
    {
        itemName : "pydantic course",
        price : 1799
    },
   
]

 const TotalPrice = ShoppingCart.reduce((acc,item) => acc + item.price, 0)

// console.log(TotalPrice);

// count Word Occurence 

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(count);







 




