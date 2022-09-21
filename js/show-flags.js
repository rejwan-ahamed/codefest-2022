// main flag body section selector
let flagsBody = document.getElementById('flags');

// select language toggle button
let selectLanguage = document.getElementById('select-language');

// close button
let closeButton = document.getElementById('close-button');

// all flags button
let allFlags = document.getElementById('all-flags');

// toggle display

selectLanguage.addEventListener('click', showLanguage = () => {
    if (flagsBody.style.display === "block") {
        flagsBody.style.display = "none";
    } else {
        flagsBody.style.display = "block";
    }
})


// close button function

closeButton.addEventListener('click', showLanguage = () => {
    if (flagsBody.style.display === "block") {
        flagsBody.style.display = "none";
    } else {
        flagsBody.style.display = "block";
    }
})

// click flags button to close function 

allFlags.addEventListener('click', showLanguage = () => {
    if (flagsBody.style.display === "block") {
        flagsBody.style.display = "none";
    } else {
        flagsBody.style.display = "block";
    }
})

