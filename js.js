// let password = prompt("put a password in here");
// let answer = 4938

// if(password == answer){
//     console.log("It works!")
// }
// else{
//     alert("lets see if this works!")
// }

// for(let i = 1; i <= 100; i++){
//     console.log("ofod");
//     console.log("olhel (olel)");
//     console.log("rfo");
//     console.log("ofod");
// }
const password = 4938;
let guess = prompt("enter the password");
while (guess != password){
            prompt("Wrong password! Try again");
}
if (guess == password){
 alert("you did it!")
}
