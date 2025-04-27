//Array
const  Array1 = [1, 2, 3, 4, 5];
// console.log(Array1[2]);

const Array2 = ["shakti", "sita", "ram", "laxman"];
// console.log(Array2);

const Array3 = new Array(1, 2, 3, 4, 5);
// console.log(Array3);


// Array Methods 
// Array3.push(6);
// Array3.push(7);
// Array3.pop();
// console.log(Array3);

// Array3.unshift(8);
// console.log(Array3);
// Array3.shift();
// console.log(Array3.includes(9));
// console.log(Array3.indexOf(2));

const newArray = Array2.join(", ");
// console.log(newArray);
// console.log(Array2);


// Slice and Splice

console.log("A", Array2);

// const myn1 = Array2.slice(1, 3);
// console.log(myn1);
// console.log("B", myn1);

const myn2 = Array2.splice(1, 3);
console.log(myn2);
console.log("C", myn2);


