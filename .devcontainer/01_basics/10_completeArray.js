const marvel_heroes = ["Ironman", "Thor", "Hulk", "Black Widow"]
const dc_heroes = ["Batman", "Super"]

marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
//  console.log(marvel_heroes[4][0]);

const all_heros = marvel_heroes.concat(dc_heroes);
// console.log(all_heros);

const all_new_heros = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heros);

const another_array = [1, 2, [  3, 4, 5], [6, 7, 8]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("sonu"));
// console.log(Array.from("sonu"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));

// Array Practice 
const fruits = ["apple", "banana", "orange"]
console.log(fruits);

const cricket = new Array ("cricket", "football", "hockey"); 
// console.log(cricket);
cricket.push("tennis");
// console.log(cricket);
cricket.unshift("badminton");
// console.log(cricket);
cricket.shift();
// console.log(cricket);

fruits.forEach((fruit, index) => {
    // console.log(`Fruit at index ${index} : ${fruit}`);
});

