

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Website')
    .then(() => console.log("Connection open!!!"))
    .catch(err => console.log("Oh no error!!!", err));
mongoose.set('strictQuery', true);


const password = Website.Data.find({ name: "Password1" });
console.log(password);

function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = "16840";result.att
    let space = "";
    let space2 = " "
    if ((result == space) ||(result == space2)) {
        alert("Please don't do that."); location.reload();
    } else {
        if (result == passcode) {
            window.location.href = "Code2.html";
        }
if (result == "52234") {
            window.location.href = "tops.html";
            alert("Welcome to the TOP SECRET area!");
}
        else {

alert("Access denied.")
            }

            const alertTrigger = document.getElementById('liveAlertBtn')
            if (alertTrigger) {
                alertTrigger.addEventListener('click', () => {
                    alert('Access denied', 'danger')
                    
                })
            }
        }
    }

