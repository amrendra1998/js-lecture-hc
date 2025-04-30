

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

console.log(loginUsernameMessage("sonu"))