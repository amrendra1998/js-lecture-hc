let UserEmail = []
if(UserEmail) {
    console.log("User is logged in");
}
else {
    console.log("User is not logged in");
}
 
// falsy values
// false, 0, -0, BigInt(0), "", null, undefined, NaN
// truthy values
// true, 1, -1, BigInt(1), "0", "false", {}, [], function(){}, Symbol(), Infinity

if(UserEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {
    name: "sonu",
    class: "js"
}

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}
else {
    console.log("Object is not empty");
}

// nullish coalescing operator(??)
 let val1;
//  val1 = 5 ?? 10

//  val1 = null ?? 10

val1 = null ?? 10 ?? 20
 console.log(val1);

//  Ternary operator
// condition ? expressionIfTrue : expressionIfFalse;

// Example of Ternary Operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!