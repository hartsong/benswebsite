
function protectpasscode() {
    const result = document.getElementById("tutorial").value;
    let passcode = "35029";result.att
    let space = " ";
    if (result == space) {
        alert("Please don't do that."); location.reload();
    } else {
        if (result == passcode) {
            window.location.href = "Code2.html";
        } else {
            const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

            const alert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }

            const alertTrigger = document.getElementById('liveAlertBtn')
            if (alertTrigger) {
                alertTrigger.addEventListener('click', () => {
                    alert('Access denied', 'danger')
                    
                })
            }
        }
    }
}
