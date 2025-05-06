
// for Loop 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    
}
// console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`outer loop value: ${i} inner loop value: ${j}`); 
        // console.log(i + '*' + j + '=' + i * j);
    }
}

const arr3 = ["flash", "sonu", "kumar", "js", "developer"];
// console.log(arr3.length);
// for (let index = 0; index < arr3.length; index) {
//     const element = arr3[index];
// }
  
// // Break and continue
// for (let i = 1; i <= 10; i++) {
//     if(i == 5) {
//         console.log("5 is best number");
//         break;    }
//     console.log(i);
// }
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        console.log("5 is best number");
        continue;    }
    console.log(i);
}

