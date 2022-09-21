// modal close button
modalCloseButton = document.getElementById('modal-close')

// offer modal body
offerBody = document.getElementById('offer')

offerBody.style.display = "none";

// offer show timer


var time = 0

var timer = setInterval(modalTimer, 1000)

function modalTimer(){
    time++
    // console.log(time)
    if (time === 10) {
        offerBody.style.display = "flex";
        clearInterval(timer)
    }
}



// close button function

modalCloseButton.addEventListener('click', showLanguage = () => {
    if (offerBody.style.display === "none") {
        offerBody.style.display = "block";
    } else {
        offerBody.style.display = "none";
    }
})