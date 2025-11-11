
function p() {
    let p = prompt("Enter code.")
    if (p === "52234") {
        document.getElementById("tops").innerText = "Access Allowed"

    } if ((p == "") ||(p == " ")) {
        alert("Hey, enter a code or press cancel")
        p()
    } 
    
    if ((p !== "52234") && (p !== null)) {
        alert("Acess denied")
    }
}