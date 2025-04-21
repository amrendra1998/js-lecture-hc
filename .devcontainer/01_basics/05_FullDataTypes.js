// Primitive Data Types --> Call by value 
// 7 types : String, Number, Boolean, null, undefined, symbol , BigInt

// Refrence (Non-Primitive)
// Array, Objects, Functions 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outSideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol

console.log(id == anotherId);


// Refrence (Non-Primitive)
// Array, objects, function 

// const heros = ["shaktiman", "naagaj", "doga"]
// let myObj={
//     name = "Amrendra",
//     age = 22,  
// }

const myFunction =  function() {
    console.log("Hello World");

}

console.log(typeof(myFunction));

// ***************************************************************************************************************

// Stack(primitive), Heap(Non-primitive)

let myyoutubeName = "Amrendrakumar.com"
let anotheryoutubeName = myyoutubeName
anotheryoutubeName = "chaiaurcode"

console.log(myyoutubeName);
console.log(anotheryoutubeName);


let UserOne = {
        email: "user@google.com",
        upi:"user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "amrendra.leosysinfotech@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);



