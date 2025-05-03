const user ={
    username : "sonu",
    price : 100,

    welcomemessage : function(){
        console.log(`Welcome ${this.username}, this is your website`);
        console.log(this);
}


}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);

// function chai() {
//     let username = "sonu"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "sonu"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "sonu"
//     console.log(this);
// }
// chai()
// const addtwo = function(num1, num2){
// return num1 + num2
// }
// console.log(addtwo(7, 5));

// const addTwo=(num1, num2) => (num1 + num2)

const addTwo=(num1, num2) => {username = "sonu"}

console.log(addTwo(5, 10));


// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }

// chai()

( (name) => {
    console.log(`DB connected Two ${name}`);

})('sonu');    
 
