// const tinderUser = new Object() ---> singleton Object
const tinderUser = {}

tinderUser.name = "Amrendra";
tinderUser.Id = "123456";
tinderUser.isAdmin = true;

// console.log(tinderUser);

const regularUser = {
    email:"kumasonuu1999@gmail.com",
    fullname :{
        userfullname: {
            firstname: "Sonu",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser);

const obj1 = {
    1:"a", 2:"b", 3:"c"
}
const obj2 = { 4:"d", 5:"e", 6:"f"}

// const obj3 = Object.assign(obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('isAdmin'));