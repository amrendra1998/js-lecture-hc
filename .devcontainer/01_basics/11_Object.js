// Singleton 
// Object.create()
// object literal
// symbol 

const jsUser = {name: "John", age: 30, isAdmin: true, email:"kumarsonuu@gmail.com"};

// console.log(jsUser.age);
// console.log(jsUser["email"]);

jsUser.email = "sonu@leosysgmail.com";
// Object.freeze(jsUser);
jsUser.email = "sonu@techmgmail.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
}

jsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting()); 
console.log(jsUser.greeting2()); 