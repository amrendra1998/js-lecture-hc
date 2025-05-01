let a = 10
if(true){
    let a = 50
    const b = 20
    var c = 30
    // console.log("Inner a:", a);
}

// console.log(a);
// // console.log(b);
// // console.log(c);


function one (){
    const username  ="Hitesh"

    function two () {
        const website = "Sonu"
        // console.log(username);
    }
    // console.log(website);

    // two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username)