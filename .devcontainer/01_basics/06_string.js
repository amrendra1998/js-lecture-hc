const name = "sonu"
const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); --> string Interpolation 

const gameName = new String ('sonukgp')
console.log(gameName);

console.log(typeof(gameName));

// console.log(gameName[1]); ---> Key-value pair Access;
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase('sonukgp'));
console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-1, 6)
console.log(anotherString);

const newStringOne = "  sonu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20' , '- '));

console.log(url.includes('sonu'));

console.log(gameName.split('-'));












