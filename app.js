



  
function signIn(){
  

const signIn2 = document.getElementsByClassName('user')
const signin3 = document.getElementsByClassName('password')        




let username = signIn2.value;
let password = signin3.value;
const user1 = [username = "RCS", password = "902"];
const user2 = [username = "Violin Person", password = "4w6e8d1f66f4d7f4"];
const user3 = [username = "Cello Person", password = "5y6h4f5t4h1g1f5g9"];
const user4 = [username = "Motherly Figure", password = "9w2df6c5g9f7f5"];
const user5 = [username = "Fatherly Figure", password = "3u5v4g2h5b4g17"];


     if (((username = user1.username) || (username = user2.username) || (username = user3.username) || (username = user4.username) || (username = user5.username)) &&((password = user1.password) || (password = user2.password) || (password = user3.password) || (password = user4.password) || (password = user5.password))){
        console.log("Correct, logging in...")
        setTimeout(() => {
           console.log('Logged in')
        }, 5000);
        
    }
     else {
 
     console.log('Incorrect, Try again')
       
    }
  }


document.querySelector('button').onclick = function (){
  signIn()
}



