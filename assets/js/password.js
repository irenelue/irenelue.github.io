var password = "7E83tR?";
const errorText = document.querySelector(".error-text");
const btn = document.querySelector("button");


function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Whoops! Incorrect password. Please try again or contact me for assistance.');
        return false;
    }

    if (document.getElementById('pass1').value == password) {
        // alert('Success! Please close this box to enter.');
        return;
    }
}
    
