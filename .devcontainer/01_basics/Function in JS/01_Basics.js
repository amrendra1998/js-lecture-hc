

function sayMyName() {
console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");
}

// sayMyName()

// function addTwonumber (number1, number2) {
//     console.log(number1 + number2);

// }
function addTwonumber (number1, number2) {
    let result = number1 + number2;
console.log("Hitesh");
    return result;


}
const result = addTwonumber(2, 3)
// console.log("result:", result);

function loginUsernameMessage(username = "Guest") {
    if(username === undefined){
        console.log("Please enter a valid username");
        
    }
    
        return `Hello ${username}, welcome to the website`;
 
    }

// console.log(loginUsernameMessage("sonu"))

function calculateMyCart (...num1) {
    return num1
}
// console.log(calculateMyCart(200, 300, 400, 500));

const user = {
    username : "sonu",
    price: 199
}
function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}
// handleObject(user)
handleObject({ username: "robert", price: 499 })

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray) {
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
