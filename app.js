

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

