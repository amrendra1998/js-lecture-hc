//  For of 
const arr = [1, 2, 3, 4, 5];

for(const iterator of arr ) {
    // console.log(iterator);
}

const str =["sita", "ram", "laxman"];
for(const string of str) {
    // console.log(string);
}

// Maps --> represented for each key-value pair

const map1 = new Map()

map1.set("IN", "India")
map1.set("US", "United States")
map1.set("UK", "United Kingdom")
map1.set("AU", "Australia")

// console.log(map1);

for(const [key, value] of map1) {
    // console.log(key, ':-', value);
}
//  creating an objext for of loop 

let obj = {
    'game1': 'cricket',
    'game2': 'football',
    'game3': 'hockey'
}
for(let key in obj) {
//     console.log(`${key} : ${obj[key]}`);
//
 }

 const programming = ["Java", "Python", "C++", "JavaScript", "PHP"]
 
 for (const key in programming) {
    // console.log(`${key} : ${programming[key]}`);
 }
 
//  let map2 = new Map([      ---------------> Map is not iterable
//     ['game1', 'cricket'],
//     ['game2', 'football'],
//     ['game3', 'hockey']
//  ]);

//  for(let key in map2) {
//     console.log(`${key} : ${map2[key]}`);
//  }

// Foreach() -->  forEach() method executes a provided

const fruits = ['mango','guvava','gapes']
// fruits.forEach(function(val){
//     // console.log(val);
// });

fruits.forEach((item) => {
    console.log(item);

})

// function PrintMe(item){
//     console.log(item);
// }

// fruits.forEach(PrintMe())


const myCoding =[
    {
        languageName : "Python",
        languagefile : "py"
    },
    {
        languageName : "Java",
        languagefile : "Js"
    },
    {
        languageName : "C++",
        languagefile : "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
